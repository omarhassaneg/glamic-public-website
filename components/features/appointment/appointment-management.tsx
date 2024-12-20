"use client";

import { AppointmentContent } from "./content";
import { AppointmentDemo } from "./demo";

export function AppointmentManagement() {
  return (
    <section id="appointment-management" className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AppointmentDemo />
          <AppointmentContent />
        </div>
      </div>
    </section>
  );
}