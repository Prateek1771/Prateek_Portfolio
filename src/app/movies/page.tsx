import { Quote } from "@/components/quote";
import { PosterRow, SectionHeading } from "@/components/rows";
import { MOVIES } from "@/data/collections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Movies",
  description: "Films and shows that have inspired and entertained me.",
  path: "/movies",
});

export default function MoviesPage() {
  return (
    <div className="space-y-12 pb-8 pt-2">
      <SectionHeading
        as="h1"
        title="Movies"
        subtitle="Films and shows that have inspired and entertained me."
      />

      {MOVIES.length === 0 ? (
        <p className="text-sm text-muted-foreground">Coming soon.</p>
      ) : (
        <div className="space-y-5">
          {MOVIES.map((movie) => (
            <PosterRow
              key={movie.title}
              image={movie.image}
              title={movie.title}
              subtitle={movie.note}
              place={movie.year}
              href={movie.href}
            />
          ))}
        </div>
      )}

      <Quote seed="movies" />
    </div>
  );
}
