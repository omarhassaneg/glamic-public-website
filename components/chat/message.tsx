"use client";

import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";

interface ChatMessageProps {
  type: "client" | "ai";
  message: string;
  index: number;
}

export function ChatMessage({ type, message, index }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3 }}
      className={`flex ${type === 'client' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex items-start max-w-[80%] space-x-2 ${type === 'client' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          type === 'client' 
            ? 'bg-gold/20' 
            : 'bg-white/10'
        }`}>
          {type === 'client' ? (
            <User className="h-4 w-4 text-gold" />
          ) : (
            <Bot className="h-4 w-4 text-white" />
          )}
        </div>
        <div className={`rounded-2xl p-4 ${
          type === 'client'
            ? 'bg-gold text-white'
            : 'bg-white/10 text-white'
        }`}>
          <p className="text-sm whitespace-pre-line">{message}</p>
        </div>
      </div>
    </motion.div>
  );
}