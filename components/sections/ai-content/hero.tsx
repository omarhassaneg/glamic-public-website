"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function AIContentHero() {
  return (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center space-x-2 bg-gold/10 rounded-full px-4 py-2 text-gold"
      >
        <Sparkles className="h-5 w-5" />
        <span className="text-sm font-medium">Coming Soon</span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-bold text-white"
      >
        AI-Powered Content Creation
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-white/80 max-w-2xl mx-auto"
      >
        Transform your social media presence with AI-generated content that matches your brand's voice and style
      </motion.p>
    </div>
  );
}