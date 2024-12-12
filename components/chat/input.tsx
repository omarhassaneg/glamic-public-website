"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function ChatInput() {
  return (
    <div className="absolute bottom-6 left-6 right-6">
      <div className="flex items-center space-x-2">
        <div className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2">
          <p className="text-white/40 text-sm">Type your message...</p>
        </div>
        <Button size="icon" className="rounded-full bg-gold hover:bg-gold/90">
          <MessageSquare className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}