"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";

export function InstagramPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <span className="bg-gold text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
          Coming Soon
        </span>
      </div>

      <Card className="overflow-hidden bg-gradient-to-br from-navy/5 to-gold/5 dark:from-white/5 dark:to-gold/5">
        <div className="p-3 border-b border-navy/10 dark:border-white/10 flex items-center gap-2">
          <Instagram className="h-5 w-5 text-navy/80 dark:text-white/80" />
          <span className="text-navy/80 dark:text-white/80 text-sm">Your Beauty Business</span>
        </div>
        
        <div className="aspect-[3/2] relative">
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&h=500&fit=crop"
            alt="AI Generated Content Preview"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-3">
          <p className="text-xs text-navy/90 dark:text-white/90">
            ✨ Transform your look with our signature styling techniques! Book now for a complimentary consultation. #BeautyTransformation
          </p>
          <p className="text-xs text-navy/60 dark:text-white/60 mt-1">
            * AI-generated content preview. Customize to match your brand voice.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}