import { DATA } from "@/data/resume";

/**
 * The quote block that closes every page in the references: mono italic text
 * sitting over an oversized, very low-contrast quote glyph, with the
 * attribution right-aligned underneath.
 *
 * The reference's own quote is a Death Note line; the layout is what is being
 * copied, so the text stays the site owner's (DATA.quotes).
 */
/**
 * Deterministic pick from DATA.quotes. Math.random() is out twice over:
 * react-hooks/purity rejects it inside the component, and hoisting it to module
 * scope gave every prerendered route the same quote. Hashing the seed keeps the
 * pages static and gives each one a different line - callers pass their route.
 */
export function Quote({ seed = "" }: { seed?: string }) {
  let hash = 0;
  for (const char of seed) hash = (hash * 31 + char.charCodeAt(0)) | 0;
  const quote = DATA.quotes[Math.abs(hash) % DATA.quotes.length];

  return (
    <figure className="relative overflow-hidden rounded-lg border border-border bg-card px-6 py-8 md:px-8">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-2 top-2 select-none font-serif text-[8rem] leading-none text-foreground/[0.07]"
      >
        &ldquo;&ldquo;
      </span>
      <blockquote className="relative">
        <p className="mono-quote text-sm md:text-base">
          &quot;{quote.text}&quot;
        </p>
        <figcaption className="mono-quote mt-4 text-right text-sm text-muted-foreground">
          - {quote.author}
        </figcaption>
      </blockquote>
    </figure>
  );
}
