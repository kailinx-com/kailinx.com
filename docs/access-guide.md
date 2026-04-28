# Access Guide

This guide shows how to access each production endpoint and what auth is required.

## Public Website

- URL: `https://kailinx.com`
- Also available: `https://www.kailinx.com`
- Auth: none

Quick check:

```bash
curl -I https://kailinx.com
```

## Analytics Dashboard

- URL: `https://analytics.kailinx.com`
- Auth: HTTP Basic Auth (`infra/nginx/.htpasswd`)

Browser access:

- Open `https://analytics.kailinx.com`
- Enter the Basic Auth username/password

CLI check:

```bash
curl -I https://analytics.kailinx.com
# expect 401 without credentials
```

## API

Base URL: `https://api.kailinx.com`

### Public ingest endpoint

- Path: `POST /v1/events`
- Auth: none

Example:

```bash
curl -X POST https://api.kailinx.com/v1/events \
  -H 'content-type: application/json' \
  -d '{"events":[{"eventName":"manual_test","happenedAt":"2026-01-01T00:00:00Z","page":"/","props":{}}]}'
```

### Protected API endpoints

- Example path: `GET /v1/events/top`
- Auth: blocked by nginx Basic Auth and internal API token for private query flows

Quick protected check:

```bash
curl -I https://api.kailinx.com/v1/events/top
# expect 401/403 without credentials
```

If you need token-based query access in your own client, send:

- Header: `x-internal-token: <EVENTS_INTERNAL_TOKEN>`

## Grafana (Metrics + Logs UI)

- URL: `https://grafana.kailinx.com`
- Auth: HTTP Basic Auth at nginx + Grafana login

Quick check:

```bash
curl -I https://grafana.kailinx.com
# expect 401 without credentials
```

## Internal-Only Services (Not Public)

These should only be reachable inside Docker/internal OCI network:

- `postgres` (`5432`)
- `prometheus` (`9090`)
- `loki` (`3100`)
- `otel_collector` (`4317`, `4318`)
- `promtail`

Prometheus scrape target in this stack:

- API metrics: `http://api:8080/actuator/prometheus`

## Common Access Issues

- `401` on `analytics/api/grafana`: expected without Basic Auth credentials.
- `502` on API during deploy: usually transient startup/warmup.
- DNS-only (Cloudflare gray cloud): acceptable, traffic goes directly to OCI origin.
- Proxied (orange cloud): use if you want Cloudflare edge/WAF/CDN behavior.

## Credential Source of Truth

- Do not commit real credentials to git.
- Deploy injects runtime secrets from GitHub Actions secrets.
- `analytics.kailinx.com` and protected `api.kailinx.com` routes use nginx Basic Auth.
- That Basic Auth is generated during deploy from:
  - `GRAFANA_ADMIN_USER`
  - `GRAFANA_ADMIN_PASSWORD`
- Result: same username/password scheme is used for:
  - nginx gateway auth (`analytics`, protected `api`, `grafana` entry)
  - Grafana app login
- Local template file is `infra/nginx/.htpasswd.example`; real `infra/nginx/.htpasswd` is gitignored.

