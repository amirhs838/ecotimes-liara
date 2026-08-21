# بازگردانی کامل پروژه اکوتایمز (EcoTimes) در ماشین جدید

## چرا محتوا فرق دارد؟

محتوا (اخبار، دسته‌بندی‌ها، ترتیب بخش‌ها، مسیر تصاویر و...) در **دیتابیس PostgreSQL** ذخیره شده است، نه در فایل‌های پروژه.
کپی پوشه پروژه، دیتابیس را نمی‌آورد؛ به همین دلیل در ماشین جدید دیتابیس خالی است (یا با داده دمو پر شده که با محتوای اصلی فرق دارد).
فایل‌های عکس و ویدیو هم در پوشه‌های جدا (`petro/public/images` و `petro/public/videos`) هستند و باید کپی شوند.

## فایل‌های لازم برای انتقال

| فایل/پوشه | توضیح |
|---|---|
| `ecotimes-db-backup.sql` | بکاپ کامل دیتابیس (شامل همه اخبار، دسته‌بندی‌ها، ترتیب‌ها، کاربر ادمین) |
| `petro/public/images/` | تصاویر آپلودشده (~13MB) |
| `petro/public/videos/` | ویدیوهای آپلودشده (~67MB) |

## مراحل دستی (اگر خودتان انجام می‌دهید)

روی ماشین جدید، داخل پوشه پروژه:

```powershell
# 1. نصب PostgreSQL 16 و ایجاد نقش و دیتابیس
psql -U postgres -c "CREATE ROLE petrotimes WITH LOGIN PASSWORD 'kw2LJ6x2zGxkYiYH6VOyYFKW3BcmX55H';"
psql -U postgres -c "DROP DATABASE IF EXISTS ecotimes_dev;"
psql -U postgres -c "CREATE DATABASE ecotimes_dev OWNER petrotimes;"

# 2. ریستور بکاپ (باید مسیر فایل بکاپ را بدهید)
$env:PGPASSWORD = "kw2LJ6x2zGxkYiYH6VOyYFKW3BcmX55H"
& "C:\Program Files\PostgreSQL\16\bin\psql.exe" -U petrotimes -h localhost -d ecotimes_dev -f "C:\مسیر\ecotimes-db-backup.sql"

# 3. کپی پوشه‌های عکس و ویدیو به جای قبلی‌شان در پروژه
#    petro/public/images و petro/public/videos

# 4. اجرای پروژه
npm install
npm run dev
```

## متن آماده برای ایجنت هوش مصنوعی (پرامپت)

> محتوای این پروژه (اخبار، دسته‌بندی‌ها، ترتیب بخش‌ها و مسیر تصاویر) از دیتابیس PostgreSQL خوانده می‌شود، نه از کد پروژه. در ماشین جدید دیتابیس خالی یا با داده دمو پر شده که با محتوای اصلی فرق دارد. فایل `ecotimes-db-backup.sql` بکاپ کامل دیتابیس اصلی است. لطفاً دقیقاً این کارها را انجام بده:
>
> 1. مطمئن شو `DATABASE_URL` در `petro/.env` و `petro/.env.local` به `postgresql://petrotimes:kw2LJ6x2zGxkYiYH6VOyYFKW3BcmX55H@localhost:5432/ecotimes_dev` اشاره کند.
> 2. اگر PostgreSQL روی ماشین نصب نیست، نصب کن (نسخه 16).
> 3. اگر نقش `petrotimes` وجود ندارد بسازش: `CREATE ROLE petrotimes WITH LOGIN PASSWORD 'kw2LJ6x2zGxkYiYH6VOyYFKW3BcmX55H';`
> 4. دیتابیس را از نو بساز: `DROP DATABASE IF EXISTS ecotimes_dev;` و بعد `CREATE DATABASE ecotimes_dev OWNER petrotimes;`
> 5. بکاپ را ریستور کن: `psql -U petrotimes -h localhost -d ecotimes_dev -f ecotimes-db-backup.sql`
> 6. پوشه `petro/public/images` و `petro/public/videos` را با فایل‌هایی که همراه بکاپ فرستاده‌ام جایگزین کن (فایل‌های قبلی را پاک نکن، فقط محتوا باید همان اصلی باشد).
> 7. **مهم:** هیچ‌وقت `prisma seed` یا `prisma/seed-demo.ts` را اجرا نکن و `prisma migrate reset` / `db reset` نکن — این‌ها محتوا را با داده دمو عوض می‌کنند. اگر خطای schema دادی، فقط `npx prisma migrate deploy` را اجرا کن.
> 8. بعد از ریستور، `npm run dev` بزن و بررسی کن که: دسته‌بندی‌ها ۹ مورد اصلی باشند، ترتیب اخبار در صفحه اصلی (hero، خبر فوری، اخبار برتر، ویدیوها و...) مثل نسخه اصلی باشد و همه عکس‌ها نمایش داده شوند. اگر عکسی نمایش داده نشد، مسیر فایل در دیتابیس را با محتوای پوشه `public/images` تطبیق بده.