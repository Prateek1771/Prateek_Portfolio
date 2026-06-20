import Navbar from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Space_Mono as FontMono } from "next/font/google";
import { NekoScript } from "@/components/neko";
import Loader from "@/components/loader";
import "./globals.css";

const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
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
    images: [{ url: `${DATA.url}/og-image.png`, width: 1200, height: 630, alt: DATA.name }],
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
  },
  alternates: {
    canonical: DATA.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin=""
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Loader />
          <TooltipProvider delayDuration={0}>
            <Navbar />
            <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
              {children}
            </div>
            <SiteFooter />
          </TooltipProvider>
        </ThemeProvider>
        <NekoScript />
      </body>
    </html>
  );
}
