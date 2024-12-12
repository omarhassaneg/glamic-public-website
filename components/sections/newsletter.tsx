"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full py-12 bg-offwhite">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h3 className="text-2xl font-bold text-navy">Subscribe to updates</h3>
          <p className="text-navy/70">Stay informed about our latest features and offers!</p>
          <div className="flex w-full max-w-md gap-2">
            <Input
              type="email"
              placeholder="Your Email Here"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="bg-gold hover:bg-gold/90 text-white">
              Join
            </Button>
          </div>
          <p className="text-xs text-navy/60">
            By subscribing, you accept our Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}