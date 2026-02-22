"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import type { Locale } from "@/types/locale";

interface ProjectSectionProps {
  project: Project;
  locale: Locale;
  priority?: boolean;
}

export function ProjectSection({ project, locale, priority }: ProjectSectionProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={`project-${project.slug}`}
      className="scroll-mt-[112px] sm:scroll-mt-[128px] lg:scroll-mt-20"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image container */}
        <div className="relative h-[70vh] sm:h-[80vh] lg:h-[85vh] w-full overflow-hidden bg-gray-100">
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={priority}
          />

          {/* Desktop hover overlay */}
          <div
            className="hidden lg:block absolute inset-0 bg-black transition-opacity duration-300 ease-out pointer-events-none"
            style={{ opacity: hovered ? 0.06 : 0 }}
          />
        </div>

        {/* Desktop: hover-reveal metadata below image */}
        <div
          className="hidden lg:block overflow-hidden transition-all duration-300 ease-out"
          style={{
            maxHeight: hovered ? "120px" : "0px",
            opacity: hovered ? 1 : 0,
          }}
        >
          <div className="pt-4 pb-8 px-[var(--grid-margin)]">
            <h2 className="text-[clamp(1rem,1vw+0.5rem,1.25rem)] font-semibold tracking-[-0.02em] text-gray-900">
              {project.title}
            </h2>
            <p className="text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-normal text-gray-500 mt-1 leading-relaxed">
              {project.excerpt[locale]}
            </p>
          </div>
        </div>

        {/* Mobile/tablet: always visible metadata */}
        <div className="lg:hidden pt-4 pb-8 px-[var(--grid-margin)]">
          <h2 className="text-[clamp(1rem,1vw+0.5rem,1.25rem)] font-semibold tracking-[-0.02em] text-gray-900">
            {project.title}
          </h2>
          <p className="text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-normal text-gray-500 mt-1 leading-relaxed">
            {project.excerpt[locale]}
          </p>
        </div>
      </Link>
    </div>
  );
}
