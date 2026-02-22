"use client";

import { cn } from "@/lib/utils";

interface BodyProps {
  children: React.ReactNode;
  as?: "p" | "span" | "div";
  className?: string;
}

export function Body({ children, as: Tag = "p", className }: BodyProps) {
  return (
    <Tag
      className={cn(
        "text-[clamp(0.9375rem,0.5vw+0.8rem,1.0625rem)] leading-[1.6] font-normal text-gray-700",
        className
      )}
    >
      {children}
    </Tag>
  );
}
