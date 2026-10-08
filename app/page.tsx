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
          <div className="home-below">
            <div className="reading-band">
              <StoryList limit={2} />
            </div>
            <section className="section-reveal note-manifesto page-shell pb-24 md:pb-36">
              <div className="note-manifesto__inner">
                <h2 className="editorial-heading relative z-10 max-w-3xl">
                  A place to collect my ideas.
                </h2>
                <div className="relative z-10 mt-7 border-t rule pt-5 md:pr-56 lg:pr-64">
                  <p className="max-w-2xl leading-7 text-[var(--muted)]">
                    My name is Jaunrcy, and I’m exploring the directions that genuinely interest me.
                    This is where I’ll share my articles, essays, reflections, and visual work.
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
          </div>
        </main>
        <div className="home-footer-black">
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
