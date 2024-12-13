"use client";

import { motion } from "framer-motion";
import { sections } from "./sections";

export function TermsContent() {
  return (
    <div className="space-y-12">
      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-4">
            {section.title}
          </h2>
          <div className="space-y-4 text-navy/70 dark:text-white/70">
            {section.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}