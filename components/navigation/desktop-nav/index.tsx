"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { NavigationItem } from "../types";
import { NavLink } from "./nav-link";

interface DesktopNavProps {
  items: NavigationItem[];
  pathname: string;
  isHeroDark: boolean;
}

export function DesktopNav({ items, pathname, isHeroDark }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {items.map((item) => (
        <NavLink
          key={item.name}
          item={item}
          pathname={pathname}
          isHeroDark={isHeroDark}
        />
      ))}
      <ThemeToggle isDark={isHeroDark} />
      <Link href="/auth/sign-in">
        <Button 
          variant="outline" 
          className={cn(
            "rounded-full",
            isHeroDark
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-navy/20 dark:border-white/20 text-navy dark:text-white hover:bg-navy/10 dark:hover:bg-white/10"
          )}
        >
          Sign in
        </Button>
      </Link>
      <Link href="/auth/get-started">
        <Button className="ml-2 bg-gold hover:bg-gold/90 text-white font-semibold rounded-full">
          Get Started
        </Button>
      </Link>
    </nav>
  );
}