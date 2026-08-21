import { NextResponse } from "next/server";
import { after } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

// Ticker order as displayed in the header strip.
const SYMBOLS = ["BTC", "ETH", "BNB", "XRP", "SOL", "TRX", "HYPE"] as const;

// Cache serves instantly; the upstream refresh runs after the response has
// been sent (after()) so page loads / 30s polls never wait on Binance or
// CoinGecko. Failed rows keep their last-known-good value (memory or the DB
// snapshot) so the strip never shows "—" once real prices have been fetched.
const CACHE_TTL_MS = 20_000;

type TickerRow = [string, string, string];

let cache: { at: number; items: (TickerRow | null)[] } | null = null;
let refreshing = false;

function formatPrice(price: number): string {
  const opts =
    price >= 1
      ? { minimumFractionDigits: 2, maximumFractionDigits: 2 }
      : { minimumFractionDigits: 2, maximumFractionDigits: 4 };
  return `$${price.toLocaleString("en-US", opts)}`;
}

async function fetchBinance(symbol: string): Promise<TickerRow> {
  const res = await fetch(
    `https://data-api.binance.vision/api/v3/ticker/24hr?symbol=${symbol}USDT`,
    { cache: "no-store", signal: AbortSignal.timeout(4000) }
  );
  if (!res.ok) throw new Error(`upstream ${res.status} for ${symbol}`);
  const row = await res.json();
  const price = Number(row.lastPrice);
  const change = Number(row.priceChangePercent);
  if (!Number.isFinite(price) || !Number.isFinite(change)) throw new Error("invalid payload");
  return [symbol, formatPrice(price), `${change >= 0 ? "+" : "-"}${Math.abs(change).toFixed(2)}%`];
}

// HYPE is not listed on Binance (HYPEUSDT returns "Invalid symbol"), so it is
// sourced from CoinGecko's Hyperliquid ticker.
async function fetchHype(): Promise<TickerRow> {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=hyperliquid&vs_currencies=usd&include_24hr_change=true",
    { cache: "no-store", signal: AbortSignal.timeout(4000) }
  );
  if (!res.ok) throw new Error(`upstream ${res.status} for HYPE`);
  const row = await res.json();
  const price = Number(row.hyperliquid?.usd);
  const change = Number(row.hyperliquid?.usd_24h_change);
  if (!Number.isFinite(price) || !Number.isFinite(change)) throw new Error("invalid payload");
  return ["HYPE", formatPrice(price), `${change >= 0 ? "+" : "-"}${Math.abs(change).toFixed(2)}%`];
}

async function loadSnapshot(): Promise<(TickerRow | null)[] | null> {
  try {
    const snap = await db.marketSnapshot.findUnique({ where: { id: 1 } });
    if (!snap || !Array.isArray(snap.items)) return null;
    return snap.items as unknown as (TickerRow | null)[];
  } catch {
    return null;
  }
}

async function saveSnapshot(items: (TickerRow | null)[]) {
  try {
    await db.marketSnapshot.upsert({
      where: { id: 1 },
      create: { id: 1, items: items as unknown as object },
      update: { items: items as unknown as object },
    });
  } catch {
    // persistence is best-effort — memory cache still covers the instance
  }
}

async function refreshAndSave() {
  if (refreshing) return;
  refreshing = true;
  try {
    const lastGood: (TickerRow | null)[] | null = cache ? cache.items : await loadSnapshot();
    const rows = await Promise.all(
      SYMBOLS.map((symbol) =>
        (symbol === "HYPE" ? fetchHype() : fetchBinance(symbol)).catch(() => null)
      )
    );
    const merged = rows.map((row, i) => row ?? lastGood?.[i] ?? null);
    cache = { at: Date.now(), items: merged };
    await saveSnapshot(merged);
  } finally {
    refreshing = false;
  }
}

// GET /api/public/market — crypto ticker data, proxied from Binance public
// data API (HYPE via CoinGecko). Responses are served instantly from the
// in-memory cache; the upstream refresh happens after the response is sent,
// so browsers never wait on the upstreams. Failed rows keep their
// last-known-good value (memory or the DB snapshot).
export async function GET() {
  if (cache) {
    after(() => {
      void refreshAndSave();
    });
    return NextResponse.json({ ok: true, data: { items: cache.items } }, { headers: CORS_HEADERS });
  }

  // Cold instance: load the DB snapshot and attempt a refresh before the
  // first response so the very first paint has real values.
  await refreshAndSave();
  return NextResponse.json({ ok: true, data: { items: cache?.items ?? [] } }, { headers: CORS_HEADERS });
}