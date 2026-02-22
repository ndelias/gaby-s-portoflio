"use client";

import { Tag } from "@/components/ui/Tag";
import { useTranslation } from "@/hooks/useTranslation";
import type { ProjectTypology } from "@/types";

type FilterCategory = "all" | ProjectTypology;

interface ProjectFilterProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

const filterKeys: FilterCategory[] = [
  "all",
  "residential",
  "cultural",
  "academic",
  "commercial",
  "public",
];

export function ProjectFilter({
  activeFilter,
  onFilterChange,
}: ProjectFilterProps) {
  const { t } = useTranslation();

  const labelMap: Record<FilterCategory, string> = {
    all: t.projects.all,
    residential: t.projects.residential,
    cultural: t.projects.cultural,
    academic: t.projects.academic,
    commercial: t.projects.commercial,
    public: t.projects.public,
  };

  return (
    <div className="flex flex-wrap gap-1">
      {filterKeys.map((key) => (
        <Tag
          key={key}
          active={activeFilter === key}
          onClick={() => onFilterChange(key)}
        >
          {labelMap[key]}
        </Tag>
      ))}
    </div>
  );
}

export type { FilterCategory };
