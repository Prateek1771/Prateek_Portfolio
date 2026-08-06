import { Quote } from "@/components/quote";
import { Bullets, MicroHeading, SectionHeading } from "@/components/rows";
import { Separator } from "@/components/ui/separator";
import { SETUP } from "@/data/collections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Setup",
  description: "VSCode / Cursor configuration and extensions guide.",
  path: "/setup",
});

export default function SetupPage() {
  const filled = SETUP.filter((section) => section.items.length > 0);

  return (
    <div className="space-y-12 pb-8 pt-2">
      <SectionHeading
        as="h1"
        title="Setup"
        subtitle="VSCode / Cursor configuration and extensions guide."
      />

      {filled.length === 0 ? (
        <p className="text-sm text-muted-foreground">Coming soon.</p>
      ) : (
        <div className="space-y-10">
          {filled.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="space-y-1">
                <MicroHeading>{section.title}</MicroHeading>
                {section.intro && (
                  <p className="text-sm text-muted-foreground">
                    {section.intro}
                  </p>
                )}
              </div>
              <Separator />
              <Bullets items={section.items} />
            </div>
          ))}
        </div>
      )}

      <Quote seed="setup" />
    </div>
  );
}
