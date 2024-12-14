"use client";

import { Link } from "lucide-react";

export function BookingLink() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-navy/70 dark:text-white/70">
          Your Booking Link
        </h4>
        <Link className="h-4 w-4 text-gold" />
      </div>
      <div className="p-3 bg-white/50 dark:bg-white/5 rounded-lg">
        <p className="text-sm text-navy/70 dark:text-white/70 font-mono">
          glamic.com/book/your-beauty-studio
        </p>
      </div>
      <p className="text-xs text-navy/60 dark:text-white/60 text-center">
        Share this link with your clients for easy booking
      </p>
    </div>
  );
}