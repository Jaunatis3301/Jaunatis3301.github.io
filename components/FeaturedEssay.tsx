import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredPost } from "@/lib/posts";
import IssueRail from "./IssueRail";
export default function FeaturedEssay() {
  const post = featuredPost;
  return (
    <section aria-labelledby="featured-title" className="section-reveal page-shell py-12 md:py-20">
      <div className="grid gap-6 md:grid-cols-[5.5rem_minmax(0,1.5fr)_minmax(18rem,.72fr)] md:gap-7 lg:gap-10">
        <IssueRail post={post} />
        <Link
          href={`/journal/${post.slug}`}
          className="story-link media-frame media-frame--feature focus-ring group relative min-h-[27rem] overflow-hidden bg-[var(--surface)] md:min-h-[42rem]"
          aria-label={`Read ${post.title}`}
        >
          <Image
            className="image-reveal object-cover"
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
          <span className="cinematic-overlay absolute inset-0" />
        </Link>
        <div className="flex flex-col justify-end md:pb-4">
          <h2
            id="featured-title"
            className="story-title display fade-up delay-2 text-3xl sm:text-4xl md:text-3xl lg:text-5xl"
          >
            {post.title}
          </h2>
          <p className="meta fade-up delay-1 mt-5 text-[11px] uppercase text-[var(--accent)]">
            Featured visual essay
          </p>
          <p className="fade-up delay-3 mt-6 max-w-md text-sm leading-7 text-[var(--muted)]">
            {post.dek}
          </p>
          <Link
            className="focus-ring pressable fade-up delay-4 mt-8 inline-flex w-fit items-center gap-2 border-b border-[var(--accent)] pb-2 text-sm"
            href={`/journal/${post.slug}`}
          >
            Read the essay <ArrowUpRight className="text-[var(--accent)]" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
