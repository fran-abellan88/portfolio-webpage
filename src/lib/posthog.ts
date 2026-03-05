import posthog from "posthog-js";

export function getPostHogClient(): typeof posthog | null {
  if (typeof window === "undefined") return null;

  if (!posthog.__loaded) {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    if (!key || !host) return null;

    posthog.init(key, {
      api_host: host,
      person_profiles: "identified_only",
      capture_pageview: false,
      capture_pageleave: true,
      loaded: (ph) => {
        if (process.env.NODE_ENV === "development") ph.debug();
      },
    });
  }

  return posthog;
}
