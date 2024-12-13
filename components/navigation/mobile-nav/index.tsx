"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NavigationItem } from "../types";
import { MobileNavLinks } from "./nav-links";

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
          <MobileNavLinks 
            items={items} 
            pathname={pathname} 
            onClose={() => setIsOpen(false)} 
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}