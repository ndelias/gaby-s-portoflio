"use client";

import { cn } from "@/lib/utils";

interface ViewModeToggleProps<T extends string> {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}

export function ViewModeToggle<T extends string>({
  options,
  value,
  onChange,
}: ViewModeToggleProps<T>) {
  return (
    <div className="flex items-center gap-1">
      {options.map((option, i) => (
        <span key={option.value} className="flex items-center gap-1">
          <button
            onClick={() => onChange(option.value)}
            className={cn(
              "text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-medium uppercase tracking-[0.1em] transition-colors duration-300",
              value === option.value
                ? "text-gray-900"
                : "text-gray-500 hover:text-pink"
            )}
          >
            {option.label}
          </button>
          {i < options.length - 1 && (
            <span className="text-gray-300 text-xs">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
