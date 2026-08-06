import Navbar from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { NekoScript } from "@/components/neko";
import "./globals.css";

// Satoshi is the reference's typeface. Self-hosted from Fontshare (see
// src/fonts/LICENSE) — it isn't on Google Fonts, and there is no variable axis,
// so these are three static faces covering every weight the design uses.
const fontSans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// The one serif in the references: the blog-post title.
const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: DATA.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: [`${DATA.url}/og-image.png`],
    creator: "@Prateek_Hitli",
    site: "@Prateek_Hitli",
  },
  alternates: {
    canonical: DATA.url,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The palette searches posts, so the layout is the one place that already
  // renders on every route and can read them once.
  const posts = (await getBlogPosts())
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .map((post) => ({
      href: `/blog/${post.slug}`,
      title: post.metadata.title,
      summary: post.metadata.summary ?? "",
    }));

  return (
    // suppressHydrationWarning is required by next-themes: it writes the theme
    // class onto <html> before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable,
          fontMono.variable,
          fontSerif.variable
        )}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: DATA.name,
              url: DATA.url,
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <TooltipProvider delayDuration={200}>
            {/* One measure for every route, header and footer included — the
                reference never varies it. 43rem minus px-6 either side lands
                the content box on exactly 640px, matching the capture. */}
            <div className="mx-auto w-full max-w-[43rem] px-6">
              {/* posts flow down to the ⌘K palette, which the navbar hosts so
                  the trigger and the dialog can share open state. */}
              <Navbar posts={posts} />
              <main>{children}</main>
            </div>
            <SiteFooter />
          </TooltipProvider>
        </ThemeProvider>
        <NekoScript />
      </body>
    </html>
  );
}
