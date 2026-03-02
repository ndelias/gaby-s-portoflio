"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useNavigationDirection, type Direction } from "@/providers/NavigationDirectionProvider";

interface TransitionLinkProps extends ComponentProps<typeof Link> {
  direction?: Direction;
}

/**
 * Drop-in replacement for next/link that freezes the viewport before navigation,
 * preventing visible scroll-to-top during page slide transitions.
 */
export function TransitionLink({
  direction = "forward",
  onClick,
  ...props
}: TransitionLinkProps) {
  const { prepareTransition } = useNavigationDirection();

  return (
    <Link
      {...props}
      onClick={(e) => {
        prepareTransition(direction);
        onClick?.(e);
      }}
    />
  );
}
