export default function SiteFooter() {
  return (
    <footer className="page-shell border-t rule py-10 md:py-14">
      <div>
        <p className="meta text-sm tracking-[.25em]">note</p>
        <p className="mt-3 max-w-sm text-sm text-[var(--muted)]">
          A personal note about images, work, and the things still unresolved.
        </p>
      </div>
      <div className="meta mt-12 flex flex-col gap-2 border-t rule pt-4 text-[11px] text-[var(--muted)] sm:flex-row sm:justify-between">
        <span>© 2026 note</span>
        <span>Issue 01 · Beijing / Paris</span>
      </div>
    </footer>
  );
}
