import type { Metadata } from "next";
import JournalArchive from "@/components/JournalArchive";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Journal",
  description: "Essays, field notes, conversations, and visual studies from jaunrcy.",
};

export default function Journal() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page-shell pb-24 pt-10">
        <header className="border-b rule pb-9">
          <p className="meta text-[10px] uppercase text-[var(--accent)]">
            Complete archive · Issue 01
          </p>
          <h1 className="display mt-5 text-[22vw] leading-[.75] sm:text-[9rem] lg:text-[13rem]">
            Journal
          </h1>
          <p className="mt-8 max-w-xl leading-7 text-[var(--muted)]">
            I think i am alive，Back to life in the night，Muses told me is my time， And i write to
            the sky
          </p>
        </header>
        <JournalArchive />
      </main>
      <SiteFooter />
    </>
  );
}
