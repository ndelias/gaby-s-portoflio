"use client";

import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
}

export function Heading({
  children,
  as: Tag = "h2",
  className,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "text-[clamp(1.25rem,1.5vw+0.5rem,1.75rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-gray-900",
        className
      )}
    >
      {children}
    </Tag>
  );
}
