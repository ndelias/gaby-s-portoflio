"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/types";

interface ProjectDirectoryProps {
  projects: Project[];
  activeSlug: string | null;
}

export function ProjectDirectory({ projects, activeSlug }: ProjectDirectoryProps) {
  const mobileRef = useRef<HTMLDivElement>(null);

  const handleClick = (slug: string) => {
    const el = document.getElementById(`project-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Auto-scroll mobile strip to keep active project visible
  useEffect(() => {
    if (!activeSlug || !mobileRef.current) return;
    const activeButton = mobileRef.current.querySelector(
      `[data-slug="${activeSlug}"]`
    ) as HTMLElement | null;
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSlug]);

  return (
    <>
      {/* Desktop: fixed left column */}
      <nav className="fixed left-0 top-20 bottom-0 w-[240px] z-[45] hidden lg:flex flex-col justify-start pt-12 pl-10 pr-6 bg-white">
        {projects.map((project) => (
          <button
            key={project.slug}
            onClick={() => handleClick(project.slug)}
            className={`text-left text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-medium uppercase tracking-[0.1em] transition-colors duration-300 py-1.5 ${
              activeSlug === project.slug
                ? "text-gray-900"
                : "text-gray-300 hover:text-blush"
            }`}
          >
            {project.title}
          </button>
        ))}
      </nav>

      {/* Mobile/Tablet: fixed horizontal strip below header */}
      <div
        ref={mobileRef}
        className="fixed left-0 right-0 top-16 sm:top-20 z-[45] lg:hidden bg-white border-b border-gray-100 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-5 px-[var(--grid-margin)] py-3 whitespace-nowrap">
          {projects.map((project) => (
            <button
              key={project.slug}
              data-slug={project.slug}
              onClick={() => handleClick(project.slug)}
              className={`text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-medium uppercase tracking-[0.1em] transition-colors duration-300 shrink-0 ${
                activeSlug === project.slug
                  ? "text-gray-900"
                  : "text-gray-300 hover:text-blush"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
