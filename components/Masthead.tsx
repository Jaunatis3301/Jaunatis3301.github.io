export default function Masthead() {
  return (
    <section
      aria-labelledby="masthead-title"
      className="home-masthead page-shell relative pb-10 pt-14 md:pb-16 md:pt-20"
    >
      <div className="grid items-end gap-8 md:grid-cols-[minmax(14rem,.48fr)_minmax(0,1.52fr)] md:gap-14">
        <div className="order-2 md:order-1 md:pb-3">
          <p className="meta text-[11px] uppercase text-[var(--accent)]">Independent note</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
            Notes on images, work, and the things still unresolved.
          </p>
          <div className="meta mt-8 flex max-w-sm justify-between border-t rule pt-3 text-[11px] uppercase text-[var(--muted)]">
            <span>Issue 01</span>
            <span>Summer 2026</span>
          </div>
        </div>
        <div className="line-reveal masthead-reveal order-1 md:order-2">
          <h1
            id="masthead-title"
            className="display home-masthead__title pb-[0.1em] text-[clamp(3.5rem,7.5vw,5.75rem)]"
          >
            Jaunrcy
          </h1>
        </div>
      </div>
    </section>
  );
}
