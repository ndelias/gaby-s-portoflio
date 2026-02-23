"use client";

import { cn } from "@/lib/utils";

interface ToggleGroupProps<T extends string> {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}

export function ToggleGroup<T extends string>({
  options,
  value,
  onChange,
}: ToggleGroupProps<T>) {
  return (
    <div className="flex items-center gap-1">
      {options.map((option, i) => (
        <span key={option.value} className="flex items-center gap-1">
          <button
            onClick={() => onChange(option.value)}
            className={cn(
              "text-[length:var(--text-label)] font-medium uppercase tracking-[0.1em] transition-colors duration-300",
              value === option.value
                ? "text-gray-900"
                : "text-gray-500 hover:text-blush"
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
