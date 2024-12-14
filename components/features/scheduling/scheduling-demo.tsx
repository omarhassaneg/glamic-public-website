"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CalendarView } from "./calendar-view";
import { BookingLink } from "./booking-link";

export function SchedulingDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="overflow-hidden bg-gradient-to-br from-navy/5 to-gold/5 dark:from-white/5 dark:to-gold/5">
        <div className="p-6 space-y-6">
          <CalendarView />
          <BookingLink />
        </div>
      </Card>
    </motion.div>
  );
}