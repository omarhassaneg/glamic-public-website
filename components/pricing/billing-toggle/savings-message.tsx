"use client";

import { motion } from "framer-motion";

export function SavingsMessage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-sm text-gold font-medium"
    >
      Save up to 25% with annual billing
    </motion.div>
  );
}