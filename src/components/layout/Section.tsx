"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
}

const gapStyles = {
  sm: "py-[calc(var(--section-gap-sm)/2)]",
  md: "py-[calc(var(--section-gap-md)/2)]",
  lg: "py-[calc(var(--section-gap-lg)/2)]",
};

export function Section({
  children,
  className,
  gap = "md",
}: SectionProps) {
  return (
    <section className={cn(gapStyles[gap], className)}>
      {children}
    </section>
  );
}
