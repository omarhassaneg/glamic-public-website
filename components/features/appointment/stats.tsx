"use client";

import { AppointmentStat } from "./types";

const stats: AppointmentStat[] = [
  { label: "Today's Bookings", value: "8" },
  { label: "Mobile Services", value: "3" },
  { label: "Studio Services", value: "5" }
];

export function AppointmentStats() {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium text-navy/70 dark:text-white/70">
        Quick Stats
      </h4>
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-3 bg-white/50 dark:bg-white/5 rounded-lg text-center"
          >
            <div className="text-xl font-bold text-gold mb-1">{stat.value}</div>
            <div className="text-xs text-navy/70 dark:text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}