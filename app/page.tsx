import Link from "next/link";
import DecorativeMotif from "@/components/DecorativeMotif";
import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StoryList from "@/components/StoryList";
export default function Home() {
  return (
    <>
      <div id="home-content">
        <SiteHeader />
        <main id="main">
          <Masthead />
          <StoryList />
          <section className="section-reveal note-manifesto page-shell mb-24 md:mb-36">
            <div className="note-manifesto__inner">
              <h2 className="display relative z-10 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
                A place to think in public, without pretending the thought is finished.
              </h2>
              <div className="relative z-10 mt-7 border-t rule pt-5 md:pr-56 lg:pr-64">
                <p className="max-w-2xl leading-7 text-[var(--muted)]">
                  jaunrcy is my personal note on cinema, visual culture, and the slow work of
                  learning how to pay attention. It gathers essays, conversations, and fragments
                  from the spaces around a finished image.
                </p>
                <Link
                  href="/about"
                  className="focus-ring pressable mt-7 inline-block border-b border-[var(--accent)] pb-2 text-sm"
                >
                  More about jaunrcy →
                </Link>
              </div>
              <DecorativeMotif
                motif="bunny"
                sizes="(max-width: 768px) 8rem, 15rem"
                className="note-manifesto__motif w-28 sm:w-36 md:w-48 lg:w-52"
              />
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
