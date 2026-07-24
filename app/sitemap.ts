import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jaunatis3301.github.io";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/journal`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/fragments`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.5 },
    ...posts.map((post) => ({
      url: `${base}/journal/${post.slug}`,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
