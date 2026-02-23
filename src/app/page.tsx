"use client";

import { useEffect, useMemo } from "react";
import { LoadingScreen } from "@/components/home/LoadingScreen";
import { ProjectArchive } from "@/components/home/ProjectArchive";
import { ProjectDirectory } from "@/components/home/ProjectDirectory";
import { useActiveProject } from "@/components/home/useActiveProject";
import { useLogoAnimation } from "@/hooks/useLogoAnimation";
import { projects } from "@/data/projects";

export default function HomePage() {
  const slugs = useMemo(() => projects.map((p) => p.slug), []);
  const activeSlug = useActiveProject(slugs);
  const { resetAnimation } = useLogoAnimation();

  // Reset animation every time the home page mounts
  useEffect(() => {
    resetAnimation();
  }, [resetAnimation]);

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
