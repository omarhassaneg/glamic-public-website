"use client";

import type { BlogPost } from "@/lib/blog";

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <>
      <div className="aspect-video relative bg-navy/10 dark:bg-white/10 mb-8" />
      <div 
        className="text-navy/80 dark:text-white/80" 
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </>
  );
}