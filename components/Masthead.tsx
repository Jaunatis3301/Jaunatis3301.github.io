export default function Masthead() {
  return (
    <section
      aria-labelledby="masthead-title"
      className="page-shell border-b rule pb-5 pt-7 md:pb-8 md:pt-10"
    >
      <div className="meta flex items-center justify-between text-[10px] uppercase text-[var(--muted)]">
        <span>Independent journal · Issue 01</span>
        <span className="hidden sm:inline">Beijing / Paris · Summer 2026</span>
      </div>
      <div className="line-reveal masthead-reveal mt-5">
        <h1
          id="masthead-title"
          className="display pb-[0.1em] text-[22vw] leading-[.8] sm:text-[19vw] lg:text-[17vw] xl:text-[15rem]"
        >
          Jaunrcy
        </h1>
      </div>
      <div className="rule-draw mt-5 border-t rule pt-3">
        <p className="max-w-xl text-sm text-[var(--muted)]">
          Notes on images, work, and the things still unresolved.
        </p>
      </div>
    </section>
  );
}
