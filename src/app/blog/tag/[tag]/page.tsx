import Link from "next/link";
import { notFound } from "next/navigation";

import { Quote } from "@/components/quote";
import { LinkRow, SectionHeading } from "@/components/rows";
import { getAllTags, getBlogPosts, slugifyTag } from "@/data/blog";
import { DATA } from "@/data/resume";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map(({ slug }) => ({ tag: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: slug } = await params;
  const entry = (await getAllTags()).find((t) => t.slug === slug);
  if (!entry) return undefined;

  return buildMetadata({
    title: `${entry.tag} posts`,
    description: `Posts tagged "${entry.tag}" on ${DATA.name}'s blog.`,
    path: `/blog/tag/${slug}`,
  });
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: slug } = await params;
  const entry = (await getAllTags()).find((t) => t.slug === slug);
  if (!entry) notFound();

  const posts = (await getBlogPosts())
    .filter((post) => (post.metadata.tags ?? []).some((t) => slugifyTag(t) === slug))
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );

  return (
    <div className="space-y-8 pb-8 pt-2">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-bold text-muted-foreground transition-colors duration-200 ease-fluid hover:text-foreground"
      >
        ← Back to Blog
      </Link>

      <SectionHeading
        as="h1"
        title={`${entry.tag} posts`}
        subtitle={`Posts tagged "${entry.tag}".`}
      />

      <div className="space-y-5">
        {posts.map((post) => (
          <LinkRow
            key={post.slug}
            href={`/blog/${post.slug}`}
            title={post.metadata.title}
            summary={post.metadata.summary}
            date={formatDate(post.metadata.publishedAt, { relative: false })}
            tags={post.metadata.tags}
          />
        ))}
      </div>

      <Quote seed={`tag-${slug}`} />
    </div>
  );
}
