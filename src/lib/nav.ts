// Single source of truth for site navigation, consumed by the header, the
// footer and the ⌘K palette.

// The header carries exactly these four, matching the reference.
export const NAV = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

// The footer's two wrapped rows. Order matters - it is what produces the
// 6-then-6 wrap at the 640px measure.
export const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/gears", label: "Gears" },
  { href: "/setup", label: "Setup" },
  { href: "/collections", label: "Collections" },
  { href: "/books", label: "Books" },
  { href: "/movies", label: "Movies" },
  { href: "/skills", label: "Skills" },
  { href: "/hackathons", label: "Hackathons" },
];
