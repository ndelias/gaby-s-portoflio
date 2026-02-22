"use client";

import { cn } from "@/lib/utils";

interface CaptionProps {
  children: React.ReactNode;
  as?: "span" | "p" | "time";
  className?: string;
}

export function Caption({ children, as: Tag = "span", className }: CaptionProps) {
  return (
    <Tag
      className={cn(
        "text-[clamp(0.75rem,0.3vw+0.65rem,0.8125rem)] leading-[1.5] font-light text-gray-500",
        className
      )}
    >
      {children}
    </Tag>
  );
}
