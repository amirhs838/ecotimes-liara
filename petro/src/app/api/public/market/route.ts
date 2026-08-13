import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 60;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const SYMBOLS = ["BTC", "ETH", "BNB", "SOL"] as const;

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

// GET /api/public/market — crypto ticker data, proxied from Wallex public API.
// Returns 502 when the upstream is unreachable; the frontend then keeps its static values.
export async function GET() {
  try {
    const res = await fetch("https://api.wallex.ir/v1/markets", {
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`upstream ${res.status}`);
    const json = await res.json();
    const markets: unknown[] = json?.result?.markets ?? json?.result ?? [];

    const items = SYMBOLS.map((symbol) => {
      const m = (markets as Record<string, unknown>[]).find(
        (it) => it?.baseAsset === symbol && it?.quoteAsset === "USDT"
      );
      if (!m) return null;
      const price = Number(m.price ?? m.lastPrice);
      if (!Number.isFinite(price)) return null;
      const rawChange = Number(
        (m.stats as Record<string, unknown> | undefined)?.["24h_ch"] ??
          m["24h_ch"] ??
          m.change24h ??
          0
      );
      return [
        symbol,
        `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        `${Math.abs(rawChange).toFixed(2)}%`,
      ];
    });

    if (items.some((i) => i === null)) throw new Error("incomplete upstream data");
    return NextResponse.json({ ok: true, data: { items } }, { headers: CORS_HEADERS });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502, headers: CORS_HEADERS });
  }
}
