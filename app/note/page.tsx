import type { Metadata } from "next";
import GraffitiTitle from "@/components/GraffitiTitle";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StoryList from "@/components/StoryList";

export const metadata: Metadata = {
  title: "Note",
  description: "Essays, field notes, conversations, and visual studies from jaunrcy.",
};

export default function Note() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="pt-10">
        <header className="page-shell border-b rule pb-9">
          <p className="meta text-[11px] uppercase text-[var(--accent)]">My note · Issue 01</p>
          <GraffitiTitle
            as="h1"
            preset="crossout"
            text="Note"
            className="display page-title mt-5"
            wrapperClassName="w-80 max-w-full"
          />
          <p className="mt-8 max-w-xl leading-7 text-[var(--muted)]">
            I think I am alive. Back to life in the night, the muses tell me it is my time, and I
            write to the sky.
          </p>
        </header>
        <StoryList showHeader={false} />
      </main>
      <SiteFooter />
    </>
  );
}
