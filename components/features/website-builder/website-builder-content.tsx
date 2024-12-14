"use client";

import { motion } from "framer-motion";
import { Globe, Palette, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FeatureList } from "./feature-list";

const features = [
  {
    icon: Globe,
    title: "Customizable Booking Website",
    description: "Showcase your brand with a professional, personalized booking page"
  },
  {
    icon: Palette,
    title: "Customizable Branding",
    description: "Personalize your booking page to reflect your unique style"
  },
  {
    icon: Image,
    title: "Portfolio Showcase",
    description: "Attract clients by displaying your best work directly on your booking page"
  }
];

export function WebsiteBuilderContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="inline-block text-gold text-sm font-medium mb-2">Website Builder</div>
      <h2 className="text-3xl font-bold text-navy dark:text-white">
        Launch Your Website In Under A Minute
      </h2>
      <p className="text-navy/70 dark:text-white/70">
        Create a stunning, professional website that converts visitors into clients. No technical skills required - just customize and launch!
      </p>
      <FeatureList features={features} />
      <div className="pt-4">
        <Link href="/download">
          <Button className="w-full bg-gold hover:bg-gold/90 text-white">
            Create Your Website
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}