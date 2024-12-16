"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { StepProps } from "../types";
import { DialogTitle } from "@/components/ui/dialog";

export function NameStep({ onNext, value, isSubmitting }: StepProps) {
  const [name, setName] = useState(value);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!name.trim()) {
      setError("First name is required");
      return;
    }

    onNext(name);
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
          What's your first name?
        </DialogTitle>
        <p className="text-sm text-navy/70 dark:text-white/70">
          Help us personalize your experience
        </p>
      </div>

      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Enter your first name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
        disabled={isSubmitting}
        className="w-full bg-gold hover:bg-gold/90 text-white"
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </motion.div>
  );
}