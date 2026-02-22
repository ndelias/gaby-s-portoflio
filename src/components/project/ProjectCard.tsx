"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { Caption } from "@/components/typography";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative aspect-[3/2] bg-gray-100">
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            />
          </div>
        </motion.div>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-[clamp(0.9375rem,0.5vw+0.8rem,1.0625rem)] font-medium text-gray-900">
          {project.title}
        </h3>
        <Caption>
          {project.location}, {project.year}
        </Caption>
      </div>
    </Link>
  );
}
