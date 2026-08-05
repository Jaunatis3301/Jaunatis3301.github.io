import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";

const latestPost = posts.find((post) => !post.featured)!;

function StoryMeta({ number, category, date }: { number: string; category: string; date: string }) {
  return (
    <p className="meta flex gap-3 text-[11px] uppercase text-[var(--muted)]">
      <span className="text-[var(--accent)]">{number}</span>
      <span>{category}</span>
      <span>·</span>
      <span>{date}</span>
    </p>
  );
}
export default function StoryList() {
  return (
    <section aria-labelledby="latest-title" className="page-shell pb-20 md:pb-28">
      <div className="flex items-end justify-between border-b rule pb-4">
        <h2 id="latest-title" className="display text-5xl sm:text-6xl">
          Latest story
        </h2>
        <Link className="focus-ring hidden text-sm sm:block" href="/journal">
          View archive →
        </Link>
      </div>
      <div className="divide-y divide-[var(--rule)]">
        <article className="py-9 md:py-14">
          <Link
            className="story-link focus-ring grid gap-6 md:grid-cols-[1.25fr_.75fr] md:items-end"
            href={`/journal/${latestPost.slug}`}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface)]">
              <Image
                src={latestPost.image}
                alt={latestPost.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 62vw"
                className="object-cover"
              />
            </div>
            <div>
              <StoryMeta {...latestPost} />
              <h3 className="story-title display mt-4 text-5xl lg:text-7xl">{latestPost.title}</h3>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)]">
                {latestPost.dek}
              </p>
            </div>
          </Link>
        </article>
      </div>
      <Link className="focus-ring mt-8 inline-block text-sm sm:hidden" href="/journal">
        View archive →
      </Link>
    </section>
  );
}
