import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { getBlogPosts } from "@/data/blog";
import { CopyEmail } from "@/components/copy-email";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = (await getBlogPosts())
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 2);

  return (
    <main className="flex flex-col min-h-[100dvh] divide-y divide-border [&>section]:py-10">
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
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h1 className="wordmark text-3xl sm:text-5xl xl:text-6xl/none">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
              </h1>
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="label flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 text-muted-foreground">
                  <span>AI Engineer</span>
                  <span aria-hidden>·</span>
                  <span>Full Stack Developer</span>
                  <span aria-hidden>·</span>
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className="transition-colors hover:text-brand"
                  >
                    {DATA.contact.email}
                  </a>
                  <CopyEmail email={DATA.contact.email} />
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <a
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="text-muted-foreground transition-colors hover:text-brand"
                    >
                      <social.icon className="size-4" />
                    </a>
                  ))}
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="font-display text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown
            className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
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
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="font-display text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="font-display text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="font-display text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="label inline-block bg-brand px-3 py-1 text-brand-foreground">
                  My Projects
                </div>
                <h2 className="wordmark text-3xl sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  youtubeId={"youtubeId" in project ? (project as any).youtubeId : undefined}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="label inline-block bg-brand px-3 py-1 text-brand-foreground">
                  Hackathons
                </div>
                <h2 className="wordmark text-3xl sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="blog">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="font-display text-xl font-bold">Latest writing</h2>
          </BlurFade>
          <div className="border-t border-border">
            {posts.map((post, id) => (
              <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 16 + id * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-start justify-between gap-4 border-b border-border py-4"
                >
                  <div>
                    <p className="font-display font-bold transition-colors group-hover:text-brand">
                      {post.metadata.title}
                    </p>
                    {post.metadata.summary && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {post.metadata.summary}
                      </p>
                    )}
                    <p className="label mt-1 text-muted-foreground">
                      {post.metadata.publishedAt}
                    </p>
                  </div>
                  <span className="label shrink-0 text-muted-foreground transition-colors group-hover:text-brand">
                    Read →
                  </span>
                </Link>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <Link
              href="/blog"
              className="label inline-block border-b border-foreground pb-1 transition-opacity hover:opacity-60"
            >
              Show all blogs →
            </Link>
          </BlurFade>
        </div>
      </section>
      <section id="quote">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <figure className="border border-border p-8">
            <blockquote className="text-base italic leading-relaxed sm:text-lg">
              &ldquo;Whatever you are, be a good one.&rdquo;
            </blockquote>
            <figcaption className="label mt-3 text-muted-foreground">
              — Abraham Lincoln
            </figcaption>
          </figure>
        </BlurFade>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="label inline-block bg-brand px-3 py-1 text-brand-foreground">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a direct message{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-brand hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  on LinkedIn or twitter.
                </Link>{" "}
                 I&apos;m looking forward to your message.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
