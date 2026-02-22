"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={cn(
        "text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-medium uppercase tracking-[0.1em] transition-colors duration-300",
        isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900",
        className
      )}
    >
      {children}
    </Link>
  );
}
