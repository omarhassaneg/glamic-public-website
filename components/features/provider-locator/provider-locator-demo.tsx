"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPreview } from "./map-preview";
import { ServiceAreaConfig } from "./service-area-config";

export function ProviderLocatorDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="overflow-hidden bg-gradient-to-br from-navy/5 to-gold/5 dark:from-white/5 dark:to-gold/5">
        <div className="p-6 space-y-6">
          <MapPreview />
          <ServiceAreaConfig />
        </div>
      </Card>
    </motion.div>
  );
}