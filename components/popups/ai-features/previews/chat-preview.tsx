"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

const messages = [
  {
    type: "client" as const,
    message: "Hi! Do you have any availability for gel nails this weekend?"
  },
  {
    type: "ai" as const,
    message: "Hello! I'd be happy to help you book a gel nails appointment. To ensure we allocate enough time, could you let me know if you'd like any additional services? 💅"
  }
];

export function AIChatPreview() {
  return (
    <div className="absolute inset-0 bg-navy/5 dark:bg-white/5 rounded-lg p-4 overflow-hidden">
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className={`flex ${msg.type === 'client' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start max-w-[80%] space-x-2 ${
              msg.type === 'client' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.type === 'client' 
                  ? 'bg-gold/20' 
                  : 'bg-navy/10 dark:bg-white/10'
              }`}>
                {msg.type === 'client' ? (
                  <User className="h-3 w-3 text-gold" />
                ) : (
                  <Bot className="h-3 w-3 text-navy dark:text-white" />
                )}
              </div>
              <div className={`rounded-lg p-2 text-xs ${
                msg.type === 'client'
                  ? 'bg-gold text-white'
                  : 'bg-navy/10 dark:bg-white/10 text-navy dark:text-white'
              }`}>
                <p>{msg.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}