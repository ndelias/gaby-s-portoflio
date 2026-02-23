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
        "text-[length:var(--text-label)] leading-[1.5] font-medium uppercase tracking-[0.1em] text-gray-500",
        className
      )}
    >
      {children}
    </Tag>
  );
}
