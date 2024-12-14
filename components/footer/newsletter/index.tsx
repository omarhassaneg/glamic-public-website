"use client";

import { NewsletterHeader } from "./header";
import { EmailForm } from "./email-form";

export function Newsletter() {
  return (
    <div className="flex flex-col items-center text-center">
      <NewsletterHeader />
      <EmailForm />
    </div>
  );
}