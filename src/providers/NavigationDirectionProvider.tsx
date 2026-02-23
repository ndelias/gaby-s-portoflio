"use client";

import { createContext, useContext, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

type Direction = "forward" | "back" | "fade";

interface NavigationDirectionContextValue {
  direction: Direction;
  setDirection: (dir: Direction) => void;
}

const NavigationDirectionContext = createContext<NavigationDirectionContextValue>({
  direction: "forward",
  setDirection: () => {},
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

  const setDirection = useCallback((dir: Direction) => {
    explicitRef.current = dir;
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
    <NavigationDirectionContext.Provider value={{ direction: directionRef.current, setDirection }}>
      {children}
    </NavigationDirectionContext.Provider>
  );
}
