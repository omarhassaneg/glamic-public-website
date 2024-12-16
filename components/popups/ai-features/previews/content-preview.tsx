"use client";

import { Instagram } from "lucide-react";

export function AIContentPreview() {
  return (
    <div className="absolute inset-0 bg-navy/5 dark:bg-white/5 rounded-lg overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-2 border-b border-navy/10 dark:border-white/10 flex items-center gap-2">
          <Instagram className="h-4 w-4 text-navy/70 dark:text-white/70" />
          <span className="text-navy/70 dark:text-white/70 text-sm">Your Beauty Business</span>
        </div>

        {/* Content */}
        <div className="flex-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&h=500&fit=crop"
            alt="AI Generated Content Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Caption */}
        <div className="p-2">
          <p className="text-xs text-navy/70 dark:text-white/70">
            ✨ Transform your look with our signature styling techniques! Book now for a complimentary consultation. #BeautyTransformation
          </p>
        </div>
      </div>
    </div>
  );
}