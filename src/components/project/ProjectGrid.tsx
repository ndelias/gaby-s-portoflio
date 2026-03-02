"use client";

import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Caption, Label } from "@/components/typography";
import { Divider } from "@/components/ui/Divider";
import { useTranslation } from "@/hooks/useTranslation";
import type { Project, ProjectViewMode } from "@/types";

interface ProjectGridProps {
  projects: Project[];
  viewMode: ProjectViewMode;
}

export function ProjectGrid({ projects, viewMode }: ProjectGridProps) {
  const { t } = useTranslation();

  if (viewMode === "list") {
    return (
      <div>
        <div className="hidden sm:grid grid-cols-12 gap-x-[var(--grid-gutter)] pb-3">
          <div className="col-span-4">
            <Label>Project</Label>
          </div>
          <div className="col-span-5">
            <Label>{t.projects.location}</Label>
          </div>
          <div className="col-span-3 text-right">
            <Label>{t.projects.year}</Label>
          </div>
        </div>
        <Divider className="mb-0" />
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.05}>
            <TransitionLink
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-[var(--grid-gutter)] py-4 sm:py-5 border-b border-gray-200 transition-colors duration-[200ms] hover:bg-gray-100/50">
                <div className="sm:col-span-4">
                  <span className="text-[length:var(--text-body)] font-medium text-gray-900 group-hover:text-blush transition-colors duration-[200ms]">
                    {project.title}
                  </span>
                </div>
                <div className="sm:col-span-5 mt-1 sm:mt-0 flex items-center">
                  <Caption>{project.location}</Caption>
                </div>
                <div className="sm:col-span-3 flex items-center sm:justify-end">
                  <Caption>{project.year}</Caption>
                </div>
              </div>
            </TransitionLink>
          </ScrollReveal>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[var(--grid-gutter)] gap-y-12 sm:gap-y-16">
      {projects.map((project, i) => (
        <ScrollReveal key={project.slug} delay={i * 0.1}>
          <ProjectCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}
