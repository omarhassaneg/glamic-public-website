"use client";

import Link from "next/link";
import { footerLinks } from "../links";

export function QuickLinks() {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-lg font-semibold text-gold mb-4">Quick Links</h3>
      <ul className="space-y-3">
        {footerLinks.resources.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href}
              className="text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}