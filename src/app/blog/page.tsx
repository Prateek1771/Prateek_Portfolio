import { BlogList } from "@/components/blog-list";
import { Quote } from "@/components/quote";
import { SectionHeading } from "@/components/rows";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog",
  description: "Thoughts, tutorials, and insights on engineering and programming.",
  alternates: {
    canonical: `${DATA.url}/blog`,
  },
  openGraph: {
    title: "Blog",
    description:
      "Thoughts, tutorials, and insights on engineering and programming.",
    url: `${DATA.url}/blog`,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Blog",
    card: "summary_large_image",
    description:
      "Thoughts, tutorials, and insights on engineering and programming.",
  },
};

export default async function BlogPage() {
  const posts = (await getBlogPosts())
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .map((post) => ({
      slug: post.slug,
      title: post.metadata.title,
      summary: post.metadata.summary ?? "",
      // Formatted here so the client filter never ships a date library.
      date: formatDate(post.metadata.publishedAt, { relative: false }),
      tags: post.metadata.tags ?? [],
    }));

  return (
    <div className="space-y-12 pb-8 pt-2">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog",
            url: `${DATA.url}/blog`,
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `${DATA.url}/blog/${post.slug}`,
            })),
          }),
        }}
      />

      <SectionHeading
        as="h1"
        title="Blog"
        subtitle="Thoughts, tutorials, and insights on engineering and programming."
      />

      <BlogList posts={posts} />

      <Quote seed="blog" />
    </div>
  );
}
