import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tag({ children, active = false, onClick, className }: TagProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-medium uppercase tracking-[0.1em] px-3 py-1.5 transition-colors duration-300",
        active
          ? "text-gray-900 border-b border-gray-900"
          : "text-gray-500 hover:text-gray-900",
        className
      )}
    >
      {children}
    </button>
  );
}
