"use client";

import { useState, useEffect } from "react";
import { Menu, Search, X, Bell, ChevronLeft } from "lucide-react";
import type { NavItem } from "@/lib/home-data";

export interface BreakingItem {
  title: string;
  href: string | null;
}

export default function SiteHeader({
  navItems = [],
  breaking = [],
  liveEnabled = false,
}: {
  navItems?: NavItem[];
  breaking?: BreakingItem[];
  liveEnabled?: boolean;
}) {
  // Logo links home — drop the explicit "صفحه اصلی" item from the nav row
  const navLinks = navItems.filter((i) => i.href !== "/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* ===== Main bar ===== */}
      <div
        className={`border-b border-hairline transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-4 lg:px-5 h-14 lg:h-16 flex items-center gap-2 lg:gap-6">
          {/* Hamburger — mobile (rightmost in RTL) */}
          <button
            className="lg:hidden p-2 -mr-2 text-ink hover:text-brand transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="منو"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Search — mobile, sits where the logo used to (next to hamburger) */}
          <button
            className="lg:hidden p-2 text-ink hover:text-brand transition-colors"
            aria-label="جستجو"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Logo — right side on desktop (mirrors ABC's left); on mobile it
              moves to the far left and gets a bit bigger */}
          <a href="/" className="flex items-center shrink-0 group mr-auto lg:mr-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ecotimes-logo-red.png"
              alt="اکوتایمز - EcoTimes"
              className="h-10 w-auto transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 text-[15px] font-bold text-ink">
            {liveEnabled && (
              <a
                href="/#live"
                className="inline-flex items-center gap-1.5 hover:text-brand transition-colors"
              >
                <span className="live-dot" />
                پخش زنده
              </a>
            )}
            <a href="/#videos" className="hover:text-brand transition-colors">
              ویدیو
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-brand transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* End group — left side in RTL (desktop only; mobile search lives next to the hamburger) */}
          <div className="hidden lg:flex items-center gap-1 lg:gap-2 mr-auto">
            <button
              className="p-2 text-ink hover:text-brand transition-colors"
              aria-label="جستجو"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="hidden sm:inline-flex p-2 text-ink hover:text-brand transition-colors"
              aria-label="اعلان‌ها"
            >
              <Bell className="w-5 h-5" />
            </button>
            <a
              href="/#ads"
              className="hidden md:inline-flex items-center bg-brand hover:bg-brand-dark text-white text-[13px] font-bold px-4 py-2 rounded-md transition-colors"
            >
              تبلیغات
            </a>
          </div>
        </div>

        {/* Inline search row */}
        {searchOpen && (
          <div className="border-t border-hairline">
            <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-3">
              <div className="relative">
                <input
                  type="search"
                  autoFocus
                  placeholder="جستجوی اخبار، تحلیل‌ها، گزارش‌ها..."
                  className="w-full bg-bg-light border border-hairline rounded-md text-sm px-4 py-2.5 pl-10 text-ink placeholder-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ===== Topic bar — Live updates / categories ===== */}
      <div className="border-b border-hairline bg-white">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-5 h-11 flex items-center gap-4 overflow-x-auto scrollbar-hidden text-[13px]">
          {breaking.length > 0 ? (
            <>
              <span
                className="text-brand italic font-bold whitespace-nowrap shrink-0 text-[15px] tracking-wide"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Live
              </span>
              {breaking.map((b, i) => (
                <span key={i} className="flex items-center gap-4 whitespace-nowrap shrink-0">
                  <span className="w-px h-4 bg-hairline" />
                  {b.href ? (
                    <a href={b.href} className="text-ink hover:text-brand transition-colors">
                      {b.title}
                    </a>
                  ) : (
                    <span className="text-ink">{b.title}</span>
                  )}
                </span>
              ))}
            </>
          ) : (
            navLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-4 whitespace-nowrap shrink-0">
                {i > 0 && <span className="w-px h-4 bg-hairline" />}
                <a href={link.href} className="text-ink hover:text-brand transition-colors font-medium">
                  {link.label}
                </a>
              </span>
            ))
          )}
          <ChevronLeft className="w-4 h-4 text-zinc-400 shrink-0 mr-auto hidden sm:block" />
        </div>
      </div>

      {/* ===== Mobile drawer ===== */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-hairline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ecotimes-logo-red.png" alt="اکوتایمز" className="h-8 w-auto" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-ink hover:text-brand rounded-md transition-colors"
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="relative mb-4">
                <input
                  type="search"
                  placeholder="جستجو..."
                  className="w-full bg-bg-light border border-hairline rounded-md text-sm px-4 py-2.5 pl-10 focus:outline-none focus:border-brand"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              </div>
              <ul className="space-y-0.5">
                {liveEnabled && (
                  <li>
                    <a
                      href="/#live"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-3 py-2.5 text-sm font-bold text-ink hover:bg-bg-light hover:text-brand rounded-md transition-colors"
                    >
                      <span className="live-dot" />
                      پخش زنده
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href="/#videos"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-ink hover:bg-bg-light hover:text-brand rounded-md transition-colors"
                  >
                    ویدیو
                    <ChevronLeft className="w-4 h-4 text-zinc-300" />
                  </a>
                </li>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-ink hover:bg-bg-light hover:text-brand rounded-md transition-colors"
                    >
                      {link.label}
                      <ChevronLeft className="w-4 h-4 text-zinc-300" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/#ads"
                onClick={() => setMobileOpen(false)}
                className="block mt-4 bg-brand hover:bg-brand-dark text-white text-center text-sm font-bold py-2.5 rounded-md transition-colors"
              >
                تبلیغات
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
