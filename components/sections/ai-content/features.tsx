"use client";

import { motion } from "framer-motion";
import { Image, Type, Calendar, Wand2 } from "lucide-react";

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

export function AIContentFeatures() {
  return (
    <div className="space-y-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-4 bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10"
        >
          <div className="bg-gold/10 p-2 rounded-lg">
            <feature.icon className="h-6 w-6 text-gold" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
            <p className="text-sm text-white/70">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}