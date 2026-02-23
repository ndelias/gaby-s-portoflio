import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "centro-cultural-la-ceiba",
    title: "Desert Fabric 2025",
    description: {
      en: "A cultural center designed to serve as a civic anchor for the community. The building's form is derived from the local tradition of gathering under large ceiba trees, translating the canopy into a sheltering roof structure.\n\nOpen-air corridors connect exhibition halls, workshops, and a small amphitheater. The use of local brick and exposed steel reflects both craft tradition and contemporary construction.",
      es: "Un centro cultural disenado para servir como ancla civica para la comunidad. La forma del edificio se deriva de la tradicion local de reunirse bajo grandes arboles de ceiba, traduciendo el dosel en una estructura de techo protector.\n\nCorredores al aire libre conectan salas de exhibicion, talleres y un pequeno anfiteatro. El uso de ladrillo local y acero expuesto refleja tanto la tradicion artesanal como la construccion contemporanea.",
    },
    excerpt: {
      en: "A cultural center designed to serve as a civic anchor for the community.",
      es: "Un centro cultural disenado para servir como ancla civica para la comunidad.",
    },
    typology: "cultural",
    location: "Cartagena, Colombia",
    year: "2023",
    status: "completed",
    area: "1,800 m2",
    client: "Municipal Government",
    heroImage: {
      src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2400/desert-fabric-2025/site%20axonometric",
      alt: "Desert Fabric 2025 main view",
      width: 4000,
      height: 2924,
    },
    galleryImages: [
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2400/desert-fabric-2025/site%20axonometric", alt: "Site axonometric", title: "Site Axonometric", width: 4000, height: 2924, layout: "full" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/c_pad,ar_0.92,b_white,f_auto,q_auto:best,w_2000/desert-fabric-2025/site%20plan", alt: "Site plan", title: "Site Plan", width: 5955, height: 6480, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2000/desert-fabric-2025/landscape-diagram", alt: "Landscape diagram", title: "Landscape Diagram", width: 5955, height: 6480, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2000/desert-fabric-2025/structural-diagram", alt: "Structural diagram", title: "Structural Diagram", width: 7651, height: 4309, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2000/desert-fabric-2025/cut%20plan", alt: "Cut plan", title: "Cut Plan", width: 10115, height: 5396, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2000/desert-fabric-2025/circulation%20diagram", alt: "Circulation diagram", title: "Circulation Diagram", width: 6960, height: 4648, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2000/desert-fabric-2025/topography%20diagram", alt: "Topography diagram", title: "Topography Diagram", width: 4000, height: 1711, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2400/desert-fabric-2025/massing%20chunk", alt: "Massing chunk", title: "Massing Chunk", width: 11816, height: 5909, layout: "full" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2400/desert-fabric-2025/long%20section%20perspective", alt: "Long section perspective", title: "Long Section Perspective", width: 15539, height: 1815, layout: "full" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/c_crop,g_south,h_1400/f_auto,q_auto:best,w_2000/desert-fabric-2025/section%20perspective", alt: "Section perspective", title: "Section Perspective", width: 5731, height: 1400, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2000/desert-fabric-2025/elevation", alt: "Elevation", title: "Elevation", width: 5661, height: 1977, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2000/desert-fabric-2025/perspective", alt: "Perspective", title: "Perspective", width: 9590, height: 5708, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2000/desert-fabric-2025/perspective-2", alt: "Perspective 2", title: "Perspective 2", width: 9590, height: 5708, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_1400/desert-fabric-2025/concrete%20detail", alt: "Concrete detail", title: "Concrete Detail", width: 5281, height: 3952, layout: "third" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_1400/desert-fabric-2025/concrete%20and%20glass", alt: "Concrete and glass", title: "Concrete and Glass", width: 5320, height: 3960, layout: "third" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_1400/desert-fabric-2025/concrete%20and%20foundation", alt: "Concrete and foundation", title: "Concrete and Foundation", width: 5353, height: 3960, layout: "third" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2000/desert-fabric-2025/wall%20section%20detail", alt: "Wall section detail", title: "Wall Section Detail", width: 12727, height: 6532, layout: "half" },
      { src: "https://res.cloudinary.com/ddh4de7hy/image/upload/f_auto,q_auto:best,w_2000/desert-fabric-2025/foundation%20section%20detail", alt: "Foundation section detail", title: "Foundation Section Detail", width: 11760, height: 6647, layout: "half" },
    ],
    featured: true,
  },
  {
    slug: "biblioteca-del-rio",
    title: "Falda Cielo 2025",
    description: {
      en: "A public library positioned along the riverbank, designed to make knowledge accessible while responding to the rhythms of the water. The building steps down toward the river, creating terraced reading spaces that blur the boundary between interior and landscape.\n\nThe structure uses reinforced concrete with deep overhangs to manage the tropical climate, while perforated screens filter light into the reading rooms.",
      es: "Una biblioteca publica ubicada a lo largo de la ribera del rio, disenada para hacer el conocimiento accesible mientras responde a los ritmos del agua. El edificio desciende hacia el rio, creando espacios de lectura en terrazas que difuminan el limite entre interior y paisaje.\n\nLa estructura usa concreto reforzado con aleros profundos para manejar el clima tropical, mientras pantallas perforadas filtran la luz en las salas de lectura.",
    },
    excerpt: {
      en: "A public library along the riverbank, designed to make knowledge accessible.",
      es: "Una biblioteca publica a lo largo de la ribera, disenada para hacer el conocimiento accesible.",
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
      width: 1533,
      height: 648,
    },
    galleryImages: [
      { src: "/images/projects/biblioteca-del-rio/01.jpg", alt: "Terraced reading spaces", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/biblioteca-del-rio/02.jpg", alt: "Perforated screen detail", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/biblioteca-del-rio/03.jpg", alt: "River-facing terrace", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/biblioteca-del-rio/04.jpg", alt: "Section model", width: 1920, height: 1280, layout: "full" },
    ],
  },
  {
    slug: "refugio-guatape",
    title: "Teatro Blanquita Revival 2025",
    description: {
      en: "A weekend retreat set among the rock formations near Guatape. The house is organized as three pavilions connected by covered walkways, each oriented to capture a different view of the reservoir.\n\nLocal stone foundations anchor the pavilions to the terrain, while lightweight timber frames and corrugated metal roofs allow the structures to sit lightly on the landscape.",
      es: "Un refugio de fin de semana ubicado entre las formaciones rocosas cerca de Guatape. La casa se organiza como tres pabellones conectados por pasarelas cubiertas, cada uno orientado para capturar una vista diferente del embalse.\n\nCimientos de piedra local anclan los pabellones al terreno, mientras marcos ligeros de madera y techos de metal corrugado permiten que las estructuras se asienten suavemente en el paisaje.",
    },
    excerpt: {
      en: "A weekend retreat set among the rock formations near Guatape.",
      es: "Un refugio de fin de semana ubicado entre las formaciones rocosas cerca de Guatape.",
    },
    typology: "residential",
    location: "Guatape, Colombia",
    year: "2024",
    status: "competition",
    area: "180 m2",
    heroImage: {
      src: "/images/projects/refugio-guatape/hero.jpg",
      alt: "Refugio Guatape overlooking reservoir",
      width: 2048,
      height: 1180,
    },
    galleryImages: [
      { src: "/images/projects/refugio-guatape/01.jpg", alt: "Main pavilion interior", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/refugio-guatape/02.jpg", alt: "Covered walkway between pavilions", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/refugio-guatape/03.jpg", alt: "Stone foundation detail", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/refugio-guatape/04.jpg", alt: "View from sleeping pavilion", width: 1920, height: 1280, layout: "full" },
    ],
  },
  {
    slug: "torre-san-martin",
    title: "Pasadena Play Revival 2024",
    description: {
      en: "A mixed-use commercial tower that reinterprets the typology of the urban office building. The facade is composed of a modular precast system that provides solar shading while creating a strong visual rhythm on the street.\n\nGround-floor retail opens directly to the sidewalk through full-height glazing, while upper floors are set back to reduce the building's perceived mass.",
      es: "Una torre comercial de uso mixto que reinterpreta la tipologia del edificio de oficinas urbano. La fachada se compone de un sistema prefabricado modular que proporciona proteccion solar mientras crea un ritmo visual fuerte en la calle.\n\nEl comercio en planta baja se abre directamente a la acera a traves de acristalamiento de altura completa, mientras los pisos superiores estan retranqueados para reducir la masa percibida del edificio.",
    },
    excerpt: {
      en: "A mixed-use tower that reinterprets the typology of the urban office building.",
      es: "Una torre de uso mixto que reinterpreta la tipologia del edificio de oficinas urbano.",
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
      width: 1584,
      height: 792,
    },
    galleryImages: [
      { src: "/images/projects/torre-san-martin/01.jpg", alt: "Precast facade detail", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/torre-san-martin/02.jpg", alt: "Ground floor retail", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/torre-san-martin/03.jpg", alt: "Typical office floor", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/torre-san-martin/04.jpg", alt: "Tower from plaza", width: 1920, height: 1280, layout: "full" },
    ],
  },
  {
    slug: "the-journey",
    title: "The Journey 2024",
    description: {
      en: "A spatial narrative exploring movement, memory, and place. The project traces a path through a sequence of environments, each designed to evoke a distinct emotional response through material, light, and proportion.\n\nThe journey unfolds as a procession of thresholds, compressions, and expansions that guide the visitor through an evolving architectural experience.",
      es: "Una narrativa espacial que explora el movimiento, la memoria y el lugar. El proyecto traza un camino a traves de una secuencia de ambientes, cada uno disenado para evocar una respuesta emocional distinta a traves del material, la luz y la proporcion.\n\nEl recorrido se despliega como una procesion de umbrales, compresiones y expansiones que guian al visitante a traves de una experiencia arquitectonica en evolucion.",
    },
    excerpt: {
      en: "A spatial narrative exploring movement, memory, and place.",
      es: "Una narrativa espacial que explora el movimiento, la memoria y el lugar.",
    },
    typology: "cultural",
    location: "Los Angeles, USA",
    year: "2024",
    status: "completed",
    area: "500 m2",
    heroImage: {
      src: "/images/projects/the-journey/hero.jpg",
      alt: "The Journey entrance view",
      width: 1584,
      height: 792,
    },
    galleryImages: [
      { src: "/images/projects/the-journey/01.jpg", alt: "First threshold", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/the-journey/02.jpg", alt: "Compression corridor", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/the-journey/03.jpg", alt: "Light chamber", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/the-journey/04.jpg", alt: "Final expansion", width: 1920, height: 1280, layout: "full" },
    ],
  },
  {
    slug: "facultad-de-artes",
    title: "LA 28 Concession Stand 2023",
    description: {
      en: "An academic building for the Faculty of Arts, conceived as a series of interconnected studios organized around shared courtyards. The design prioritizes natural light and flexible space, allowing studios to open onto covered outdoor work areas.\n\nRaw concrete frames and large pivoting panels give each studio the ability to reconfigure its relationship to the courtyard throughout the day.",
      es: "Un edificio academico para la Facultad de Artes, concebido como una serie de estudios interconectados organizados alrededor de patios compartidos. El diseno prioriza la luz natural y el espacio flexible, permitiendo que los estudios se abran a areas de trabajo exteriores cubiertas.\n\nMarcos de concreto en bruto y grandes paneles pivotantes dan a cada estudio la capacidad de reconfigurar su relacion con el patio a lo largo del dia.",
    },
    excerpt: {
      en: "An academic building conceived as interconnected studios around shared courtyards.",
      es: "Un edificio academico concebido como estudios interconectados alrededor de patios compartidos.",
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
      width: 1584,
      height: 792,
    },
    galleryImages: [
      { src: "/images/projects/facultad-de-artes/01.jpg", alt: "Studio interior with pivoting panels", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/facultad-de-artes/02.jpg", alt: "Covered outdoor work area", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/facultad-de-artes/03.jpg", alt: "Concrete frame detail", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/facultad-de-artes/04.jpg", alt: "Aerial courtyard view", width: 1920, height: 1280, layout: "full" },
    ],
  },
  {
    slug: "casa-miradora",
    title: "Alleyway 2021",
    description: {
      en: "A private residence that frames the landscape through carefully positioned openings. The design establishes a dialogue between domestic life and the surrounding terrain, using concrete and timber to create spaces that feel both grounded and open.\n\nThe house is organized along a single axis, with living spaces opening to the west and private rooms oriented east. A central courtyard brings light deep into the plan.",
      es: "Una residencia privada que enmarca el paisaje a traves de aberturas cuidadosamente posicionadas. El diseno establece un dialogo entre la vida domestica y el terreno circundante, usando concreto y madera para crear espacios que se sienten enraizados y abiertos.\n\nLa casa se organiza a lo largo de un eje unico, con espacios de estar abiertos al oeste y habitaciones privadas orientadas al este. Un patio central trae luz profunda al plano.",
    },
    excerpt: {
      en: "A private residence that frames the landscape through carefully positioned openings.",
      es: "Una residencia privada que enmarca el paisaje a traves de aberturas cuidadosamente posicionadas.",
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
      width: 1584,
      height: 792,
    },
    galleryImages: [
      { src: "/images/projects/casa-miradora/01.jpg", alt: "Living room facing west", width: 1920, height: 1280, layout: "full" },
      { src: "/images/projects/casa-miradora/02.jpg", alt: "Central courtyard", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/casa-miradora/03.jpg", alt: "Timber staircase detail", width: 960, height: 640, layout: "half" },
      { src: "/images/projects/casa-miradora/04.jpg", alt: "West facade at dusk", width: 1920, height: 1280, layout: "full" },
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
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
