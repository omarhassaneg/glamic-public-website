"use client";

import Link from "next/link";
import { footerLinks } from "./links";

export function LegalLinks() {
  return (
    <div className="flex gap-6">
      {footerLinks.legal.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white text-sm"
        >
          {link.name}
        </Link>
      ))}
      <button className="text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white text-sm">
        Cookie Settings
      </button>
    </div>
  );
}