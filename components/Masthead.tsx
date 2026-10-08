export default function Masthead() {
  return (
    <section
      aria-labelledby="masthead-title"
      className="home-masthead page-shell relative flex flex-col items-center justify-center text-center"
    >
      <div className="home-masthead__content">
        <p className="meta text-[11px] uppercase tracking-[.18em] text-[var(--ink)]">
          Independent note · Issue 01
        </p>
        <div className="line-reveal masthead-reveal mt-6">
          <h1
            id="masthead-title"
            className="display home-masthead__title pb-[0.1em] text-[clamp(3.5rem,7.5vw,5.75rem)]"
          >
            Jaunrcy
          </h1>
        </div>
        <p className="mx-auto mt-20 max-w-lg text-base leading-7 text-[var(--ink)] sm:mt-7 sm:text-lg">
          Notes on images, work, and the things still unresolved.
        </p>
        <a
          className="home-masthead__link focus-ring mt-7 inline-flex items-center gap-2"
          href="#latest-title"
        >
          Explore notes <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p className="meta home-masthead__edition absolute bottom-8 text-[11px] uppercase tracking-[.15em] text-[var(--muted)]">
        Summer 2026 · Hangzhou / Harbin
      </p>
    </section>
  );
}
