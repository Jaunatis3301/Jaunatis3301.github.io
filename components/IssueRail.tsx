import type { Post } from "@/lib/posts";
export default function IssueRail({ post }: { post: Post }) {
  return (
    <aside
      aria-label="Article metadata"
      className="meta flex items-center gap-4 border-y rule py-3 text-[11px] uppercase md:flex-col md:items-start md:border-y-0 md:border-r md:py-0 md:pr-5"
    >
      <span>Issue 01</span>
      <span className="text-[var(--accent)]">No. {post.number}</span>
      <span>{post.category}</span>
      <span className="ml-auto md:ml-0 md:mt-auto">{post.date}</span>
    </aside>
  );
}
