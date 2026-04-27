FROM oven/bun:1.2.16-alpine AS deps
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile || bun install

FROM deps AS build
COPY . .
RUN bun run build

FROM oven/bun:1.2.16-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
USER bun
EXPOSE 3000
CMD ["bun", "run", "start"]
