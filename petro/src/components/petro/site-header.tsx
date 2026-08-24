"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { NavItem } from "@/lib/home-data";
import MobileFrame from "./mobile-frame";
import TickerMarquee from "./ticker-marquee";

export interface BreakingItem {
  title: string;
  href: string | null;
}

type MarketItem = [string, string, string];

const imgIFaLight =
  "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20width%3D%228.06%22%20height%3D%228.06%22%20viewBox%3D%220%200%208.06%208.06%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22i.fa-light%3Amask%22%20clip-path%3D%22url(%23clip0_0_59)%22%3E%0A%3Cg%20id%3D%22arrow-down.svg%22%20clip-path%3D%22url(%23clip1_0_59)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M3.85211%207.48226C3.94971%207.57986%204.11029%207.57986%204.20789%207.48226L6.97851%204.71164C7.07611%204.61403%207.07611%204.45346%206.97851%204.35586C6.88091%204.25826%206.72034%204.25826%206.62274%204.35586L4.28187%206.69673V0.755625C4.28187%200.617094%204.16853%200.50375%204.03%200.50375C3.89147%200.50375%203.77812%200.617094%203.77812%200.755625V6.69673L1.43726%204.35586C1.33966%204.25826%201.17909%204.25826%201.08149%204.35586C0.983887%204.45346%200.983887%204.61403%201.08149%204.71164L3.85211%207.48226Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_0_59%22%3E%0A%3Crect%20width%3D%228.06%22%20height%3D%228.06%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3CclipPath%20id%3D%22clip1_0_59%22%3E%0A%3Crect%20width%3D%226.045%22%20height%3D%228.06%22%20fill%3D%22white%22%20transform%3D%22translate(1.0075)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A";
const imgIFaLight1 =
  "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20width%3D%228.06%22%20height%3D%228.06%22%20viewBox%3D%220%200%208.06%208.06%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22i.fa-light%3Amask%22%20clip-path%3D%22url(%23clip0_0_68)%22%3E%0A%3Cg%20id%3D%22arrow-up.svg%22%20clip-path%3D%22url(%23clip1_0_68)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M4.20789%200.577738C4.11029%200.480137%203.94971%200.480137%203.85211%200.577738L1.08149%203.34836C0.983887%203.44596%200.983887%203.60653%201.08149%203.70414C1.17909%203.80174%201.33966%203.80174%201.43726%203.70414L3.77812%201.36327V7.30437C3.77812%207.44291%203.89147%207.55625%204.03%207.55625C4.16853%207.55625%204.28187%207.44291%204.28187%207.30437V1.36327L6.62274%203.70414C6.72034%203.80174%206.88091%203.80174%206.97851%203.70414C7.07611%203.60653%207.07611%203.44596%206.97851%203.34836L4.20789%200.577738Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_0_68%22%3E%0A%3Crect%20width%3D%228.06%22%20height%3D%228.06%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3CclipPath%20id%3D%22clip1_0_68%22%3E%0A%3Crect%20width%3D%226.045%22%20height%3D%228.06%22%20fill%3D%22white%22%20transform%3D%22translate(1.0075)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A";

const svgPaths = {
  p308e8300:
    "M11.1719 20.9896C16.594 20.9896 20.9896 16.594 20.9896 11.1719C20.9896 5.7497 16.594 1.35417 11.1719 1.35417C5.7497 1.35417 1.35417 5.7497 1.35417 11.1719C1.35417 16.594 5.7497 20.9896 11.1719 20.9896Z",
  p2ef78280: "M1.35417 1.35417L4.91919 4.85996",
};

const MARKET_INTERVAL_MS = 30_000;
const MARKET_CACHE_KEY = "ecotimes-market-v1";
const MARKET_MAX_AGE_MS = 35_000;

const COIN_IMAGE_BY_SYMBOL: Record<string, string> = {
  BTC: "/market/coin-0.png",
  ETH: "/market/coin-1.png",
  BNB: "/market/coin-2.png",
  XRP: "/market/coin-3.png",
  SOL: "/market/coin-4.png",
  TRX: "/market/coin-5.png",
  HYPE: "/market/coin-6.png",
};

const TICKER_SYMBOLS = ["BTC", "ETH", "BNB", "XRP", "SOL", "TRX", "HYPE"];

function fetchMarket(): Promise<MarketItem[] | null> {
  return (async () => {
    try {
      const res = await fetch("/api/public/market");
      if (!res.ok) return null;
      const json = await res.json();
      if (!json.ok) return null;
      return json.data.items as MarketItem[];
    } catch {
      return null;
    }
  })();
}

let marketCache: MarketItem[] | null = null;
let marketListeners = new Set<(items: MarketItem[] | null) => void>();
let marketTimer: ReturnType<typeof setInterval> | null = null;

function readMarketCache(): MarketItem[] | null {
  try {
    const raw = localStorage.getItem(MARKET_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { at: number; data: MarketItem[] };
    if (!Array.isArray(parsed.data) || Date.now() - parsed.at > MARKET_MAX_AGE_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

async function loadMarket() {
  const payload = await fetchMarket();
  if (payload) {
    marketCache = payload;
    try {
      localStorage.setItem(MARKET_CACHE_KEY, JSON.stringify({ at: Date.now(), data: payload }));
    } catch {
      // storage unavailable — module cache is enough
    }
    marketListeners.forEach((listener) => listener(payload));
  }
}

function useMarket(): MarketItem[] | null {
  const [items, setItems] = useState<MarketItem[] | null>(() => marketCache ?? readMarketCache());

  useEffect(() => {
    marketListeners.add(setItems);
    if (marketTimer === null) {
      loadMarket();
      marketTimer = setInterval(loadMarket, MARKET_INTERVAL_MS);
    }
    return () => {
      marketListeners.delete(setItems);
      if (marketListeners.size === 0 && marketTimer !== null) {
        clearInterval(marketTimer);
        marketTimer = null;
      }
    };
  }, []);

  return items;
}

function Change({
  boxClass,
  dataName,
  fallback,
  fallbackUp,
  idx,
}: {
  boxClass: string;
  dataName: string;
  fallback: string;
  fallbackUp: boolean;
  idx: number;
}) {
  const m = useMarket();
  const raw = m?.[idx]?.[2];
  if (!m || !raw) {
    return (
      <div className={boxClass} data-name={dataName}>
        <div className="[word-break:break-word] absolute flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] left-[11.25px] text-[#687086] text-[11.2px] top-[calc(50%-0.6px)] whitespace-nowrap">
          <p className="leading-[11.2px]">—</p>
        </div>
      </div>
    );
  }
  const num = parseFloat(raw);
  const isUp = Number.isFinite(num) ? num >= 0 : fallbackUp;
  const text = Number.isFinite(num) ? `${Math.abs(num).toFixed(2)}%` : fallback;
  const icon = isUp ? imgIFaLight1 : imgIFaLight;
  return (
    <div className={boxClass} data-name={dataName}>
      <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
        <div
          className={`-translate-y-1/2 absolute ${isUp ? "bg-[#087b55]" : "bg-[#c93444]"} left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2`}
          style={{ maskImage: `url("${icon}")` }}
          data-name="i.fa-light"
        />
      </div>
      <div className={`-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] left-[11.25px] ${isUp ? "text-[#087b55]" : "text-[#c93444]"} text-[11.2px] top-[calc(50%-0.6px)] whitespace-nowrap`}>
        <p className="leading-[11.2px]">{text}</p>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="m16 16 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" className="size-7" fill="none" viewBox="0 0 24 24">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="size-7" fill="none" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

/* ===================================================================== */
/* Desktop header — verbatim port from front/src/DesktopPage.tsx         */
/* ===================================================================== */

function MenuDropdown({ nav, onClose }: { nav: NavItem[]; onClose: () => void }) {
  const links = nav.length ? nav : [];
  return (
    <div className="absolute inset-x-0 top-[88px] z-50 bg-white shadow-xl" dir="rtl">
      <div className="grid grid-cols-2 gap-x-8 gap-y-1 px-7 py-6">
        {links.map((item) => (
          <a
            className="border-b border-[#f0f1f3] py-2.5 text-[14px] font-bold text-[#141618] transition-colors hover:text-[#990108]"
            href={item.href === "/" ? "/" : item.href}
            key={item.label}
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
        <a
          className="border-b border-[#f0f1f3] py-2.5 text-[14px] font-bold text-[#141618] transition-colors hover:text-[#990108]"
          href="/#videos"
          onClick={onClose}
        >
          ویدئو
        </a>
        <a
          className="border-b border-[#f0f1f3] py-2.5 text-[14px] font-bold text-[#141618] transition-colors hover:text-[#990108]"
          href="/#photos"
          onClick={onClose}
        >
          عکس
        </a>
      </div>
    </div>
  );
}

function DesktopHeader({ nav, market }: { nav: NavItem[]; market: MarketItem[] | null }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative">
      <div className="bg-[#c93035] text-white">
        <div className="mx-auto flex h-[88px] items-center justify-between px-7">
          <button
            aria-label="منو"
            className="grid size-11 place-items-center"
            onClick={() => setMenuOpen((v) => !v)}
            type="button"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="اکو تایمز" className="h-[80px] w-[107px] object-contain" src="/ecotimes-logo.png" />
          <button aria-label="جستجو" className="grid size-11 place-items-center" type="button">
            <SearchIcon />
          </button>
        </div>
      </div>
      {menuOpen && <MenuDropdown nav={nav} onClose={() => setMenuOpen(false)} />}
      <nav className="border-b border-[#cbced4] bg-white" aria-label="دسته‌بندی‌ها">
        <div className="mx-auto flex h-[52px] items-center justify-center gap-10 px-7 text-[14px] font-bold text-[#141618]">
          {[
            ["صفحه اصلی", "/"],
            ["ویدئو", "/#videos"],
            ["عکس", "/#photos"],
            ["پنل مدیریت", "/admin"],
          ].map(([label, href]) => (
            <a className="transition-colors hover:text-[#990108]" href={href} key={label}>
              {label}
            </a>
          ))}
        </div>
      </nav>
      <TickerMarquee
        className="mx-auto flex h-[48px] max-w-[1280px] items-center border-b border-[#cbced4] bg-[rgba(255,255,255,.95)] px-7 font-['Arimo:Bold',sans-serif]"
        dataName="top crypto ticker strip"
        gap={40}
        speed={1.1}
      >
        {TICKER_SYMBOLS.map((symbol, i) => {
          const value = market?.[i]?.[1] ?? null;
          const change = market?.[i]?.[2] ?? null;
          const num = change ? Number.parseFloat(change) : NaN;
          const hasChange = Number.isFinite(num);
          const isUp = hasChange ? num >= 0 : null;
          return (
            <div className="flex items-center gap-2 whitespace-nowrap" key={symbol}>
              {COIN_IMAGE_BY_SYMBOL[symbol] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt=""
                  className="size-[22px] shrink-0 rounded-[11px] border border-[#e2e6ef] bg-white object-cover shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]"
                  src={COIN_IMAGE_BY_SYMBOL[symbol]}
                />
              )}
              <span className="text-[11px] tracking-[.85px] text-[#687086]">{symbol}</span>
              <strong className="text-[13px] text-[#121728]">{value ?? "—"}</strong>
              <span
                className={`text-[11px] ${isUp === null ? "text-[#687086]" : isUp ? "text-[#087b55]" : "text-[#c93444]"}`}
              >
                {hasChange ? `${isUp ? "▲" : "▼"} ${Math.abs(num).toFixed(2)}%` : "—"}
              </span>
            </div>
          );
        })}
        <span className="text-[11px] font-bold tracking-[.8px] text-[#687086]">CRYPTO MARKET</span>
      </TickerMarquee>
    </header>
  );
}

/* ===================================================================== */
/* Mobile header — verbatim port from DivScrollSpyContainer (Group top)  */
/* ===================================================================== */

function TimthumbPhp() {
  return (
    <div className="pointer-events-none relative rounded-[11px] shrink-0 size-[25px]" data-name="timthumb.php">
      <div aria-hidden className="absolute inset-0 rounded-[11px]">
        <div className="absolute bg-white inset-0 rounded-[11px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[11px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/market/coin-0.png" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ef] border-solid inset-0 rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]" />
    </div>
  );
}

function TimthumbPhp1() {
  return (
    <div className="pointer-events-none relative rounded-[11px] shrink-0 size-[25px]" data-name="timthumb.php">
      <div aria-hidden className="absolute inset-0 rounded-[11px]">
        <div className="absolute bg-white inset-0 rounded-[11px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[11px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/market/coin-1.png" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ef] border-solid inset-0 rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]" />
    </div>
  );
}

function TimthumbPhp2() {
  return (
    <div className="pointer-events-none relative rounded-[11px] shrink-0 size-[22px]" data-name="timthumb.php">
      <div aria-hidden className="absolute inset-0 rounded-[11px]">
        <div className="absolute bg-white inset-0 rounded-[11px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[11px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/market/coin-2.png" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ef] border-solid inset-0 rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]" />
    </div>
  );
}

function TimthumbPhp3() {
  return (
    <div className="pointer-events-none relative rounded-[11px] shrink-0 size-[22px]" data-name="timthumb.php">
      <div aria-hidden className="absolute inset-0 rounded-[11px]">
        <div className="absolute bg-white inset-0 rounded-[11px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[11px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/market/coin-3.png" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ef] border-solid inset-0 rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]" />
    </div>
  );
}

function TimthumbPhp4() {
  return (
    <div className="pointer-events-none relative rounded-[11px] shrink-0 size-[22px]" data-name="timthumb.php">
      <div aria-hidden className="absolute inset-0 rounded-[11px]">
        <div className="absolute bg-white inset-0 rounded-[11px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[11px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/market/coin-4.png" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ef] border-solid inset-0 rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]" />
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="image">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/market/coin-5.png" />
    </div>
  );
}

function Image() {
  return (
    <div className="-translate-y-1/2 absolute bg-white border border-[#e2e6ef] border-solid content-stretch flex flex-col items-center justify-center left-[-1px] overflow-clip rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)] size-[24px] top-1/2" data-name="image">
      <Image1 />
    </div>
  );
}

function Image3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="image">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/market/coin-6.png" />
    </div>
  );
}

function Image2() {
  return (
    <div className="-translate-y-1/2 absolute bg-white border border-[#e2e6ef] border-solid content-stretch flex flex-col items-center justify-center left-[-1px] overflow-clip rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)] size-[24px] top-1/2" data-name="image">
      <Image3 />
    </div>
  );
}

function SpanSignalDeskTickerSymbol() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[0]?.[0] ?? "BTC"}</p>
      </div>
    </div>
  );
}

function Strong() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[0]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down3() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Down 1.97%" fallback="1.97%" fallbackUp={false} idx={0} />;
}

function ASignalDeskTicker() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[16px] min-h-[44px] py-[11px] top-1/2" data-name="a.signal-desk-ticker">
      <TimthumbPhp />
      <SpanSignalDeskTickerSymbol />
      <Strong />
      <Down3 />
    </div>
  );
}

function SpanSignalDeskTickerSymbol1() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[1]?.[0] ?? "ETH"}</p>
      </div>
    </div>
  );
}

function Strong1() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[1]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup1() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down5() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Down 2.60%" fallback="2.60%" fallbackUp={false} idx={1} />;
}

function ASignalDeskTicker1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[203.84px] min-h-[44px] py-[11px] top-1/2" data-name="a.signal-desk-ticker">
      <TimthumbPhp1 />
      <SpanSignalDeskTickerSymbol1 />
      <Strong1 />
      <Down5 />
    </div>
  );
}

function SpanSignalDeskTickerSymbol2() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[2]?.[0] ?? "BNB"}</p>
      </div>
    </div>
  );
}

function Strong2() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[2]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup2() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Down 1.47%" fallback="1.47%" fallbackUp={false} idx={2} />;
}

function ASignalDeskTicker2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[383.8px] min-h-[44px] py-[11px] top-1/2" data-name="a.signal-desk-ticker">
      <TimthumbPhp2 />
      <SpanSignalDeskTickerSymbol2 />
      <Strong2 />
      <Down />
    </div>
  );
}

function SpanSignalDeskTickerSymbol3() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[3]?.[0] ?? "XRP"}</p>
      </div>
    </div>
  );
}

function Strong3() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[3]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup3() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down4() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Down 2.12%" fallback="2.12%" fallbackUp={false} idx={3} />;
}

function ASignalDeskTicker3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[554.59px] min-h-[44px] py-[11px] top-1/2" data-name="a.signal-desk-ticker">
      <TimthumbPhp3 />
      <SpanSignalDeskTickerSymbol3 />
      <Strong3 />
      <Down4 />
    </div>
  );
}

function SpanSignalDeskTickerSymbol4() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[4]?.[0] ?? "SOL"}</p>
      </div>
    </div>
  );
}

function Strong4() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[4]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup4() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down2() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Down 1.67%" fallback="1.67%" fallbackUp={false} idx={4} />;
}

function ASignalDeskTicker4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[709.64px] min-h-[44px] py-[11px] top-1/2" data-name="a.signal-desk-ticker">
      <TimthumbPhp4 />
      <SpanSignalDeskTickerSymbol4 />
      <Strong4 />
      <Down2 />
    </div>
  );
}

function SpanSignalDeskTickerSymbol5() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[5]?.[0] ?? "TRX"}</p>
      </div>
    </div>
  );
}

function Strong5() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[5]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup5() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#087b55] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight1}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Up() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Up 0.32%" fallback="0.32%" fallbackUp={true} idx={5} />;
}

function ASignalDeskTicker5() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-[871.97px] top-1/2 w-[140.05px]" data-name="a.signal-desk-ticker">
      <Image />
      <SpanSignalDeskTickerSymbol5 />
      <Strong5 />
      <Up />
    </div>
  );
}

function SpanSignalDeskTickerSymbol6() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[6]?.[0] ?? "HYPE"}</p>
      </div>
    </div>
  );
}

function Strong6() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[6]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup6() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#087b55] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight1}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Up1() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Up 0.40%" fallback="0.40%" fallbackUp={true} idx={6} />;
}

function ASignalDeskTicker6() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-[1026.41px] top-1/2 w-[155.95px]" data-name="a.signal-desk-ticker">
      <Image2 />
      <SpanSignalDeskTickerSymbol6 />
      <Strong6 />
      <Up1 />
    </div>
  );
}

function SpanSignalDeskTickerSymbol7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">Total market cap</p>
      </div>
    </div>
  );
}

function Strong7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">$2.18T</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup7() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down1() {
  return (
    <div className="h-[11.2px] relative shrink-0 w-[42.98px]" data-name="Down 1.64%">
      <IFaLightMaskGroup7 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] left-[11.25px] text-[#c93444] text-[11.2px] top-[calc(50%-0.6px)] whitespace-nowrap">
        <p className="leading-[11.2px]">1.64%</p>
      </div>
    </div>
  );
}

function ASignalDeskTicker7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[1196.75px] min-h-[44px] pb-[15.43px] pt-[15.44px] top-[calc(50%+0.43px)]" data-name="a.signal-desk-ticker">
      <SpanSignalDeskTickerSymbol7 />
      <Strong7 />
      <Down1 />
    </div>
  );
}

function Span() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#2457ff] content-stretch flex flex-col items-start justify-center left-0 rounded-[3.5px] size-[7px] top-[calc(50%-0.01px)]" data-name="span">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.5px] shadow-[0px_0px_0px_4px_rgba(36,87,255,0.1)] shrink-0 size-[7px]" data-name="span:shadow" />
    </div>
  );
}

function SpanSignalDeskMarketStripStatus() {
  return (
    <div className="-translate-y-1/2 absolute h-[11.2px] right-[-1082.45px] top-[calc(50%-0.01px)] w-[42.64px]" data-name="span.signal-desk-market-strip__status">
      <Span />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] left-[14.19px] text-[#2457ff] text-[11.2px] top-[calc(50%-0.6px)] tracking-[0.896px] uppercase whitespace-nowrap">
        <p className="leading-[11.2px]">Live</p>
      </div>
    </div>
  );
}

function TickerFlowItem({ children }: { children: ReactNode }) {
  return <div className="flex min-h-[44px] shrink-0 items-center gap-[6.1px] py-[11px] pr-[36px]">{children}</div>;
}

function TopCryptoTickers() {
  return (
    <TickerMarquee
      className="backdrop-blur-[7px] bg-[rgba(255,255,255,0.9)] border-[#e2e6ef] border-b border-solid flex h-[48px] min-h-[48px] items-center relative shrink-0 w-[385px]"
      dataName="Top crypto tickers"
      gap={0}
      speed={1.1}
    >
      <TickerFlowItem>
        <TimthumbPhp />
        <SpanSignalDeskTickerSymbol />
        <Strong />
        <Down3 />
      </TickerFlowItem>
      <TickerFlowItem>
        <TimthumbPhp1 />
        <SpanSignalDeskTickerSymbol1 />
        <Strong1 />
        <Down5 />
      </TickerFlowItem>
      <TickerFlowItem>
        <TimthumbPhp2 />
        <SpanSignalDeskTickerSymbol2 />
        <Strong2 />
        <Down />
      </TickerFlowItem>
      <TickerFlowItem>
        <TimthumbPhp3 />
        <SpanSignalDeskTickerSymbol3 />
        <Strong3 />
        <Down4 />
      </TickerFlowItem>
      <TickerFlowItem>
        <TimthumbPhp4 />
        <SpanSignalDeskTickerSymbol4 />
        <Strong4 />
        <Down2 />
      </TickerFlowItem>
      <TickerFlowItem>
        <Image1 />
        <SpanSignalDeskTickerSymbol5 />
        <Strong5 />
        <Up />
      </TickerFlowItem>
      <TickerFlowItem>
        <Image3 />
        <SpanSignalDeskTickerSymbol6 />
        <Strong6 />
        <Up1 />
      </TickerFlowItem>
    </TickerMarquee>
  );
}

function DivCarouselWrapper() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-[393px]" data-name="div.Carousel__Wrapper">
      <TopCryptoTickers />
    </div>
  );
}

function DivPcCvU() {
  return (
    <div className="border-[#cbced4] border-solid border-t col-1 content-stretch flex flex-col h-px items-start ml-0 mt-[71px] pr-[17px] relative row-1 w-[390px]" data-name="div.PCCvU">
      <DivCarouselWrapper />
    </div>
  );
}

function MobileMenu({ nav, menuOpen, onClose }: { nav: NavItem[]; menuOpen: boolean; onClose: () => void }) {
  if (!menuOpen) return null;
  return (
    <div
      className="absolute left-0 right-0 top-[72px] z-50 bg-white shadow-xl"
      data-name="mobile-menu"
      dir="rtl"
      onClick={onClose}
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 px-5 py-4">
        {nav.map((item) => (
          <a
            className="border-b border-[#f0f1f3] py-3 text-[13px] font-bold text-[#141618] transition-colors hover:text-[#990108]"
            href={item.href === "/" ? "/" : item.href}
            key={item.label}
          >
            {item.label}
          </a>
        ))}
        <a className="border-b border-[#f0f1f3] py-3 text-[13px] font-bold text-[#141618] transition-colors hover:text-[#990108]" href="/#videos">
          ویدئو
        </a>
        <a className="border-b border-[#f0f1f3] py-3 text-[13px] font-bold text-[#141618] transition-colors hover:text-[#990108]" href="/#photos">
          عکس
        </a>
      </div>
    </div>
  );
}

function MobileHeader({ nav }: { nav: NavItem[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-[390px]" data-name="Group" dir="ltr">
      <div className="col-1 h-[120px] ml-0 mt-0 relative row-1 w-[390px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="522" preserveAspectRatio="none" viewBox="0 0 390 522" width="390">
          <path d="M390 0H0V522H390V0Z" fill="white" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[72px] ml-px mt-0 relative row-1 w-[388px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="72" preserveAspectRatio="none" viewBox="0 0 388 72" width="388">
          <path d="M388 0H0V72H388V0Z" fill="#C93035" id="Vector" />
        </svg>
      </div>
      <DivPcCvU />
      <div className="col-1 ml-[16.93px] mt-[4.96px] relative row-1 size-[61.276px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="61.276" preserveAspectRatio="none" viewBox="0 0 61.276 61.276" width="61.276">
          <path d="M61.276 0H0V61.276H61.276V0Z" fill="#C93035" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[69px] ml-[12px] mt-[2px] relative row-1 w-[76px]" data-name="IMG_20260802_154108_585 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="absolute h-full left-[-3.58%] max-w-none top-0 w-[100.6%]" src="/ecotimes-logo-mobile.png" />
        </div>
      </div>
      <div className="col-1 ml-[309px] mt-[26px] relative row-1 size-[19.635px]" data-name="Vector">
        <div className="absolute inset-[-6.9%]">
          <svg className="block size-full" fill="none" height="22.3437" preserveAspectRatio="none" viewBox="0 0 22.3437 22.3437" width="22.3437">
            <path d={svgPaths.p308e8300} id="Vector" stroke="white" strokeWidth="2.70833" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex h-[3.949px] items-center justify-center ml-[327px] mt-[42.53px] relative row-1 w-[4px]">
        <div className="flex-none rotate-[-7.65deg]">
          <div className="h-[3.506px] relative w-[3.565px]" data-name="Vector">
            <div className="absolute inset-[-38.63%_-37.98%]">
              <svg className="block size-full" fill="none" height="6.21413" preserveAspectRatio="none" viewBox="0 0 6.27336 6.21413" width="6.27336">
                <path d={svgPaths.p2ef78280} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2.70833" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 h-0 ml-[351.41px] mt-[26.96px] relative row-1 w-[22.682px]" data-name="Vector" onClick={() => setMenuOpen((v) => !v)}>
        <div className="absolute inset-[-1.35px_0]">
          <svg className="block size-full" fill="none" height="2.70833" preserveAspectRatio="none" viewBox="0 0 22.6823 2.70833" width="22.6823">
            <path d="M0 1.35417H22.6823" id="Vector" stroke="white" strokeWidth="2.70833" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-0 ml-[351.41px] mt-[35.77px] relative row-1 w-[22.682px]" data-name="Vector" onClick={() => setMenuOpen((v) => !v)}>
        <div className="absolute inset-[-1.35px_0]">
          <svg className="block size-full" fill="none" height="2.70833" preserveAspectRatio="none" viewBox="0 0 22.6823 2.70833" width="22.6823">
            <path d="M0 1.35417H22.6823" id="Vector" stroke="white" strokeWidth="2.70833" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-0 ml-[351.41px] mt-[44.57px] relative row-1 w-[22.682px]" data-name="Vector" onClick={() => setMenuOpen((v) => !v)}>
        <div className="absolute inset-[-1.35px_0]">
          <svg className="block size-full" fill="none" height="2.70833" preserveAspectRatio="none" viewBox="0 0 22.6823 2.70833" width="22.6823">
            <path d="M0 1.35417H22.6823" id="Vector" stroke="white" strokeWidth="2.70833" />
          </svg>
        </div>
      </div>
      <MobileMenu nav={nav} menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

export default function SiteHeader({
  navItems = [],
  breaking,
  liveEnabled,
}: {
  navItems?: NavItem[];
  breaking?: BreakingItem[];
  liveEnabled?: boolean;
}) {
  const market = useMarket();
  const nav: NavItem[] = navItems.length ? navItems : [];

  return (
    <>
      <div className="hidden font-['IRANSansX',sans-serif] lg:block">
        <DesktopHeader nav={nav} market={market} />
      </div>
      <div className="lg:hidden">
        <MobileFrame>
          <MobileHeader nav={nav} />
        </MobileFrame>
      </div>
    </>
  );
}