import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { techIcon } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

/** Page and section heading: bold sans, optional muted line under it. */
export function SectionHeading({
  title,
  subtitle,
  as: As = "h2",
  className,
}: {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("space-y-1", className)}>
      <As className="text-2xl font-bold tracking-tight">{title}</As>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/**
 * The work / education / hackathon row: title and subtitle left, dates and
 * place right-aligned. Stacks below `sm` — squeezing two right-aligned lines
 * next to a title at 342px reads as a broken table.
 */
export function EntryRow({
  title,
  subtitle,
  href,
  badge,
  period,
  place,
  children,
}: {
  title: string;
  subtitle?: string;
  href?: string;
  badge?: ReactNode;
  period?: string;
  place?: string;
  children?: ReactNode;
}) {
  const heading = (
    <span className="font-bold group-hover:underline">{title}</span>
  );

  return (
    <div className="group">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {href ? (
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {heading}
              </Link>
            ) : (
              heading
            )}
            {badge}
          </div>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {(period || place) && (
          <div className="shrink-0 text-sm text-muted-foreground sm:text-right">
            {period && <p>{period}</p>}
            {place && <p>{place}</p>}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

/**
 * The blog / project row: text block left, "Read more →" vertically centred on
 * the right. The arrow nudges on hover — the only motion in the reference.
 */
export function LinkRow({
  href,
  title,
  summary,
  date,
  tags,
  action = "Read more",
  external,
  children,
}: {
  href: string;
  title: string;
  summary?: string;
  date?: string;
  tags?: readonly string[];
  action?: string;
  external?: boolean;
  children?: ReactNode;
}) {
  const external_ = external ?? /^https?:/.test(href);

  return (
    <Link
      href={href}
      {...(external_
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className="group flex items-center justify-between gap-6 py-1"
    >
      <div className="min-w-0 space-y-1">
        <p className="font-bold group-hover:underline">{title}</p>
        {/* Clamped to two lines: reference summaries are a single line, and the
            project descriptions in DATA run to a full paragraph. */}
        {summary && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {summary}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
        {date && (
          <p className="flex items-center gap-1.5 pt-0.5 text-sm text-muted-foreground">
            <CalendarIcon className="size-3.5" strokeWidth={1.5} />
            <time dateTime={date}>{date}</time>
          </p>
        )}
        {children}
      </div>
      <span className="hidden shrink-0 items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:flex">
        {action}
        <span
          aria-hidden
          className="transition-transform duration-200 ease-fluid group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </Link>
  );
}

/** The Gears / Setup / Books / Movies card. */
export function LinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-border bg-card px-4 py-3 transition-colors duration-200 ease-fluid hover:border-muted-foreground/40"
    >
      <p className="font-bold">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}

/**
 * The Books / Movies row: 2:3 cover on the left, EntryRow's text block beside
 * it. One component for both pages — a book jacket and a film poster are the
 * same shape, so a second variant would be a copy with the word swapped.
 */
export function PosterRow({
  image,
  title,
  subtitle,
  place,
  href,
}: {
  image?: string;
  title: string;
  subtitle?: string;
  place?: string;
  href?: string;
}) {
  const body = (
    <>
      {image ? (
        <Image
          src={image}
          alt={title}
          width={48}
          height={72}
          // Jackets aren't all exactly 2:3, and next/image's intrinsic ratio
          // wins over the width/height attrs — without the pinned box the rows
          // land 71-77px tall and the text baselines stop lining up.
          className="h-[72px] w-[48px] shrink-0 rounded-md border border-border object-cover"
        />
      ) : (
        // ponytail: a plain tile, not a generated placeholder. Every entry has
        // a cover today; this is only here so a missing one doesn't collapse
        // the row's alignment.
        <span className="h-[72px] w-[48px] shrink-0 rounded-md border border-border bg-card" />
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <p className="font-bold group-hover:underline">{title}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {place && (
          <p className="shrink-0 text-sm text-muted-foreground sm:text-right">
            {place}
          </p>
        )}
      </div>
    </>
  );

  const className = "group flex items-start gap-4";

  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {body}
    </Link>
  ) : (
    <div className={className}>{body}</div>
  );
}

/**
 * A single "Technologies & Tools" tile. Renders the brand logo when Simple
 * Icons has one, otherwise the label itself in the same tile — so an unmatched
 * technology is still legible rather than a blank square.
 *
 * `hex: null` from techIcon() means the brand colour is near-black or
 * near-white, so it paints with currentColor and stays visible in both themes.
 */
export function TechTile({ label }: { label: string }) {
  const icon = techIcon(label);

  if (!icon) {
    return (
      <span
        data-tech-tile
        title={label}
        className="inline-flex h-9 max-w-[8rem] items-center justify-center truncate rounded-md border border-border bg-card px-2.5 text-xs font-medium text-muted-foreground"
      >
        {label}
      </span>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          data-tech-tile
          className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-card"
        >
          <svg
            role="img"
            aria-label={icon.title}
            viewBox="0 0 24 24"
            className="size-4"
            style={{ fill: icon.hex ?? "currentColor" }}
          >
            <path d={icon.path} />
          </svg>
        </span>
      </TooltipTrigger>
      <TooltipContent>{icon.title}</TooltipContent>
    </Tooltip>
  );
}

export function TechTiles({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <TechTile key={item} label={item} />
      ))}
    </div>
  );
}

/** The "What I've done" list — square markers, exactly as in the reference. */
export function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
        >
          <span aria-hidden className="mt-0.5 select-none text-[10px]">
            ▪
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Small bold label above a tile row or a bullet list. */
export function MicroHeading({ children }: { children: ReactNode }) {
  return <p className="text-sm font-bold">{children}</p>;
}
