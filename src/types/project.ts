export type ProjectTypology =
  | "residential"
  | "cultural"
  | "academic"
  | "commercial"
  | "public"
  | "adaptive reuse";


export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: "wide" | "full" | "medium" | "small" | "half" | "third" | "tall-left";
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
  program?: string;
  location: string;
  year: string;

  client?: string;
  coverImage?: ProjectImage;
  heroImage: ProjectImage;
  galleryImages: ProjectImage[];
  featured?: boolean;
}
