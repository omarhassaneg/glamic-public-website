"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DesktopNav } from "./navigation/desktop-nav";
import { MobileNav } from "./navigation/mobile-nav";
import { Logo } from "./ui/logo";

const navigationItems = [
  { name: "Features", href: "/features" },
  { name: "AI", href: "/ai" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Comparison", href: "/comparison" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const isHeroLight = isHomePage || pathname === "/features" || pathname === "/comparison";
  const isHeroDark = pathname === "/ai" || pathname === "/pricing";

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 my-4">
        <header 
          className={cn(
            "rounded-full transition-all duration-300 backdrop-blur-sm",
            {
              "bg-offwhite/50 dark:bg-navy/50": isHeroLight && !isScrolled,
              "bg-navy/50 dark:bg-navy/50": isHeroDark && !isScrolled,
              "bg-white/30 dark:bg-navy/30": isScrolled || (!isHeroLight && !isHeroDark),
            }
          )}
        >
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo isDark={isHeroDark && !isScrolled} />
            </Link>

            <DesktopNav 
              items={navigationItems} 
              pathname={pathname} 
              isHeroDark={isHeroDark && !isScrolled}
            />
            <MobileNav 
              items={navigationItems} 
              pathname={pathname}
              isHeroDark={isHeroDark && !isScrolled}
            />
          </div>
        </header>
      </div>
    </div>
  );
}