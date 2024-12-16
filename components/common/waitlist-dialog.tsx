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
import { Check } from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.us1.make.com/4s1qf1p57ddvmwoq1bugrn4wm88ojydu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setEmail("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className={cn(
        "sm:max-w-[425px]",
        "bg-white dark:bg-navy",
        "border-navy/10 dark:border-white/10"
      )}>
        {!isSubmitted ? (
          <>
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
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-navy dark:text-white">
                Thank you for joining!
              </h3>
              <p className="text-navy/70 dark:text-white/70 text-sm">
                We'll reach out to you as soon as we're ready to launch. Stay tuned!
              </p>
            </div>
            <Button 
              onClick={handleClose}
              className="bg-navy hover:bg-navy/90 dark:bg-gold dark:hover:bg-gold/90 text-white"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}