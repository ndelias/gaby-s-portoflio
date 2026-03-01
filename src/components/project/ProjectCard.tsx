"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { Caption } from "@/components/typography";
import { transition } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={transition.element}
        >
          <div className="relative aspect-[3/2] bg-gray-100">
            <Image
              src={(project.coverImage ?? project.heroImage).src}
              alt={(project.coverImage ?? project.heroImage).alt}
              fill
              className="object-cover"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            />
          </div>
        </motion.div>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-[length:var(--text-body)] font-medium text-gray-900">
          {project.title}
        </h3>
        <Caption>
          {project.location}, {project.year}
        </Caption>
      </div>
    </Link>
  );
}
