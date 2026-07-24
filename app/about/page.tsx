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
          <p className="meta text-[10px] uppercase text-[var(--accent)]">About jaunrcy</p>
          <div>
            <h1 className="display text-6xl sm:text-8xl lg:text-[9rem]">
              A notebook for the edges of the image.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              jaunrcy is my independent personal journal about images, ideas, and creative work.
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
          <div className="prose md:pl-10">
            <p>
              I work between moving images, writing, and visual research. This journal began as a
              way to keep the uncertain parts of that practice visible: the references that do not
              fit a project, the mistakes that change its direction, and the questions that remain
              after the work is shown.
            </p>
            <p>
              Most entries begin in transit or in the edit room. They are less interested in
              conclusions than in the quality of attention we bring to images—and the choices hidden
              inside apparently effortless work.
            </p>
            <blockquote>
              jaunrcy is where the unfinished thought is allowed to keep its edges.
            </blockquote>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
