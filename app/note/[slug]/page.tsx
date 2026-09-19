import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GraffitiTitle from "@/components/GraffitiTitle";
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
  const related = posts.find((item) => item.slug !== post.slug)!;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    datePublished: "2026-07-18",
    author: { "@type": "Person", name: "jaunrcy" },
    publisher: { "@type": "Person", name: "jaunrcy" },
    image: post.image,
    mainEntityOfPage: `https://jaunatis3301.github.io/note/${post.slug}/`,
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
        <article className="page-shell">
          <header className="max-w-4xl pb-12 pt-12 md:pb-16 md:pt-20">
            <p className="meta flex flex-wrap gap-x-4 gap-y-2 text-[11px] uppercase text-[var(--accent)]">
              <span>Note {post.number}</span>
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </p>
            <div className="mt-6">
              <GraffitiTitle
                as="h1"
                preset="ambush"
                text={post.title}
                className="novel-title text-4xl sm:text-5xl lg:text-6xl"
                wrapperClassName="w-full"
              />
            </div>
            <p className="novel-dek mt-7 max-w-2xl text-[var(--muted)]">{post.dek}</p>
          </header>
          <div className="grid gap-12 border-t rule py-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:gap-16 lg:py-16">
            <div className="novel-prose">
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
            <aside className="order-first lg:order-none">
              <figure className="lg:sticky lg:top-28">
                <div className="media-frame relative aspect-[4/5] overflow-hidden bg-[var(--surface)]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="meta mt-4 flex justify-between gap-4 text-[10px] uppercase text-[var(--muted)]">
                  <span>Words & images</span>
                  <span>jaunrcy</span>
                </figcaption>
              </figure>
            </aside>
          </div>
        </article>
        <aside className="page-shell mb-20 border-y rule py-10">
          <p className="meta text-[11px] uppercase text-[var(--muted)]">Continue reading</p>
          <Link
            href={`/note/${related.slug}`}
            className="story-link focus-ring mt-5 flex items-end justify-between gap-6"
          >
            <span className="story-title reading-title text-3xl sm:text-4xl">{related.title}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
