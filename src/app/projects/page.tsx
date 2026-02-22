"use client";

import { useState, useMemo } from "react";
import { GridContainer } from "@/components/layout/GridContainer";
import { Section } from "@/components/layout/Section";
import { ProjectFilter, type FilterCategory } from "@/components/project/ProjectFilter";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { ViewModeToggle } from "@/components/navigation/ViewModeToggle";
import { Display } from "@/components/typography";
import { useTranslation } from "@/hooks/useTranslation";
import { useViewMode } from "@/hooks/useViewMode";
import { projects } from "@/data/projects";
import type { ProjectViewMode } from "@/types";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const { projectViewMode, setProjectViewMode } = useViewMode();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.typology === activeFilter);
  }, [activeFilter]);

  const viewOptions: { value: ProjectViewMode; label: string }[] = [
    { value: "grid", label: t.projects.grid },
    { value: "list", label: t.projects.list },
  ];

  return (
    <Section gap="sm">
      <GridContainer>
        <div className="mb-12 sm:mb-16">
          <Display size="lg" as="h1">
            {t.projects.title}
          </Display>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 sm:mb-12">
          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <ViewModeToggle
            options={viewOptions}
            value={projectViewMode}
            onChange={setProjectViewMode}
          />
        </div>

        <ProjectGrid
          projects={filteredProjects}
          viewMode={projectViewMode}
        />
      </GridContainer>
    </Section>
  );
}
