"use client";

import { useContext } from "react";
import { LocaleContext } from "@/providers/LocaleProvider";

export function useTranslation() {
  const context = useContext(LocaleContext);
  return context;
}
