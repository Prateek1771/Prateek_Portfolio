import { Quote } from "@/components/quote";
import { EntryRow, MicroHeading, SectionHeading } from "@/components/rows";
import { Separator } from "@/components/ui/separator";
import { GEARS } from "@/data/collections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gears",
  description: "Tools, devices, and software I use to get work done.",
  path: "/gears",
});

export default function GearsPage() {
  return (
    <div className="space-y-12 pb-8 pt-2">
      <SectionHeading
        as="h1"
        title="Gears"
        subtitle="Tools, devices, and software I use to get work done."
      />

      {GEARS.length === 0 ? (
        <p className="text-sm text-muted-foreground">Coming soon.</p>
      ) : (
        <div className="space-y-10">
          {GEARS.map((group) => (
            <div key={group.title} className="space-y-4">
              <MicroHeading>{group.title}</MicroHeading>
              <Separator />
              <div className="space-y-4">
                {group.items.map((item) => (
                  <EntryRow
                    key={item.name}
                    title={item.name}
                    subtitle={item.description}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <Quote seed="gears" />
    </div>
  );
}
