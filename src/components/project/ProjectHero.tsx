"use client";

import Image from "next/image";
import type { ProjectImage } from "@/types";

interface ProjectHeroProps {
  image: ProjectImage;
  title: string;
}

export function ProjectHero({ image, title }: ProjectHeroProps) {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gray-100">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
    </div>
  );
}
