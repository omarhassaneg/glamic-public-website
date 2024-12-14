"use client";

import { AppointmentContent } from "./appointment-content";
import { AppointmentDemo } from "./appointment-demo";

export function AppointmentManagement() {
  return (
    <section className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AppointmentContent />
          <AppointmentDemo />
        </div>
      </div>
    </section>
  );
}