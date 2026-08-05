import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { fragments } from "@/lib/fragments";

export const metadata: Metadata = {
  title: "Fragments",
  description: "Brief observations, passing images, and unfinished thoughts from jaunrcy.",
};

export default function FragmentsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page-shell pb-24 pt-10">
        <header className="grid gap-8 border-b rule pb-12 md:grid-cols-[.55fr_1.45fr]">
          <div>
            <p className="meta text-[11px] uppercase text-[var(--accent)]">
              Brief observations · Issue 01
            </p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-[var(--muted)]">
              Passing images, unfinished thoughts, and details too small to become essays.
            </p>
          </div>
          <h1 className="display page-title">Fragments</h1>
        </header>
        <section aria-label="Fragments archive" className="grid gap-x-10 md:grid-cols-2">
          {fragments.map((fragment, index) => (
            <article
              key={fragment.id}
              className={`border-b rule py-10 md:py-14 ${index % 3 === 1 ? "md:mt-24" : ""}`}
            >
              {fragment.image && fragment.imageAlt && (
                <div className="relative mb-7 aspect-[3/2] overflow-hidden bg-[var(--surface)]">
                  <Image
                    src={fragment.image}
                    alt={fragment.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="meta flex items-center justify-between gap-4 text-[11px] uppercase text-[var(--muted)]">
                <span>
                  <span className="text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>{" "}
                  · {fragment.place}
                </span>
                <span>{fragment.time}</span>
              </div>
              <blockquote className="display mt-8 text-4xl leading-[1.02] sm:text-5xl">
                “{fragment.text}”
              </blockquote>
              <p className="meta mt-7 text-[11px] uppercase text-[var(--muted)]">{fragment.date}</p>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
