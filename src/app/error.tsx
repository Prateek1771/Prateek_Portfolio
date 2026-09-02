"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
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
    <div className="space-y-4 py-24">
      <h1 className="text-lg font-medium tracking-tight">Something broke.</h1>
      <p className="text-sm text-muted-foreground">
        This page failed to render. The error has been reported.
      </p>
      <Button variant="outline" size="sm" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
