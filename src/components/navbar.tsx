"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CommandPalette,
  type PalettePost,
} from "@/components/command-palette";
import { ModeToggle } from "@/components/mode-toggle";
import { NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

export default function Navbar({ posts }: { posts: PalettePost[] }) {
  const pathname = usePathname();

  return (
    // Not sticky, not blurred, no z-index — it scrolls away with the page,
    // exactly as in the reference. It also inherits the layout's 640px column.
    <header className="flex items-center justify-between gap-4 py-7">
      <nav className="flex min-w-0 items-center gap-4 sm:gap-6">
        {NAV.map((item) => {
          const current =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current ? "page" : undefined}
              className={cn(
                "transition-colors duration-200 ease-fluid hover:text-foreground",
                current ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex shrink-0 items-center gap-1">
        <CommandPalette posts={posts} />
        <ModeToggle />
      </div>
    </header>
  );
}
