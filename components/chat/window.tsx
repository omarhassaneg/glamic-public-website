"use client";

import { motion } from "framer-motion";
import { ChatMessage } from "./message";
import { ChatInput } from "./input";

interface ChatWindowProps {
  messages: Array<{
    type: "client" | "ai";
    message: string;
  }>;
}

export function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-6 overflow-hidden w-full max-w-md h-[600px] relative"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="text-white/70 text-sm">AI Chat Assistant</div>
      </div>

      <div className="space-y-6 overflow-y-auto h-[calc(100%-120px)] pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            type={msg.type}
            message={msg.message}
            index={index}
          />
        ))}
      </div>

      <ChatInput />
    </motion.div>
  );
}