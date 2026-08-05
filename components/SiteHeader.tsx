"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";

const items = [
  ["Journal", "/journal"],
  ["Fragments", "/fragments"],
  ["About", "/about"],
] as const;

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky-material sticky top-0 z-50">
      <div className="page-shell relative grid h-[4.75rem] grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
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
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
