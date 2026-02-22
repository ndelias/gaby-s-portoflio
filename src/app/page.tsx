"use client";

import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHeroCompact } from "@/components/home/HomeHeroCompact";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ProjectCardCompact } from "@/components/project/ProjectCardCompact";
import { ViewModeToggle } from "@/components/navigation/ViewModeToggle";
import { GridContainer } from "@/components/layout/GridContainer";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Display } from "@/components/typography";
import { useTranslation } from "@/hooks/useTranslation";
import { useViewMode } from "@/hooks/useViewMode";
import { projects, getFeaturedProjects } from "@/data/projects";
import type { ViewMode } from "@/types";

export default function HomePage() {
  const { t } = useTranslation();
  const { homeViewMode, setHomeViewMode } = useViewMode();
  const featuredProjects = getFeaturedProjects();
  const heroProject = featuredProjects[0];
  const remainingProjects = projects.filter((p) => p.slug !== heroProject?.slug);

  const viewOptions: { value: ViewMode; label: string }[] = [
    { value: "immersive", label: t.home.immersive },
    { value: "compact", label: t.home.compact },
  ];

  return (
    <>
      {heroProject && (
        <ScrollReveal>
          {homeViewMode === "immersive" ? (
            <HomeHero project={heroProject} />
          ) : (
            <GridContainer className="pt-8">
              <HomeHeroCompact project={heroProject} />
            </GridContainer>
          )}
        </ScrollReveal>
      )}

      <Section gap="lg">
        <GridContainer>
          <div className="flex items-baseline justify-between mb-12 sm:mb-16">
            <Display size="lg" as="h2">
              {t.home.selectedWork}
            </Display>
            <ViewModeToggle
              options={viewOptions}
              value={homeViewMode}
              onChange={setHomeViewMode}
            />
          </div>

          {homeViewMode === "immersive" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[var(--grid-gutter)] gap-y-12 sm:gap-y-16">
              {remainingProjects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.1}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-[var(--grid-gutter)] gap-y-8">
              {remainingProjects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.05}>
                  <ProjectCardCompact project={project} />
                </ScrollReveal>
              ))}
            </div>
          )}

          <div className="mt-16 sm:mt-24 text-center">
            <Link
              href="/projects"
              className="text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-medium uppercase tracking-[0.1em] text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              {t.home.viewAll}
            </Link>
          </div>
        </GridContainer>
      </Section>
    </>
  );
}
