import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="sticky-material sticky top-0 z-50">
      <div className="page-shell relative grid h-[4.75rem] grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
        <Link className="focus-ring meta text-sm font-medium tracking-[.28em]" href="/">
          jaunrcy
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-9 text-sm md:flex">
          <Link className="focus-ring hover:text-[var(--accent)]" href="/journal">
            Journal
          </Link>
          <Link className="focus-ring hover:text-[var(--accent)]" href="/fragments">
            Fragments
          </Link>
          <Link className="focus-ring hover:text-[var(--accent)]" href="/about">
            About
          </Link>
        </nav>
        <div className="flex items-center justify-self-end">
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
