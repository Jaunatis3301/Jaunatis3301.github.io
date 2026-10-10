import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Articles",
  description: "Essays and longer reflections from jaunrcy.",
};

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <header className="page-shell grid gap-8 pb-16 pt-12 md:grid-cols-[.55fr_1.45fr] md:pb-24 md:pt-20">
          <p className="meta text-[11px] uppercase text-[var(--accent)]">Writing / 01</p>
          <div>
            <h1 className="editorial-heading">Articles</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Longer thoughts, personal essays, and questions that need more room than a note.
            </p>
          </div>
        </header>
        <section className="collection-below border-t rule" aria-labelledby="articles-status">
          <div className="page-shell grid gap-8 py-16 md:grid-cols-[.55fr_1.45fr] md:py-24">
            <p className="meta text-[11px] uppercase text-[var(--accent)]">The collection</p>
            <div className="collection-empty max-w-2xl border-t rule pt-7">
              <h2 id="articles-status" className="reading-title text-2xl sm:text-3xl">
                No articles published yet.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
                When I have a thought worth following all the way through, it will live here.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="collection-footer-black">
        <SiteFooter />
      </div>
    </>
  );
}
