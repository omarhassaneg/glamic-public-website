"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AppointmentList } from "./appointment-list";
import { AppointmentStats } from "./appointment-stats";

export function AppointmentDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="overflow-hidden bg-gradient-to-br from-navy/5 to-gold/5 dark:from-white/5 dark:to-gold/5">
        <div className="p-6 space-y-6">
          <AppointmentList />
          <AppointmentStats />
        </div>
      </Card>
    </motion.div>
  );
}