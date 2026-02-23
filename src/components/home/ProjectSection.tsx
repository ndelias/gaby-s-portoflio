"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import type { Locale } from "@/types/locale";

interface ProjectSectionProps {
  project: Project;
  locale: Locale;
  priority?: boolean;
}

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function useScrollReveal(innerRef: React.RefObject<HTMLDivElement | null>) {
  const outerRef = useRef<HTMLDivElement>(null);

  const update = useCallback(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const rect = outer.getBoundingClientRect();
    const vh = window.innerHeight;
    const center = rect.top + rect.height / 2;

    const distFromCenter = Math.abs(center - vh / 2) / (vh / 2);
    const centeredness = 1 - Math.min(1, distFromCenter);
    const eased = smoothstep(centeredness);

    // Write directly to DOM — no React re-render
    inner.style.opacity = String(eased);
    inner.style.transform = `scale(${0.5 + 0.5 * eased})`;
  }, [innerRef]);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return outerRef;
}

export function ProjectSection({ project, locale, priority }: ProjectSectionProps) {
  const [hovered, setHovered] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useScrollReveal(innerRef);

  return (
    <div
      id={`project-${project.slug}`}
      ref={outerRef}
      className="scroll-mt-[112px] sm:scroll-mt-[128px] lg:scroll-mt-20 py-8 lg:py-12"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image container — animated via direct DOM writes */}
        <div
          ref={innerRef}
          className="px-6 lg:px-10 will-change-[transform,opacity]"
          style={{ opacity: 0, transform: "scale(0.5)" }}
        >
          <div className="relative h-[55vh] sm:h-[60vh] lg:h-[65vh] w-full overflow-hidden">
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              className="object-cover transition-transform duration-500 ease-out"
              style={{ transform: hovered ? "scale(1.02)" : "scale(1)" }}
              sizes="100vw"
              priority={priority}
            />

            {/* Desktop hover overlay */}
            <div
              className="hidden lg:block absolute inset-0 transition-opacity duration-[250ms] ease-out"
              style={{ opacity: hovered ? 1 : 0 }}
            >
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 p-12 xl:p-16 flex items-end justify-between">
                <div>
                  <h2 className="text-[clamp(1.25rem,1.5vw+0.5rem,1.75rem)] font-semibold tracking-[-0.02em] text-white">
                    {project.title}
                  </h2>
                  <p className="text-[clamp(0.75rem,0.3vw+0.65rem,0.875rem)] font-normal text-white/60 mt-1.5 line-clamp-1">
                    {project.excerpt[locale]}
                  </p>
                </div>
                <span className="shrink-0 ml-8 px-5 py-2 border border-white/40 text-[0.6875rem] uppercase tracking-[0.15em] text-white/90 hover:bg-white hover:text-gray-800 hover:border-white transition-colors duration-200">
                  Read More
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/tablet: always visible metadata */}
        <div className="lg:hidden pt-4 pb-4 px-6 flex flex-col gap-3">
          <div>
            <h2 className="text-[clamp(1rem,1vw+0.5rem,1.25rem)] font-semibold tracking-[-0.02em] text-gray-900 group-hover:text-blush transition-colors duration-300">
              {project.title}
            </h2>
            <p className="text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-normal text-gray-500 mt-1 line-clamp-1 group-hover:text-blush/60 transition-colors duration-300">
              {project.excerpt[locale]}
            </p>
          </div>
          <span className="self-start px-4 py-1.5 border border-gray-300 text-[0.6875rem] uppercase tracking-[0.15em] text-gray-500 group-hover:text-blush group-hover:border-blush transition-colors duration-300">
            Read More
          </span>
        </div>
      </Link>
    </div>
  );
}
