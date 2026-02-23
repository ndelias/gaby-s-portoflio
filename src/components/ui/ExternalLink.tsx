import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-gray-900 underline underline-offset-4 decoration-gray-300 transition-all duration-300 hover:text-blush hover:decoration-blush",
        className
      )}
    >
      {children}
    </a>
  );
}
