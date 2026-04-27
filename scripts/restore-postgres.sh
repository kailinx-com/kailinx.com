#!/usr/bin/env bash
set -euo pipefail

SQL_FILE=${1:-}
if [ -z "$SQL_FILE" ] || [ ! -f "$SQL_FILE" ]; then
  echo "Usage: $0 <backup.sql>"
  exit 1
fi

if [ -z "${POSTGRES_PASSWORD:-}" ]; then
  echo "POSTGRES_PASSWORD env var is required"
  exit 1
fi

cat "$SQL_FILE" | docker compose exec -T postgres sh -lc "PGPASSWORD=$POSTGRES_PASSWORD psql -U events -d events"

echo "Restore complete from $SQL_FILE"
