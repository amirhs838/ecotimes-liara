# EcoTimes - Liara production Docker (standalone output — no full node_modules copy)
FROM node:22-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV CI=true
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

# ── 1) Install deps ──
COPY petro/prisma ./petro/prisma
COPY petro/prisma.config.ts ./petro/prisma.config.ts
COPY petro/package.json petro/package-lock.json ./petro/
COPY front/package.json ./front/package.json
COPY package.json ./

RUN npm --prefix petro ci --include=optional 2>/dev/null || npm --prefix petro install --include=optional
RUN npm --prefix front ci 2>/dev/null || npm --prefix front install

# ── 2) Copy source + build ──
COPY scripts ./scripts
COPY petro ./petro
COPY front ./front

RUN npm --prefix petro run db:generate

ARG DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
ARG POSTGRES_PRISMA_URL=postgresql://dummy:dummy@localhost:5432/dummy
ARG NEXT_PUBLIC_SITE_URL=https://eco-times.ir
ARG NEXT_PUBLIC_SITE_NAME=اکو تایمز
ARG NEXT_PUBLIC_SITE_NAME_EN=Eco Times
ENV DATABASE_URL=$DATABASE_URL
ENV POSTGRES_PRISMA_URL=$POSTGRES_PRISMA_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_NAME=$NEXT_PUBLIC_SITE_NAME
ENV NEXT_PUBLIC_SITE_NAME_EN=$NEXT_PUBLIC_SITE_NAME_EN
ENV VITE_API_URL=""
RUN npm --prefix petro run build && npm --prefix front run build

# ── 3) Runtime — standalone server (~50MB node_modules instead of 982MB) ──
FROM node:22-bookworm-slim AS runner
WORKDIR /app
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Standalone Next.js backend (minimal node_modules included by next build)
COPY --from=base /app/petro/.next/standalone ./

# Static assets
COPY --from=base /app/petro/.next/static ./petro/.next/static

# Public assets (logos, icons, verification files)
COPY --from=base /app/petro/public ./petro/public

# Frontend dist (self-contained static files)
COPY --from=base /app/front/dist ./front/dist

# Scripts
COPY --from=base /app/scripts ./scripts

EXPOSE 3000

CMD ["node","scripts/start.mjs"]
