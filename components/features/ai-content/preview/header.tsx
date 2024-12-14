"use client";

import { Instagram } from "lucide-react";

export function PreviewHeader() {
  return (
    <div className="p-3 border-b border-navy/10 dark:border-white/10 flex items-center gap-2">
      <Instagram className="h-5 w-5 text-navy/80 dark:text-white/80" />
      <span className="text-navy/80 dark:text-white/80 text-sm font-medium">
        Your Beauty Business
      </span>
    </div>
  );
}