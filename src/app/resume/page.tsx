import { ExternalLinkIcon } from "lucide-react";

import { Quote } from "@/components/quote";
import { SectionHeading } from "@/components/rows";
import { Track } from "@/components/track";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { buildMetadata } from "@/lib/seo";

const RESUME = "/Prateek.pdf";

export const metadata = buildMetadata({
  title: "Resume",
  description: "View and download my professional resume.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <div className="space-y-12 pb-8 pt-2">
      <SectionHeading
        as="h1"
        title="Resume"
        subtitle="View and download my professional resume."
      />

      <Separator />

      <div className="relative overflow-hidden rounded-lg border border-border bg-card">
        <Track event="resume_download">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="absolute right-3 top-3 z-10"
            aria-label="Open resume in a new tab"
          >
            <a href={RESUME} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="size-4" strokeWidth={1.5} />
            </a>
          </Button>
        </Track>
        {/*
          Chrome's built-in PDF viewer. Fixed aspect rather than a viewport
          height so it can't push the page into horizontal scroll at 390px.
        */}
        <iframe
          src={`${RESUME}#view=FitH`}
          title="Resume"
          className="h-[52rem] w-full max-w-full"
        />
      </div>

      <Quote seed="resume" />
    </div>
  );
}
