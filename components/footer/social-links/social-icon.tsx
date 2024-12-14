"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  name: string;
}

export function SocialIcon({ href, icon: Icon, name }: SocialIconProps) {
  return (
    <Link 
      href={href}
      className="flex items-center text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white transition-colors"
    >
      <Icon className="h-4 w-4 mr-2" />
      {name}
    </Link>
  );
}