import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Work",
  description: "Blender films and independent software projects by jaunrcy.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <header className="page-shell grid gap-8 pb-16 pt-12 md:grid-cols-[.55fr_1.45fr] md:pb-24 md:pt-20">
          <p className="meta text-[11px] uppercase text-[var(--accent)]">Selected work / 01</p>
          <div>
            <h1 className="editorial-heading">Work</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              A home for the things I make: Blender videos and independently developed projects.
            </p>
          </div>
        </header>
        <section className="collection-below border-t rule" aria-labelledby="work-status">
          <div className="page-shell grid gap-8 py-16 md:grid-cols-[.55fr_1.45fr] md:py-24">
            <p className="meta text-[11px] uppercase text-[var(--accent)]">The collection</p>
            <div className="collection-empty max-w-2xl border-t rule pt-7">
              <h2 id="work-status" className="reading-title text-2xl sm:text-3xl">
                No work published yet.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
                Films, experiments, and software will appear here as they are ready to share.
              </p>
              <div className="meta mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t rule pt-5 text-[11px] uppercase text-[var(--muted)]">
                <span>Blender / moving image</span>
                <span>Independent development</span>
              </div>
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
