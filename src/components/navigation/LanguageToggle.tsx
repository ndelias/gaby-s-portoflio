"use client";

import { useMemo } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { ToggleGroup } from "./ToggleGroup";
import type { Locale } from "@/types";

const languages: Locale[] = ["en", "es"];

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  const options = useMemo(
    () => languages.map((lang) => ({ value: lang, label: lang.toUpperCase() })),
    []
  );

  return <ToggleGroup options={options} value={locale} onChange={setLocale} />;
}
