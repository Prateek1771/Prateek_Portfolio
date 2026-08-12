import { CollectionCard } from "@/components/collection-card";
import { Quote } from "@/components/quote";
import { MicroHeading, SectionHeading } from "@/components/rows";
import { Separator } from "@/components/ui/separator";
import { COLLECTIONS } from "@/data/collections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Collections",
  description: "My LEGO builds and Hot Wheels collection.",
  path: "/collections",
});

export default function CollectionsPage() {
  return (
    <div className="space-y-12 pb-8 pt-2">
      <SectionHeading
        as="h1"
        title="Collections"
        subtitle="My LEGO builds and Hot Wheels collection."
      />

      <div className="space-y-10">
        {COLLECTIONS.map((group) => (
          <div key={group.title} className="space-y-4">
            <MicroHeading>{group.title}</MicroHeading>
            <Separator />
            {group.items.length === 0 ? (
              <p className="text-sm text-muted-foreground">Coming soon.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {group.items.map((item) => (
                  <CollectionCard
                    key={item.name}
                    images={item.images}
                    title={item.name}
                    description={item.description}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Quote seed="collections" />
    </div>
  );
}
