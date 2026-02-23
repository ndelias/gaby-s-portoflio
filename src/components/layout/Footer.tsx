"use client";

import { GridContainer } from "./GridContainer";
import { Divider } from "@/components/ui/Divider";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-24">
      <GridContainer>
        <Divider className="mb-8" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-light text-gray-500">
            {currentYear} Gaby
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-medium uppercase tracking-[0.1em] text-gray-500 hover:text-blush transition-all duration-300 underline underline-offset-4 decoration-transparent hover:decoration-blush"
          >
            Back to Top
          </button>
        </div>
      </GridContainer>
    </footer>
  );
}
