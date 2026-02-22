export type Locale = "en" | "es";

export interface TranslationStrings {
  nav: {
    home: string;
    projects: string;
    about: string;
  };
  home: {
    selectedWork: string;
    viewAll: string;
    immersive: string;
    compact: string;
  };
  projects: {
    title: string;
    all: string;
    residential: string;
    cultural: string;
    academic: string;
    commercial: string;
    public: string;
    grid: string;
    list: string;
    typology: string;
    location: string;
    year: string;
    status: string;
    area: string;
    client: string;
    previousProject: string;
    nextProject: string;
  };
  about: {
    title: string;
    education: string;
    experience: string;
    contact: string;
  };
  common: {
    backToTop: string;
  };
}

export type Translations = Record<Locale, TranslationStrings>;
