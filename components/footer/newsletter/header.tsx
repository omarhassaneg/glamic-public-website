"use client";

import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export function NewsletterHeader() {
  return (
    <div className="space-y-4">
      <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
        <Logo />
      </Link>
      <h3 className="text-lg font-semibold text-navy dark:text-white">Subscribe to updates</h3>
      <p className="text-navy/70 dark:text-white/70">Stay informed about features!</p>
    </div>
  );
}