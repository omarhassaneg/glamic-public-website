"use client";

import { LucideIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  icon: LucideIcon;
  details: string[];
  comingSoon?: boolean;
}

interface FeatureCardProps {
  feature: Feature;
  sectionId: string;
}

export function FeatureCard({ feature, sectionId }: FeatureCardProps) {
  const handleClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className={cn(
        "relative p-6 cursor-pointer group",
        "border border-navy/10 dark:border-white/10 rounded-lg",
        "bg-white dark:bg-navy/50 hover:shadow-lg transition-all"
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {feature.comingSoon && (
        <div className="absolute -top-3 right-4">
          <span className="bg-gold text-white text-xs font-medium px-3 py-1 rounded-full">
            Coming Soon
          </span>
        </div>
      )}
      
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-gold/10 p-2 rounded-lg">
          <feature.icon className="w-6 h-6 text-gold" />
        </div>
        <h3 className="text-lg font-semibold text-navy dark:text-white">{feature.title}</h3>
      </div>

      <div className="flex items-center text-sm text-gold group-hover:translate-x-1 transition-transform">
        <span className="mr-2">Tap to learn more</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </motion.div>
  );
}