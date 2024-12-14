"use client";

import { motion } from "framer-motion";

const notifications = [
  {
    type: "Appointment",
    message: "Your appointment with Beauty Studio is tomorrow at 2:00 PM. Reply Y to confirm.",
    time: "1 day before"
  },
  {
    type: "Payment",
    message: "Payment reminder: Balance of $75.00 is due for your upcoming appointment.",
    time: "2 days before"
  },
  {
    type: "Reminder",
    message: "Your appointment is in 2 hours. We're looking forward to seeing you!",
    time: "2 hours before"
  }
];

export function NotificationPreview() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-navy dark:text-white">
        Notification Examples
      </h3>
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-white/50 dark:bg-white/5 rounded-lg space-y-2"
          >
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gold">{notification.type}</span>
              <span className="text-xs text-navy/60 dark:text-white/60">{notification.time}</span>
            </div>
            <p className="text-sm text-navy/70 dark:text-white/70">
              {notification.message}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}