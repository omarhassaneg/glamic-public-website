"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PreviewHeader } from "./preview/header";
import { PreviewContent } from "./preview/content";
import { ComingSoonBadge } from "./preview/coming-soon-badge";

export function AIContentPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <ComingSoonBadge />
      <Card className="overflow-hidden bg-gradient-to-br from-navy/5 to-gold/5 dark:from-white/5 dark:to-gold/5">
        <PreviewHeader />
        <PreviewContent />
      </Card>
    </motion.div>
  );
}