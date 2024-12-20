"use client";

import { motion } from "framer-motion";
import { Image, Type, Calendar, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SocialFeature } from "./types";
import { InstagramPreview } from "./preview";

const features: SocialFeature[] = [
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

export function SocialMediaSection() {
  return (
    <section id="social-media" className="w-full py-20 bg-white dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="bg-gold/10 p-2 rounded-lg">
                    <feature.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-navy/70 dark:text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="pt-4">
              <Button className="w-full bg-gold hover:bg-gold/90 text-white">
                Join Waitlist
              </Button>
            </div>
          </motion.div>
          
          <InstagramPreview />
        </div>
      </div>
    </section>
  );
}