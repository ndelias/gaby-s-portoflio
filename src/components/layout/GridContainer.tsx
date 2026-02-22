"use client";

import { cn } from "@/lib/utils";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

export function GridContainer({
  children,
  className,
  as: Tag = "div",
}: GridContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[var(--grid-max-width)] px-[var(--grid-margin)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
