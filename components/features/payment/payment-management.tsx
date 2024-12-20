"use client";

import { PaymentContent } from "./content";
import { PaymentDemo } from "./demo";

export function PaymentManagement() {
  return (
    <section id="payment-management" className="w-full py-20 bg-white dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <PaymentContent />
          <PaymentDemo />
        </div>
      </div>
    </section>
  );
}