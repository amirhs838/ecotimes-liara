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
