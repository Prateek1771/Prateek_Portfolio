"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/*
        Both icons render and CSS picks one, so the server and client markup
        match. Branching on resolvedTheme here would hydrate-mismatch: it is
        undefined until next-themes reads localStorage on the client.
      */}
      <SunIcon className="size-[18px] dark:hidden" strokeWidth={1.5} />
      <MoonIcon className="hidden size-[18px] dark:block" strokeWidth={1.5} />
    </Button>
  );
}
