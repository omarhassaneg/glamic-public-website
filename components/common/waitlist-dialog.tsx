"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface WaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  earlyAccess?: { discount: string; description: string };
}

export function WaitlistDialog({ 
  isOpen, 
  onClose, 
  title,
  description,
  earlyAccess 
}: WaitlistDialogProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={cn(
        "sm:max-w-[425px]",
        "bg-white dark:bg-navy",
        "border-navy/10 dark:border-white/10"
      )}>
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-navy dark:text-white">
            {title}
          </DialogTitle>
          <div className="text-navy/70 dark:text-white/70 text-sm">
            {earlyAccess ? (
              <div className="space-y-2">
                <div className="text-gold font-medium">{earlyAccess.discount}</div>
                <div>{earlyAccess.description}</div>
              </div>
            ) : (
              <div>{description || "Be the first to know when this becomes available."}</div>
            )}
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={cn(
                "bg-white dark:bg-navy/50",
                "border-navy/10 dark:border-white/10",
                "text-navy dark:text-white",
                "placeholder:text-navy/40 dark:placeholder:text-white/40"
              )}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gold hover:bg-gold/90 text-white"
          >
            Join Waitlist
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}