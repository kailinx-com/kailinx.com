# Event Logging Platform (OCI Free Tier)

This stack adds a protected event logging platform while keeping `kailinx.com` as the only public site.

## Services
- `web`: public resume site
- `events_dashboard`: protected event dashboard UI
- `api`: Spring Boot ingest/query API
- `postgres`: event storage
- `otel_collector`: OTLP collector
- `prometheus`: metrics scraping
- `loki`: log storage
- `promtail`: docker log shipping
- `grafana`: protected observability UI
- `reverse_proxy`: host-based routing + auth gates

## Security model
- Public: `kailinx.com`
- Protected: `analytics.kailinx.com`, `api.kailinx.com` (except `POST /v1/events`), `grafana.kailinx.com`
- Internal-only: `postgres`, `prometheus`, `loki`, `otel_collector`, `promtail`
- Do not publish non-proxy ports on OCI security lists.

## Local bring-up
1. Copy environment file:
   ```bash
   cp .env.events.example .env
   ```
2. Fill strong credentials/tokens in `.env`.
3. Start stack:
   ```bash
   docker compose --env-file .env up -d --build
   ```

## Subdomain routing
- `kailinx.com` -> `web`
- `analytics.kailinx.com` -> `events_dashboard` (basic auth)
- `api.kailinx.com` -> `api` (`POST /v1/events` public, all else protected)
- `grafana.kailinx.com` -> `grafana` (basic auth)

## TLS
- Use `infra/nginx/nginx.tls.conf` on OCI and mount certs under `infra/nginx/certs`.
- Recommended cert flow: Let's Encrypt via certbot on host (or your preferred ACME automation).

## Backup and restore
- Backup:
  ```bash
  POSTGRES_PASSWORD=... ./scripts/backup-postgres.sh ./backups
  ```
- Restore:
  ```bash
  POSTGRES_PASSWORD=... ./scripts/restore-postgres.sh ./backups/events_YYYYMMDD_HHMMSS.sql
  ```

## Secrets and rotation
- Keep `.env` private, never commit real credentials.
- Rotate:
  - `EVENTS_INTERNAL_TOKEN`
  - `GRAFANA_ADMIN_PASSWORD`
  - `POSTGRES_PASSWORD`
- Regenerate `infra/nginx/.htpasswd` after password changes.
