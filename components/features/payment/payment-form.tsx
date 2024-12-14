"use client";

export function PaymentForm() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-navy dark:text-white">Payment Summary</h3>
        <span className="text-sm text-navy/70 dark:text-white/70">Booking #12345</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between p-3 bg-white/50 dark:bg-white/5 rounded-lg">
          <span className="text-navy/70 dark:text-white/70">Service Total</span>
          <span className="font-medium text-navy dark:text-white">$120.00</span>
        </div>
        <div className="flex justify-between p-3 bg-white/50 dark:bg-white/5 rounded-lg">
          <span className="text-navy/70 dark:text-white/70">Travel Fee</span>
          <span className="font-medium text-navy dark:text-white">$15.00</span>
        </div>
        <div className="flex justify-between p-3 bg-white/50 dark:bg-white/5 rounded-lg">
          <span className="text-navy/70 dark:text-white/70">Peak Hour Rate</span>
          <span className="font-medium text-navy dark:text-white">$10.00</span>
        </div>
        <div className="flex justify-between p-3 bg-gold/10 rounded-lg">
          <span className="font-medium text-navy dark:text-white">Total Due</span>
          <span className="font-bold text-gold">$145.00</span>
        </div>
        <div className="flex justify-between p-3 bg-navy/5 dark:bg-white/5 rounded-lg">
          <span className="text-navy/70 dark:text-white/70">Required Deposit</span>
          <span className="font-medium text-navy dark:text-white">$50.00</span>
        </div>
      </div>
    </div>
  );
}