"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  const languages: Locale[] = ["en", "es"];

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, i) => (
        <span key={lang} className="flex items-center gap-1">
          <button
            onClick={() => setLocale(lang)}
            className={cn(
              "text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-medium uppercase tracking-[0.1em] transition-colors duration-300",
              locale === lang
                ? "text-gray-900"
                : "text-gray-500 hover:text-blush"
            )}
            aria-label={`Switch to ${lang === "en" ? "English" : "Spanish"}`}
          >
            {lang.toUpperCase()}
          </button>
          {i < languages.length - 1 && (
            <span className="text-gray-300 text-xs">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
