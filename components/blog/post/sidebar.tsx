"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function BlogSidebar() {
  return (
    <div className="space-y-6">
      <Card className={cn(
        "p-6",
        "bg-white dark:bg-navy/50",
        "border-navy/10 dark:border-gold/20"
      )}>
        <h3 className="text-lg font-semibold text-navy dark:text-gold mb-4">Contents Overview</h3>
        <nav className="space-y-2">
          <a href="#scheduling-importance" className="block text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-gold">
            Scheduling Importance
          </a>
          <a href="#booking-tips" className="block text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-gold">
            Booking Tips
          </a>
          <a href="#technology-role" className="block text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-gold">
            Technology Role
          </a>
          <a href="#platform-benefits" className="block text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-gold">
            Platform Benefits
          </a>
          <a href="#client-needs" className="block text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-gold">
            Client Needs
          </a>
        </nav>
      </Card>
    </div>
  );
}