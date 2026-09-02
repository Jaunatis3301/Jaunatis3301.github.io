"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, posts } from "@/lib/posts";

type Category = (typeof categories)[number];

export default function JournalArchive() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visiblePosts =
    activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      <nav
        aria-label="Filter journal by type"
        className="flex gap-2 overflow-x-auto border-b rule py-5"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`focus-ring whitespace-nowrap rounded-full border px-4 py-2 text-xs transition-colors ${
                isActive
                  ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)]"
                  : "border-[var(--rule)] hover:border-[var(--ink)]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </nav>

      <section
        aria-live="polite"
        aria-label="Journal entries"
        className="journal-grid py-10 md:py-16"
      >
        {visiblePosts.map((post, index) => (
          <article className={`journal-card journal-card--${(index % 3) + 1}`} key={post.slug}>
            <Link href={`/journal/${post.slug}`} className="story-link focus-ring block">
              <div className="media-frame journal-card__image relative overflow-hidden bg-[var(--surface)]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="pt-5">
                <div className="meta flex justify-between gap-4 text-[11px] uppercase text-[var(--muted)]">
                  <span className="text-[var(--accent)]">No. {post.number}</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="story-title display text-3xl sm:text-4xl lg:text-5xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">{post.dek}</p>
                <p className="meta mt-4 text-[11px] uppercase text-[var(--muted)]">
                  {post.date} · {post.readingTime}{" "}
                  <ArrowUpRight className="ml-1 inline" size={13} />
                </p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
