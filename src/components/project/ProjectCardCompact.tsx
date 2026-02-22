"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardCompactProps {
  project: Project;
}

export function ProjectCardCompact({ project }: ProjectCardCompactProps) {
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
              sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
            />
          </div>
        </motion.div>
      </div>
      <div className="mt-2">
        <h3 className="text-[clamp(0.75rem,0.3vw+0.65rem,0.8125rem)] font-medium text-gray-900">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
