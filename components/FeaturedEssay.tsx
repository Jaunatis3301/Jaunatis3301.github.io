import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredPost } from "@/lib/posts";
import IssueRail from "./IssueRail";
export default function FeaturedEssay() {
  const post = featuredPost;
  return (
    <section aria-labelledby="featured-title" className="page-shell py-12 md:py-20">
      <div className="grid gap-6 md:grid-cols-[5.5rem_minmax(0,1.5fr)_minmax(18rem,.72fr)] md:gap-7 lg:gap-10">
        <IssueRail post={post} />
        <Link
          href={`/journal/${post.slug}`}
          className="story-link focus-ring group relative min-h-[27rem] overflow-hidden bg-[var(--surface)] md:min-h-[42rem]"
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
          <span className="meta absolute bottom-5 left-5 text-[10px] uppercase text-white/80">
            Featured visual essay
          </span>
        </Link>
        <div className="flex flex-col justify-end md:pb-4">
          <p className="meta fade-up delay-1 text-[10px] uppercase text-[var(--accent)]">
            Editor’s selection
          </p>
          <h2
            id="featured-title"
            className="story-title display fade-up delay-2 mt-4 text-5xl sm:text-6xl md:text-5xl lg:text-7xl"
          >
            {post.title}
          </h2>
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
