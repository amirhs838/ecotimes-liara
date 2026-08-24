import type { MetadataRoute } from "next";

// Public pages (news articles, categories) are crawlable; the admin panel and
// API routes are off-limits for search engines.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/news/", "/category/", "/about"],
        disallow: ["/admin", "/api", "/_next/"],
      },
    ],
    sitemap: "https://eco-times.ir/sitemap.xml",
  };
}