import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";

const latestPosts = posts.filter((post) => !post.featured).slice(0, 3);

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
    <section aria-labelledby="latest-title" className="section-reveal page-shell pb-24 md:pb-36">
      <div className="grid items-end gap-5 border-t rule pb-10 pt-5 sm:grid-cols-[1fr_auto]">
        <h2 id="latest-title" className="display text-4xl sm:text-5xl lg:text-6xl">
          Recent entries
        </h2>
        <Link className="focus-ring hidden text-sm sm:block" href="/journal">
          View archive →
        </Link>
      </div>
      <div className="recent-grid">
        {latestPosts.map((post, index) => (
          <article className={`recent-card recent-card--${index + 1}`} key={post.slug}>
            <Link className="story-link focus-ring block" href={`/journal/${post.slug}`}>
              <div className="media-frame recent-card__image relative overflow-hidden bg-[var(--surface)]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="pt-5">
                <StoryMeta {...post} />
                <h3 className="story-title display mt-4 text-3xl sm:text-4xl">{post.title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)]">{post.dek}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <Link className="focus-ring mt-8 inline-block text-sm sm:hidden" href="/journal">
        View archive →
      </Link>
    </section>
  );
}
