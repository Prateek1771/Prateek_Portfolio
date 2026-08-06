import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Reference badges are sentence-case, not uppercase-tracked — the tag pills
// read "Engineering", not "E N G I N E E R I N G".
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 ease-fluid",
  {
    variants: {
      variant: {
        // Post tags and skill chips: soft rectangle, no border.
        secondary:
          "rounded-md bg-secondary px-2 py-0.5 text-muted-foreground",
        // Filter chips in their resting state.
        outline:
          "rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground hover:text-foreground",
        // The selected filter chip — inverted, as captured.
        active:
          "rounded-full bg-foreground px-3 py-1.5 font-semibold text-background",
        // The only chromatic element in the design: "● Working".
        success:
          "rounded-md border border-brand/40 bg-brand/10 px-2 py-0.5 text-brand",
        // The Ctrl / K keycaps in the search trigger.
        keycap:
          "rounded border border-border bg-card px-1.5 py-0.5 text-[11px] text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
