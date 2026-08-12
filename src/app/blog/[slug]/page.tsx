import { CalendarIcon, UndoIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Comments } from "@/components/comments";
import { Mermaid } from "@/components/mermaid";
import { Quote } from "@/components/quote";
import { LinkRow } from "@/components/rows";
import { ShareButton } from "@/components/share-button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = await getPost(slug);

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og-image.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${DATA.url}/blog/${post.slug}`,
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const tags = post.metadata.tags ?? [];
  const all = (await getBlogPosts())
    .filter((other) => other.slug !== slug)
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );

  // Prefer posts sharing a tag; fall back to the most recent so the section is
  // never empty just because a post is untagged.
  const tagged = all.filter((other) =>
    (other.metadata.tags ?? []).some((t) => tags.includes(t))
  );
  const related = (tagged.length > 0 ? tagged : all).slice(0, 3);

  return (
    <div className="space-y-8 pb-8 pt-2">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.updatedAt ?? post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og-image.png`,
            url: `${DATA.url}/blog/${post.slug}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${DATA.url}/blog/${post.slug}`,
            },
            keywords: tags.join(", "),
            author: {
              "@type": "Person",
              name: DATA.name,
            },
            publisher: {
              "@type": "Person",
              name: DATA.name,
              image: `${DATA.url}${DATA.avatarUrl}`,
            },
          }),
        }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-bold text-muted-foreground transition-colors duration-200 ease-fluid hover:text-foreground"
      >
        <UndoIcon className="size-4" strokeWidth={1.5} />
        Back to Blog
      </Link>

      {post.metadata.image && (
        <Image
          src={post.metadata.image}
          alt={post.metadata.title}
          width={1200}
          height={630}
          priority
          className="w-full rounded-xl border border-border"
        />
      )}

      <div className="space-y-3">
        {/* The one serif in the design - Instrument Serif, per the reference. */}
        <h1 className="serif text-4xl md:text-5xl">{post.metadata.title}</h1>
        {post.metadata.summary && (
          <p className="text-muted-foreground">{post.metadata.summary}</p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <CalendarIcon className="size-3.5" strokeWidth={1.5} />
          <time dateTime={post.metadata.publishedAt}>
            {formatDate(post.metadata.publishedAt, { relative: false })}
          </time>
          {post.metadata.updatedAt &&
            post.metadata.updatedAt !== post.metadata.publishedAt && (
              <span>
                &middot; Updated{" "}
                <time dateTime={post.metadata.updatedAt}>
                  {formatDate(post.metadata.updatedAt, { relative: false })}
                </time>
              </span>
            )}
        </p>
        <ShareButton title={post.metadata.title} />
      </div>

      <Separator />

      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.source }}
      />
      {/* Draws any ```mermaid fences the post left behind as pre.mermaid. */}
      <Mermaid />

      <Comments />

      {related.length > 0 && (
        <>
          <Separator />
          <section className="space-y-5">
            <h2 className="text-2xl font-bold tracking-tight">Related Posts</h2>
            <div className="space-y-5">
              {related.map((other) => (
                <LinkRow
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  title={other.metadata.title}
                  summary={other.metadata.summary}
                  date={formatDate(other.metadata.publishedAt, {
                    relative: false,
                  })}
                />
              ))}
            </div>
          </section>
        </>
      )}

      <Quote seed={slug} />
    </div>
  );
}
