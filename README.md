# kailinx.com

Portfolio site built with Bun + React and shipped as a Docker image.

## Local development

```bash
bun install
bun dev
```

## Production build checks

```bash
bun run build
bunx tsc --noEmit
```

## Run container locally

```bash
docker compose up --build
```

Then visit `http://localhost:8080`.
