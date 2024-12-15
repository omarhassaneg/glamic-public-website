"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { BlogPostMetadata } from "@/lib/blog/types";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/blog/utils";

interface PostCardProps {
  post: BlogPostMetadata;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/${post.slug}`}>
      <Card className={cn(
        "overflow-hidden hover:shadow-lg transition-shadow",
        "bg-white dark:bg-navy/50 border-navy/10 dark:border-gold/20"
      )}>
        <div className="aspect-video relative bg-navy/10 dark:bg-white/10">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-navy/60 dark:text-gold">{post.category}</span>
            <span className="text-sm text-navy/60 dark:text-white/60">{post.readTime} min read</span>
          </div>
          <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">{post.title}</h3>
          <p className="text-navy/70 dark:text-white/70 line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-gold font-medium">Read more →</span>
            <span className="text-sm text-navy/60 dark:text-white/60">{formatDate(post.date)}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}