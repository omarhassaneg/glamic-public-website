"use client";

export function PreviewContent() {
  return (
    <div className="p-4 space-y-4">
      <div className="aspect-square bg-navy/5 dark:bg-white/5 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&h=500&fit=crop"
          alt="AI Generated Content Preview"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-navy/90 dark:text-white/90">
          ✨ Transform your look with our signature styling techniques! Book now for a complimentary consultation. #BeautyTransformation
        </p>
        <p className="text-xs text-navy/60 dark:text-white/60">
          * AI-generated content preview. Customize to match your brand voice.
        </p>
      </div>
    </div>
  );
}