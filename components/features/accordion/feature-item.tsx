"use client";

import { LucideIcon } from "lucide-react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FeatureItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function FeatureItem({ title, description, icon: Icon, index }: FeatureItemProps) {
  return (
    <AccordionItem 
      value={`item-${index}`}
      className="border-none mb-2 last:mb-0"
    >
      <div className="hover:no-underline bg-white/50 dark:bg-navy/50 backdrop-blur-sm rounded-lg p-3 transition-all hover:bg-white dark:hover:bg-navy group">
        <AccordionTrigger className="w-full">
          <div className="flex items-center gap-3 w-full">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-gold" />
            </div>
            <span className="text-left font-medium text-base text-navy dark:text-white group-hover:text-gold transition-colors">
              {title}
            </span>
          </div>
        </AccordionTrigger>
      </div>
      <AccordionContent className="mt-1">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white/30 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 space-y-3"
        >
          <p className="text-navy/70 dark:text-white/70 leading-relaxed text-sm">
            {description}
          </p>
          <Button 
            className="w-full bg-gold hover:bg-gold/90 text-white"
            onClick={(e) => {
              e.stopPropagation();
              // Add your get started logic here
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </AccordionContent>
    </AccordionItem>
  );
}