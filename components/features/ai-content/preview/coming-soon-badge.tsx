"use client";

import { motion } from "framer-motion";

export function ComingSoonBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
    >
      <span className="bg-gold text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
        Coming Soon
      </span>
    </motion.div>
  );
}