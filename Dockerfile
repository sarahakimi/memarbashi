# ---- deps ----
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat git python3 make g++
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
ENV CI=true HUSKY=0
RUN corepack enable && corepack prepare pnpm@8.15.8 --activate
RUN pnpm install --frozen-lockfile

# ---- build ----
FROM node:20-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@8.15.8 --activate
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# ---- run ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
