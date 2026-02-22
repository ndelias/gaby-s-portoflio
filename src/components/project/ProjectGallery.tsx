"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ProjectImage } from "@/types";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const rows: ProjectImage[][] = [];
  let i = 0;

  while (i < images.length) {
    const img = images[i];
    if (img.layout === "full") {
      rows.push([img]);
      i++;
    } else {
      const pair: ProjectImage[] = [img];
      if (i + 1 < images.length && images[i + 1].layout === "half") {
        pair.push(images[i + 1]);
        i += 2;
      } else {
        i++;
      }
      rows.push(pair);
    }
  }

  return (
    <div className="flex flex-col gap-[var(--grid-gutter)]">
      {rows.map((row, rowIndex) => {
        if (row.length === 1) {
          const img = row[0];
          return (
            <ScrollReveal key={rowIndex}>
              <div className="relative aspect-[3/2] bg-gray-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </ScrollReveal>
          );
        }

        return (
          <div
            key={rowIndex}
            className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--grid-gutter)]"
          >
            {row.map((img, imgIndex) => (
              <ScrollReveal key={imgIndex} delay={imgIndex * 0.1}>
                <div className="relative aspect-[3/2] bg-gray-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 639px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        );
      })}
    </div>
  );
}
