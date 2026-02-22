"use client";

import { useContext } from "react";
import { LogoAnimationContext } from "@/providers/LogoAnimationProvider";

export function useLogoAnimation() {
  return useContext(LogoAnimationContext);
}
