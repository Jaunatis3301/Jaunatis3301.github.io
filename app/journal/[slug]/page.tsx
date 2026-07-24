import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import IssueRail from "@/components/IssueRail";
import ReadingProgress from "@/components/ReadingProgress";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getPost, posts } from "@/lib/posts";
export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.dek,
    openGraph: {
      title: post.title,
      description: post.dek,
      images: [{ url: post.image, alt: post.imageAlt }],
      type: "article",
    },
  };
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related =
    posts.find((item) => item.slug !== post.slug && item.category === post.category) ||
    posts.find((item) => item.slug !== post.slug)!;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    datePublished: "2026-07-18",
    author: { "@type": "Person", name: "jaunrcy" },
    publisher: { "@type": "Person", name: "jaunrcy" },
    image: post.image,
    mainEntityOfPage: `https://jaunatis3301.github.io/journal/${post.slug}/`,
  };
  return (
    <>
      <ReadingProgress />
      <SiteHeader />
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <article>
          <header className="page-shell grid gap-7 pb-10 pt-10 md:grid-cols-[5.5rem_1fr] md:gap-10 md:pb-16">
            <IssueRail post={post} />
            <div>
              <p className="meta text-[10px] uppercase text-[var(--accent)]">
                {post.category} · {post.readingTime}
              </p>
              <h1 className="display mt-5 max-w-6xl text-6xl sm:text-8xl lg:text-[8.5rem]">
                {post.title}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">{post.dek}</p>
            </div>
          </header>
          <div className="page-shell relative aspect-[4/3] max-h-[52rem] overflow-hidden bg-[var(--surface)] md:aspect-[16/9]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="page-shell grid gap-8 py-14 md:grid-cols-[5.5rem_1fr] md:gap-10 md:py-20">
            <div className="meta text-[10px] uppercase text-[var(--muted)]">
              <p>Words & images</p>
              <p className="mt-2 text-[var(--ink)]">jaunrcy</p>
            </div>
            <div className="prose">
              {post.body.map((section, index) => (
                <section key={index}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {section.quote && <blockquote>{section.quote}</blockquote>}
                </section>
              ))}
            </div>
          </div>
        </article>
        <aside className="page-shell mb-20 border-y rule py-10">
          <p className="meta text-[10px] uppercase text-[var(--muted)]">Continue reading</p>
          <Link
            href={`/journal/${related.slug}`}
            className="story-link focus-ring mt-5 flex items-end justify-between gap-6"
          >
            <span className="story-title display text-4xl sm:text-6xl">{related.title}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
