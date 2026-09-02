import posthog from "posthog-js";

// Next.js runs this after the document loads but before hydration, so PostHog
// is listening before any component can render. No provider, no pageview hook -
// the 2025-05-24 defaults capture $pageview on history change, $pageleave and
// web vitals on their own.
if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    defaults: "2025-05-24",
    capture_exceptions: true,
    person_profiles: "identified_only",
    disable_session_recording: true,
  });
}

// One delegated listener beats a <Track> wrapper on every social icon, project
// card and footer link - and it covers links added later for free.
document.addEventListener("click", (e) => {
  const a = (e.target as HTMLElement).closest?.("a");
  const href = a?.getAttribute("href") ?? "";
  if (href.startsWith("mailto:")) {
    posthog.capture("email_click");
  } else if (/^https?:/.test(href) && new URL(href).host !== location.host) {
    posthog.capture("outbound_click", {
      href,
      host: new URL(href).host,
      text: a!.innerText.trim().slice(0, 80),
    });
  }
});
