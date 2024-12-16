"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { WaitlistDialogProps, Step, FormData } from "./types";
import { EmailStep } from "./steps/email-step";
import { NameStep } from "./steps/name-step";
import { SuccessStep } from "./steps/success-step";

export function WaitlistDialog({ isOpen, onClose, title }: WaitlistDialogProps) {
  const [currentStep, setCurrentStep] = useState<Step>("email");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailNext = (email: string) => {
    setFormData(prev => ({ ...prev, email }));
    setCurrentStep("name");
  };

  const handleNameNext = async (firstName: string) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://hook.us1.make.com/4s1qf1p57ddvmwoq1bugrn4wm88ojydu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: formData.email,
          firstName,
          type: "ai-join-waitlist"
        }),
      });

      if (response.ok) {
        setFormData(prev => ({ ...prev, firstName }));
        setCurrentStep("success");
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setCurrentStep("email");
    setFormData({ email: "", firstName: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-navy border-navy/10 dark:border-white/10">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {currentStep === "email" && (
          <EmailStep 
            onNext={handleEmailNext}
            value={formData.email}
          />
        )}
        {currentStep === "name" && (
          <NameStep
            onNext={handleNameNext}
            value={formData.firstName}
            isSubmitting={isSubmitting}
          />
        )}
        {currentStep === "success" && (
          <SuccessStep onClose={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  );
}