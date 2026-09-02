"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { useEffect, useMemo, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FOOTER_NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

export type PalettePost = { href: string; title: string; summary: string };

type Item = {
  href: string;
  title: string;
  hint: string;
  group: "Pages" | "Blog";
};

export function CommandPalette({ posts }: { posts: PalettePost[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const items = useMemo<Item[]>(
    () => [
      ...FOOTER_NAV.map((n) => ({
        href: n.href,
        title: n.label,
        hint: "Page",
        group: "Pages" as const,
      })),
      ...posts.map((p) => ({
        href: p.href,
        title: p.title,
        hint: p.summary,
        group: "Blog" as const,
      })),
    ],
    [posts]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) =>
      `${i.title} ${i.hint}`.toLowerCase().includes(q)
    );
  }, [items, query]);

  // Ctrl/⌘+K toggles. Escape and the focus trap come from Radix Dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Keep the highlighted row in view when arrowing past the visible window.
  useEffect(() => {
    listRef.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function go(href: string) {
    posthog.capture("command_palette_navigate", { href, query });
    setOpen(false);
    setQuery("");
    setActive(0);
    router.push(href);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* A real DialogTrigger rather than a bare button: it is what gives Radix
          the reference it needs to return focus here on close. */}
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Search"
          className="flex items-center gap-2 rounded-full bg-secondary p-2 text-muted-foreground transition-colors duration-200 ease-fluid hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring sm:py-1.5 sm:pl-3 sm:pr-2"
        >
          <SearchIcon className="size-4" strokeWidth={1.5} />
          {/* The keycaps are the first thing to go below sm - four nav links
              plus a full-width search pill plus the toggle do not fit in 342px,
              and the overlap lands on "Resume". */}
          <span className="hidden items-center gap-1 sm:flex">
            <Badge variant="keycap">Ctrl</Badge>
            <Badge variant="keycap">K</Badge>
          </span>
        </button>
      </DialogTrigger>

        <DialogContent
          className="p-0"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => Math.min(i + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter" && results[active]) {
              e.preventDefault();
              go(results[active].href);
            }
          }}
        >
          <DialogTitle className="sr-only">Search</DialogTitle>
          <DialogDescription className="sr-only">
            Search pages and blog posts. Use the arrow keys to navigate and
            Enter to open.
          </DialogDescription>

          <div className="flex items-center gap-3 border-b border-border px-4">
            <SearchIcon
              className="size-4 shrink-0 text-muted-foreground"
              strokeWidth={1.5}
            />
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                // Reset here rather than in an effect keyed on `query`: the
                // typing IS the event that invalidates the index, so syncing
                // it afterwards would just be a cascading re-render.
                setActive(0);
              }}
              placeholder="Search pages and posts…"
              className="w-full bg-transparent py-3.5 text-sm outline-hidden placeholder:text-muted-foreground"
            />
          </div>

          {results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              No results for &ldquo;{query}&rdquo;.
            </p>
          ) : (
            <ul ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
              {results.map((item, i) => (
                <li key={`${item.group}-${item.href}`}>
                  <button
                    type="button"
                    onClick={() => go(item.href)}
                    onMouseMove={() => setActive(i)}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left",
                      i === active ? "bg-secondary" : "bg-transparent"
                    )}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium">
                        {item.title}
                      </span>
                      {item.group === "Blog" && item.hint && (
                        <span className="block truncate text-xs text-muted-foreground">
                          {item.hint}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {item.group}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
      </DialogContent>
    </Dialog>
  );
}
