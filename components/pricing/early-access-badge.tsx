"use client";

import { motion } from "framer-motion";

interface EarlyAccessBadgeProps {
  discount: string;
  description: string;
}

export function EarlyAccessBadge({ discount, description }: EarlyAccessBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-[90%] text-center"
    >
      <div className="bg-gold/10 dark:bg-gold/20 border border-gold/20 rounded-lg p-2 inline-block">
        <p className="text-gold font-semibold text-sm">{discount}</p>
        <p className="text-gold/80 text-xs">{description}</p>
      </div>
    </motion.div>
  );
}