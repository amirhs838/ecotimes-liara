import type { Metadata } from "next";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/vazirmatn/800.css";
import "@fontsource/vazirmatn/900.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import {
  absoluteUrl,
  siteDescription,
  siteKeywords,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: "/manifest.json",
  title: {
    default: `اکو تایمز | آخرین اخبار اقتصاد، انرژی و صنعت`,
    template: `%s | اکو تایمز`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "اکو تایمز" }],
  openGraph: {
    type: "website",
    siteName: "اکو تایمز",
    locale: "fa_IR",
    title: `اکو تایمز | آخرین اخبار اقتصاد، انرژی و صنعت`,
    description: siteDescription,
    url: siteUrl,
    images: [{ url: absoluteUrl("/og-default.png"), alt: "اکو تایمز" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `اکو تایمز | آخرین اخبار اقتصاد، انرژی و صنعت`,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="font-vazir antialiased bg-white text-zinc-900 min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
