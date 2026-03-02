"use client";

import { projects } from "@/data/projects";
import { useTranslation } from "@/hooks/useTranslation";
import { ProjectSection } from "./ProjectSection";

export function ProjectArchive() {
  const { locale } = useTranslation();

  return (
    <section className="pb-0 lg:ml-[240px]">
      {projects.map((project, i) => (
        <ProjectSection
          key={project.slug}
          project={project}
          locale={locale}
          priority={i < 2}
        />
      ))}
    </section>
  );
}
