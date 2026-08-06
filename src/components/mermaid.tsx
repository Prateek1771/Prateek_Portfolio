"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

/**
 * Renders the `<pre class="mermaid">` blocks that remarkMermaid leaves in a
 * post's HTML. Mounted on the blog post route only.
 *
 * The library is ~1MB, so it sits behind a dynamic import *and* a querySelector
 * guard: a post with no diagram never fetches it.
 */
export function Mermaid() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("pre.mermaid")
    );
    if (nodes.length === 0) return;

    // Mermaid bakes the palette into the SVG and stamps data-processed, so a
    // theme toggle can't just re-run it — the source has to be stashed on the
    // first pass and put back before each re-render.
    for (const node of nodes) {
      node.dataset.src ??= node.textContent ?? "";
      node.textContent = node.dataset.src;
      node.removeAttribute("data-processed");
    }

    let cancelled = false;
    import("mermaid").then(({ default: mermaid }) => {
      if (cancelled) return;
      mermaid.initialize({
        startOnLoad: false,
        // "neutral" rather than "default" in light mode: default paints nodes
        // lavender and subgraphs yellow, and this site has no colour in it.
        theme: resolvedTheme === "dark" ? "dark" : "neutral",
        fontFamily: "var(--font-sans)",
      });
      mermaid.run({ nodes });
    });

    return () => {
      cancelled = true;
    };
  }, [resolvedTheme]);

  return null;
}
