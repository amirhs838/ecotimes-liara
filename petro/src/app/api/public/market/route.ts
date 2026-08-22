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

const CACHE_TTL_MS = 20_000;
const WALLEX_API = "https://api.wallex.ir/hector/web/v1/markets";

type TickerRow = [string, string, string];

let cache: { at: number; items: (TickerRow | null)[] } | null = null;
let refreshing = false;

/** Formats a USD price exactly like the original ticker design.
 *  BTC → "$77,609.82"   ETH → "$2,399.42"   XRP → "$1.43"
 */
function formatUsd(price: number): string {
  const opts =
    price >= 1
      ? { minimumFractionDigits: 2, maximumFractionDigits: 2 }
      : { minimumFractionDigits: 2, maximumFractionDigits: 4 };
  return `$${price.toLocaleString("en-US", opts)}`;
}

function formatChange(change: number): string {
  return `${change >= 0 ? "+" : "-"}${Math.abs(change).toFixed(2)}%`;
}

interface WallexMarket {
  symbol: string;
  base_asset: string;
  quote_asset: string;
  price: string;
  change_24h: number;
}

async function fetchWallexMarkets(): Promise<Map<string, { price: number; change: number }>> {
  const res = await fetch(WALLEX_API, {
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`wallex ${res.status}`);
  const json = await res.json();
  if (!json.success || !Array.isArray(json.result?.markets)) throw new Error("invalid wallex payload");

  const map = new Map<string, { price: number; change: number }>();
  for (const m of json.result.markets as WallexMarket[]) {
    if (m.quote_asset !== "TMN") continue;
    const base = m.base_asset.toUpperCase();
    const price = Number(m.price);
    const change = Number(m.change_24h);
    if (Number.isFinite(price) && Number.isFinite(change)) {
      map.set(base, { price, change });
    }
  }
  return map;
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

    let wallexMap: Map<string, { price: number; change: number }> | null = null;
    try {
      wallexMap = await fetchWallexMarkets();
    } catch {
      // wallex unreachable — fall through to last-known-good
    }

    const rows: (TickerRow | null)[] = SYMBOLS.map((symbol, i) => {
      if (wallexMap) {
        const usdtRate = wallexMap.get("USDT");
        const d = wallexMap.get(symbol);
        if (d && usdtRate && usdtRate.price > 0) {
          // Convert Toman → USD using the USDT/TMN market rate from Wallex itself
          const usdPrice = d.price / usdtRate.price;
          return [symbol, formatUsd(usdPrice), formatChange(d.change)] as TickerRow;
        }
      }
      return lastGood?.[i] ?? null;
    });

    cache = { at: Date.now(), items: rows };
    await saveSnapshot(rows);
  } finally {
    refreshing = false;
  }
}

// GET /api/public/market — crypto ticker data from Wallex (Iranian market).
// Single upstream call fetches all symbols. Responses are served instantly
// from the in-memory cache; refresh happens after the response is sent.
export async function GET() {
  if (cache) {
    after(() => {
      void refreshAndSave();
    });
    return NextResponse.json({ ok: true, data: { items: cache.items } }, { headers: CORS_HEADERS });
  }

  await refreshAndSave();
  return NextResponse.json({ ok: true, data: { items: cache?.items ?? [] } }, { headers: CORS_HEADERS });
}
