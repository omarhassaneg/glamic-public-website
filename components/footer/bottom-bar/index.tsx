"use client";

import { LegalLinks } from "../legal-links";

export function BottomBar() {
  return (
    <div className="mt-12 pt-8 border-t border-navy/10 dark:border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-navy/70 dark:text-white/70 text-sm">
          © {new Date().getFullYear()} Glamic. All rights reserved.
        </p>
        <LegalLinks />
      </div>
    </div>
  );
}