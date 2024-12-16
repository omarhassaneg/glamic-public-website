"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { WaitlistDialogProps } from "./types";
import { WaitlistDialogHeader } from "./dialog-header";
import { WaitlistForm } from "./waitlist-form";
import { SuccessMessage } from "./success-message";

export function WaitlistDialog({ 
  isOpen, 
  onClose, 
  title,
  description,
  earlyAccess 
}: WaitlistDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (email: string) => {
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
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
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
            <WaitlistDialogHeader 
              title={title}
              description={description}
              earlyAccess={earlyAccess}
            />
            <WaitlistForm 
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </>
        ) : (
          <SuccessMessage onClose={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  );
}