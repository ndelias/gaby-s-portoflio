"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { GridContainer } from "@/components/layout/GridContainer";
import { Section } from "@/components/layout/Section";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectMeta } from "@/components/project/ProjectMeta";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Divider } from "@/components/ui/Divider";
import { Display, Body, Label } from "@/components/typography";
import { useTranslation } from "@/hooks/useTranslation";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const { locale, t } = useTranslation();
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);
  const description = project.description[locale];
  const paragraphs = description.split("\n\n");

  return (
    <div className="px-6 sm:px-12 lg:px-20 xl:px-28">
      <ProjectHero image={project.coverImage ?? project.heroImage} />

      <Section gap="md">
        <GridContainer>
          <ScrollReveal>
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-[var(--grid-gutter)] gap-y-10">
              <div className="col-span-4 lg:col-span-3">
                <Display size="lg" as="h1" className="mb-8 lg:hidden">
                  {project.title}
                </Display>
                <ProjectMeta project={project} />
              </div>
              <div className="col-span-4 sm:col-span-8 lg:col-span-8 lg:col-start-5">
                <Display size="lg" as="h1" className="mb-8 hidden lg:block">
                  {project.title}
                </Display>
                <div className="flex flex-col gap-5">
                  {paragraphs.map((paragraph, i) => (
                    <Body key={i}>{paragraph}</Body>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </GridContainer>
      </Section>

      <Section gap="sm">
        <ProjectGallery images={project.galleryImages} />
      </Section>

      <section className="py-4">
        <GridContainer>
          <Divider className="mb-4" />
          <div className="grid grid-cols-2 gap-x-[var(--grid-gutter)] items-center">
            <div>
              {previous && (
                <TransitionLink
                  href={`/projects/${previous.slug}`}
                  className="group block"
                  direction="back"
                >
                  <Label className="mb-2 block">
                    {t.projects.previousProject}
                  </Label>
                  <span className="text-[length:var(--text-body)] font-medium text-gray-900 group-hover:text-blush transition-colors duration-[200ms]">
                    {previous.title}
                  </span>
                </TransitionLink>
              )}
            </div>
            <div className="text-right">
              {next && (
                <TransitionLink
                  href={`/projects/${next.slug}`}
                  className="group block"
                  direction="forward"
                >
                  <Label className="mb-2 block">
                    {t.projects.nextProject}
                  </Label>
                  <span className="text-[length:var(--text-body)] font-medium text-gray-900 group-hover:text-blush transition-colors duration-[200ms]">
                    {next.title}
                  </span>
                </TransitionLink>
              )}
            </div>
          </div>
        </GridContainer>
      </section>
    </div>
  );
}
