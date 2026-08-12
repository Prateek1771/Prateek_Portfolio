/**
 * Maps the free-form technology strings in `src/data/` to Simple Icons brand
 * logos.
 *
 * Simple Icons is CC0 SVG path data with no React wrapper, resolved here at
 * build time - the rendered markup is an inline <svg>, so nothing about this
 * module reaches the client bundle.
 *
 * Coverage is deliberately partial. Simple Icons removes brands whose logo
 * licences forbid redistribution (OpenAI, AWS) and never had others (Pinecone,
 * Groq, Remotion, Spline, jsPDF). Those return null and `TechTile` falls back
 * to a text label in an identical tile, so the row never shows a hole or a
 * placeholder glyph.
 */
import {
  siAnthropic,
  siClerk,
  siConvex,
  siCss,
  siDocker,
  siExpress,
  siFastapi,
  siFigma,
  siFirebase,
  siFlask,
  siGit,
  siGithub,
  siGreensock,
  siHtml5,
  siJavascript,
  siLangchain,
  siLanggraph,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siPandas,
  siPosthog,
  siPostgresql,
  siPostman,
  siPython,
  siPytorch,
  siReact,
  siRedis,
  siRedux,
  siScikitlearn,
  siShadcnui,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVercel,
  siVite,
  siYoutube,
} from "simple-icons";

export type TechIcon = {
  title: string;
  /** Brand hex, or null when the brand colour would be invisible (see below). */
  hex: string | null;
  path: string;
};

type SimpleIcon = { title: string; hex: string; path: string };

/**
 * Keys are already normalised by `normalise()` below: lowercased, version
 * suffix stripped, parenthetical stripped. Add aliases here rather than
 * widening the normaliser - an alias is obvious, a clever regex is not.
 */
const ICONS: Record<string, SimpleIcon> = {
  html: siHtml5,
  html5: siHtml5,
  css: siCss,
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  "react.js": siReact,
  reactjs: siReact,
  redux: siRedux,
  "redux toolkit": siRedux,
  "next.js": siNextdotjs,
  nextjs: siNextdotjs,
  "node.js": siNodedotjs,
  nodejs: siNodedotjs,
  gsap: siGreensock,
  "gsap animations": siGreensock,
  python: siPython,
  flask: siFlask,
  fastapi: siFastapi,
  express: siExpress,
  "express.js": siExpress,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  postgres: siPostgresql,
  // The existing typo in resume.tsx - aliased rather than silently unmatched.
  postgreesql: siPostgresql,
  sqlite: siSqlite,
  redis: siRedis,
  supabase: siSupabase,
  firebase: siFirebase,
  convex: siConvex,
  clerk: siClerk,
  docker: siDocker,
  git: siGit,
  github: siGithub,
  postman: siPostman,
  figma: siFigma,
  vite: siVite,
  vercel: siVercel,
  "tailwind css": siTailwindcss,
  tailwindcss: siTailwindcss,
  "shadcn ui": siShadcnui,
  shadcnui: siShadcnui,
  tensorflow: siTensorflow,
  pytorch: siPytorch,
  "scikit-learn": siScikitlearn,
  "scikit learn": siScikitlearn,
  pandas: siPandas,
  numpy: siNumpy,
  langchain: siLangchain,
  langgraph: siLanggraph,
  posthog: siPosthog,
  claude: siAnthropic,
  anthropic: siAnthropic,
  // The InnerTube API is the YouTube API; the brand mark is the honest label.
  "youtube innertube api": siYoutube,
  youtube: siYoutube,
};

/**
 * Strip the noise that separates a label from a brand name:
 * "React 19" → "react", "Next.js 16" → "next.js",
 * "InsForge (Postgres)" → "insforge", "Vite 8" → "vite".
 */
function normalise(label: string): string {
  return label
    .toLowerCase()
    .replace(/\s*\([^)]*\)\s*$/, "") // trailing parenthetical
    .replace(/\s+v?\d+(\.\d+)*$/, "") // trailing version number
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Perceived lightness (WCAG relative luminance) of a brand hex.
 *
 * This matters because several brands are pure black (#000000: Next.js,
 * Vercel, Express, Flask, shadcn/ui) or near-white. Painted with their own hex
 * they disappear into whichever background matches them. Returning `hex: null`
 * for those tells the tile to paint with `currentColor`, which is correct in
 * both themes with no theme-awareness in JS at all.
 */
function luminance(hex: string): number {
  const channel = (v: number) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function techIcon(label: string): TechIcon | null {
  const icon = ICONS[normalise(label)];
  if (!icon) return null;

  const l = luminance(icon.hex);
  return {
    title: icon.title,
    hex: l < 0.06 || l > 0.85 ? null : `#${icon.hex}`,
    path: icon.path,
  };
}
