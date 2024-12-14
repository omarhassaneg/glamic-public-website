"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { NavigationItem } from "./types";
import { useState } from "react";

interface MobileNavProps {
  items: NavigationItem[];
  pathname: string;
  isHeroDark: boolean;
}

export function MobileNav({ items, pathname, isHeroDark }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center gap-2">
          <ThemeToggle isDark={isHeroDark} />
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className={isHeroDark ? "text-white" : "text-navy dark:text-white"}
            >
              <Menu className="h-6 w-6" />
              <VisuallyHidden>Toggle Menu</VisuallyHidden>
            </Button>
          </SheetTrigger>
        </div>
        <SheetContent 
          side="right" 
          className="w-full sm:w-[300px] bg-white/95 dark:bg-navy/95 backdrop-blur-xl p-0"
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col space-y-4 p-4 pt-12">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
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
              <Link href="/auth/sign-in" onClick={() => setIsOpen(false)} className="block w-full">
                <Button 
                  variant="outline" 
                  className="w-full border-navy/20 dark:border-white/20 text-navy dark:text-white hover:bg-navy/10 dark:hover:bg-white/10 rounded-full"
                >
                  Sign in
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/auth/get-started" onClick={() => setIsOpen(false)} className="block w-full">
                <Button className="w-full bg-gold hover:bg-gold/90 text-white font-semibold rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
