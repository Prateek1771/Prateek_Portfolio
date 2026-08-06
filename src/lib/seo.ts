import type { Metadata } from "next";

import { DATA } from "@/data/resume";

/**
 * Every section page (/work, /projects, etc.) was setting title/description/
 * canonical but not openGraph/twitter, so social shares fell back to the
 * homepage's generic card. This stamps the same OG/Twitter shape /blog uses.
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${DATA.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: DATA.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title,
      card: "summary_large_image",
      description,
    },
  };
}
