import { Quote } from "@/components/quote";
import { LinkRow, SectionHeading } from "@/components/rows";
import { DATA } from "@/data/resume";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Things I've designed, built, and shipped.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="space-y-12 pb-8 pt-2">
      <SectionHeading
        as="h1"
        title="Projects"
        subtitle="Things I've designed, built, and shipped."
      />

      <div className="space-y-8">
        {DATA.projects.map((project) => (
          <LinkRow
            key={project.title}
            href={project.href}
            title={project.title.trim()}
            summary={project.description}
            tags={project.technologies}
            action="View"
          >
            {project.links.length > 0 && (
              // Nested inside a LinkRow's own <Link>, so these are spans with
              // click handlers' worth of styling only — the row navigates.
              <p className="flex flex-wrap items-center gap-3 pt-1 text-sm text-muted-foreground">
                {project.links.map((link) => (
                  <span key={link.type} className="flex items-center gap-1.5">
                    {link.icon}
                    {link.type}
                  </span>
                ))}
              </p>
            )}
          </LinkRow>
        ))}
      </div>

      <Quote seed="projects" />
    </div>
  );
}
