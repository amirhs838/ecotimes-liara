export type HomePost = {
  id: string;
  title: string;
  lead: string;
  kicker: string | null;
  category: string;
  categoryKey: string;
  date: string;
  dateLong: string;
  time: string;
  publishedAgo: string;
  isRecent: boolean;
  href: string | null;
  imageUrl?: string;
  imageAlt: string;
  views: string;
  videoUrl: string | null;
  isUploadedVideo: boolean;
  videoDuration: string | null;
  homepageVideo: { type: "UPLOAD" | "APARAT" | "YOUTUBE"; url: string } | null;
};

export type NavItem = { label: string; href: string; hot?: boolean };

export type HomeData = {
  sections: Record<string, HomePost[]>;
  latest: HomePost[];
  mostViewed: HomePost[];
  nav: NavItem[];
  live: { enabled: boolean; title: string } | null;
};

const API_URL = String(import.meta.env.VITE_API_URL ?? "http://localhost:3001").replace(/\/$/, "");

export function absoluteAsset(url: string | null | undefined): string | undefined {
  if (!url) return undefined;
  if (/^https?:\/\//.test(url)) return url;
  return `${API_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

export function articleUrl(href: string | null): string | null {
  if (!href) return null;
  if (/^https?:\/\//.test(href)) return href;
  return `${API_URL}${href}`;
}

export async function fetchHomeData(): Promise<HomeData> {
  const res = await fetch(`${API_URL}/api/public/home`);
  if (!res.ok) throw new Error(`home api responded ${res.status}`);
  const json = await res.json();
  if (!json.ok) throw new Error("home api responded not-ok");
  return json.data as HomeData;
}
