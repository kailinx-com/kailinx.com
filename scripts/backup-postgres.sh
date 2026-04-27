#!/usr/bin/env bash
set -euo pipefail

TS=$(date +%Y%m%d_%H%M%S)
OUT_DIR=${1:-./backups}
mkdir -p "$OUT_DIR"

if [ -z "${POSTGRES_PASSWORD:-}" ]; then
  echo "POSTGRES_PASSWORD env var is required"
  exit 1
fi

docker compose exec -T postgres sh -lc "PGPASSWORD=$POSTGRES_PASSWORD pg_dump -U events -d events" > "$OUT_DIR/events_$TS.sql"

echo "Backup written to $OUT_DIR/events_$TS.sql"
