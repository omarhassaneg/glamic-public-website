"use client";

import { motion } from "framer-motion";

export function DownloadHero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto text-center space-y-4"
    >
      <h1 className="text-4xl font-bold text-navy dark:text-white">
        Download Glamic
      </h1>
      <p className="text-navy/70 dark:text-white/70 text-lg">
        Experience the future of beauty business management on your mobile device. Our web experience is coming soon!
      </p>
    </motion.div>
  );
}