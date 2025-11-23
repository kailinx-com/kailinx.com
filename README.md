# Local Development Setup

## Quick Start

1. **For local development (HTTP without SSL):**
   ```bash
   # Temporarily use the local config (no SSL required)
   cp nginx/conf.d/default.conf.local nginx/conf.d/default.conf
   docker compose up -d
   ```
   Access at [http://localhost](http://localhost)

2. **For production-like testing (with SSL):**
   ```bash
   # Use the committed default.conf and provide SSL certificates
   docker compose up -d
   ```
   You'll need SSL certificates in the `certs/` directory.

3. **Stop the containers:**
   ```bash
   docker compose down
   ```

## Configuration Files

### Files to Commit
- ✅ `docker-compose.yml` - Build configuration
- ✅ `.gitignore` - Excludes sensitive files
- ✅ `nginx/conf.d/default.conf` - Production SSL config
- ✅ `nginx/conf.d/default.conf.local` - Local development template
- ✅ `README.md` - This file

### Files to Keep Local Only (gitignored)
- ❌ `certs/*` - SSL certificates (sensitive)
- ❌ Any local overrides to `default.conf`

## Deployment Notes

The production environment should:
1. Use the committed `nginx/conf.d/default.conf`
2. Mount SSL certificates at `/etc/nginx/certs/origin.pem` and `/etc/nginx/certs/origin.key`
3. These certificates are typically provided by your hosting provider (e.g., Cloudflare Origin Certificates)

## Viewing Logs
```bash
docker compose logs -f
```
