"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isValidEmail } from "@/lib/utils/validation";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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

    setIsSubmitting(true);
    try {
      const response = await fetch('https://hook.us1.make.com/4s1qf1p57ddvmwoq1bugrn4wm88ojydu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          type: "subscribe-to-updates"
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Your Email Here"
          className="bg-navy/10 dark:bg-white/10 border-navy/20 dark:border-white/20 text-navy dark:text-white placeholder:text-navy/50 dark:placeholder:text-white/50"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
            setIsSuccess(false);
          }}
          disabled={isSubmitting}
          aria-label="Email address"
        />
        <Button 
          type="submit"
          className="bg-gold hover:bg-gold/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Joining..." : "Join"}
        </Button>
      </div>
      
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
      
      {isSuccess && (
        <p className="text-xs text-green-500">Successfully subscribed!</p>
      )}
      
      <p className="text-xs text-navy/70 dark:text-white/70">
        By subscribing, you accept our Privacy Policy
      </p>
    </form>
  );
}