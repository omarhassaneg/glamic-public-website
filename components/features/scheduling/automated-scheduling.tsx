"use client";

import { SchedulingContent } from "./scheduling-content";
import { SchedulingDemo } from "./scheduling-demo";

export function AutomatedScheduling() {
  return (
    <section id="automated-scheduling" className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SchedulingContent />
          <SchedulingDemo />
        </div>
      </div>
    </section>
  );
}
