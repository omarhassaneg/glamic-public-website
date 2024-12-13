"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Feature } from "./types";

interface FeatureCardProps {
  feature: Feature;
  isExpanded: boolean;
  onToggle: () => void;
}

export function FeatureCard({ feature, isExpanded, onToggle }: FeatureCardProps) {
  return (
    <motion.div
      layout
      onClick={onToggle}
      className="border border-navy/10 dark:border-white/10 rounded-lg p-6 bg-white dark:bg-navy/50 cursor-pointer hover:shadow-lg transition-shadow relative"
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
      
      <div className="flex items-center space-x-4">
        <div className="bg-gold/10 p-2 rounded-lg">
          <feature.icon className="w-6 h-6 text-gold" />
        </div>
        <h3 className="text-lg font-semibold text-navy dark:text-white">{feature.title}</h3>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 text-navy/70 dark:text-white/70 space-y-2 overflow-hidden"
          >
            {feature.details.map((detail, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm flex items-start gap-2"
              >
                <span className="text-gold mt-1">•</span>
                <span>{detail}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}