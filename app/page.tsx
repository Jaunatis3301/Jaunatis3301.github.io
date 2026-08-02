import Link from "next/link";
import DecorativeMotif from "@/components/DecorativeMotif";
import FeaturedEssay from "@/components/FeaturedEssay";
import JournalEntrance from "@/components/JournalEntrance";
import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StoryList from "@/components/StoryList";
export default function Home() {
  return (
    <>
      <JournalEntrance />
      <div id="home-content">
        <SiteHeader />
        <main id="main">
          <Masthead />
          <FeaturedEssay />
          <StoryList />
          <section className="page-shell grid gap-8 py-20 md:grid-cols-[.65fr_1.35fr] md:py-28">
            <div>
              <p className="meta text-[10px] uppercase text-[var(--accent)]">About the journal</p>
              <DecorativeMotif
                motif="bunny"
                sizes="(max-width: 768px) 5rem, 8rem"
                className="mt-8 w-20 -rotate-[5deg] md:mt-12 md:w-28 lg:w-32"
              />
            </div>
            <div className="relative z-10">
              <h2 className="display max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
                A place to think in public, without pretending the thought is finished.
              </h2>
              <p className="mt-8 max-w-2xl leading-7 text-[var(--muted)]">
                jaunrcy is my personal journal on cinema, visual culture, and the slow work of
                learning how to pay attention. It gathers essays, conversations, and fragments from
                the spaces around a finished image.
              </p>
              <Link
                href="/about"
                className="focus-ring mt-7 inline-block border-b border-[var(--accent)] pb-2 text-sm"
              >
                More about jaunrcy →
              </Link>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
