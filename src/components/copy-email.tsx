"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import posthog from "posthog-js";
import { useState } from "react";

/**
 * The small copy affordance beside the email address in the hero, matching the
 * reference's inline duplicate-page icon.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label={copied ? "Email address copied" : "Copy email address"}
      onClick={() => {
        navigator.clipboard?.writeText(email);
        posthog.capture("copy_email");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="align-middle text-muted-foreground transition-colors duration-200 ease-fluid hover:text-foreground"
    >
      {copied ? (
        <CheckIcon className="size-3.5" strokeWidth={1.5} />
      ) : (
        <CopyIcon className="size-3.5" strokeWidth={1.5} />
      )}
    </button>
  );
}
