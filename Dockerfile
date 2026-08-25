# EcoTimes - Liara production Docker (standalone — fast build, no 982MB node_modules copy)
FROM node:22-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV CI=true
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

# 1) Deps (cache-friendly)
COPY petro/prisma ./petro/prisma
COPY petro/prisma.config.ts ./petro/prisma.config.ts
COPY petro/package.json petro/package-lock.json ./petro/
COPY front/package.json ./front/package.json
COPY package.json ./

RUN npm --prefix petro ci --include=optional 2>/dev/null || npm --prefix petro install --include=optional
RUN npm --prefix front ci 2>/dev/null || npm --prefix front install

# 2) Source + build
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

# 3) Runner — only standalone output + assets
FROM node:22-bookworm-slim AS runner
WORKDIR /app
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Standalone server (minimal node_modules + compiled app) at /app/petro/.next/standalone
COPY --from=base /app/petro/.next/standalone ./petro-standalone

# Static assets served by Next
COPY --from=base /app/petro/.next/static ./petro-standalone/petro/.next/static

# Public assets (logos, verify file, llms.txt)
COPY --from=base /app/petro/public ./petro-standalone/petro/public

# Frontend dist (self-contained)
COPY --from=base /app/front/dist ./front/dist

# Scripts
COPY --from=base /app/scripts ./scripts

EXPOSE 3000
CMD ["node","scripts/start.mjs"]