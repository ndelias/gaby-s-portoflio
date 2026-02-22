"use client";

import Link from "next/link";
import { NavLink } from "@/components/navigation/NavLink";
import { LanguageToggle } from "@/components/navigation/LanguageToggle";
import { useTranslation } from "@/hooks/useTranslation";
import { navigationItems } from "@/data/navigation";
import { GridContainer } from "./GridContainer";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <GridContainer>
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="text-[clamp(0.8125rem,0.3vw+0.7rem,0.9375rem)] font-semibold tracking-[-0.01em] text-gray-900"
          >
            Gaby
          </Link>

          <div className="flex items-center gap-6 sm:gap-8">
            {navigationItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {t.nav[item.labelKey]}
              </NavLink>
            ))}
            <LanguageToggle />
          </div>
        </nav>
      </GridContainer>
    </header>
  );
}
