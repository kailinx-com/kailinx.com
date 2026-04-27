FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock bunfig.toml tsconfig.json build.ts bun-env.d.ts components.json ./
COPY src ./src
COPY styles ./styles
COPY static ./static

RUN bun install --frozen-lockfile
RUN bun run build

FROM nginx:alpine

COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
