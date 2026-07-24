import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="page-shell border-t rule py-10">
      <div className="grid gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="meta text-sm tracking-[.25em]">jaunrcy</p>
          <p className="mt-3 max-w-sm text-sm text-[var(--muted)]">
            A personal journal about images, work, and the things still unresolved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm" aria-label="Footer">
          <Link className="focus-ring" href="/journal">
            Journal
          </Link>
          <Link className="focus-ring" href="/fragments">
            Fragments
          </Link>
          <Link className="focus-ring" href="/about">
            About
          </Link>
        </nav>
      </div>
      <div className="meta mt-12 flex flex-col gap-2 border-t rule pt-4 text-[10px] text-[var(--muted)] sm:flex-row sm:justify-between">
        <span>© 2026 jaunrcy</span>
        <span>Issue 01 · Beijing / Paris</span>
      </div>
    </footer>
  );
}
