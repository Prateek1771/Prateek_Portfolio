"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

/**
 * Native share sheet where it exists (mobile, Safari), clipboard copy
 * everywhere else. Reads the URL at click time rather than from props so it
 * stays correct on client-side navigation.
 */
export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // The user dismissed the sheet - fall through to copying.
      }
    }
    await navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Button variant="outline" size="sm" onClick={share}>
      {copied ? "Copied" : "Share"}
    </Button>
  );
}
