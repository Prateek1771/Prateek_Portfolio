import Markdown from "react-markdown";

import { Quote } from "@/components/quote";
import {
  Bullets,
  EntryRow,
  MicroHeading,
  SectionHeading,
  TechTiles,
} from "@/components/rows";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Work Experience",
  description: "My work experiences across different companies and roles.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="space-y-12 pb-8 pt-2">
      <SectionHeading
        as="h1"
        title="Work Experience"
        subtitle="My work experiences across different companies and roles."
      />

      {/* DATA.summary is the one place the markdown links live, and this is the
          page they belong to now that the home hero is a single plain line. */}
      <div className="prose max-w-none text-sm">
        <Markdown
          components={{
            a: ({ href, children }) =>
              href?.endsWith(".pdf") ? (
                <a href={href} download>
                  {children}
                </a>
              ) : (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
          }}
        >
          {DATA.summary}
        </Markdown>
      </div>

      <div className="space-y-10">
        {DATA.work.map((work, id) => (
          <div key={work.company} className="space-y-5">
            <EntryRow
              title={work.company}
              subtitle={work.title}
              href={work.href || undefined}
              badge={
                id === 0 ? (
                  <Badge variant="success">
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-brand"
                    />
                    Working
                  </Badge>
                ) : undefined
              }
              period={`${work.start} - ${work.end ?? "Present"}`}
              place={work.location}
            />

            <Separator />

            <div className="space-y-2">
              <MicroHeading>Technologies &amp; Tools</MicroHeading>
              <TechTiles items={work.technologies} />
            </div>

            <div className="space-y-2">
              <MicroHeading>What I&apos;ve done</MicroHeading>
              <Bullets items={work.highlights} />
            </div>
          </div>
        ))}
      </div>

      <Quote seed="work" />
    </div>
  );
}
