# راهنمای دیپلوی EcoTimes روی لیارا از طریق گیتهاب — پرامپت آماده برای ایجنت هوش مصنوعی

> این فایل دقیقا روشی است که پروژه ecotimes با موفقیت روی لیارا دیپلوی شد. آن را به هر ایجنت AI بده تا از صفر همین کار را برای پروژه مشابه تکرار کند.

---

## پرامپت برای ایجنت (کپی کن و بده به ایجنت)

```
تو یک Senior DevOps برای پروژه ecotimes هستی. پروژه یک monorepo است:
- petro/ : Next.js 16.1 + Prisma 6 + PostgreSQL (پورت 3001) — API + پنل ادمین + next.config با output: 'standalone'
- front/ : Vite 8 + React 19 (پورت 3000) — SPA که بیلدش می‌شود front/dist
- scripts/start.mjs : launcher پروداکشن — front/dist را روی PORT (3000) سرو می‌کند و petro standalone را روی 3001 اجرا و /api /_next /admin /news /category را پروکسی می‌کند
- package.json روت: build => petro build + front build، start => node scripts/start.mjs

محدودیت لیارا: سورس هر دیپلوی 256MB + بیلد 15 دقیقه (عملا 20 دقیقه برای Docker). با petro/node_modules (982MB) و ویدیوها (67MB) حتما تایم‌اوت می‌خوری.

وظیفه: پروژه را از صفر روی لیارا (App Node + DB Postgres + S3) دیپلوی کن طوری که ورسل (project prj_uVEVQuX5 / prj_ORumcjz + Neon DB) دست نخورد. فقط لیارا.

مراحل را دقیقا به ترتیب زیر انجام بده، هر مرحله را verify کن و لاگ بگیر:
```

### مرحله 0 — اطلاعات مورد نیاز از کاربر را بپرس

قبل از هر کاری بپرس:
1. `LIARA_API_TOKEN` (از console.liara.ir > API Tokens — توکن JWT)
2. آیا App و DB روی لیارا ساخته شده؟ اگر نه، نام و پلن (ما: App `ecotimes` medium-g2، DB `loving-colden-1rbld2ume-db` postgres 16.14، شبکه `my-network`)
3. کلیدهای S3 (ما: endpoint `c463335.parspack.net` bucket `c463335` — کلیدها را از کنسول پارس‌پک بگیر)
4. دامنه نهایی (ما: `eco-times.ir` و `ecotimes.liara.run`)
5. `ADMIN_EMAIL` / `ADMIN_PASSWORD` / `SESSION_SECRET` (اگر ندارد بساز: `openssl rand -base64 32`)
6. `GH_TOKEN` برای ریپو `ecotimes-liara` (کلاسیک `ghp_xxx` با scope repo)

### مرحله 1 — نصب و آماده‌سازی Liara CLI پرتابل

پروژه از Node پرتابل استفاده می‌کند (نه Node سیستم):
```
$runtime = "C:\Users\central store\Desktop\PROJECT\.runtime\node-v22.18.0-win-x64"
$node = "$runtime\node.exe"
$cli  = "$runtime\node_modules\@liara\cli\bin\run.js"
& $node --version        # باید v22.18.0
& $node $cli --version   # باید 9.5.1 — اگر نبود:
& $node "$runtime\node_modules\npm\bin\npm-cli.js" install -g @liara/cli
$env:Path = "$runtime;" + $env:Path
```

### مرحله 2 — لاگین لیارا (نکته VPN)

```
$token = "LIARA_API_TOKEN_JWT"
"hesaria38" | & $node $cli login --api-token $token
& $node $cli app:list   # باید ecotimes را ببینی
& $node $cli db:list    # باید loving-colden-1rbld2ume-db را ببینی
```

**نکته حیاتی VPN:**
- برای `api.liara.ir` (آپلود) باید **VPN خاموش** باشد وگرنه `write ECONNRESET`.
- برای `api.github.com:443` (push/status) باید **VPN روشن** و پروکسی را خنثی کنی:
  ```
  [System.Net.WebRequest]::DefaultWebProxy = New-Object System.Net.WebProxy($null)
  ```
  برای هر درخواست به `api.github.com` این خط را اجرا کن. برای `api.liara.ir` برعکس (VPN OFF).

اگر App/DB نبود:
- App: کنسول لیارا > ساخت اپ > NodeJS 22 > نام ecotimes > پلن medium-g2 > شبکه my-network
- DB: Postgres 16.14 > نام loving-colden... > volume 10GB > publicNetwork true
  برای یافتن host/port/pass بعد از ساخت:
  ```
  fetch('https://api.liara.ir/v1/databases/<id>', {headers:{Authorization:'Bearer '+token}}).then(r=>r.json()).then(j=>console.log(j.database.root_password, j.database.port, j.database.network.node.host))
  # ما: root / <DB_PASS> / sahand.liara.cloud:31941 / postgres (پسورد را از API لیارا بگیر)
  ```

### مرحله 3 — فایل‌های دیپلوی (ورسل را دست نزن)

**liara.json (روت) — دقیقا همین:**
```json
{
  "app": "ecotimes",
  "platform": "docker",
  "port": 3000,
  "build": { "location": "iran", "cache": true }
}
```

**Dockerfile (روت) — standalone (سریع، بدون کپی 982MB node_modules):**
```dockerfile
FROM node:22-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV CI=true
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
COPY petro/prisma ./petro/prisma
COPY petro/prisma.config.ts ./petro/prisma.config.ts
COPY petro/package.json petro/package-lock.json ./petro/
COPY front/package.json ./front/package.json
COPY package.json ./
RUN npm --prefix petro ci --include=optional 2>/dev/null || npm --prefix petro install --include=optional
RUN npm --prefix front ci 2>/dev/null || npm --prefix front install
COPY scripts ./scripts
COPY petro ./petro
COPY front ./front
RUN npm --prefix petro run db:generate
ARG DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
ARG POSTGRES_PRISMA_URL=postgresql://dummy:dummy@localhost:5432/dummy
ARG NEXT_PUBLIC_SITE_URL=https://eco-times.ir
ARG NEXT_PUBLIC_SITE_NAME=اکو تایمز
ENV DATABASE_URL=$DATABASE_URL
ENV POSTGRES_PRISMA_URL=$POSTGRES_PRISMA_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_NAME=$NEXT_PUBLIC_SITE_NAME
RUN npm --prefix petro run build && npm --prefix front run build
FROM node:22-bookworm-slim AS runner
WORKDIR /app
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
COPY --from=base /app/petro/.next/standalone ./petro-standalone
COPY --from=base /app/petro/.next/static ./petro-standalone/.next/static
COPY --from=base /app/petro/public ./petro-standalone/public
COPY --from=base /app/front/dist ./front/dist
COPY --from=base /app/scripts ./scripts
EXPOSE 3000
CMD ["node","scripts/start.mjs"]
```
نکته: `petro/next.config.ts` باید `output: 'standalone'` داشته باشد (commit f5c603f). وگرنه `COPY --from=base /app/petro/.next/standalone` فیل می‌شود.

**.dockerignore و .liaraignore — باید شامل باشند (وگرنه سورس 100MB و تایم‌اوت):**
```
node_modules
petro/node_modules
front/node_modules
petro/.next
petro/.vercel
front/.vercel
front/dist
front/.runtime
front/compare-*
petro/storage
petro/public/images
petro/public/videos
backups
reference-design
.git
```

**scripts/start.mjs — باید:**
- front/dist را روی `PORT` (3000) سرو کند،
- `petro-standalone/server.js` (یا `petro/.next/standalone/server.js` برای fallback لوکال) را با `spawn(process.execPath, [server], {env:{PORT:3001}})` اجرا کند،
- `host` و `x-forwarded-host` را در `proxy()` حفظ کند وگرنه لاگین 403 `درخواست نامعتبر (CSRF)` می‌دهد (فیکس 8c1752d).

### مرحله 4 — ENVهای لیارا (فقط لیارا، هرگز petro/.env ورسل را بازنویسی نکن)

```
& $node $cli env:set --app ecotimes -f `
  DATABASE_URL=postgresql://root:<DB_PASS>@sahand.liara.cloud:31941/postgres `
  POSTGRES_PRISMA_URL=postgresql://root:<DB_PASS>@sahand.liara.cloud:31941/postgres?connection_limit=1 `
  SESSION_SECRET=<SESSION_SECRET> `
  ADMIN_EMAIL=admin@ecotimes.ir `
  ADMIN_PASSWORD=<ADMIN_PASSWORD> `
  NEXT_PUBLIC_SITE_URL=https://eco-times.ir `
  NEXT_PUBLIC_SITE_NAME="اکو تایمز" `
  NEXT_PUBLIC_SITE_NAME_EN="Eco Times" `
  S3_ENDPOINT=https://c463335.parspack.net `
  S3_BUCKET=c463335 `
  S3_ACCESS_KEY=<S3_ACCESS_KEY> `
  S3_SECRET_KEY=<S3_SECRET_KEY> `
  S3_PUBLIC_URL=https://c463335.parspack.net/c463335 `
  MAX_IMAGE_UPLOAD_MB=25
# مقادیر <...> را از کاربر/کنسول بگیر — هرگز توکن واقعی را در گیت کامیت نکن
```

### مرحله 5 — دیتابیس: Migrate + Restore (دو مرحله جدا)

DB لیارا خالی است. `npx prisma migrate deploy` مستقیم روی `sahand.liara.cloud:31941` با VPN هنگ می‌کند، پس با `pg` دستی بزن:

1. **Migrate:** هر فایل `petro/prisma/migrations/*/migration.sql` را بخوان، با `;` اسپلیت کن، هر statement را با یک `new Client({connectionString})` جدا اجرا کن (نه یک تراکنش بزرگ). اگر خطای `column "order" does not exist` گرفتی:
   ```
   ALTER TABLE "HomeSection" ADD COLUMN "order" INTEGER NOT NULL DEFAULT 0;
   ```
   و جدول‌های `PostCategory`, `MarketSnapshot`, `UploadSession`, `UploadChunk` را اگر نبودند بساز (از `schema.prisma`).

2. **Restore:** فایل `backups/backup-2026-08-21-portable/1-full-data.json` (یا `3-inserts.sql`) را با `ON CONFLICT DO NOTHING` بریز. برای `MarketSnapshot.items` باید `JSON.stringify(items)+'::jsonb'` بفرستی. هر ردیف با یک Client جدید (یا batch 20 تایی).

تعداد نهایی باید (verify با `SELECT count(*) FROM "Post"` etc):
`Admin 1, Category 10, HomeSection 10, Media 59-89, Post 61-68, SectionPlacement 37, Tag 2`

### مرحله 6 — دیپلوی از طریق گیتهاب (روش اصلی که جواب داد)

**6-1: ساخت ریپو (اگر نبود) — با GitHub API و VPN روشن:**
```
[System.Net.WebRequest]::DefaultWebProxy = New-Object System.Net.WebProxy($null)
$gh="<GH_TOKEN>"  # ghp_xxx را از کاربر بگیر — هرگز هاردکد نکن
Invoke-RestMethod -Uri https://api.github.com/user/repos `
  -Method POST -Headers @{Authorization="Bearer $gh"; "User-Agent"="node"} `
  -Body (@{name="ecotimes-liara"; private=$true} | ConvertTo-Json) -ContentType "application/json"
# اگر 422 یعنی از قبل exists
```

**6-2: پوش سورس — روش A (اگر git نصب است):**
```
git init (اگر .git نبود)
git remote add origin https://<GH_TOKEN>@github.com/amirhs838/ecotimes-liara.git
git add -A
git commit -m "deploy: ..."
git push -u origin main
```

**روش B (وقتی git.exe نیست — همان که ما استفاده کردیم):** با `api.github.com/repos/.../contents/<path>` و PUT با `content: base64(utf8)` و `sha` (اگر فایل exists). برای فولدرها باید درخت git بسازی (`/git/trees` + `/git/commits` + `PATCH /git/refs/heads/main`) یا ساده‌تر: فایل به فایل PUT کن.

**6-3: Workflow — `.github/workflows/liara.yaml` (باید همین باشد):**
```yaml
name: CD-Liara
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: {node-version: "22"}
      - name: update-liara
        env:
          LIARA_TOKEN: ${{ secrets.LIARA_API_TOKEN }}
        run: |
          npm i -g @liara/cli@9
          liara deploy --app="ecotimes" --api-token="$LIARA_TOKEN" --port 3000 --no-app-logs
```

**6-4: ست Secret روی گیتهاب (LIARA_API_TOKEN):**
با libsodium seal کن:
```
# 1. GET /repos/amirhs838/ecotimes-liara/actions/secrets/public-key -> key, key_id
# 2. sodium.seal(token, key) -> encrypted
# 3. PUT /repos/.../actions/secrets/LIARA_API_TOKEN {encrypted_value, key_id}
```
یا از کنسول گیتهاب: Settings > Secrets and variables > Actions > New repository secret.

بعد از push به main، در `https://github.com/amirhs838/ecotimes-liara/actions` باید workflow سبز شود (5-12 دقیقه). اگر `Build timed out` خورد، چک کن `.dockerignore` شامل `petro/public/videos` باشد و Dockerfile standalone باشد.

### مرحله 7 — تست نهایی

```
curl https://eco-times.ir/api/public/home          # 200 JSON
curl https://eco-times.ir/_next/static/...          # 200
curl https://eco-times.ir/admin/login               # 200
curl https://eco-times.ir/api/media/<key>.jpg       # 200 image/jpeg (S3)
# لاگین: admin@ecotimes.ir / Lv2in2Efzl3z30i
& $node $cli app:logs --app ecotimes --since "5m ago"
```

### نکات طلایی که ما یاد گرفتیم

- S3: در `petro/src/lib/storage.ts:60` باید `forcePathStyle:true`, `maxAttempts:2`, `NodeHttpHandler 5s/15s`, `requestChecksumCalculation:WHEN_REQUIRED` باشد (Parspack).
- Prisma binaryTargets در `schema.prisma` حتما `["native","debian-openssl-1.1.x","debian-openssl-3.0.x"]`.
- `front/package-lock.json` را در `.gitignore` بگذار (ما از pnpm استفاده می‌کنیم) وگرنه diff بزرگ پوش می‌شود.
- `liara.json` platform باید `docker` باشد (نه `node`) چون دو سرویس داریم.
- هرگز `vercel` CLI نزن و `.vercel/project.json` را تغییر نده.

---

## اطلاعات محیط فعلی (برای کپی)

- Liara App: `ecotimes` (docker, port 3000, location iran, cache true) — `sahand.liara.cloud`
- DB: `loving-colden-1rbld2ume-db` postgres 16.14 `sahand.liara.cloud:31941` `postgresql://root:<DB_PASS>@sahand.liara.cloud:31941/postgres`
- S3 فعال: `c463335.parspack.net` bucket `c463335`
- دامنه: `eco-times.ir` (canonical) + `ecotimes.liara.run`
- GH Repo: `amirhs838/ecotimes-liara` branch `main` — token در .git/config با placeholder <GH_TOKEN> نگه دار
- Node پرتابل: `C:\Users\central store\Desktop\PROJECT\.runtime\node-v22.18.0-win-x64` (CLI 9.5.1)

فایل‌های مرجع موفق: commit `0c45c31` (standalone static/public fix) و `8d8e12d` (آخرین main).

