"use client";

import { useEffect, useState, type ReactNode } from "react";

const MOBILE_BASE_WIDTH = 390;

/**
 * Scales the 390px mobile design to fill the viewport width below the lg
 * breakpoint — mirror of the front's MobileFrame (App.tsx). Above lg it
 * renders 1:1 inside a centered wrapper.
 */
export default function MobileFrame({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = document.documentElement.clientWidth;
      setScale(w < 1024 ? w / MOBILE_BASE_WIDTH : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div className="flex justify-center">
      <div style={{ width: MOBILE_BASE_WIDTH, zoom: scale }}>{children}</div>
    </div>
  );
}