import { useEffect, useState } from "react";
import { fetchHomeData, fetchMarket, type HomeData, type MarketItem } from "./api";

const HOME_CACHE_KEY = "ecotimes-home-v1";
const HOME_MAX_AGE_MS = 120_000;
const HOME_STALE_LIMIT_MS = 24 * 60 * 60 * 1000;

let homeCache: HomeData | null = null;
let homeFailed = false;
let homeListeners = new Set<(data: HomeData | null) => void>();
let failListeners = new Set<(failed: boolean) => void>();

function notifyFailed(failed: boolean) {
  homeFailed = failed;
  failListeners.forEach((listener) => listener(failed));
}

function readHomeCache(allowStale = false): HomeData | null {
  try {
    const raw = localStorage.getItem(HOME_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { at: number; data: HomeData };
    if (!parsed.data) return null;
    const age = Date.now() - parsed.at;
    if (allowStale ? age > HOME_STALE_LIMIT_MS : age > HOME_MAX_AGE_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

async function refreshHome() {
  try {
    const payload = await fetchHomeData();
    homeCache = payload;
    notifyFailed(false);
    try {
      localStorage.setItem(HOME_CACHE_KEY, JSON.stringify({ at: Date.now(), data: payload }));
    } catch {
      // storage full/unavailable — module cache is enough
    }
  } catch {
    // keep showing the stale cache on failure
    notifyFailed(true);
  }
  homeListeners.forEach((listener) => listener(homeCache));
}

export function useHomeData(): HomeData | null {
  const [data, setData] = useState<HomeData | null>(() => homeCache ?? readHomeCache(true));

  useEffect(() => {
    homeListeners.add(setData);
    if (homeCache === null) {
      const stored = readHomeCache(true);
      if (stored) setData(stored);
    }
    refreshHome();
    const timer = setInterval(refreshHome, 90_000);
    return () => {
      homeListeners.delete(setData);
      clearInterval(timer);
    };
  }, []);

  return data;
}

export function useHomeFailed(): boolean {
  const [failed, setFailed] = useState(homeFailed);

  useEffect(() => {
    failListeners.add(setFailed);
    return () => {
      failListeners.delete(setFailed);
    };
  }, []);

  return failed;
}

const MARKET_INTERVAL_MS = 20_000;
const MARKET_CACHE_KEY = "ecotimes-market-v1";
const MARKET_MAX_AGE_MS = 20_000;

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

export function useMarket(): MarketItem[] | null {
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

export function useMobileHome() {
  const home = useHomeData();
  if (!home) return null;
  const topSource = home.sections["top-stories"]?.length ? home.sections["top-stories"] : home.mostViewed;
  const heroSideNews = home.sections["hero-video"] ?? [];
  const featuredGrid = heroSideNews.length ? heroSideNews : home.latest.slice(0, 6);
  return {
    sections: home.sections,
    sectionsMeta: home.sectionsMeta,
    hero: home.sections.hero?.[0] ?? null,
    video: home.sections.videos?.[0] ?? null,
    grid: featuredGrid.slice(0, 6),
    top: topSource.slice(0, 8),
    videos: (home.sections.videos ?? []).slice(1, 5),
    videosCount: (home.sections.videos ?? []).length,
    magazine: home.sections.magazine ?? [],
    digital: home.sections["digital-economy"] ?? [],
    latestList: home.latest.slice(0, 6),
    photos: home.sections.photos ?? [],
  };
}
