"use client";

import { GridContainer } from "@/components/layout/GridContainer";
import { Section } from "@/components/layout/Section";
import { StudioPortrait } from "@/components/about/StudioPortrait";
import { StudioBio } from "@/components/about/StudioBio";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Divider } from "@/components/ui/Divider";
import { Display, Heading, Body, Label, Caption } from "@/components/typography";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { useTranslation } from "@/hooks/useTranslation";

const education = [
  {
    degree: "Master of Architecture",
    institution: "Universidad Nacional de Colombia",
    year: "2018",
  },
  {
    degree: "Bachelor of Architecture",
    institution: "Universidad de los Andes",
    year: "2015",
  },
];

const experience = [
  {
    role: "Principal Architect",
    studio: "Independent Practice",
    period: "2022 — Present",
    location: "Bogota, Colombia",
  },
  {
    role: "Project Architect",
    studio: "Giancarlo Mazzanti Arquitectos",
    period: "2020 — 2022",
    location: "Bogota, Colombia",
  },
  {
    role: "Design Architect",
    studio: "Peter Zumthor Atelier",
    period: "2018 — 2020",
    location: "Haldenstein, Switzerland",
  },
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Section gap="sm">
      <GridContainer>
        <div className="mb-12 sm:mb-16">
          <Display size="lg" as="h1">
            {t.about.title}
          </Display>
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-[var(--grid-gutter)] gap-y-10">
            <div className="col-span-4 lg:col-span-4">
              <StudioPortrait />
            </div>
            <div className="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6">
              <StudioBio />
            </div>
          </div>
        </ScrollReveal>

        <Divider className="my-16 sm:my-24" />

        <ScrollReveal>
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-[var(--grid-gutter)] gap-y-10">
            <div className="col-span-4 lg:col-span-3">
              <Heading as="h2">{t.about.education}</Heading>
            </div>
            <div className="col-span-4 sm:col-span-8 lg:col-span-8 lg:col-start-5">
              <div className="flex flex-col gap-6">
                {education.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-[length:var(--text-body)] font-medium text-gray-900">
                      {item.degree}
                    </span>
                    <Caption as="p">{item.institution}</Caption>
                    <Caption as="p">{item.year}</Caption>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <Divider className="my-16 sm:my-24" />

        <ScrollReveal>
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-[var(--grid-gutter)] gap-y-10">
            <div className="col-span-4 lg:col-span-3">
              <Heading as="h2">{t.about.experience}</Heading>
            </div>
            <div className="col-span-4 sm:col-span-8 lg:col-span-8 lg:col-start-5">
              <div className="flex flex-col gap-6">
                {experience.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-[length:var(--text-body)] font-medium text-gray-900">
                      {item.role}
                    </span>
                    <Caption as="p">{item.studio}</Caption>
                    <Caption as="p">
                      {item.period} — {item.location}
                    </Caption>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <Divider className="my-16 sm:my-24" />

        <ScrollReveal>
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-[var(--grid-gutter)] gap-y-10">
            <div className="col-span-4 lg:col-span-3">
              <Heading as="h2">{t.about.contact}</Heading>
            </div>
            <div className="col-span-4 sm:col-span-8 lg:col-span-8 lg:col-start-5">
              <div className="flex flex-col gap-4">
                <div>
                  <Label className="block mb-1">Email</Label>
                  <ExternalLink href="mailto:hello@gaby-arch.com">
                    hello@gaby-arch.com
                  </ExternalLink>
                </div>
                <div>
                  <Label className="block mb-1">Instagram</Label>
                  <ExternalLink href="https://instagram.com/gaby.arch">
                    @gaby.arch
                  </ExternalLink>
                </div>
                <div>
                  <Label className="block mb-1">LinkedIn</Label>
                  <ExternalLink href="https://linkedin.com/in/gaby-architect">
                    Gaby
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </GridContainer>
    </Section>
  );
}
