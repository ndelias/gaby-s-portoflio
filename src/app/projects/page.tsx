"use client";

import { useMemo } from "react";
import { GridContainer } from "@/components/layout/GridContainer";
import { Section } from "@/components/layout/Section";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { ToggleGroup } from "@/components/navigation/ToggleGroup";
import { Display } from "@/components/typography";
import { useTranslation } from "@/hooks/useTranslation";
import { useViewMode } from "@/hooks/useViewMode";
import { projects } from "@/data/projects";
import type { ProjectViewMode } from "@/types";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const { projectViewMode, setProjectViewMode } = useViewMode();

  const viewOptions = useMemo<{ value: ProjectViewMode; label: string }[]>(
    () => [
      { value: "grid", label: t.projects.grid },
      { value: "list", label: t.projects.list },
    ],
    [t.projects.grid, t.projects.list]
  );

  return (
    <Section gap="sm">
      <GridContainer>
        <div className="flex items-end justify-between mb-10 sm:mb-12">
          <Display size="lg" as="h1">
            {t.projects.title}
          </Display>
          <ToggleGroup
            options={viewOptions}
            value={projectViewMode}
            onChange={setProjectViewMode}
          />
        </div>

        <ProjectGrid
          projects={projects}
          viewMode={projectViewMode}
        />
      </GridContainer>
    </Section>
  );
}
