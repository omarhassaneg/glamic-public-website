"use client";

import { motion } from "framer-motion";
import { InstagramFrame } from "./frame";

export function InstagramPreview() {
  return (
    <div className="relative">
      {/* Coming Soon Tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="bg-gold text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
          Coming Soon
        </span>
      </motion.div>

      {/* Instagram Preview with Glow Effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent blur-3xl" />
        <InstagramFrame />
      </div>
    </div>
  );
}