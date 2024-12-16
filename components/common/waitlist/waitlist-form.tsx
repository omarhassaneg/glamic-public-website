"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { isValidEmail } from "@/lib/utils/validation";
import { WaitlistFormProps } from "./types";

export function WaitlistForm({ onSubmit, isSubmitting }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    await onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          required
          className={cn(
            "bg-white dark:bg-navy/50",
            "border-navy/10 dark:border-white/10",
            "text-navy dark:text-white",
            "placeholder:text-navy/40 dark:placeholder:text-white/40",
            error && "border-red-500 dark:border-red-500"
          )}
          aria-invalid={!!error}
          aria-describedby={error ? "email-error" : undefined}
        />
        {error && (
          <p id="email-error" className="text-sm text-red-500 dark:text-red-400">
            {error}
          </p>
        )}
      </div>
      <Button 
        type="submit" 
        className="w-full bg-gold hover:bg-gold/90 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
}