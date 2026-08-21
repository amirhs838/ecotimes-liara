const { PrismaClient } = require("@prisma/client");
const { readFileSync } = require("fs");

function envFrom(file) {
  const out = {};
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)="?(.*?)"?$/);
    if (m) out[m[1]] = m[2];
  }
  return out;
}

(async () => {
  const env = envFrom("C:/Users/central store/Desktop/ecotimes/petro/.env.local");
  const prisma = new PrismaClient({
    datasources: { db: { url: env.POSTGRES_PRISMA_URL } },
  });
  const r = await prisma.media.deleteMany({ where: { id: "cmt097oii0000la04pioxbe78" } });
  console.log("media rows deleted:", r.count);
  await prisma.$disconnect();
})().catch((e) => {
  console.error("DB FAIL:", e.message);
  process.exit(1);
});