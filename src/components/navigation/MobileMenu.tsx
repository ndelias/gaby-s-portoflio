"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "@/hooks/useTranslation";
import { getNavigationDirection } from "@/providers/NavigationDirectionProvider";
import { navigationItems } from "@/data/navigation";
import { transition } from "@/lib/motion";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  const close = useCallback(() => setOpen(false), []);

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // SSR-safe portal
  const mountedRef = useRef(false);
  useEffect(() => { mountedRef.current = true; }, []);

  // All menu links — home + nav items
  const allLinks = [
    { href: "/", label: t.nav.home },
    ...navigationItems.map((item) => ({ href: item.href, label: t.nav[item.labelKey] })),
  ];

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition.element}
        >
          {/* Top bar — X button aligned to match hamburger position */}
          <div className="mx-auto w-full max-w-[var(--grid-max-width)] px-[var(--grid-margin)]">
            <div className="flex items-center justify-end h-16 sm:h-20">
              <button
                className="p-2 cursor-pointer"
                onClick={close}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-gray-900">
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Centered nav links */}
          <div className="flex flex-col items-center justify-center gap-10 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)]">
            {allLinks.map((link, i) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transition.element, delay: 0.05 + i * 0.05 }}
                >
                  <TransitionLink
                    href={link.href}
                    direction={getNavigationDirection(pathname, link.href)}
                    onClick={close}
                    className={cn(
                      "text-2xl font-medium uppercase tracking-[0.1em] transition-all duration-[200ms]",
                      isActive
                        ? "text-gray-900 underline underline-offset-4 decoration-gray-900"
                        : "text-gray-500"
                    )}
                  >
                    {link.label}
                  </TransitionLink>
                </motion.div>
              );
            })}

            {/* Language toggle */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition.element, delay: 0.05 + allLinks.length * 0.05 }}
            >
              <LanguageToggle />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Hamburger button */}
      <button
        className="p-2 cursor-pointer"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-gray-900">
          <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Portal overlay to body so it escapes header stacking context */}
      {mountedRef.current ? createPortal(overlay, document.body) : null}
    </>
  );
}
