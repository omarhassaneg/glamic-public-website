"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
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
  );
}