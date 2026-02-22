"use client";

import { useEffect, useState } from "react";

export function useActiveProject(slugs: string[]): string | null {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id.replace("project-", "");
          ratios.set(id, entry.intersectionRatio);
        }

        let best: string | null = null;
        let bestRatio = 0;
        for (const [slug, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = slug;
          }
        }
        if (best) setActiveSlug(best);
      },
      { threshold: [0.3, 0.5, 0.7] }
    );

    const elements = slugs
      .map((s) => document.getElementById(`project-${s}`))
      .filter(Boolean) as HTMLElement[];

    for (const el of elements) observer.observe(el);

    return () => observer.disconnect();
  }, [slugs]);

  return activeSlug;
}
