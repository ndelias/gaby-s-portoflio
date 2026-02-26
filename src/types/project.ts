export type ProjectTypology =
  | "residential"
  | "cultural"
  | "academic"
  | "commercial"
  | "public";


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

  client?: string;
  heroImage: ProjectImage;
  galleryImages: ProjectImage[];
  featured?: boolean;
}
