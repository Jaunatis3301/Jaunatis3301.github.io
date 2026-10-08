import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DecorativeMotif from "@/components/DecorativeMotif";
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
      <main id="main">
        <header className="page-shell grid gap-8 pb-16 pt-12 md:grid-cols-[.55fr_1.45fr] md:pb-24 md:pt-20">
          <p className="meta text-[11px] uppercase text-[var(--accent)]">Jaunrcy / 2026</p>
          <div>
            <h1 className="editorial-heading editorial-heading--about">About</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              This place is my personal blog, a record of how I think.
            </p>
          </div>
        </header>
        <section className="about-below section-reveal border-t rule py-16 md:py-24">
          <div className="page-shell max-w-4xl">
            <aside
              aria-label="Author profile and contact"
              className="profile-panel relative mb-16 grid grid-cols-[4.5rem_1fr] gap-5 overflow-visible sm:grid-cols-[5.5rem_1fr] sm:gap-7 md:mb-24"
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
            <div className="about-story">
              <p className="meta mb-8 text-[11px] uppercase text-[var(--accent)]">
                A work in progress
              </p>
              <div className="prose about-reading">
                <p>
                  Ever since I started university, time has felt like the cheapest thing in the
                  world. I barely noticed it passing, and I made no meaningful effort to change the
                  way I was living. But things are different now. So, in the words of Miles Morales:
                  “Okay, let’s do this one last time, yeah? For real this time. This is it.”
                </p>
                <p>
                  I’m a university student from Northeast China, now living and studying far from
                  home in Hangzhou. My goal is to become an independent developer and security
                  researcher. Through words, photographs, and videos, I want to document what it
                  feels like to be the protagonist of my own life: the things I notice, experience,
                  question, and learn along the way, as I work toward the life I truly want to live.
                </p>
              </div>
              <Link
                href="/note"
                className="focus-ring mt-6 inline-block border-b rule pb-2 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Read my notes →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <div className="about-footer-black">
        <SiteFooter />
      </div>
    </>
  );
}
