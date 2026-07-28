import DecorativeMotif from "./DecorativeMotif";

export default function Masthead() {
  return (
    <section
      aria-labelledby="masthead-title"
      className="page-shell relative border-b rule pb-5 pt-7 md:pb-8 md:pt-10"
    >
      <DecorativeMotif
        motif="moon"
        priority
        sizes="(max-width: 640px) 5rem, (max-width: 1024px) 6.5rem, 8rem"
        className="absolute right-1 top-10 z-0 w-20 rotate-[7deg] sm:right-5 sm:top-12 sm:w-24 lg:right-8 lg:w-32"
      />
      <div className="meta relative z-10 flex items-center justify-between text-[10px] uppercase text-[var(--muted)]">
        <span>Independent journal · Issue 01</span>
        <span className="hidden sm:inline">Beijing / Paris · Summer 2026</span>
      </div>
      <div className="line-reveal masthead-reveal relative z-10 mt-5">
        <h1
          id="masthead-title"
          className="display pb-[0.1em] text-[22vw] leading-[.8] sm:text-[19vw] lg:text-[17vw] xl:text-[15rem]"
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
