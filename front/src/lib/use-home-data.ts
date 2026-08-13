import { useEffect, useState } from "react";
import { fetchHomeData, fetchMarket, type HomeData, type MarketItem } from "./api";

export function useHomeData(): HomeData | null {
  const [data, setData] = useState<HomeData | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchHomeData()
      .then((payload) => {
        if (!cancelled) setData(payload);
      })
      .catch(() => {
        if (!cancelled) setData(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}

export function useMarket(): MarketItem[] | null {
  const [items, setItems] = useState<MarketItem[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchMarket().then((payload) => {
      if (!cancelled && payload) setItems(payload);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return items;
}

export function useMobileHome() {
  const home = useHomeData();
  if (!home) return null;
  const topSource = home.sections["top-stories"]?.length ? home.sections["top-stories"] : home.mostViewed;
  return {
    hero: home.sections.hero?.[0] ?? null,
    video: home.sections.videos?.[0] ?? null,
    grid: home.latest.slice(0, 6),
    top: topSource.slice(0, 7),
    videos: (home.sections.videos ?? []).slice(1, 4),
    magazine: home.sections.magazine ?? [],
    digital: home.sections["digital-economy"] ?? [],
    latestList: home.latest.slice(6, 12),
    photos: home.sections.photos ?? [],
  };
}
