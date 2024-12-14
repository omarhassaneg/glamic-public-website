"use client";

import { NotificationsContent } from "./notifications-content";
import { NotificationsDemo } from "./notifications-demo";

export function NotificationsSection() {
  return (
    <section className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <NotificationsDemo />
          <NotificationsContent />
        </div>
      </div>
    </section>
  );
}