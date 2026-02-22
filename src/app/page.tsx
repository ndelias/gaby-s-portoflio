"use client";

import { useMemo } from "react";
import { LoadingScreen } from "@/components/home/LoadingScreen";
import { ProjectArchive } from "@/components/home/ProjectArchive";
import { ProjectDirectory } from "@/components/home/ProjectDirectory";
import { useActiveProject } from "@/components/home/useActiveProject";
import { projects } from "@/data/projects";

export default function HomePage() {
  const slugs = useMemo(() => projects.map((p) => p.slug), []);
  const activeSlug = useActiveProject(slugs);

  return (
    <>
      <LoadingScreen />
      <ProjectDirectory projects={projects} activeSlug={activeSlug} />
      <div className="pt-12 lg:pt-0">
        <ProjectArchive />
      </div>
    </>
  );
}
