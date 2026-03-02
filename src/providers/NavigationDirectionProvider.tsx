"use client";

import { createContext, useContext, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

export type Direction = "forward" | "back" | "fade";

interface NavigationDirectionContextValue {
  direction: Direction;
  setDirection: (dir: Direction) => void;
  prepareTransition: (dir?: Direction) => void;
  unfreezeViewport: () => void;
}

const NavigationDirectionContext = createContext<NavigationDirectionContextValue>({
  direction: "forward",
  setDirection: () => {},
  prepareTransition: () => {},
  unfreezeViewport: () => {},
});

export function useNavigationDirection() {
  return useContext(NavigationDirectionContext);
}

// Logical left-to-right order of top-level pages
const PAGE_ORDER: Record<string, number> = {
  "/": 0,
  "/projects": 1,
  "/about": 2,
};

function getDepth(path: string) {
  return path.split("/").filter(Boolean).length;
}

function getPageOrder(path: string): number {
  if (PAGE_ORDER[path] !== undefined) return PAGE_ORDER[path];
  const base = "/" + path.split("/").filter(Boolean)[0];
  if (PAGE_ORDER[base] !== undefined) return PAGE_ORDER[base];
  return 1;
}

/** Compute slide direction between two paths (used by TransitionLink and auto-inference). */
export function getNavigationDirection(from: string, to: string): Direction {
  const fromDepth = getDepth(from);
  const toDepth = getDepth(to);

  if (toDepth > fromDepth) return "forward";
  if (toDepth < fromDepth) return "back";

  // Same depth — use page order
  const fromOrder = getPageOrder(from);
  const toOrder = getPageOrder(to);
  return toOrder >= fromOrder ? "forward" : "back";
}

export function NavigationDirectionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);
  const directionRef = useRef<Direction>("forward");
  const explicitRef = useRef<Direction | null>(null);
  const frozenRef = useRef(false);

  const setDirection = useCallback((dir: Direction) => {
    explicitRef.current = dir;
  }, []);

  // Freeze the viewport visually, scroll to 0 invisibly, then let the new page animate in
  const prepareTransition = useCallback((dir: Direction = "forward") => {
    explicitRef.current = dir;

    // Only freeze for slide transitions (forward/back), not fade
    if (dir === "fade") return;

    const scrollY = window.scrollY;
    if (scrollY <= 0) return;

    const main = document.querySelector("main");
    if (!main) return;

    // Fix main in place at its current visual position
    main.style.position = "fixed";
    main.style.top = `-${scrollY}px`;
    main.style.left = "0";
    main.style.right = "0";
    main.style.width = "100%";
    document.body.style.overflow = "hidden";

    // Scroll to top — invisible because main is fixed
    window.scrollTo(0, 0);
    frozenRef.current = true;
  }, []);

  // Called by template.tsx in useLayoutEffect (before paint) to restore normal flow
  const unfreezeViewport = useCallback(() => {
    if (!frozenRef.current) return;

    const main = document.querySelector("main");
    if (main) {
      main.style.position = "";
      main.style.top = "";
      main.style.left = "";
      main.style.right = "";
      main.style.width = "";
    }
    document.body.style.overflow = "";
    frozenRef.current = false;
  }, []);

  if (prevPathRef.current !== pathname) {
    if (explicitRef.current !== null) {
      directionRef.current = explicitRef.current;
      explicitRef.current = null;
    } else {
      // Auto-infer direction using depth + page order
      directionRef.current = getNavigationDirection(prevPathRef.current, pathname);
    }

    prevPathRef.current = pathname;
  }

  return (
    <NavigationDirectionContext.Provider value={{ direction: directionRef.current, setDirection, prepareTransition, unfreezeViewport }}>
      {children}
    </NavigationDirectionContext.Provider>
  );
}
