"use client";

import { useEffect } from "react";
import { getPostHogClient } from "@/lib/posthog";

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    getPostHogClient();
  }, []);

  return <>{children}</>;
}
