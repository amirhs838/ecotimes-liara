import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createClient() {
  return new PrismaClient({
    // Pooled endpoint first: Neon's free tier has a hard cap of ~10
    // direct connections, which serverless functions exhaust quickly.
    datasources: {
      db: { url: process.env.POSTGRES_PRISMA_URL ?? process.env.DATABASE_URL },
    },
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  })
}

export const db = globalForPrisma.prisma ?? createClient()
globalForPrisma.prisma = db