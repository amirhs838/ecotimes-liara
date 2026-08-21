import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Public pages (news articles, categories) are crawlable; the admin panel and
// API routes are off-limits for search engines.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/news/", "/category/"],
        disallow: ["/admin", "/api", "/_next/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}