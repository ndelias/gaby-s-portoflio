"use client";

import { createContext, useCallback, useState } from "react";
import type { ViewMode, ProjectViewMode } from "@/types";

interface ViewModeContextValue {
  homeViewMode: ViewMode;
  setHomeViewMode: (mode: ViewMode) => void;
  projectViewMode: ProjectViewMode;
  setProjectViewMode: (mode: ProjectViewMode) => void;
}

export const ViewModeContext = createContext<ViewModeContextValue>({
  homeViewMode: "immersive",
  setHomeViewMode: () => {},
  projectViewMode: "grid",
  setProjectViewMode: () => {},
});

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [homeViewMode, setHomeViewModeState] = useState<ViewMode>("immersive");
  const [projectViewMode, setProjectViewModeState] = useState<ProjectViewMode>("grid");

  const setHomeViewMode = useCallback((mode: ViewMode) => {
    setHomeViewModeState(mode);
  }, []);

  const setProjectViewMode = useCallback((mode: ProjectViewMode) => {
    setProjectViewModeState(mode);
  }, []);

  return (
    <ViewModeContext.Provider
      value={{
        homeViewMode,
        setHomeViewMode,
        projectViewMode,
        setProjectViewMode,
      }}
    >
      {children}
    </ViewModeContext.Provider>
  );
}
