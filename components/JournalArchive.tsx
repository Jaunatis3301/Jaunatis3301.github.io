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
        className="divide-y divide-[var(--rule)]"
      >
        {visiblePosts.map((post) => (
          <article key={post.slug}>
            <Link
              href={`/journal/${post.slug}`}
              className="story-link focus-ring grid gap-5 py-8 sm:grid-cols-[5rem_1fr_11rem] sm:items-center lg:grid-cols-[7rem_1fr_19rem]"
            >
              <div className="meta flex gap-3 text-[10px] uppercase text-[var(--muted)] sm:block">
                <p className="text-[var(--accent)]">No. {post.number}</p>
                <p className="sm:mt-2">{post.category}</p>
              </div>
              <div>
                <h2 className="story-title display text-4xl sm:text-5xl lg:text-6xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">{post.dek}</p>
                <p className="meta mt-4 text-[10px] uppercase text-[var(--muted)]">
                  {post.date} · {post.readingTime}{" "}
                  <ArrowUpRight className="ml-1 inline" size={13} />
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 20vw"
                  className="object-cover"
                />
              </div>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
