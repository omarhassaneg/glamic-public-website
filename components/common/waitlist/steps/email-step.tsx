"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { isValidEmail } from "@/lib/utils/validation";
import { StepProps } from "../types";
import { DialogTitle } from "@/components/ui/dialog";

export function EmailStep({ onNext, value }: StepProps) {
  const [email, setEmail] = useState(value);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    onNext(email);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 py-6"
    >
      <div className="space-y-2">
        <DialogTitle className="text-lg font-medium text-navy dark:text-white">
          What's your email?
        </DialogTitle>
        <p className="text-sm text-navy/70 dark:text-white/70">
          We'll keep you updated on our launch
        </p>
      </div>

      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          onKeyDown={handleKeyDown}
          className="bg-white dark:bg-navy/50 border-navy/10 dark:border-white/10"
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>

      <Button 
        onClick={handleNext}
        className="w-full bg-gold hover:bg-gold/90 text-white"
      >
        Continue
      </Button>
    </motion.div>
  );
}