"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/types";

interface ProjectDirectoryProps {
  projects: Project[];
  activeSlug: string | null;
}

export function ProjectDirectory({ projects, activeSlug }: ProjectDirectoryProps) {
  const mobileRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number>(0);

  const handleClick = (slug: string) => {
    const el = document.getElementById(`project-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track scroll progress for the vertical divider with smooth lerp
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      targetRef.current = docHeight <= 0 ? 0 : Math.min(scrollTop / docHeight, 1);
    };

    const animate = () => {
      const diff = targetRef.current - currentRef.current;
      // Lerp toward target — smaller factor = slower/smoother
      currentRef.current += diff * 0.04;
      // Snap when close enough to avoid infinite loop
      if (Math.abs(diff) < 0.0005) {
        currentRef.current = targetRef.current;
      }
      setScrollProgress(currentRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

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
      <nav className="fixed left-0 top-20 bottom-0 w-[240px] z-[45] hidden lg:flex flex-col justify-between pt-12 pl-10 pr-6 bg-white">
        {/* Vertical divider that grows with scroll */}
        <div className="absolute top-0 right-0 bottom-0 w-px">
          <div
            className="w-full bg-gray-300"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Project links */}
        <div>
          {projects.map((project) => (
            <button
              key={project.slug}
              onClick={() => handleClick(project.slug)}
              className={`text-left text-[length:var(--text-label)] font-medium uppercase tracking-[0.1em] transition-colors duration-[200ms] py-1.5 ${
                activeSlug === project.slug
                  ? "text-gray-900"
                  : "text-gray-300 hover:text-blush"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Bottom links */}
        <div className="pb-8 flex flex-col gap-2">
          <a
            href="https://linkedin.com/in/gaby-architect"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[length:var(--text-label)] font-medium uppercase tracking-[0.1em] text-gray-300 hover:text-blush transition-colors duration-[200ms]"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[length:var(--text-label)] font-medium uppercase tracking-[0.1em] text-gray-300 hover:text-blush transition-colors duration-[200ms]"
          >
            Resume
          </a>
        </div>
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
              className={`text-[length:var(--text-label)] font-medium uppercase tracking-[0.1em] transition-colors duration-[200ms] shrink-0 ${
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
