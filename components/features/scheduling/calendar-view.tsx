"use client";

import { Calendar, Clock } from "lucide-react";

const timeSlots = [
  { time: "10:00 AM", status: "available" },
  { time: "11:00 AM", status: "booked" },
  { time: "2:00 PM", status: "available" },
  { time: "3:00 PM", status: "available" }
];

export function CalendarView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-navy dark:text-white">
          Available Time Slots
        </h3>
        <Calendar className="h-5 w-5 text-gold" />
      </div>
      <div className="space-y-3">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg ${
              slot.status === 'available'
                ? 'bg-white/50 dark:bg-white/5'
                : 'bg-navy/5 dark:bg-white/10'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Clock className="h-4 w-4 text-navy/70 dark:text-white/70" />
              <span className="text-sm text-navy/70 dark:text-white/70">{slot.time}</span>
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              slot.status === 'available'
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {slot.status === 'available' ? 'Available' : 'Booked'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}