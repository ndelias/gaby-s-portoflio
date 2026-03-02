"use client";

import Image from "next/image";
import { useRef, useCallback, useEffect } from "react";
import { NavLink } from "@/components/navigation/NavLink";
import { LanguageToggle } from "@/components/navigation/LanguageToggle";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { TransitionLink } from "@/components/ui/TransitionLink";
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

  const animationDone = phase === "idle" || phase === "complete";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <GridContainer>
        <nav className="grid grid-cols-3 items-center h-16 sm:h-20">
          <div
            className="justify-self-start transition-opacity duration-[400ms]"
            style={{ opacity: animationDone ? 1 : 0 }}
          >
            <NavLink href="/">
              {t.nav.home}
            </NavLink>
          </div>

          <div className="justify-self-center">
            <TransitionLink href="/" direction="back" aria-label="Home">
              <Image
                ref={logoRef}
                src="/images/glb-logo.png"
                alt="GLB"
                width={88}
                height={52}
                className="transition-opacity duration-[400ms]"
                style={{ opacity: animationDone ? 1 : 0 }}
                unoptimized
                priority
              />
            </TransitionLink>
          </div>

          {/* Desktop nav */}
          <div
            className="hidden lg:flex items-center justify-end gap-8 transition-opacity duration-[400ms]"
            style={{ opacity: animationDone ? 1 : 0 }}
          >
            {navigationItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {t.nav[item.labelKey]}
              </NavLink>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile hamburger */}
          <div
            className="flex lg:hidden items-center justify-end transition-opacity duration-[400ms]"
            style={{ opacity: animationDone ? 1 : 0 }}
          >
            <MobileMenu />
          </div>
        </nav>
      </GridContainer>
    </header>
  );
}
