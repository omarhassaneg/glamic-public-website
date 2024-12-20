"use client";

export function PreviewHeader() {
  return (
    <div className="bg-white/50 dark:bg-white/5 p-4 border-b border-navy/10 dark:border-white/10">
      <div className="flex items-center justify-between">
        <div className="text-navy dark:text-white font-medium">Your Beauty Studio</div>
        <div className="flex gap-4 text-sm text-navy/70 dark:text-white/70">
          <span>Services</span>
          <span>Gallery</span>
          <span>Book Now</span>
        </div>
      </div>
    </div>
  );
}