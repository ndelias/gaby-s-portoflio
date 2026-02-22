"use client";

import { createContext, useCallback, useState, useEffect } from "react";

export type LogoAnimationPhase =
  | "idle"
  | "loading"
  | "playing"
  | "transitioning"
  | "complete";

interface LogoAnimationContextValue {
  phase: LogoAnimationPhase;
  setPhase: (phase: LogoAnimationPhase) => void;
  navbarLogoRect: DOMRect | null;
  setNavbarLogoRect: (rect: DOMRect | null) => void;
}

export const LogoAnimationContext = createContext<LogoAnimationContextValue>({
  phase: "loading",
  setPhase: () => {},
  navbarLogoRect: null,
  setNavbarLogoRect: () => {},
});

const STORAGE_KEY = "portfolio-has-visited";

export function LogoAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Start as "loading" so the white overlay is visible from the very first
  // paint.  After hydration we check sessionStorage — returning visitors get
  // switched to "idle" immediately, first-time visitors stay in "loading".
  const [phase, setPhaseState] = useState<LogoAnimationPhase>("loading");
  const [navbarLogoRect, setNavbarLogoRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem(STORAGE_KEY);
    if (hasVisited) {
      setPhaseState("idle");
    }
  }, []);

  const setPhase = useCallback((newPhase: LogoAnimationPhase) => {
    setPhaseState(newPhase);
  }, []);

  return (
    <LogoAnimationContext.Provider
      value={{ phase, setPhase, navbarLogoRect, setNavbarLogoRect }}
    >
      {children}
    </LogoAnimationContext.Provider>
  );
}
