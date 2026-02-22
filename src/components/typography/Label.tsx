"use client";

import { cn } from "@/lib/utils";

interface LabelProps {
  children: React.ReactNode;
  as?: "span" | "p" | "dt";
  className?: string;
}

export function Label({ children, as: Tag = "span", className }: LabelProps) {
  return (
    <Tag
      className={cn(
        "text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] leading-[1.5] font-medium uppercase tracking-[0.1em] text-gray-500",
        className
      )}
    >
      {children}
    </Tag>
  );
}
