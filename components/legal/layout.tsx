"use client";

import { motion } from "framer-motion";

interface LegalPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, description, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background dark:bg-navy pt-32 pb-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">{title}</h1>
            <p className="text-navy/70 dark:text-white/70">{description}</p>
          </div>
          <div className="prose prose-navy dark:prose-invert max-w-none">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}