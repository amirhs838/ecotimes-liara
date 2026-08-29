# راهنمای دیپلوی EcoTimes روی لیارا از طریق گیتهاب (برای ایجنت هوش مصنوعی)

این فایل یک پرامپت کامل برای ایجنتی است که باید پروژه ecotimes (یا مشابه) را از صفر روی لیارا دیپلوی کند.

---

## پرامپت برای ایجنت

تو یک Senior DevOps برای پروژه ecotimes هستی. پروژه یک monorepo است:
- `petro/` : Next.js 16 + Prisma 6 + PostgreSQL (پورت 3001) — شامل API و پنل ادمین
- `front/` : Vite 8 + React 19 (پورت 3000) — SPA
- `scripts/start.mjs` : در پروداکشن هر دو را با هم اجرا میکند (front/dist روی PORT و petro روی 3001)
- `package.json` روت: `build` => `petro build + front build`, `start` => `node scripts/start.mjs`

**محدودیت لیارا:** هر دیپلوی 256MB سورس + 15 دقیقه بیلد.

**وظیفه:** پروژه را از صفر روی لیارا (Node + Postgres + S3) دیپلوی کن، طوری که ورسل دست نخورد.

### مرحله 0: اطلاعات مورد نیاز از کاربر را بپرس
از کاربر بخواه:
1. API Token لیارا (از console.liara.ir > API Tokens)
2. آیا DB و S3 از قبل ساخته شده؟ اگر نه، نام و پلن
3. آیا میخواهد S3 جدید بسازد یا از همین c463335 استفاده کند؟ (کلیدهای S3)
4. دامنه نهایی (eco-times.ir یا همون ecotimes.liara.run)
5. ADMIN_EMAIL / ADMIN_PASSWORD و SESSION_SECRET (یا خودت بساز)

### مرحله 1: نصب Liara CLI (پرتابل)
پروژه از Node پرتابل در `PROJECT/.runtime/node-v22.18.0-win-x64` استفاده میکند. اگر `npm`/`liara` پیدا نشد:
```
$root = "C:\Users\central store\Desktop\PROJECT\.runtime\node-v22.18.0-win-x64"
$node = "$root\node.exe"
$cli = "$root\node_modules\@liara\cli\bin\run.js"
& $node $cli --version  # باید 9.5.1 باشد
# اگر نصب نبود:
& $node "$root\node_modules\npm\bin\npm-cli.js" install -g @liara/cli
```

### مرحله 2: لاگین
```
$token = "LIARA_API_TOKEN"
"hesaria38" | & $node $cli login --api-token $token
# چک: & $node $cli app:list  باید app ecotimes را نشان دهد
```

**نکته VPN:** لیارا با IP ایران IP فیلتر نیست، اما `api.liara.ir` برای آپلود به VPN خاموش نیاز دارد. برای کار با GitHub (api.github.com:443) به VPN روشن و `DefaultWebProxy = null` نیاز داری:
```
[System.Net.WebRequest]::DefaultWebProxy = New-Object System.Net.WebProxy($null)
```
برای هر درخواست به `api.github.com` این را ست کن، برای `api.liara.ir` بگذار روی حالت عادی یا null بسته به VPN.

### مرحله 3: چک منابع لیارا
```
& $node $cli app:list          # باید ecotimes node medium-g2 را ببینی
& $node $cli db:list           # باید loving-colden-1rbld2ume-db postgres را ببینی
# اگر نیست، بساز:
# - App: NodeJS 22, نام ecotimes, پلن medium-g2
# - DB: Postgres 16.14, نام loving-colden-... , volume 10GB
# DB publicNetwork=true => اتصال: postgresql://root:<pass>@sahand.liara.cloud:31941/postgres
# برای یافتن پسورد و هاست:
# fetch('https://api.liara.ir/v1/databases/<id>', {headers:{Authorization:'Bearer '+token}}).then(r=>r.json()).then(j=>console.log(j.database.root_password, j.database.port, j.database.network.node.host))
```

### مرحله 4: فایل‌های دیپلوی
اطمینان حاصل کن این فایل‌ها درست هستند و **ورسل را دست نزن**:

**liara.json (روت):**
```json
{
  "app": "ecotimes",
  "platform": "docker",
  "port": 3000,
  "build": { "location": "iran", "cache": true }
}
```

**Dockerfile (روت):** از node:22-bookworm-slim استفاده کن، openssl نصب کن، deps را با `npm --prefix petro ci || npm --prefix petro install` نصب کن (front هم همینطور)، `prisma generate` بزن، `ARG DATABASE_URL` dummy برای بیلد، `npm run build` (petro+front)، سپس stage دوم فقط `petro/.next/standalone`, `petro/.next/static`, `petro/public` (بدون videos 67MB و images 13MB که در .dockerignore هستند), `front/dist`, `scripts`.

**مهم: .liaraignore و .dockerignore باید petro/public/videos و petro/public/images را exclude کنند تا سورس از 100MB به 12MB بیاید، وگرنه تایم‌اوت میشی.**

**.liaraignore/.dockerignore نمونه:**
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
.git
```

### مرحله 5: ENVهای لیارا (فقط لیارا، نه ورسل)
```
& $node $cli env:set --app ecotimes -f DATABASE_URL=postgresql://root:<pass>@sahand.liara.cloud:31941/postgres POSTGRES_PRISMA_URL=...?connection_limit=1 SESSION_SECRET=<random 32b> ADMIN_EMAIL=admin@ecotimes.ir ADMIN_PASSWORD=... NEXT_PUBLIC_SITE_URL=https://ecotimes.liara.run NEXT_PUBLIC_SITE_NAME="اکو تایمز" ... S3_ENDPOINT=https://c463335.parspack.net S3_BUCKET=c463335 S3_ACCESS_KEY=... S3_SECRET_KEY=... S3_PUBLIC_URL=https://c463335.parspack.net/c463335 MAX_IMAGE_UPLOAD_MB=25 ...
```
**تاکید:** این env فقط روی لیارا ست میشود، `petro/.env.local` ورسل دست نخورد.

### مرحله 6: دیتابیس - Migrate + Restore
DB لیارا خالی است. باید:
1. `petro/prisma/migrations` را اعمال کنی. `npx prisma migrate deploy` با VPN روی sahand گیر میکند، پس مستقیم با `pg` و split-by-semicolon و هر statement با یک Client جدید اجرا کن (تا هنگ نکند). اگر ستون `order` در HomeSection کم بود، `ALTER TABLE "HomeSection" ADD COLUMN "order" INTEGER NOT NULL DEFAULT 0` بزن. جدول‌های کمبود مثل PostCategory, MarketSnapshot, UploadSession/Chunk را هم دستی بساز.
2. سپس `backups/backup-2026-08-21-portable/1-full-data.json` (یا `3-inserts.sql`) را با `ON CONFLICT DO NOTHING` و `pg` per-row/per-batch بریز (MarketSnapshot items را به صورت JSON stringified با `::jsonb` بریز).

**تعداد نهایی باید:** Admin 1, Category 10, HomeSection 10, Media 59, Post 61, SectionPlacement 37, Tag 2, etc.

### مرحله 7: دیپلوی
```
# VPN را خاموش کن (برای آپلود به api.liara.ir) و بزن:
$env:Path="C:\Users\central store\Desktop\PROJECT\.runtime\node-v22.18.0-win-x64;"+$env:Path
liara deploy --app ecotimes --path "C:\Users\central store\Desktop\ecotimes - Copy (2)" --port 3000
# یا از طریق گیتهاب:
# 1. ریپو بساز: POST https://api.github.com/user/repos {name:"ecotimes-liara", private:true}
# 2. git init, add, commit, push به https://<GH_TOKEN>@github.com/<user>/ecotimes-liara.git
# 3. workflow .github/workflows/liara.yaml بساز که `liara deploy` بزند (از LIARA_API_TOKEN secret)
# 4. Secret LIARA_API_TOKEN را در GitHub repo settings/secrets/actions بساز (با tweetsodium seal)
```

**ساختار workflow:**
```yaml
name: CD-Liara
on: {push: {branches: [main]}}
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: {node-version: "22"}
      - run: npm i -g @liara/cli@9
        run: liara deploy --app="ecotimes" --api-token="$LIARA_TOKEN" --port 3000 --no-app-logs
```

### مرحله 8: نکات حیاتی
- **ورسل ایزوله:** هرگز `vercel` CLI نزن، `.vercel` و `.env` را بازنویسی نکن.
- **S3:** Parspack S3 با `forcePathStyle: true`, `maxAttempts:2`, `NodeHttpHandler 5s/15s`, `requestChecksumCalculation: WHEN_REQUIRED` (در `petro/src/lib/storage.ts:60`).
- **Prisma:** در Dockerfile حتما `openssl` نصب کن و `binaryTargets = ["native", "debian-openssl-1.1.x", "debian-openssl-3.0.x"]` در schema.prisma بگذار.
- **Build:** `next build` با Turbopack روی لیارا 15-20 دقیقه طول میکشد؛ اگر تایم‌اوت خورد، `petro/public/videos` را از .dockerignore حذف کن.
- **CSRF:** `scripts/start.mjs` باید `host` و `x-forwarded-host` را حفظ کند، وگرنه login 403 میده.
- **سایت‌مپ/ربات:** فقط URLهای `https://eco-times.ir` canonical.

### مرحله 9: تست نهایی
```
curl https://ecotimes.liara.run/api/public/home  # 200
curl https://ecotimes.liara.run/admin/login       # 200 -> redirect
# لاگین با admin@ecotimes.ir / Lv2in2Efzl3z30i باید 200 بده
```
