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

function getDepth(path: string) {
  return path.split("/").filter(Boolean).length;
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
      const prevDepth = getDepth(prevPathRef.current);
      const currDepth = getDepth(pathname);

      if (currDepth > prevDepth) {
        directionRef.current = "forward";
      } else if (currDepth < prevDepth) {
        // Going back to a shallower route (e.g. home) — fade only
        directionRef.current = "fade";
      } else {
        // Same depth (e.g. project→project) — default to forward
        directionRef.current = "forward";
      }
    }

    prevPathRef.current = pathname;
  }

  return (
    <NavigationDirectionContext.Provider value={{ direction: directionRef.current, setDirection, prepareTransition, unfreezeViewport }}>
      {children}
    </NavigationDirectionContext.Provider>
  );
}
