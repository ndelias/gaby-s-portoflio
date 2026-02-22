"use client";

import { cn } from "@/lib/utils";

type DisplaySize = "xl" | "lg";

interface DisplayProps {
  children: React.ReactNode;
  size?: DisplaySize;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

const sizeStyles: Record<DisplaySize, string> = {
  xl: "text-[clamp(3rem,5vw+1rem,6rem)] leading-[0.95] font-semibold tracking-[-0.03em]",
  lg: "text-[clamp(2.25rem,3.5vw+0.5rem,4rem)] leading-[1] font-semibold tracking-[-0.025em]",
};

export function Display({
  children,
  size = "xl",
  as: Tag = "h1",
  className,
}: DisplayProps) {
  return (
    <Tag className={cn(sizeStyles[size], "text-gray-900", className)}>
      {children}
    </Tag>
  );
}
