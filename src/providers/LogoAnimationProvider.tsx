"use client";

import { createContext, useCallback, useState } from "react";
import { ANIMATION_PLAYED_KEY } from "@/lib/constants";

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
  hasPlayed: boolean;
  navbarLogoRect: DOMRect | null;
  setNavbarLogoRect: (rect: DOMRect | null) => void;
}

export const LogoAnimationContext = createContext<LogoAnimationContextValue>({
  phase: "loading",
  setPhase: () => {},
  resetAnimation: () => {},
  hasPlayed: false,
  navbarLogoRect: null,
  setNavbarLogoRect: () => {},
});

function getHasPlayed(): boolean {
  try {
    return sessionStorage.getItem(ANIMATION_PLAYED_KEY) === "true";
  } catch {
    return false;
  }
}

function markPlayed() {
  try {
    sessionStorage.setItem(ANIMATION_PLAYED_KEY, "true");
  } catch {
    // ignore
  }
}

export function LogoAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasPlayed, setHasPlayed] = useState(getHasPlayed);
  const [phase, setPhaseState] = useState<LogoAnimationPhase>(
    hasPlayed ? "complete" : "loading"
  );
  const [navbarLogoRect, setNavbarLogoRect] = useState<DOMRect | null>(null);

  const setPhase = useCallback((newPhase: LogoAnimationPhase) => {
    setPhaseState(newPhase);
    if (newPhase === "complete") {
      markPlayed();
      setHasPlayed(true);
    }
  }, []);

  const resetAnimation = useCallback(() => {
    if (!getHasPlayed()) {
      setPhaseState("loading");
    }
  }, []);

  return (
    <LogoAnimationContext.Provider
      value={{ phase, setPhase, resetAnimation, hasPlayed, navbarLogoRect, setNavbarLogoRect }}
    >
      {children}
    </LogoAnimationContext.Provider>
  );
}
