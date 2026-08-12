"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { LinkRow } from "@/components/rows";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Mirrors data/blog.ts's slugifyTag - duplicated rather than imported because
// that module pulls in `fs`, which can't ship to the client bundle.
function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type BlogListItem = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

const ALL = "__all__";

export function BlogList({ posts }: { posts: BlogListItem[] }) {
  const [tag, setTag] = useState(ALL);

  // Tag order follows post count, which is what puts "All" then the biggest
  // tags first in the reference's scrolling chip row.
  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts) {
      for (const t of post.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
    }
    return [...counts.entries()].sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    );
  }, [posts]);

  const visible =
    tag === ALL ? posts : posts.filter((post) => post.tags.includes(tag));

  return (
    <div className="space-y-8">
      {tags.length > 0 && (
        <ToggleGroup
          type="single"
          value={tag}
          // Radix clears the value when the active item is re-pressed; falling
          // back to ALL keeps a filter always selected, as in the reference.
          onValueChange={(next) => setTag(next || ALL)}
          aria-label="Filter posts by tag"
        >
          <ToggleGroupItem value={ALL}>
            All
            <Count>{posts.length}</Count>
          </ToggleGroupItem>
          {tags.map(([name, count]) => (
            <ToggleGroupItem key={name} value={name}>
              {name}
              <Count>{count}</Count>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      )}

      <div className="space-y-6">
        {visible.map((post) => (
          <LinkRow
            key={post.slug}
            href={`/blog/${post.slug}`}
            title={post.title}
            summary={post.summary}
            date={post.date}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
}

function Count({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-foreground/10 px-1.5 text-[11px] leading-4">
      {children}
    </span>
  );
}
