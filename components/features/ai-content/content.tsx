"use client";

import { motion } from "framer-motion";
import { Image, Type, Calendar, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIFeatureList } from "./feature-list";

const features = [
  {
    icon: Image,
    title: "AI Image Generation",
    description: "Create stunning, on-brand visuals for your posts with our AI image generator"
  },
  {
    icon: Type,
    title: "Smart Captions",
    description: "Generate engaging captions that resonate with your audience"
  },
  {
    icon: Calendar,
    title: "Auto Scheduling",
    description: "Schedule your content at optimal times for maximum engagement"
  },
  {
    icon: Wand2,
    title: "Style Matching",
    description: "AI learns your aesthetic and maintains consistency across all content"
  }
];

export function AIContentContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="inline-block text-gold text-sm font-medium mb-2">AI Content</div>
      <h2 className="text-3xl font-bold text-navy dark:text-white">
        Transform Your Social Media Presence
      </h2>
      <p className="text-navy/70 dark:text-white/70">
        Let AI generate beautiful content that matches your brand's voice and style. Create stunning visuals and engaging captions in seconds.
      </p>
      <AIFeatureList features={features} />
      <div className="pt-4">
        <Button 
          className="w-full bg-gold hover:bg-gold/90 text-white"
          onClick={() => {}}
        >
          Join Waitlist
        </Button>
      </div>
    </motion.div>
  );
}