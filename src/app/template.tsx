"use client";

import { useLayoutEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useNavigationDirection } from "@/providers/NavigationDirectionProvider";
import { transition } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const { direction, hasNavigated, unfreezeViewport } = useNavigationDirection();
  const pathname = usePathname();

  // Unfreeze viewport + scroll to top BEFORE browser paint
  // prepareTransition already scrolled to 0 and froze the viewport in the onClick handler.
  // This useLayoutEffect fires synchronously after React commits the new DOM, before the
  // browser paints — so the user never sees the page at the wrong scroll position.
  useLayoutEffect(() => {
    unfreezeViewport();

    // Fallback: ensure scroll is at 0 for navigations that didn't go through prepareTransition
    // (e.g. browser back/forward, programmatic navigation)
    if (direction !== "fade") {
      window.scrollTo(0, 0);
    }
  }, [direction, pathname, unfreezeViewport]);

  // Skip animation on initial page load (browser refresh / direct URL).
  // Only animate on client-side navigations.
  const shouldAnimate = hasNavigated && !prefersReducedMotion;

  const isSlide = direction === "forward" || direction === "back";

  const initialX =
    direction === "forward" ? "30%" :
    direction === "back" ? "-30%" :
    0;

  return (
    <motion.div
      key={pathname}
      initial={shouldAnimate ? {
        opacity: 0,
        x: initialX,
      } : false}
      animate={{ opacity: 1, x: 0 }}
      transition={shouldAnimate
        ? (isSlide ? transition.page : transition.section)
        : { duration: 0 }
      }
    >
      {children}
    </motion.div>
  );
}
