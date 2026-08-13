import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

// Prisma CLI loads .env; also load .env.local for ADMIN_* vars (does not override existing)
try {
  (process as unknown as { loadEnvFile?: (p: string) => void }).loadEnvFile?.(
    ".env.local"
  );
} catch {
  // .env.local is optional
}

const prisma = new PrismaClient();

// EcoTimes — the fixed 9 categories (golden rule 6)
const categories = [
  { name: "هوش مصنوعی", slug: "ai", order: 1 },
  { name: "اقتصاد دیجیتال", slug: "digital-economy", order: 2 },
  { name: "سلامت و درمان", slug: "health", order: 3 },
  { name: "زیست‌فناوری و نانو", slug: "biotech-nano", order: 4 },
  { name: "میکروالکترونیک", slug: "microelectronics", order: 5 },
  { name: "انرژی", slug: "energy", order: 6 },
  { name: "آب و محیط‌زیست", slug: "water-environment", order: 7 },
  { name: "امنیت غذایی", slug: "food-security", order: 8 },
  { name: "صنایع خلاق", slug: "creative-industries", order: 9 },
];

// Homepage sections (design-spec.md §6): 4 system sections + 9 category blocks
const homeSections = [
  { key: "breaking", name: "به‌روزرسانی زنده", capacity: 8 },
  { key: "hero", name: "خبر ویژه (هیرو)", capacity: 1 },
  { key: "videos", name: "ویدیوهای پرطرفدار", capacity: 6 },
  { key: "photos", name: "اسلایدشوی عکس", capacity: 6 },
  { key: "top-stories", name: "اخبار برتر (سایدبار)", capacity: 8 },
  { key: "ai", name: "بلوک هوش مصنوعی", capacity: 13 },
  { key: "digital-economy", name: "بلوک اقتصاد دیجیتال", capacity: 3 },
  { key: "health", name: "بلوک سلامت و درمان", capacity: 1 },
  { key: "biotech-nano", name: "بلوک زیست‌فناوری و نانو", capacity: 14 },
  { key: "microelectronics", name: "بلوک میکروالکترونیک", capacity: 7 },
  { key: "energy", name: "بلوک انرژی", capacity: 7 },
  { key: "water-environment", name: "بلوک آب و محیط‌زیست", capacity: 3 },
  { key: "food-security", name: "بلوک امنیت غذایی", capacity: 3 },
  { key: "creative-industries", name: "بلوک صنایع خلاق", capacity: 3 },
];

async function main() {
  for (const c of categories) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: { name: c.name, order: c.order },
      create: c,
    });
  }
  console.log(`Categories: ${categories.length} upserted`);

  for (const s of homeSections) {
    await prisma.homeSection.upsert({
      where: { key: s.key },
      update: { name: s.name, capacity: s.capacity },
      create: s,
    });
  }
  console.log(`Home sections: ${homeSections.length} upserted`);

  // Live stream singleton (off by default)
  const existingLive = await prisma.liveStream.findFirst();
  if (!existingLive) {
    await prisma.liveStream.create({ data: {} });
    console.log("LiveStream: singleton created (disabled)");
  }

  const email = process.env.ADMIN_EMAIL || "admin@ecotimes.ir";
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error(
      "ADMIN_PASSWORD env var is required to seed the initial admin user"
    );
  }
  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.adminUser.upsert({
    where: { email },
    update: {},
    create: { email, passwordHash, name: "مدیر سایت" },
  });
  console.log(`Admin user: ${email} upserted`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
