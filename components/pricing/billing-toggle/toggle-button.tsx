"use client";

import { cn } from "@/lib/utils";

interface ToggleButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function ToggleButton({ active, onClick, children }: ToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors",
        active 
          ? "text-white" 
          : "text-navy dark:text-white hover:text-navy/70 dark:hover:text-white/70"
      )}
    >
      {children}
    </button>
  );
}