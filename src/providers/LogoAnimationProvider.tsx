"use client";

import { createContext, useCallback, useEffect, useState } from "react";
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
  triggerAnimation: () => void;
  hasPlayed: boolean;
  navbarLogoRect: DOMRect | null;
  setNavbarLogoRect: (rect: DOMRect | null) => void;
}

export const LogoAnimationContext = createContext<LogoAnimationContextValue>({
  phase: "loading",
  setPhase: () => {},
  resetAnimation: () => {},
  triggerAnimation: () => {},
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
  const [hasPlayed, setHasPlayed] = useState(false);
  const [phase, setPhaseState] = useState<LogoAnimationPhase>("loading");
  const [navbarLogoRect, setNavbarLogoRect] = useState<DOMRect | null>(null);

  // Sync from sessionStorage after hydration to avoid server/client mismatch
  useEffect(() => {
    if (getHasPlayed()) {
      setHasPlayed(true);
      setPhaseState("complete");
    }
  }, []);

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

  // Force-replay the logo animation (used by navbar logo click)
  const triggerAnimation = useCallback(() => {
    setPhaseState("loading");
  }, []);

  return (
    <LogoAnimationContext.Provider
      value={{ phase, setPhase, resetAnimation, triggerAnimation, hasPlayed, navbarLogoRect, setNavbarLogoRect }}
    >
      {children}
    </LogoAnimationContext.Provider>
  );
}
