import { NextResponse } from "next/server";
import {
  getHomeSectionPosts,
  getLatestPosts,
  getLiveStream,
  getMostViewedPosts,
  getNavCategories,
} from "@/lib/home-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Read-only public endpoint for the standalone frontend (CORS open, GET/OPTIONS only).
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

// GET /api/public/home — everything the frontend homepage needs in one call.
export async function GET() {
  const [breaking, hero, videos, photos, magazine, digitalEconomy, topStories, latest, mostViewed, nav, live] =
    await Promise.all([
      getHomeSectionPosts("breaking"),
      getHomeSectionPosts("hero"),
      getHomeSectionPosts("videos"),
      getHomeSectionPosts("photos"),
      getHomeSectionPosts("magazine"),
      getHomeSectionPosts("digital-economy"),
      getHomeSectionPosts("top-stories"),
      getLatestPosts(12),
      getMostViewedPosts(8),
      getNavCategories(),
      getLiveStream(),
    ]);

  return NextResponse.json(
    {
      ok: true,
      data: {
        sections: {
          breaking,
          hero,
          videos,
          photos,
          magazine,
          "digital-economy": digitalEconomy,
          "top-stories": topStories,
        },
        latest,
        mostViewed,
        nav,
        live: live ? { enabled: Boolean(live.enabled), title: live.title } : null,
      },
    },
    { headers: CORS_HEADERS }
  );
}
