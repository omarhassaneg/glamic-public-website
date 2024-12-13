"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AIContentCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-16 text-center"
    >
      <Button 
        size="lg"
        className="bg-gold hover:bg-gold/90 text-white"
      >
        Join Waitlist
      </Button>
      <p className="mt-4 text-white/60 text-sm">
        Be the first to know when AI content generation launches
      </p>
    </motion.div>
  );
}