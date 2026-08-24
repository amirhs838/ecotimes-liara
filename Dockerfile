# EcoTimes - Liara production Docker (monorepo: petro + front)
# - Builds both apps
# - Runs via scripts/start.mjs (front dist on $PORT, backend on 3001)
# - Isolated from Vercel: uses only Liara env vars
FROM node:22-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV CI=true
# Prisma needs openssl on slim
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

# 1) Install deps for root / petro / front (cache-friendly)
COPY package.json ./
COPY petro/package.json ./petro/package.json
COPY petro/package-lock.json ./petro/package-lock.json
COPY front/package.json ./front/package.json
# pnpm lock is not needed inside docker; front uses npm for build on Liara
COPY petro/prisma ./petro/prisma
COPY petro/prisma.config.ts ./petro/prisma.config.ts

# Install backend + frontend deps
RUN npm --prefix petro ci --include=optional || npm --prefix petro install --include=optional
RUN npm --prefix front ci --include=optional || npm --prefix front install --include=optional

# 2) Copy source
COPY scripts ./scripts
COPY petro ./petro
COPY front ./front
# petro/public is included via .dockerignore (images/videos excluded to keep build fast)

# Ensure prisma client is generated for build (DATABASE_URL not needed for generate)
RUN npm --prefix petro run db:generate

# 3) Build
# Provide dummy DB URL for `next build` (sitemap would otherwise fail to construct PrismaClient)
# Real Liara DATABASE_URL will override at runtime; sitemap has try/catch fallback anyway
ARG DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
ARG POSTGRES_PRISMA_URL=postgresql://dummy:dummy@localhost:5432/dummy
ARG NEXT_PUBLIC_SITE_URL=https://ecotimes.liara.run
ARG NEXT_PUBLIC_SITE_NAME=اکوتایمز
ARG NEXT_PUBLIC_SITE_NAME_EN=EcoTimes
ENV DATABASE_URL=$DATABASE_URL
ENV POSTGRES_PRISMA_URL=$POSTGRES_PRISMA_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_NAME=$NEXT_PUBLIC_SITE_NAME
ENV NEXT_PUBLIC_SITE_NAME_EN=$NEXT_PUBLIC_SITE_NAME_EN
# FRONT: Vite build is static, BACKEND: Next build needs prisma generate already done
# VITE_API_URL intentionally empty → same-origin proxy via start.mjs
ENV VITE_API_URL=""
RUN npm run build

# 4) Runtime image
FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV BACKEND_URL=http://localhost:3001

COPY --from=base /app/package.json ./package.json
COPY --from=base /app/scripts ./scripts
COPY --from=base /app/petro ./petro
COPY --from=base /app/front ./front
# root has no node_modules (only petro/front) — skip
# petro & front node_modules already inside their folders from base
COPY --from=base /app/petro/node_modules ./petro/node_modules
COPY --from=base /app/front/node_modules ./front/node_modules

# Ensure start script has all it needs; trim dev files but keep dist/.next
EXPOSE 3000

# Healthcheck: backend /api/public/home should respond 200
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 CMD node -e "fetch('http://localhost:3001/api/public/home').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))"

CMD ["node","scripts/start.mjs"]
