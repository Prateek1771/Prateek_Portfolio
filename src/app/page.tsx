import Link from "next/link";

import { CopyEmail } from "@/components/copy-email";
import { Quote } from "@/components/quote";
import {
  EntryRow,
  LinkCard,
  LinkRow,
  SectionHeading,
} from "@/components/rows";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";

export default async function Page() {
  const posts = (await getBlogPosts())
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    // One flat column, uniform 64px section rhythm — no grid, no full-height
    // sections, no cards around the content itself.
    <div className="space-y-16 pb-8 pt-2">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: DATA.name,
            url: DATA.url,
            image: `${DATA.url}${DATA.avatarUrl}`,
            sameAs: [
              DATA.contact.social.GitHub.url,
              DATA.contact.social.LinkedIn.url,
              DATA.contact.social.X.url,
            ],
            jobTitle: "AI Engineer & Full Stack Developer",
            description: DATA.description,
            email: DATA.contact.email,
            address: {
              "@type": "PostalAddress",
              addressLocality: DATA.location,
              addressCountry: "IN",
            },
            knowsAbout: [...DATA.skills],
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: DATA.education[0].school,
              url: DATA.education[0].href,
            },
            worksFor: {
              "@type": "Organization",
              name: DATA.work[0].company,
            },
          }),
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="size-24 shrink-0">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold tracking-tight">{DATA.name}</h1>
            <p className="flex flex-wrap items-center gap-x-1.5 text-muted-foreground">
              <span>AI Engineer</span>
              <span aria-hidden>·</span>
              <span>Full Stack Developer</span>
              <span aria-hidden>·</span>
              <a
                href={`mailto:${DATA.contact.email}`}
                className="transition-colors duration-200 ease-fluid hover:text-foreground"
              >
                {DATA.contact.email}
              </a>
              <CopyEmail email={DATA.contact.email} />
            </p>
          </div>
        </div>

        <p className="text-muted-foreground">{DATA.description}</p>

        <div className="flex flex-wrap items-center gap-4">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <a
              key={name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-muted-foreground transition-colors duration-200 ease-fluid hover:text-foreground"
            >
              <social.icon className="size-[18px]" />
            </a>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading title="Experience" />
        <div className="space-y-5">
          {DATA.work.slice(0, 3).map((work, id) => (
            <EntryRow
              key={work.company}
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
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline" size="sm">
            <Link href="/work">Show all work experiences</Link>
          </Button>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading title="Projects" />
        <div className="space-y-5">
          {DATA.projects.slice(0, 3).map((project) => (
            <LinkRow
              key={project.title}
              href={project.href}
              title={project.title.trim()}
              summary={project.description}
              tags={project.technologies.slice(0, 4)}
              action="View"
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline" size="sm">
            <Link href="/projects">Show all projects</Link>
          </Button>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading title="Blog" />
        <div className="space-y-5">
          {posts.map((post) => (
            <LinkRow
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={post.metadata.title}
              summary={post.metadata.summary}
              date={formatDate(post.metadata.publishedAt, { relative: false })}
              tags={post.metadata.tags}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline" size="sm">
            <Link href="/blog">Show all blogs</Link>
          </Button>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading title="Education" />
        <div className="space-y-5">
          {DATA.education.map((education) => (
            <EntryRow
              key={education.school}
              title={education.school}
              subtitle={education.degree}
              href={education.href}
              period={`${education.start} - ${education.end}`}
              place={education.description}
            />
          ))}
        </div>
      </section>

      {/* ── DEVELOPMENT ──────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionHeading title="Development" />
        <div className="space-y-2">
          <LinkCard
            href="/gears"
            title="Gears"
            description="Tools, devices, and software I use to get work done."
          />
          <LinkCard
            href="/setup"
            title="Setup"
            description="VSCode / Cursor configuration and extensions guide."
          />
          <LinkCard
            href="/skills"
            title="Skills"
            description="The languages, frameworks, and tools I work with."
          />
        </div>
      </section>

      {/* ── PERSONAL ─────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionHeading title="Personal" />
        <div className="space-y-2">
          <LinkCard
            href="/books"
            title="Books"
            description="Books that have influenced my thinking and growth."
          />
          <LinkCard
            href="/movies"
            title="Movies"
            description="Films and shows that have inspired and entertained me."
          />
          <LinkCard
            href="/hackathons"
            title="Hackathons"
            description="Weekends spent building things with people I'd just met."
          />
        </div>
      </section>

      <Quote seed="home" />
    </div>
  );
}
