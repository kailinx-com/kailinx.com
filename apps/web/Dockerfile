FROM oven/bun:1.2.16-alpine AS deps
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile || bun install

FROM deps AS build
COPY . .
RUN bun run build

FROM oven/bun:1.2.16-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/src/server.ts ./src/server.ts
USER bun
EXPOSE 3000
CMD ["bun", "src/server.ts"]
