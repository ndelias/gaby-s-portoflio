"use client";

import { usePathname } from "next/navigation";
import { GridContainer } from "./GridContainer";
import { Divider } from "@/components/ui/Divider";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const content = (
    <>
      <Divider className="mb-8" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[length:var(--text-label)] font-light text-gray-500">
          --- Gabriella Batista Portfolio ---
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[length:var(--text-label)] font-medium uppercase tracking-[0.1em] text-gray-500 hover:text-blush transition-all duration-[200ms] underline underline-offset-4 decoration-transparent hover:decoration-blush"
        >
          Back to Top
        </button>
      </div>
    </>
  );

  if (isHome) {
    return (
      <footer className="pb-8 pt-6 lg:ml-[240px] px-6 lg:pl-0 lg:pr-16">
        {content}
      </footer>
    );
  }

  return (
    <footer className="pb-8 pt-6">
      <GridContainer>{content}</GridContainer>
    </footer>
  );
}
