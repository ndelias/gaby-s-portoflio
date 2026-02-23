"use client";

import { createContext, useCallback, useState, useEffect } from "react";
import type { ViewMode, ProjectViewMode } from "@/types";

const PROJECT_VIEW_MODE_KEY = "portfolio-project-view-mode";

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

  // Restore persisted project view mode on mount
  useEffect(() => {
    const stored = localStorage.getItem(PROJECT_VIEW_MODE_KEY);
    if (stored === "grid" || stored === "list") {
      setProjectViewModeState(stored);
    }
  }, []);

  const setHomeViewMode = useCallback((mode: ViewMode) => {
    setHomeViewModeState(mode);
  }, []);

  const setProjectViewMode = useCallback((mode: ProjectViewMode) => {
    setProjectViewModeState(mode);
    localStorage.setItem(PROJECT_VIEW_MODE_KEY, mode);
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
