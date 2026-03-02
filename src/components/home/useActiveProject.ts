"use client";

import { useEffect, useState, useCallback } from "react";

export function useActiveProject(slugs: string[]): string | null {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const update = useCallback(() => {
    // Pick the last project whose top edge has scrolled past the viewport top
    // (accounting for the header). Falls back to the first project at the top.
    const getFixedHeight = () => {
      const w = window.innerWidth;
      if (w < 640) return 112;   // header h-16 (64) + strip (~48)
      if (w < 1024) return 128;  // header h-20 (80) + strip (~48)
      return 80;                  // header h-20 (80), strip hidden at lg+
    };
    const headerHeight = getFixedHeight();
    let best: string | null = null;

    for (const slug of slugs) {
      const el = document.getElementById(`project-${slug}`);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= headerHeight + 1) {
        best = slug;
      }
    }

    // If nothing has scrolled past the header, pick the first project
    if (!best && slugs.length > 0) {
      best = slugs[0];
    }

    // At the bottom of the page, activate the last project
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
    if (atBottom && slugs.length > 0) {
      best = slugs[slugs.length - 1];
    }

    if (best) setActiveSlug(best);
  }, [slugs]);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return activeSlug;
}
