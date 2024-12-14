"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { NavigationItem } from "./types";

interface DesktopNavProps {
  items: NavigationItem[];
  pathname: string;
  isHeroDark: boolean;
}

export function DesktopNav({ items, pathname, isHeroDark }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {items.map((item) => (
        <Link
          key={item.name}
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
      ))}
      <ThemeToggle isDark={isHeroDark} />
      <Link href="/download">
        <Button className="ml-2 bg-gold hover:bg-gold/90 text-white font-semibold rounded-full">
          Get Started
        </Button>
      </Link>
    </nav>
  );
}