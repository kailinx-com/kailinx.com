# Production Wire-Up Guide (OCI + GitHub Actions)

This guide covers end-to-end cutover for:
- `kailinx.com` (public site)
- `analytics.kailinx.com` (protected event dashboard)
- `api.kailinx.com` (protected analytics APIs; public ingest route only)
- `grafana.kailinx.com` (protected observability)

## 1) DNS changes
Create/update A records to your OCI VPS public IP:
- `@` -> `<OCI_PUBLIC_IP>`
- `www` -> `<OCI_PUBLIC_IP>`
- `analytics` -> `<OCI_PUBLIC_IP>`
- `api` -> `<OCI_PUBLIC_IP>`
- `grafana` -> `<OCI_PUBLIC_IP>`

## 2) OCI networking and firewall
In OCI security list/NSG:
- Allow inbound TCP `80` and `443` from `0.0.0.0/0`
- Allow inbound SSH `22` only from your admin IP block
- Do not expose DB/metrics/log ports publicly

On host firewall (example `ufw`):
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## 3) GitHub secrets and variables
Set repository secrets in `kailinx.com`:
- `OCI_HOST`
- `OCI_USER`
- `OCI_SSH_KEY`
- `POSTGRES_PASSWORD`
- `EVENTS_INTERNAL_TOKEN`
- `GRAFANA_ADMIN_USER`
- `GRAFANA_ADMIN_PASSWORD`

## 4) Server bootstrap
On OCI host:
```bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose-plugin
sudo usermod -aG docker $USER
```
Re-login after group change.

Prepare deployment path:
```bash
sudo mkdir -p /opt/kailinx.com
sudo chown -R $USER:$USER /opt/kailinx.com
```
Copy repo contents there (or clone `kailinx.com` repo).

## 5) Reverse proxy + auth
- Keep `infra/nginx/nginx.conf` for HTTP initial bring-up.
- For TLS production, switch to `infra/nginx/nginx.tls.conf`.
- Replace default `infra/nginx/.htpasswd` with strong credentials:
```bash
openssl passwd -apr1 'NEW_STRONG_PASSWORD'
# update admin:<hash> in infra/nginx/.htpasswd
```

## 6) TLS issuance
Use certbot or your preferred ACME flow on host, then mount certs to:
- `infra/nginx/certs/fullchain.pem`
- `infra/nginx/certs/privkey.pem`

After certs are in place, ensure compose uses `nginx.tls.conf` and reload:
```bash
docker compose --env-file .env up -d
```

## 7) App environment file
On host, create `/opt/kailinx.com/.env`:
```bash
POSTGRES_PASSWORD=<strong-password>
EVENTS_INTERNAL_TOKEN=<strong-random-token>
GRAFANA_ADMIN_USER=admin
GRAFANA_ADMIN_PASSWORD=<strong-password>
```

## 8) Deploy flow
### First deploy
```bash
cd /opt/kailinx.com
docker compose --env-file .env pull
docker compose --env-file .env up -d
```

### Ongoing deploys
- Push to `main`.
- `Deploy OCI` GitHub Action builds images and runs remote `docker compose up -d`.

## 9) Verification checklist
1. Public site:
```bash
curl -I https://kailinx.com
```
2. Protected routes require auth:
```bash
curl -I https://analytics.kailinx.com
curl -I https://grafana.kailinx.com
curl -I https://api.kailinx.com/v1/events/top
```
Expect `401/403` without credentials.

3. Public ingest works:
```bash
curl -X POST https://api.kailinx.com/v1/events \
  -H 'content-type: application/json' \
  -d '{"events":[{"eventName":"smoke_test","happenedAt":"2026-01-01T00:00:00Z","page":"/","props":{}}]}'
```

4. Private query works with token:
```bash
curl -H "x-internal-token: <EVENTS_INTERNAL_TOKEN>" \
  "https://api.kailinx.com/v1/events/top?field=event_name&window=24h&limit=10"
```

5. Internal ports inaccessible from internet:
- verify no public access on `5432`, `9090`, `3100`, `4317`, `4318`.

## 10) Backup and restore
Backup:
```bash
POSTGRES_PASSWORD=<pwd> ./scripts/backup-postgres.sh ./backups
```
Restore:
```bash
POSTGRES_PASSWORD=<pwd> ./scripts/restore-postgres.sh ./backups/<file>.sql
```

## 11) Rollback procedure
1. Keep previous image tags available in GHCR.
2. Pin rollback tags in `docker-compose.yml` or override image tags via env.
3. Redeploy:
```bash
docker compose --env-file .env up -d
```
4. If DB rollback needed, restore latest known-good SQL backup.

## 12) Cutover sequence (recommended)
1. Deploy stack on OCI with temporary DNS or hosts file.
2. Run all verification checks.
3. Update DNS records.
4. Re-verify TLS and auth-gated routes.
5. Monitor Grafana + logs for 30-60 minutes.
