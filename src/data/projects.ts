import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "casa-miradora",
    title: "Casa Miradora",
    description: {
      en: "A private residence that frames the landscape through carefully positioned openings. The design establishes a dialogue between domestic life and the surrounding terrain, using concrete and timber to create spaces that feel both grounded and open.\n\nThe house is organized along a single axis, with living spaces opening to the west and private rooms oriented east. A central courtyard brings light deep into the plan.",
      es: "Una residencia privada que enmarca el paisaje a traves de aberturas cuidadosamente posicionadas. El diseno establece un dialogo entre la vida domestica y el terreno circundante, usando concreto y madera para crear espacios que se sienten enraizados y abiertos.\n\nLa casa se organiza a lo largo de un eje unico, con espacios de estar abiertos al oeste y habitaciones privadas orientadas al este. Un patio central trae luz profunda al plano.",
    },
    typology: "residential",
    location: "Medellin, Colombia",
    year: "2024",
    status: "completed",
    area: "320 m2",
    client: "Private",
    heroImage: {
      src: "/images/projects/casa-miradora/hero.jpg",
      alt: "Casa Miradora exterior view",
      width: 1920,
      height: 1280,
    },
    galleryImages: [
      { src: "/images/projects/casa-miradora/01.jpg", alt: "Living room facing west", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/casa-miradora/02.jpg", alt: "Central courtyard", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/casa-miradora/03.jpg", alt: "Timber staircase detail", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/casa-miradora/04.jpg", alt: "West facade at dusk", width: 1920, height: 1280, layout: "full" },
    ],
    featured: true,
  },
  {
    slug: "centro-cultural-la-ceiba",
    title: "Centro Cultural La Ceiba",
    description: {
      en: "A cultural center designed to serve as a civic anchor for the community. The building's form is derived from the local tradition of gathering under large ceiba trees, translating the canopy into a sheltering roof structure.\n\nOpen-air corridors connect exhibition halls, workshops, and a small amphitheater. The use of local brick and exposed steel reflects both craft tradition and contemporary construction.",
      es: "Un centro cultural disenado para servir como ancla civica para la comunidad. La forma del edificio se deriva de la tradicion local de reunirse bajo grandes arboles de ceiba, traduciendo el dosel en una estructura de techo protector.\n\nCorredores al aire libre conectan salas de exhibicion, talleres y un pequeno anfiteatro. El uso de ladrillo local y acero expuesto refleja tanto la tradicion artesanal como la construccion contemporanea.",
    },
    typology: "cultural",
    location: "Cartagena, Colombia",
    year: "2023",
    status: "completed",
    area: "1,800 m2",
    client: "Municipal Government",
    heroImage: {
      src: "/images/projects/centro-cultural-la-ceiba/hero.jpg",
      alt: "Centro Cultural La Ceiba main entrance",
      width: 1920,
      height: 1280,
    },
    galleryImages: [
      { src: "/images/projects/centro-cultural-la-ceiba/01.jpg", alt: "Main hall interior", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/centro-cultural-la-ceiba/02.jpg", alt: "Open-air corridor", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/centro-cultural-la-ceiba/03.jpg", alt: "Amphitheater seating", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/centro-cultural-la-ceiba/04.jpg", alt: "Roof structure detail", width: 1920, height: 1280, layout: "full" },
    ],
    featured: true,
  },
  {
    slug: "biblioteca-del-rio",
    title: "Biblioteca del Rio",
    description: {
      en: "A public library positioned along the riverbank, designed to make knowledge accessible while responding to the rhythms of the water. The building steps down toward the river, creating terraced reading spaces that blur the boundary between interior and landscape.\n\nThe structure uses reinforced concrete with deep overhangs to manage the tropical climate, while perforated screens filter light into the reading rooms.",
      es: "Una biblioteca publica ubicada a lo largo de la ribera del rio, disenada para hacer el conocimiento accesible mientras responde a los ritmos del agua. El edificio desciende hacia el rio, creando espacios de lectura en terrazas que difuminan el limite entre interior y paisaje.\n\nLa estructura usa concreto reforzado con aleros profundos para manejar el clima tropical, mientras pantallas perforadas filtran la luz en las salas de lectura.",
    },
    typology: "public",
    location: "Cali, Colombia",
    year: "2024",
    status: "in-progress",
    area: "2,400 m2",
    client: "City of Cali",
    heroImage: {
      src: "/images/projects/biblioteca-del-rio/hero.jpg",
      alt: "Biblioteca del Rio riverside elevation",
      width: 1920,
      height: 1280,
    },
    galleryImages: [
      { src: "/images/projects/biblioteca-del-rio/01.jpg", alt: "Terraced reading spaces", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/biblioteca-del-rio/02.jpg", alt: "Perforated screen detail", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/biblioteca-del-rio/03.jpg", alt: "River-facing terrace", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/biblioteca-del-rio/04.jpg", alt: "Section model", width: 1920, height: 1280, layout: "full" },
    ],
  },
  {
    slug: "facultad-de-artes",
    title: "Facultad de Artes",
    description: {
      en: "An academic building for the Faculty of Arts, conceived as a series of interconnected studios organized around shared courtyards. The design prioritizes natural light and flexible space, allowing studios to open onto covered outdoor work areas.\n\nRaw concrete frames and large pivoting panels give each studio the ability to reconfigure its relationship to the courtyard throughout the day.",
      es: "Un edificio academico para la Facultad de Artes, concebido como una serie de estudios interconectados organizados alrededor de patios compartidos. El diseno prioriza la luz natural y el espacio flexible, permitiendo que los estudios se abran a areas de trabajo exteriores cubiertas.\n\nMarcos de concreto en bruto y grandes paneles pivotantes dan a cada estudio la capacidad de reconfigurar su relacion con el patio a lo largo del dia.",
    },
    typology: "academic",
    location: "Bogota, Colombia",
    year: "2022",
    status: "completed",
    area: "4,200 m2",
    client: "Universidad Nacional",
    heroImage: {
      src: "/images/projects/facultad-de-artes/hero.jpg",
      alt: "Facultad de Artes courtyard view",
      width: 1920,
      height: 1280,
    },
    galleryImages: [
      { src: "/images/projects/facultad-de-artes/01.jpg", alt: "Studio interior with pivoting panels", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/facultad-de-artes/02.jpg", alt: "Covered outdoor work area", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/facultad-de-artes/03.jpg", alt: "Concrete frame detail", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/facultad-de-artes/04.jpg", alt: "Aerial courtyard view", width: 1920, height: 1280, layout: "full" },
    ],
  },
  {
    slug: "torre-san-martin",
    title: "Torre San Martin",
    description: {
      en: "A mixed-use commercial tower that reinterprets the typology of the urban office building. The facade is composed of a modular precast system that provides solar shading while creating a strong visual rhythm on the street.\n\nGround-floor retail opens directly to the sidewalk through full-height glazing, while upper floors are set back to reduce the building's perceived mass.",
      es: "Una torre comercial de uso mixto que reinterpreta la tipologia del edificio de oficinas urbano. La fachada se compone de un sistema prefabricado modular que proporciona proteccion solar mientras crea un ritmo visual fuerte en la calle.\n\nEl comercio en planta baja se abre directamente a la acera a traves de acristalamiento de altura completa, mientras los pisos superiores estan retranqueados para reducir la masa percibida del edificio.",
    },
    typology: "commercial",
    location: "Bogota, Colombia",
    year: "2023",
    status: "completed",
    area: "8,600 m2",
    client: "Grupo Argos",
    heroImage: {
      src: "/images/projects/torre-san-martin/hero.jpg",
      alt: "Torre San Martin street elevation",
      width: 1920,
      height: 1280,
    },
    galleryImages: [
      { src: "/images/projects/torre-san-martin/01.jpg", alt: "Precast facade detail", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/torre-san-martin/02.jpg", alt: "Ground floor retail", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/torre-san-martin/03.jpg", alt: "Typical office floor", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/torre-san-martin/04.jpg", alt: "Tower from plaza", width: 1920, height: 1280, layout: "full" },
    ],
  },
  {
    slug: "refugio-guatape",
    title: "Refugio Guatape",
    description: {
      en: "A weekend retreat set among the rock formations near Guatape. The house is organized as three pavilions connected by covered walkways, each oriented to capture a different view of the reservoir.\n\nLocal stone foundations anchor the pavilions to the terrain, while lightweight timber frames and corrugated metal roofs allow the structures to sit lightly on the landscape.",
      es: "Un refugio de fin de semana ubicado entre las formaciones rocosas cerca de Guatape. La casa se organiza como tres pabellones conectados por pasarelas cubiertas, cada uno orientado para capturar una vista diferente del embalse.\n\nCimientos de piedra local anclan los pabellones al terreno, mientras marcos ligeros de madera y techos de metal corrugado permiten que las estructuras se asienten suavemente en el paisaje.",
    },
    typology: "residential",
    location: "Guatape, Colombia",
    year: "2024",
    status: "competition",
    area: "180 m2",
    heroImage: {
      src: "/images/projects/refugio-guatape/hero.jpg",
      alt: "Refugio Guatape overlooking reservoir",
      width: 1920,
      height: 1280,
    },
    galleryImages: [
      { src: "/images/projects/refugio-guatape/01.jpg", alt: "Main pavilion interior", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/refugio-guatape/02.jpg", alt: "Covered walkway between pavilions", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/refugio-guatape/03.jpg", alt: "Stone foundation detail", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/refugio-guatape/04.jpg", alt: "View from sleeping pavilion", width: 1920, height: 1280, layout: "full" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
