import fs from "fs";
import matter from "gray-matter";
import type { Root } from "mdast";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  /** Drives the filter chips on /blog and the related-post match. */
  tags?: string[];
  /** Set only when a post is substantively revised after publishing. */
  updatedAt?: string;
};

export type Post = {
  metadata: Metadata;
  slug: string;
  source: string;
};

/**
 * Turns ```mermaid fences into `<pre class="mermaid">` holding the raw source,
 * which <Mermaid /> renders on the client.
 *
 * remark-rehype honours `data.hName`/`hChildren`, and because the result has no
 * inner `<code>`, rehype-pretty-code skips it. That matters: run through shiki
 * the source arrives as `<span>` tokens with the newlines gone, and mermaid
 * refuses to parse it.
 *
 * ponytail: top-level fences only. A mermaid block nested inside a list item or
 * blockquote stays a code block - no post needs that, and it saves pulling in a
 * tree-walk dependency for a one-level loop.
 */
function remarkMermaid() {
  return (tree: Root) => {
    for (const node of tree.children) {
      if (node.type !== "code" || node.lang !== "mermaid") continue;
      node.data = {
        hName: "pre",
        hProperties: { className: ["mermaid", "not-prose"] },
        hChildren: [{ type: "text", value: node.value }],
      };
    }
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    // Without gfm, tables/strikethrough/task lists render as literal markdown.
    .use(remarkGfm)
    .use(remarkMermaid)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string): Promise<Post> {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    // gray-matter returns `any`; narrowing here is what gives every consumer
    // typed access to `tags` instead of an implicit any.
    metadata: data as Metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}

/** URL-safe slug for a tag, e.g. "Next.js" -> "next-js". */
export function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** One entry per distinct tag across all posts, for /blog/tag/[tag] routes. */
export async function getAllTags() {
  const posts = await getBlogPosts();
  const seen = new Map<string, string>();
  for (const post of posts) {
    for (const tag of post.metadata.tags ?? []) {
      seen.set(slugifyTag(tag), tag);
    }
  }
  return [...seen.entries()].map(([slug, tag]) => ({ slug, tag }));
}
