"use client";

import { Card } from "@/components/ui/card";
import { InstagramHeader } from "./header";
import { cn } from "@/lib/utils";

const samplePost = {
  image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&h=500&fit=crop",
  caption: "✨ Transform your look with our signature styling techniques! Book now for a complimentary consultation. #BeautyTransformation"
};

export function InstagramFrame() {
  return (
    <Card className="relative bg-white/10 border-white/20 overflow-hidden backdrop-blur-sm max-w-sm mx-auto">
      <InstagramHeader />
      <div className={cn(
        "aspect-square relative",
        "bg-white/5 backdrop-blur-sm"
      )}>
        <img 
          src={samplePost.image} 
          alt="AI Generated Content Preview" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-white/90 text-sm leading-relaxed">
          {samplePost.caption}
        </p>
      </div>
    </Card>
  );
}