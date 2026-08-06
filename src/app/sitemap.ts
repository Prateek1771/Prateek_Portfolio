import { getAllTags, getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

// Every static route.
const ROUTES = [
  "/work",
  "/projects",
  "/skills",
  "/hackathons",
  "/resume",
  "/gears",
  "/setup",
  "/books",
  "/movies",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const tags = await getAllTags();
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${DATA.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const tagEntries: MetadataRoute.Sitemap = tags.map(({ slug }) => ({
    url: `${DATA.url}/blog/tag/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const pageEntries: MetadataRoute.Sitemap = ROUTES.map((route) => ({
    url: `${DATA.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    { url: DATA.url, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    {
      url: `${DATA.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...pageEntries,
    ...blogEntries,
    ...tagEntries,
  ];
}
