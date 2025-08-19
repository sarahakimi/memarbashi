# syntax=docker/dockerfile:1.6

# ---- deps ----
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat git python3 make g++
WORKDIR /app

# Copy lockfiles/metadata for best caching
COPY package.json pnpm-lock.yaml ./
# Copy workspace file if you have one (remove this line if you don't use workspaces)
# (If you don't have the file, Docker will error; in that case comment this out)
# COPY pnpm-workspace.yaml ./

ENV CI=true HUSKY=0
# Pin a known pnpm version to avoid surprises
RUN corepack enable && corepack prepare pnpm@8.15.8 --activate

# If you need private packages, pass NPM_TOKEN as a BuildKit secret (see workflow below).
# When provided, write a temporary .npmrc without leaking it into layers:
RUN --mount=type=secret,id=NPM_TOKEN \
    if [ -f /run/secrets/NPM_TOKEN ]; then \
      echo "//registry.npmjs.org/:_authToken=$(cat /run/secrets/NPM_TOKEN)" > .npmrc; \
    fi && \
    pnpm install --frozen-lockfile && \
    rm -f .npmrc

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
