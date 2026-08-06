"use client";

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as React from "react";

import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(
      // Scrolls horizontally by design — the reference clips its last chip.
      "no-scrollbar flex items-center gap-2 overflow-x-auto",
      className
    )}
    {...props}
  />
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

/**
 * Styled as a filter chip: resting = outline badge, selected = inverted.
 * Radix drives `data-state`, so the active look needs no React state.
 */
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(
      badgeVariants({ variant: "outline" }),
      "shrink-0 whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
      "data-[state=on]:border-transparent data-[state=on]:bg-foreground data-[state=on]:font-semibold data-[state=on]:text-background",
      className
    )}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Item>
));
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
