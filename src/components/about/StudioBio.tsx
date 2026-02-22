"use client";

import { Body } from "@/components/typography";
import { useTranslation } from "@/hooks/useTranslation";

const bio = {
  en: [
    "Gaby is an architect based in Bogota, Colombia, working across residential, cultural, and public projects. Her practice focuses on the relationship between built form and landscape, seeking spatial clarity through material honesty and restrained composition.",
    "Her work draws from the traditions of Latin American modernism while engaging contemporary questions of sustainability, community, and place. Each project begins with close attention to site, climate, and the daily patterns of inhabitation.",
    "She holds a Master of Architecture from Universidad Nacional de Colombia and has practiced with studios in Bogota, Medellin, and Zurich.",
  ],
  es: [
    "Gaby es una arquitecta con base en Bogota, Colombia, trabajando en proyectos residenciales, culturales y publicos. Su practica se enfoca en la relacion entre forma construida y paisaje, buscando claridad espacial a traves de honestidad material y composicion contenida.",
    "Su trabajo se nutre de las tradiciones del modernismo latinoamericano mientras aborda preguntas contemporaneas de sostenibilidad, comunidad y lugar. Cada proyecto comienza con atencion cercana al sitio, clima y los patrones cotidianos de habitacion.",
    "Tiene una Maestria en Arquitectura de la Universidad Nacional de Colombia y ha practicado con estudios en Bogota, Medellin y Zurich.",
  ],
};

export function StudioBio() {
  const { locale } = useTranslation();
  const paragraphs = bio[locale];

  return (
    <div className="flex flex-col gap-5">
      {paragraphs.map((text, i) => (
        <Body key={i}>{text}</Body>
      ))}
    </div>
  );
}
