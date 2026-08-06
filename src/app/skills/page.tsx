import { Quote } from "@/components/quote";
import { SectionHeading, TechTiles } from "@/components/rows";
import { DATA } from "@/data/resume";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Skills",
  description: "The languages, frameworks, and tools I work with.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <div className="space-y-12 pb-8 pt-2">
      <SectionHeading
        as="h1"
        title="Skills"
        subtitle="The languages, frameworks, and tools I work with."
      />

      <TechTiles items={DATA.skills} />

      <Quote seed="skills" />
    </div>
  );
}
