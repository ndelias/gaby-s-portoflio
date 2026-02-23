"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useNavigationDirection } from "@/providers/NavigationDirectionProvider";
import { transition } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const { direction } = useNavigationDirection();
  const pathname = usePathname();

  // Scroll to top for forward and back (project-to-project), not for fade (back to home)
  useEffect(() => {
    if (direction !== "fade") {
      window.scrollTo(0, 0);
    }
  }, [direction, pathname]);

  const isSlide = direction === "forward" || direction === "back";

  const initialX =
    direction === "forward" ? "30%" :
    direction === "back" ? "-30%" :
    0;

  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: prefersReducedMotion ? 1 : 0,
        x: prefersReducedMotion ? 0 : initialX,
      }}
      animate={{ opacity: 1, x: 0 }}
      transition={prefersReducedMotion
        ? { duration: 0 }
        : isSlide ? transition.page : transition.section
      }
    >
      {children}
    </motion.div>
  );
}
