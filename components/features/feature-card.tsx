"use client";

import { LucideIcon } from "lucide-react";
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
  isExpanded: boolean;
  onToggle: () => void;
  sectionId: string;
}

export function FeatureCard({ feature, isExpanded, onToggle, sectionId }: FeatureCardProps) {
  const handleClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    onToggle();
  };

  return (
    <motion.div
      onClick={handleClick}
      className={cn(
        "relative p-6 cursor-pointer",
        "border border-navy/10 dark:border-white/10 rounded-lg",
        "bg-white dark:bg-navy/50 hover:shadow-lg transition-shadow"
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}>
      {feature.comingSoon && (
        <div className="absolute -top-3 right-4">
          <span className="bg-gold text-white text-xs font-medium px-3 py-1 rounded-full">
            Coming Soon
          </span>
        </div>
      )}
      
      <div className="flex items-center space-x-4">
        <div className="bg-gold/10 p-2 rounded-lg">
          <feature.icon className="w-6 h-6 text-gold" />
        </div>
        <h3 className="text-lg font-semibold text-navy dark:text-white">{feature.title}</h3>
      </div>
      
      {isExpanded && feature.details && feature.details.length > 0 && (
        <ul className="mt-4 space-y-2">
          {feature.details.map((detail, idx) => (
            <li key={idx} className="text-sm text-navy/70 dark:text-white/70 flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}