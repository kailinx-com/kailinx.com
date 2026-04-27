# OCI Hardening Checklist

## Network / ingress
- OCI Security List or NSG:
  - Allow inbound: `80/tcp`, `443/tcp` from `0.0.0.0/0`
  - Deny inbound for all other app ports (`5432`, `9090`, `3100`, `3000`, `4317`, `4318`, etc.)
- Host firewall (ufw or iptables): only `22`, `80`, `443`.

## Host security
- Disable password SSH login; use key auth only.
- Keep OS packages patched.
- Run Docker as non-root user where possible; restrict who can use docker group.

## Runtime hardening
- Keep observability and DB services on compose `internal` network only.
- Use strong random credentials and rotate quarterly.
- Enable `no-new-privileges` and read-only FS where practical.

## API protection
- Keep `POST /v1/events` public for browser ingest only.
- Require `x-internal-token` for `/v1/events/aggregate` and `/v1/events/top`.
- Keep reverse proxy auth enabled for `analytics.kailinx.com`, `api.kailinx.com` (private routes), and `grafana.kailinx.com`.

## Validation tests
- Unauthenticated request to protected routes returns `401`.
- Requests to internal ports from internet fail.
- TLS cert valid and HSTS header present.
