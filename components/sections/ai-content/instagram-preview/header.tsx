"use client";

import { Instagram } from "lucide-react";

export function InstagramHeader() {
  return (
    <div className="p-3 border-b border-white/10 flex items-center gap-2">
      <Instagram className="h-5 w-5 text-white/80" />
      <span className="text-white/80 text-sm font-medium">Your Beauty Business</span>
    </div>
  );
}