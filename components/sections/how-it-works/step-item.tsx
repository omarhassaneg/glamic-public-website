"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StepItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  isReversed?: boolean;
}

export function StepItem({ title, description, icon: Icon, index, isReversed }: StepItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Icon */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-navy/50 shadow-lg flex items-center justify-center z-10 dark:border-2 dark:border-gold">
        <Icon className="w-6 h-6 text-gold" />
      </div>

      {/* Content */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${
        isReversed ? "md:[&>*:first-child]:col-start-2 md:[&>*:last-child]:col-start-1" : ""
      }`}>
        <div className={`pl-24 md:pl-0 ${
          isReversed ? "md:pl-24" : "md:text-right md:pr-24"
        }`}>
          <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-navy/70 dark:text-white/70">
            {description}
          </p>
        </div>
        <div className="hidden md:block" />
      </div>
    </motion.div>
  );
}