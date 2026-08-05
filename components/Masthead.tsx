export default function Masthead() {
  return (
    <section
      aria-labelledby="masthead-title"
      className="page-shell relative border-b rule pb-5 pt-7 md:pb-8 md:pt-10"
    >
      <div className="meta relative z-10 flex items-center justify-between text-[11px] uppercase text-[var(--muted)]">
        <span>Independent journal · Issue 01</span>
        <span className="hidden sm:inline">Beijing / Paris · Summer 2026</span>
      </div>
      <div className="line-reveal masthead-reveal relative z-10 mt-5">
        <h1
          id="masthead-title"
          className="display pb-[0.1em] text-[17vw] leading-[.86] sm:text-[12vw] lg:text-[9vw] xl:text-[8rem]"
        >
          Jaunrcy
        </h1>
      </div>
      <div className="rule-draw relative z-10 mt-5 border-t rule pt-3">
        <p className="max-w-xl text-sm text-[var(--muted)]">
          Notes on images, work, and the things still unresolved.
        </p>
      </div>
    </section>
  );
}
