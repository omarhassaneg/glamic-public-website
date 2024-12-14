"use client";

import { motion } from "framer-motion";
import { CreditCard, Wallet } from "lucide-react";

const paymentMethods = [
  { icon: CreditCard, name: "Credit Card" },
  { icon: Wallet, name: "Apple Pay" },
  { 
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.24 14.494c-.338.147-.73.22-1.175.22-.445 0-.84-.073-1.183-.22a2.874 2.874 0 01-.93-.604 2.777 2.777 0 01-.62-.91 2.927 2.927 0 01-.225-1.152c0-.41.075-.79.225-1.143.15-.352.358-.658.62-.918.264-.26.576-.464.937-.612.362-.147.757-.22 1.184-.22.437 0 .83.073 1.176.22.347.148.642.352.886.612.244.26.433.566.567.918.134.352.2.732.2 1.143 0 .41-.066.79-.2 1.143a2.668 2.668 0 01-.567.918 2.607 2.607 0 01-.895.604zm8.24-3.494h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"/>
      </svg>
    ), 
    name: "Affirm" 
  }
];

export function PaymentMethods() {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium text-navy/70 dark:text-white/70">
        Available Payment Methods
      </h4>
      <div className="grid grid-cols-3 gap-3">
        {paymentMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center gap-2 p-3 bg-white/50 dark:bg-white/5 rounded-lg"
          >
            <method.icon className="h-5 w-5 text-navy/70 dark:text-white/70" />
            <span className="text-xs text-navy/70 dark:text-white/70">{method.name}</span>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-navy/60 dark:text-white/60 text-center">
        Secure payment processing powered by Stripe
      </p>
    </div>
  );
}