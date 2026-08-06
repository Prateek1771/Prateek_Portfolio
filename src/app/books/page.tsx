import { Quote } from "@/components/quote";
import { PosterRow, SectionHeading } from "@/components/rows";
import { BOOKS } from "@/data/collections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Books",
  description: "Books that have influenced my thinking and growth.",
  path: "/books",
});

export default function BooksPage() {
  return (
    <div className="space-y-12 pb-8 pt-2">
      <SectionHeading
        as="h1"
        title="Books"
        subtitle="Books that have influenced my thinking and growth."
      />

      {BOOKS.length === 0 ? (
        <p className="text-sm text-muted-foreground">Coming soon.</p>
      ) : (
        <div className="space-y-5">
          {BOOKS.map((book) => (
            <PosterRow
              key={book.title}
              image={book.image}
              title={book.title}
              subtitle={book.note}
              place={book.author}
              href={book.href}
            />
          ))}
        </div>
      )}

      <Quote seed="books" />
    </div>
  );
}
