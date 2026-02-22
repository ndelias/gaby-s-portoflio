"use client";

import { useContext } from "react";
import { ViewModeContext } from "@/providers/ViewModeProvider";

export function useViewMode() {
  return useContext(ViewModeContext);
}
