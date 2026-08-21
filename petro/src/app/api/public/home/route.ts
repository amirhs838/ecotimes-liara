import { NextResponse } from "next/server";
import {
  getHomeSectionPosts,
  getHomeSectionMeta,
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

// Canonical homepage section order — matches the frontend layout top→bottom.
const SECTION_KEYS = [
  "hero",
  "hero-video",
  "videos",
  "top-stories",
  "magazine",
  "digital-economy",
  "ad-1",
  "ad-2",
  "photos",
];

// The DB queries take ~1.5-2s against Neon, so cache the assembled payload
// in memory for a short window. New edits show up within one TTL.
const CACHE_TTL_MS = 15_000;
let cache: { at: number; data: unknown } | null = null;

// GET /api/public/home — everything the frontend homepage needs in one call.
export async function GET() {
  const now = Date.now();
  if (cache && now - cache.at < CACHE_TTL_MS) {
    return NextResponse.json(cache.data, { headers: CORS_HEADERS });
  }

  const [sectionResults, getHomeSectionMetaResult, latest, mostViewed, nav, live] =
    await Promise.all([
      Promise.all(SECTION_KEYS.map((key) => getHomeSectionPosts(key))),
      getHomeSectionMeta(),
      getLatestPosts(12),
      getMostViewedPosts(8),
      getNavCategories(),
      getLiveStream(),
    ]);

  const sections = Object.fromEntries(
    SECTION_KEYS.map((key, index) => [key, sectionResults[index]])
  );

  const sectionsMeta = Object.fromEntries(
    Object.entries(getHomeSectionMetaResult).map(([key, meta]) => [
      key,
      { ...meta, filled: sections[key]?.length ?? 0 },
    ])
  );

  const payload = {
    ok: true,
    data: {
      sections,
      sectionsMeta,
      latest,
      mostViewed,
      nav,
      live: live ? { enabled: Boolean(live.enabled), title: live.title } : null,
    },
  };

  cache = { at: Date.now(), data: payload };

  return NextResponse.json(payload, { headers: CORS_HEADERS });
}
