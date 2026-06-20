import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
  alternates: {
    canonical: `${DATA.url}/blog`,
  },
  openGraph: {
    title: "Blog",
    description: "My thoughts on software development, life, and more.",
    url: `${DATA.url}/blog`,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Blog",
    card: "summary_large_image",
    description: "My thoughts on software development, life, and more.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="wordmark text-3xl mb-8">Blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="group flex flex-col space-y-1 border-b border-border py-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="font-display font-bold transition-colors group-hover:text-brand">
                  {post.metadata.title}
                </p>
                <p className="label h-6 text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
