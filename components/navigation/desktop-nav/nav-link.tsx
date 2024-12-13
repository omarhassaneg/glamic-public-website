"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationItem } from "../types";

interface NavLinkProps {
  item: NavigationItem;
  pathname: string;
  isHeroDark: boolean;
}

export function NavLink({ item, pathname, isHeroDark }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-colors",
        "hover:text-gold focus:text-gold focus:outline-none",
        pathname === item.href 
          ? "text-gold" 
          : isHeroDark
            ? "text-white/90"
            : "text-navy/90 dark:text-white/90 font-semibold"
      )}
    >
      {item.name}
    </Link>
  );
}