"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

/**
 * Footer link column. On mobile it collapses into an accordion row (ABC app
 * style: bold title + chevron, tap to reveal the links); on desktop it is the
 * classic static column.
 */
export default function FooterCol({
  title,
  links,
  className = "",
}: {
  title: string;
  links: FooterLink[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      {/* Mobile accordion header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="lg:hidden w-full flex items-center justify-between py-4 border-b border-white/10 text-white font-black text-sm"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* Desktop header */}
      <h4 className="hidden lg:block text-white font-black text-sm mb-4">{title}</h4>

      <ul
        className={`space-y-2.5 pt-3 pb-5 lg:pt-0 lg:pb-0 ${open ? "" : "hidden"} lg:block`}
      >
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[13px] text-zinc-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
