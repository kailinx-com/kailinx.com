# Local Development Setup

## Quick Start

1. **For local development (HTTP without SSL):**
   ```bash
   cp nginx/conf.d/default.conf.local nginx/conf.d/default.conf
   docker compose up -d
   ```
   Access at [http://localhost](http://localhost)

   **Live edits (no rebuild):** the default setup **bakes files into the image**, so changes on disk are not picked up until you rebuild. For development, use the dev overlay so `index.html`, `styles.css`, `script.js`, `data/`, and the resume PDF are **bind-mounted** into the running container — **refresh the browser** to see updates. (This is not full “hot reload” / HMR; there is no auto-refresh unless you add a separate tool.)

   ```bash
   cp nginx/conf.d/default.conf.local nginx/conf.d/default.conf
   docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
   ```

   If you add new **root-level** static files to serve, add a matching volume line under `portfolio` in `docker-compose.dev.yml`.

2. **For production-like testing (with SSL):**
   ```bash
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
- ✅ `Kailin_Xing_Resume_SoftwareIntern.pdf` - Resume served at `/Kailin_Xing_Resume_SoftwareIntern.pdf` on the live site
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
