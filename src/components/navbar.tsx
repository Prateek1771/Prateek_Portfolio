import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import Link from "next/link";

// Short mono codes for the social links in the header.
const SOCIAL_CODE: Record<string, string> = {
  GitHub: "GH",
  LinkedIn: "IN",
  X: "X",
};

export default function Navbar() {
  const socials = Object.entries(DATA.contact.social).filter(
    ([, social]) => social.navbar
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-base font-extrabold tracking-tight"
        >
          {DATA.name}
        </Link>

        <nav className="label flex items-center gap-4 text-muted-foreground sm:gap-5">
          {DATA.navbar.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          {socials.map(([name, social]) => (
            <a
              key={name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand"
            >
              {SOCIAL_CODE[name] ?? name}
            </a>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
