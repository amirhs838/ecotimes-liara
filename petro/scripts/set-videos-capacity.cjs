/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require("@prisma/client");
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env.local") });

async function main() {
  const prisma = new PrismaClient({
    datasources: { db: { url: process.env.POSTGRES_PRISMA_URL } },
  });
  const updated = await prisma.homeSection.update({
    where: { key: "videos" },
    data: { capacity: 4, name: "ویدیوها (هیرو + ۳ باکس)" },
  });
  console.log("updated:", JSON.stringify(updated));
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});