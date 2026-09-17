import Link from "next/link";
import { posts } from "@/lib/posts";

const latestPosts = posts;

function StoryMeta({ number, category, date }: { number: string; category: string; date: string }) {
  return (
    <p className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--muted)]">
      <span className="text-[var(--accent)]">{number}</span>
      <span>{category}</span>
      <span>·</span>
      <span>{date}</span>
    </p>
  );
}
export default function StoryList() {
  return (
    <section aria-labelledby="latest-title" className="page-shell pb-24 md:pb-36">
      <div className="grid items-end gap-5 border-t rule pb-10 pt-5 sm:grid-cols-[1fr_auto]">
        <h2 id="latest-title" className="reading-title text-2xl sm:text-3xl">
          Recent entries
        </h2>
        <Link className="focus-ring hidden text-sm sm:block" href="/journal">
          View archive →
        </Link>
      </div>
      <div className="divide-y divide-[var(--rule)]">
        {latestPosts.map((post) => (
          <article key={post.slug}>
            <Link className="story-link focus-ring block py-8 md:py-10" href={`/journal/${post.slug}`}>
              <div>
                <StoryMeta {...post} />
                <h3 className="story-title reading-title mt-3 text-2xl sm:text-3xl">{post.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">{post.dek}</p>
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
