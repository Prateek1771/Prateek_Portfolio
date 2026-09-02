"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

// Replaces the root layout, so it has to ship its own html/body. Deliberately
// unstyled beyond inline rules - the layout's CSS is not guaranteed here.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    posthog.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          padding: "6rem 1.5rem",
          maxWidth: "42rem",
        }}
      >
        <h1 style={{ fontSize: "1.125rem", fontWeight: 500 }}>
          Something broke.
        </h1>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          The site failed to load. The error has been reported.
        </p>
        <button
          onClick={reset}
          style={{
            fontSize: "0.875rem",
            padding: "0.375rem 0.75rem",
            borderRadius: "0.5rem",
            border: "1px solid currentColor",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
