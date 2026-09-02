"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavigation from "./MobileNavigation";

const items = [
  ["Journal", "/journal"],
  ["Fragments", "/fragments"],
  ["About", "/about"],
] as const;

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header sticky top-3 z-50 px-3 sm:px-4">
      <div className="site-header__frame page-shell relative grid h-16 grid-cols-[1fr_auto] items-center px-5 md:grid-cols-[1fr_auto_1fr] md:px-7">
        <Link className="focus-ring meta text-sm font-medium tracking-[.28em]" href="/">
          jaunrcy
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-9 text-sm md:flex">
          {items.map(([label, href]) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`focus-ring nav-link ${active ? "nav-link--active" : ""}`}
                href={href}
                key={href}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center justify-self-end">
          <span className="meta hidden text-[10px] uppercase tracking-[.14em] text-[var(--muted)] md:inline">
            Issue 01
          </span>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
