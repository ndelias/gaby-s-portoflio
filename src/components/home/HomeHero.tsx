"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { GridContainer } from "@/components/layout/GridContainer";
import { Caption } from "@/components/typography";

interface HomeHeroProps {
  project: Project;
}

export function HomeHero({ project }: HomeHeroProps) {
  return (
    <section>
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative h-[85vh] w-full bg-gray-100">
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </Link>
      <GridContainer className="mt-6 mb-0">
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-[var(--grid-gutter)]">
          <div className="col-span-4">
            <h2 className="text-[clamp(1.25rem,1.5vw+0.5rem,1.75rem)] font-semibold tracking-[-0.02em] text-gray-900">
              {project.title}
            </h2>
          </div>
          <div className="col-span-4 sm:col-span-4 lg:col-span-8 mt-2 sm:mt-0 flex items-end">
            <Caption>
              {project.location}, {project.year}
            </Caption>
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
