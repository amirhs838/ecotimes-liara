const { PrismaClient } = require("@prisma/client");
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env.local") });

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.POSTGRES_PRISMA_URL } },
});

(async () => {
  const posts = await prisma.post.findMany({
    where: { videoUrl: { not: null } },
    select: { id: true, title: true, videoUrl: true, videoDuration: true, publishedAt: true },
    orderBy: { publishedAt: "asc" },
  });
  console.log(JSON.stringify(posts, null, 1));
  await prisma.$disconnect();
})().catch((e) => {
  console.error("ERR", e.message);
  process.exit(1);
});