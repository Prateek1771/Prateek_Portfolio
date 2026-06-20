"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label="Copy email address"
      onClick={() => {
        navigator.clipboard?.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="label text-muted-foreground transition-colors hover:text-brand"
    >
      [{copied ? "copied" : "copy"}]
    </button>
  );
}
