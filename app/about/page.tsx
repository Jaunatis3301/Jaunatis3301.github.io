import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
export const metadata: Metadata = {
  title: "About",
  description: "About jaunrcy and this independent personal journal.",
};
export default function About() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page-shell pb-24 pt-10">
        <header className="grid gap-8 border-b rule pb-14 md:grid-cols-[.55fr_1.45fr]">
          <p className="meta text-[10px] uppercase text-[var(--accent)]">About me</p>
          <div>
            <h1 className="display text-6xl sm:text-8xl lg:text-[9rem]">
              A journal of the self, its thoughts, and its quiet feelings.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Jauncry is my personal moniker, a record of how I think.
            </p>
          </div>
        </header>
        <section className="grid gap-8 py-14 md:grid-cols-[.75fr_1.25fr] md:py-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--surface)]">
            <Image
              src="/images/making-room-for-the-accidental.png"
              alt="jaunrcy’s editing desk, covered with film strips and working notes"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="md:pl-10">
            <aside
              aria-label="Author profile and contact"
              className="mb-12 grid grid-cols-[4.5rem_1fr] gap-5 border-b rule pb-8 sm:grid-cols-[5.5rem_1fr] sm:gap-7"
            >
              <div
                aria-hidden="true"
                className="display flex aspect-square items-center justify-center rounded-full border rule bg-[var(--surface)] text-5xl text-[var(--accent)] sm:text-6xl"
              >
                J
              </div>
              <div className="self-center">
                <p className="meta text-[10px] uppercase text-[var(--accent)]">Author</p>
                <h2 className="mt-2 text-xl font-medium sm:text-2xl">jaunrcy</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
                  Writing from the space between images, memory, and unfinished thought.
                </p>
                <a
                  className="focus-ring mt-4 inline-flex border-b rule pb-1 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  href="https://github.com/Jaunatis3301"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub · @Jaunatis3301 ↗
                </a>
              </div>
            </aside>
            <div className="prose">
              <p>
                I work between moving images, writing, and visual research. This journal began as a
                way to keep the uncertain parts of that practice visible: the references that do not
                fit a project, the mistakes that change its direction, and the questions that remain
                after the work is shown.
              </p>
              <p>
                Most entries begin in transit or in the edit room. They are less interested in
                conclusions than in the quality of attention we bring to images—and the choices
                hidden inside apparently effortless work.
              </p>
              <blockquote>
                jaunrcy is where the unfinished thought is allowed to keep its edges.
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
