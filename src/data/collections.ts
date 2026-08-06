/**
 * Content for /gears, /setup, /books and /movies.
 *
 * Everything the four pages render lives here, so filling them in never means
 * touching markup. Each page already handles an empty array with a "Coming
 * soon." state, so adding entries is purely additive.
 */

export type Gear = {
  name: string;
  description: string;
  /** Optional link to the product or project page. */
  href?: string;
};

export type GearGroup = {
  title: string;
  items: Gear[];
};

export type SetupSection = {
  title: string;
  /** One muted paragraph under the section title. Optional. */
  intro?: string;
  items: string[];
};

export type Book = {
  title: string;
  author: string;
  /** A line on why it mattered. */
  note?: string;
  href?: string;
  /** Cover in public/covers, 2:3. */
  image?: string;
};

export type Movie = {
  title: string;
  year: string;
  note?: string;
  href?: string;
  /** Poster in public/covers, 2:3. */
  image?: string;
};

/**
 * Seeded from the tooling already listed in DATA.skills, so the page is real
 * rather than a placeholder. Extend or replace freely.
 */
export const GEARS: GearGroup[] = [
  {
    title: "Hardware",
    items: [
      {
        name: "MSI Modern 14",
        description: "Ryzen 5, 8GB RAM, 512GB SSD. Everything here was built on it.",
      },
      {
        name: "Nothing Phone 3a",
        description: "Daily driver.",
      },
      {
        name: "OnePlus Nord Buds 2r",
        description: "Black. Calls, and the focus music behind every commit.",
      },
    ],
  },
  {
    title: "Software",
    items: [
      {
        name: "VS Code",
        description: "Primary editor. Configuration lives on the Setup page.",
        href: "https://code.visualstudio.com",
      },
      {
        name: "Docker",
        description: "Local parity for every service I ship.",
        href: "https://www.docker.com",
      },
      {
        name: "Postman",
        description: "API design and contract testing while building FastAPI routes.",
        href: "https://www.postman.com",
      },
      {
        name: "Git & GitHub",
        description: "Version control and where all of the work above lives.",
        href: "https://github.com/Prateek1771",
      },
    ],
  },
  {
    title: "Design",
    items: [
      {
        name: "Figma",
        description: "Interface design, prototyping, and design-system work.",
        href: "https://figma.com",
      },
      {
        name: "Spline",
        description: "3D scenes for the web without leaving the browser.",
        href: "https://spline.design",
      },
    ],
  },
];

/** Section shells — add the actual config and extension lists here. */
export const SETUP: SetupSection[] = [
  { title: "Editor", items: [] },
  { title: "Extensions", items: [] },
  { title: "Config", items: [] },
];

export const BOOKS: Book[] = [
  {
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    note: "Short-form notes on money, failure and self-awareness. A page a sitting.",
    href: "https://www.goodreads.com/book/show/59606113-do-epic-shit",
    image: "/covers/do-epic-shit.jpg",
  },
  {
    title: "Get Epic Shit Done",
    author: "Ankur Warikoo",
    note: "The follow-up, built around questions readers actually sent him.",
    href: "https://www.goodreads.com/book/show/62039108-get-epic-shit-done",
    image: "/covers/get-epic-shit-done.jpg",
  },
  {
    title: "System Design Interview - An Insider's Guide",
    author: "Alex Xu",
    note: "A 4-step framework and 16 worked systems, from rate limiters to a news feed.",
    href: "https://www.goodreads.com/book/show/54109255-system-design-interview-an-insider-s-guide",
    image: "/covers/system-design-interview.jpg",
  },
  {
    title: "The Communication Book",
    author: "Mikael Krogerus & Roman Tschäppeler",
    note: "44 ideas for better conversations, two illustrated pages each.",
    href: "https://www.goodreads.com/book/show/36325705",
    image: "/covers/the-communication-book.jpg",
  },
];

export const MOVIES: Movie[] = [
  {
    title: "Spider-Man: Brand New Day",
    year: "2026",
    note: "Destin Daniel Cretton. Watched 2 Aug 2026.",
    href: "https://www.themoviedb.org/movie/969681-spider-man-brand-new-day",
    image: "/covers/spider-man-brand-new-day.jpg",
  },
  {
    title: "The Odyssey",
    year: "2026",
    note: "Nolan's Homer, shot end to end on IMAX film. Watched 18 Jul 2026.",
    href: "https://www.themoviedb.org/movie/1368337-the-odyssey",
    image: "/covers/the-odyssey.jpg",
  },
];
