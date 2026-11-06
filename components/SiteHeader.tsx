"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavigation from "./MobileNavigation";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  ["Note", "/note"],
  ["Articles", "/articles"],
  ["Work", "/work"],
  ["About", "/about"],
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem("jaunrcy-theme", next); } catch {}
  }

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="site-header__frame page-shell relative grid h-12 grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
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
          <span className="meta hidden text-[11px] uppercase tracking-[.14em] text-[var(--muted)] md:inline">
            Issue 01
          </span>
          <button className="focus-ring theme-toggle ml-4" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Light mode" : "Dark mode"}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
