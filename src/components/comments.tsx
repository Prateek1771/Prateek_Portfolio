"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

import { Separator } from "@/components/ui/separator";

const REPO = process.env.NEXT_PUBLIC_UTTERANCES_REPO;

/**
 * utteranc.es comment thread, backed by GitHub issues.
 *
 * Renders nothing unless NEXT_PUBLIC_UTTERANCES_REPO is set to a public
 * `owner/repo` that has the utterances GitHub App installed - a wrong slug
 * renders a permanently broken widget, so an unset var is treated as "off"
 * rather than guessed.
 */
export function Comments() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const host = ref.current;
    if (!REPO || !host || !resolvedTheme) return;

    // utterances has no imperative theme API - swapping themes means tearing
    // the iframe down and re-injecting the script.
    host.replaceChildren();

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("repo", REPO);
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comments");
    script.setAttribute(
      "theme",
      resolvedTheme === "dark" ? "github-dark" : "github-light"
    );
    host.appendChild(script);

    return () => host.replaceChildren();
  }, [resolvedTheme]);

  if (!REPO) return null;

  return (
    <>
      {/* The rule belongs to the section, not the page - otherwise the page
          renders two adjacent separators whenever comments are switched off. */}
      <Separator />
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Comments</h2>
        <div ref={ref} />
      </section>
    </>
  );
}
