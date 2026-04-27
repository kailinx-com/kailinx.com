# Event Logging Verification Checklist

## Build checks
- `apps/api`: `mvn -q -DskipTests package`
- `apps/web`: `bun run build`
- `apps/events-dashboard`: `bun run build`
- root compose config: `EVENTS_INTERNAL_TOKEN=... POSTGRES_PASSWORD=... GRAFANA_ADMIN_USER=... GRAFANA_ADMIN_PASSWORD=... docker compose config`

## Runtime checks (after `docker compose up -d --build`)
1. Public site reachable:
   - `curl -I http://kailinx.com`
2. Protected routes deny anonymous:
   - `curl -I http://analytics.kailinx.com` returns `401`
   - `curl -I http://grafana.kailinx.com` returns `401`
   - `curl -I http://api.kailinx.com/v1/events/top` returns `401`
3. Public ingest route accepts events:
   - `curl -X POST http://api.kailinx.com/v1/events -H 'content-type: application/json' -d '{"events":[{"eventName":"smoke_test","happenedAt":"2026-01-01T00:00:00Z","page":"/","props":{}}]}'`
4. Private query route works with token:
   - `curl -H 'x-internal-token: <token>' 'http://api.kailinx.com/v1/events/top?field=event_name&window=24h&limit=10'`
5. Internal ports not publicly exposed:
   - Attempt external access to `5432`, `9090`, `3100`, `4317`, `4318` should fail.
6. Dashboard data visibility:
   - `analytics.kailinx.com` shows event rows and top dimensions.
   - Grafana shows API metrics panel and Loki datasource healthy.

## Security checks
- TLS enabled in production with HSTS and valid certificate chain.
- `EVENTS_INTERNAL_TOKEN`, `POSTGRES_PASSWORD`, `GRAFANA_ADMIN_PASSWORD` are strong and rotated.
- `.env` not committed.
