import { DATA } from "@/data/resume";
import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/Prateek.pdf", label: "Resume" },
];

export function SiteFooter() {
  const socials = Object.entries(DATA.contact.social);

  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="label text-muted-foreground">Navigate</h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    className="transition-colors hover:text-brand"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="label text-muted-foreground">Connect</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map(([name, social]) => (
                <a
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="label mt-10 text-muted-foreground">
          © {new Date().getFullYear()} · {DATA.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
