"use client";

import { createContext, useCallback, useState } from "react";

export type LogoAnimationPhase =
  | "idle"
  | "loading"
  | "playing"
  | "transitioning"
  | "complete";

interface LogoAnimationContextValue {
  phase: LogoAnimationPhase;
  setPhase: (phase: LogoAnimationPhase) => void;
  resetAnimation: () => void;
  navbarLogoRect: DOMRect | null;
  setNavbarLogoRect: (rect: DOMRect | null) => void;
}

export const LogoAnimationContext = createContext<LogoAnimationContextValue>({
  phase: "loading",
  setPhase: () => {},
  resetAnimation: () => {},
  navbarLogoRect: null,
  setNavbarLogoRect: () => {},
});

export function LogoAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhaseState] = useState<LogoAnimationPhase>("idle");
  const [navbarLogoRect, setNavbarLogoRect] = useState<DOMRect | null>(null);

  const setPhase = useCallback((newPhase: LogoAnimationPhase) => {
    setPhaseState(newPhase);
  }, []);

  const resetAnimation = useCallback(() => {
    setPhaseState("loading");
  }, []);

  return (
    <LogoAnimationContext.Provider
      value={{ phase, setPhase, resetAnimation, navbarLogoRect, setNavbarLogoRect }}
    >
      {children}
    </LogoAnimationContext.Provider>
  );
}
