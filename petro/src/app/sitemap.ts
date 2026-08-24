import type { MetadataRoute } from "next";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // During `next build` on Liara, DATABASE_URL may be missing (build arg) — return minimal sitemap instead of failing the build
  try {
    const [posts, categories] = await Promise.all([
      db.post.findMany({
        where: {
          status: "PUBLISHED",
          publishedAt: { lte: new Date() },
          hasOwnPage: true,
        },
        orderBy: { publishedAt: "desc" },
        take: 1000,
        select: { slug: true, updatedAt: true },
      }),
      db.category.findMany({ select: { slug: true } }),
    ]);
    const base = "https://eco-times.ir";
    return [
      {
        url: base,
        lastModified: new Date(),
        changeFrequency: "hourly",
        priority: 1,
      },
      {
        url: `${base}/about`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
      {
        url: `${base}/eco-times`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      },
      ...categories.map((c) => ({
        url: `${base}/category/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 0.8,
      })),
      ...posts.map((p) => ({
        url: `${base}/news/${p.slug}`,
        lastModified: p.updatedAt,
        changeFrequency: "daily" as const,
        priority: 0.7,
      })),
    ];
  } catch {
    // Fallback for build-time without DB (Liara Docker build)
    return [
      {
        url: "https://eco-times.ir",
        lastModified: new Date(),
        changeFrequency: "hourly",
        priority: 1,
      },
      {
        url: "https://eco-times.ir/about",
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
      {
        url: "https://eco-times.ir/eco-times",
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      },
    ];
  }
}