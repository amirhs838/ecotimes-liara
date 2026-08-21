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

// Homepage sections — order matches the frontend layout top→bottom.
// Keep this list in sync with what the frontend actually renders:
// hero / hero-video / videos / top-stories / magazine / digital-economy /
// ad-1 / ad-2 / photos, plus breaking (header marquee) and category-video
// (category page video card). "videos" and "category-video" fall back to
// latest video posts when no manual placements exist.
const homeSections = [
  { key: "hero", name: "خبر ویژه (هیرو)", capacity: 1, order: 1 },
  { key: "hero-video", name: "۶ خبر زیر ویدیو", capacity: 6, order: 2 },
  { key: "videos", name: "ویدیوها (هیرو + ۴ باکس)", capacity: 5, order: 3 },
  { key: "top-stories", name: "اخبار برتر", capacity: 8, order: 4 },
  { key: "magazine", name: "مجله", capacity: 5, order: 5 },
  { key: "digital-economy", name: "اقتصاد دیجیتال", capacity: 3, order: 6 },
  { key: "ad-1", name: "تبلیغات ۱", capacity: 1, order: 7 },
  { key: "ad-2", name: "تبلیغات ۲", capacity: 1, order: 8 },
  { key: "photos", name: "گالری عکس", capacity: 6, order: 9 },
  { key: "breaking", name: "اخبار فوری", capacity: 8, order: 10 },
  { key: "category-video", name: "ویدیو دسته‌بندی", capacity: 1, order: 11 },
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
      update: { name: s.name, capacity: s.capacity, order: s.order },
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
