"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { getNavigationDirection } from "@/providers/NavigationDirectionProvider";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");
  const direction = getNavigationDirection(pathname, href);

  return (
    <TransitionLink
      href={href}
      direction={direction}
      className={cn(
        "text-[length:var(--text-label)] font-medium uppercase tracking-[0.1em] transition-all duration-[200ms]",
        isActive
          ? "text-gray-900 underline underline-offset-4 decoration-gray-900"
          : "text-gray-500 hover:text-blush decoration-transparent underline underline-offset-4 hover:decoration-blush",
        className
      )}
    >
      {children}
    </TransitionLink>
  );
}
