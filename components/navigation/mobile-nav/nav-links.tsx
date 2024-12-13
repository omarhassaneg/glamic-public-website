"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavigationItem } from "../types";

interface MobileNavLinksProps {
  items: NavigationItem[];
  pathname: string;
  onClose: () => void;
}

export function MobileNavLinks({ items, pathname, onClose }: MobileNavLinksProps) {
  return (
    <nav className="flex flex-col space-y-4 p-4 pt-12">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={onClose}
          className={cn(
            "px-4 py-2 rounded-full text-lg font-medium transition-colors text-center",
            "hover:text-gold focus:text-gold focus:outline-none",
            pathname === item.href 
              ? "text-gold" 
              : "text-navy/90 dark:text-white/90 font-semibold"
          )}
        >
          {item.name}
        </Link>
      ))}
      <div className="pt-4">
        <Link href="/auth/sign-in" className="block w-full">
          <Button 
            variant="outline" 
            className="w-full border-navy/20 dark:border-white/20 text-navy dark:text-white hover:bg-navy/10 dark:hover:bg-white/10 rounded-full"
          >
            Sign in
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/auth/get-started" className="block w-full">
          <Button className="w-full bg-gold hover:bg-gold/90 text-white font-semibold rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}