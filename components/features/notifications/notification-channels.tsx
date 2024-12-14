"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Bell } from "lucide-react";

const channels = [
  { icon: MessageSquare, name: "SMS" },
  { icon: Bell, name: "Push" },
  { icon: Mail, name: "Email" }
];

export function NotificationChannels() {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium text-navy/70 dark:text-white/70">
        Available Channels
      </h4>
      <div className="grid grid-cols-3 gap-3">
        {channels.map((channel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center gap-2 p-3 bg-white/50 dark:bg-white/5 rounded-lg"
          >
            <channel.icon className="h-5 w-5 text-navy/70 dark:text-white/70" />
            <span className="text-xs text-navy/70 dark:text-white/70">{channel.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}