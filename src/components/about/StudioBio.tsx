"use client";

import { Body } from "@/components/typography";
import { useTranslation } from "@/hooks/useTranslation";

export function StudioBio() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5">
      {t.about.bio.map((text, i) => (
        <Body key={i}>{text}</Body>
      ))}
    </div>
  );
}
