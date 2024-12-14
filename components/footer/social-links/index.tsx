"use client";

import { SocialList } from "./social-list";

export function SocialLinks() {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-lg font-semibold text-gold mb-4">Follow Us</h3>
      <SocialList />
    </div>
  );
}