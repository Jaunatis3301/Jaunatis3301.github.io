import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="page-shell border-t rule py-10 md:py-14">
      <div>
        <p className="meta text-sm tracking-[.25em]">note</p>
        <p className="mt-3 max-w-sm text-sm text-[var(--muted)]">
          A personal note about images, work, and the things still unresolved.
        </p>
      </div>
      <div className="meta mt-12 flex flex-col gap-3 border-t rule pt-4 text-[11px] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 note</span>
        <div className="flex items-center gap-5">
          <span>Issue 01 · Hangzhou / Harbin</span>
          <Link
            href="/terminal"
            aria-label="Enter terminal mode"
            title="Enter terminal mode (~)"
            className="focus-ring terminal-entry text-sm text-[var(--accent)]"
          >
            &gt;_
          </Link>
        </div>
      </div>
    </footer>
  );
}
