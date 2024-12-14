"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailForm() {
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-4 w-full">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Your Email Here"
          className="bg-navy/10 dark:bg-white/10 border-navy/20 dark:border-white/20 text-navy dark:text-white placeholder:text-navy/50 dark:placeholder:text-white/50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="bg-gold hover:bg-gold/90 text-white">
          Join
        </Button>
      </div>
      <p className="text-xs text-navy/70 dark:text-white/70">
        By subscribing, you accept our Privacy Policy
      </p>
    </div>
  );
}