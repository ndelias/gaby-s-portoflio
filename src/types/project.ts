export type ProjectTypology =
  | "residential"
  | "cultural"
  | "academic"
  | "commercial"
  | "public";

export type ProjectStatus = "completed" | "in-progress" | "competition";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: "full" | "half" | "third";
  title?: string;
  rotate?: number;
}

export interface Project {
  slug: string;
  title: string;
  description: {
    en: string;
    es: string;
  };
  excerpt: {
    en: string;
    es: string;
  };
  typology: ProjectTypology;
  location: string;
  year: string;
  status: ProjectStatus;
  area?: string;
  client?: string;
  heroImage: ProjectImage;
  galleryImages: ProjectImage[];
  featured?: boolean;
}
