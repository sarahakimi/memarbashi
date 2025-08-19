# syntax=docker/dockerfile:1.6

# ---- deps ----
FROM node:20-slim AS deps
RUN apt-get update && apt-get install -y git python3 make g++ && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
ENV CI=true HUSKY=0
RUN corepack enable && corepack prepare pnpm@8.15.8 --activate
# allow build even if lockfile is missing/out-of-sync (we can tighten later)
RUN pnpm install --no-frozen-lockfile --prefer-offline

# ---- build ----
FROM node:20-slim AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@8.15.8 --activate
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# ---- run ----
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN useradd -m nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
