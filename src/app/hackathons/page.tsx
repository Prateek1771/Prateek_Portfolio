import { Quote } from "@/components/quote";
import { Bullets, EntryRow, SectionHeading } from "@/components/rows";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hackathons",
  description: "Weekends spent building things with people I'd just met.",
  path: "/hackathons",
});

export default function HackathonsPage() {
  return (
    <div className="space-y-12 pb-8 pt-2">
      <SectionHeading
        as="h1"
        title="Hackathons"
        subtitle="Weekends spent building things with people I'd just met."
      />

      <div className="space-y-10">
        {DATA.hackathons.map((hackathon) => (
          <div key={hackathon.title} className="space-y-4">
            <EntryRow
              title={hackathon.title}
              period={hackathon.dates}
              place={hackathon.location}
            />
            <Separator />
            <Bullets items={[hackathon.description]} />
            {hackathon.links.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 text-sm">
                {hackathon.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted-foreground transition-colors duration-200 ease-fluid hover:text-foreground"
                  >
                    {link.icon}
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Quote seed="hackathons" />
    </div>
  );
}
