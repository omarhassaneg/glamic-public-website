"use client";

import { Sparkles } from "lucide-react";

export function ComingSoonBadge() {
  return (
    <div className="absolute top-8 left-0 right-0 flex justify-center">
      <div className="bg-gold/90 text-white px-4 py-1.5 rounded-full flex items-center space-x-2 backdrop-blur-sm">
        <Sparkles className="h-4 w-4" />
        <span className="text-sm font-medium">Coming Soon</span>
      </div>
    </div>
  );
}