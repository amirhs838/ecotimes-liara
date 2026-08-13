import type { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    ...categories.map((c) => ({
      url: `${siteUrl}/category/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${siteUrl}/news/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
  ];
}
