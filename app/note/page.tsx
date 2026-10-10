import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StoryList from "@/components/StoryList";

export const metadata: Metadata = {
  title: "Note",
  description: "Learning notes, experiments, and things worth remembering from jaunrcy.",
};

export default function Note() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="pt-10">
        <header className="page-shell border-b rule pb-9">
          <p className="meta text-[11px] uppercase text-[var(--accent)]">My note · Issue 01</p>
          <h1 className="display page-title mt-5">Note</h1>
          <p className="mt-8 max-w-xl leading-7 text-[var(--muted)]">
            Learning notes, experiments, and things I want to remember as I go.
          </p>
        </header>
        <div className="reading-band reading-band--note">
          <StoryList showHeader={false} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
