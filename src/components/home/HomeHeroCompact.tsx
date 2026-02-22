"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { Caption } from "@/components/typography";

interface HomeHeroCompactProps {
  project: Project;
}

export function HomeHeroCompact({ project }: HomeHeroCompactProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div className="relative aspect-[16/9] w-full bg-gray-100">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h2 className="text-[clamp(0.9375rem,0.5vw+0.8rem,1.0625rem)] font-medium text-gray-900">
          {project.title}
        </h2>
        <Caption>
          {project.location}, {project.year}
        </Caption>
      </div>
    </Link>
  );
}
