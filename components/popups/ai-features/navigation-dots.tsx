"use client";

interface NavigationDotsProps {
  count: number;
  current: number;
  onChange: (index: number) => void;
}

export function NavigationDots({ count, current, onChange }: NavigationDotsProps) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-2 h-2 rounded-full transition-colors ${
            index === current
              ? "bg-gold"
              : "bg-navy/20 dark:bg-white/20 hover:bg-navy/40 dark:hover:bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}