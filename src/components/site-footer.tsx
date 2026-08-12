import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import { FOOTER_NAV } from "@/lib/nav";

export function SiteFooter() {
  const socials = Object.entries(DATA.contact.social);

  return (
    // Full-bleed band one step off the page, hairline on top - the inner
    // content still sits on the shared 640px measure.
    <footer className="mt-24 border-t border-border bg-muted/60">
      <div className="mx-auto w-full max-w-[43rem] px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto]">
          <div>
            <h2 className="footer-label text-muted-foreground">Navigate</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {FOOTER_NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    className="text-muted-foreground transition-colors duration-200 ease-fluid hover:text-foreground"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="footer-label text-muted-foreground">Connect</h2>
            {/* Four per row, so the icon squares wrap into the reference's
                two-row block rather than one long line. */}
            <div className="mt-4 grid w-max grid-cols-4 gap-2">
              {socials.map(([name, social]) => (
                <a
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex size-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors duration-200 ease-fluid hover:text-foreground"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
