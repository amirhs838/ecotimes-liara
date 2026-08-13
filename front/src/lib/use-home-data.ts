import { useEffect, useState } from "react";
import { fetchHomeData, type HomeData } from "./api";

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
