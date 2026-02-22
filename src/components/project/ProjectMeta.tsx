"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Label, Caption } from "@/components/typography";
import type { Project } from "@/types";

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  const { t } = useTranslation();

  const fields: { label: string; value: string | undefined }[] = [
    { label: t.projects.typology, value: t.projects[project.typology] },
    { label: t.projects.location, value: project.location },
    { label: t.projects.year, value: project.year },
    { label: t.projects.status, value: project.status.replace("-", " ") },
    { label: t.projects.area, value: project.area },
    { label: t.projects.client, value: project.client },
  ];

  return (
    <dl className="flex flex-col gap-4">
      {fields.map(
        (field) =>
          field.value && (
            <div key={field.label}>
              <Label as="dt" className="mb-1 block">
                {field.label}
              </Label>
              <Caption as="p" className="text-gray-700 font-normal">
                {field.value}
              </Caption>
            </div>
          )
      )}
    </dl>
  );
}
