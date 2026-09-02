"use client";

import posthog from "posthog-js";

/**
 * Fires a named event on click without turning the caller into a client
 * component. `contents` keeps the wrapper out of the layout entirely.
 */
export function Track({
  event,
  properties,
  children,
}: {
  event: string;
  properties?: Record<string, unknown>;
  children: React.ReactNode;
}) {
  return (
    <span className="contents" onClick={() => posthog.capture(event, properties)}>
      {children}
    </span>
  );
}
