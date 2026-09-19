import type { Metadata } from "next";
import Image from "next/image";
import DecorativeMotif from "@/components/DecorativeMotif";
import GraffitiTitle from "@/components/GraffitiTitle";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
export const metadata: Metadata = {
  title: "About",
  description: "About jaunrcy and this independent personal note.",
};
export default function About() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page-shell pb-24 pt-10">
        <header className="grid gap-8 border-b rule pb-14 md:grid-cols-[.55fr_1.45fr]">
          <p className="meta text-[11px] uppercase text-[var(--accent)]">About me</p>
          <div>
            <GraffitiTitle
              as="h1"
              preset="crossout"
              text="A note of the self, its thoughts, and its quiet feelings."
              className="display page-title"
              wrapperClassName="w-full"
            />
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              This place is my personal blog, a record of how I think.
            </p>
          </div>
        </header>
        <section className="section-reveal py-14 md:py-20">
          <div className="mx-auto max-w-4xl">
            <aside
              aria-label="Author profile and contact"
              className="profile-panel relative mb-12 grid grid-cols-[4.5rem_1fr] gap-5 overflow-visible sm:grid-cols-[5.5rem_1fr] sm:gap-7"
            >
              <div className="relative aspect-square overflow-hidden rounded-full border rule bg-[var(--surface)]">
                <Image
                  src="/images/jaunrcy-avatar.jpg"
                  alt="Portrait of jaunrcy"
                  fill
                  sizes="(max-width: 640px) 4.5rem, 5.5rem"
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 self-center sm:pr-24 lg:pr-36">
                <p className="meta text-[11px] uppercase text-[var(--accent)]">Author</p>
                <h2 className="mt-2 text-xl font-medium sm:text-2xl">jaunrcy</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
                  Turning My Life into a Magazine
                </p>
                <a
                  className="focus-ring mt-4 inline-flex border-b rule pb-1 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  href="https://github.com/Jaunatis3301"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub · @Jaunatis3301 ↗
                </a>
              </div>
              <DecorativeMotif
                motif="rose"
                sizes="(max-width: 640px) 7rem, (max-width: 1024px) 11rem, 14rem"
                className="profile-panel__rose w-28 sm:w-44 lg:w-56"
              />
            </aside>
            <div className="prose">
              <p>
                Ever since I started university, time has felt like the cheapest thing in the world.
                I barely noticed it passing, and I made no meaningful effort to change the way I was
                living. But things are different now. So, in the words of Miles Morales: “Okay,
                let’s do this one last time, yeah? For real this time. This is it.”
              </p>
              <p>
                I’m a university student from Northeast China, now living and studying far from home
                in Hangzhou. My goal is to become an independent developer and security researcher.
                Through words, photographs, and videos, I want to document what it feels like to be
                the protagonist of my own life: the things I notice, experience, question, and learn
                along the way, as I work toward the life I truly want to live.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
