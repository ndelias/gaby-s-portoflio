"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useCallback, useEffect } from "react";
import { NavLink } from "@/components/navigation/NavLink";
import { LanguageToggle } from "@/components/navigation/LanguageToggle";
import { useTranslation } from "@/hooks/useTranslation";
import { useLogoAnimation } from "@/hooks/useLogoAnimation";
import { navigationItems } from "@/data/navigation";
import { GridContainer } from "./GridContainer";

export function Header() {
  const { t } = useTranslation();
  const { phase, setNavbarLogoRect } = useLogoAnimation();
  const logoRef = useRef<HTMLImageElement>(null);

  const reportRect = useCallback(() => {
    if (logoRef.current) {
      setNavbarLogoRect(logoRef.current.getBoundingClientRect());
    }
  }, [setNavbarLogoRect]);

  useEffect(() => {
    reportRect();
    window.addEventListener("resize", reportRect);
    return () => window.removeEventListener("resize", reportRect);
  }, [reportRect]);

  const logoVisible = phase === "idle" || phase === "complete";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <GridContainer>
        <nav className="grid grid-cols-3 items-center h-16 sm:h-20">
          <div className="justify-self-start">
            <NavLink href="/">
              {t.nav.home}
            </NavLink>
          </div>

          <div className="justify-self-center">
            <Link href="/" aria-label="Home">
              <Image
                ref={logoRef}
                src="/images/glb-logo.png"
                alt="GLB"
                width={88}
                height={52}
                className="transition-opacity duration-300"
                style={{ opacity: logoVisible ? 1 : 0 }}
                unoptimized
                priority
              />
            </Link>
          </div>

          <div className="flex items-center justify-end gap-6 sm:gap-8">
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
