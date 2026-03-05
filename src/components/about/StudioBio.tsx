"use client";

import { Body } from "@/components/typography";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { useTranslation } from "@/hooks/useTranslation";

export function StudioBio() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5">
      {t.about.bio.map((text, i) => (
        <Body key={i}>{text}</Body>
      ))}
      <Body>
        {t.about.linkedinCta}{" "}
        <ExternalLink href="https://www.linkedin.com/in/gabriella-batista-502295237/">
          LinkedIn
        </ExternalLink>
        {" — "}
        {t.about.resumeCta}{" "}
        <ExternalLink href="https://drive.google.com/file/d/1DX0oQVCOb-3o67F5T10EU8pZgB-kCYbG/view">
          {t.about.resumeLabel}
        </ExternalLink>
      </Body>
    </div>
  );
}
