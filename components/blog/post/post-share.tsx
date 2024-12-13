"use client";

import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogPostShare() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white">
        <Share2 className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white">
        <Twitter className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white">
        <Facebook className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white">
        <Linkedin className="h-4 w-4" />
      </Button>
    </div>
  );
}