"use client";

interface ComingSoonTagProps {
  className?: string;
}

export function ComingSoonTag({ className }: ComingSoonTagProps) {
  return (
    <div className="bg-gold text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm w-fit mx-auto">
      Coming Soon
    </div>
  );
}