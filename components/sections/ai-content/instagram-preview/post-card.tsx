"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PostCardProps {
  image: string;
  caption: string;
  index: number;
}

export function PostCard({ image, caption, index }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className={cn(
        "absolute w-full",
        "bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden",
        "border border-white/20"
      )}
      style={{
        top: index * 20,
        left: index * 20,
        zIndex: 10 - index
      }}
    >
      <div className="aspect-square">
        <img 
          src={image} 
          alt="AI Generated Content Preview" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <p className="text-white/90 text-sm">{caption}</p>
      </div>
    </motion.div>
  );
}