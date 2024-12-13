"use client";

import { BlogPostHeader } from "./post-header";
import { BlogPostContent } from "./post-content";
import type { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function BlogPost({ post }: { post: BlogPost }) {
  return (
    <article className={cn(
      "prose prose-navy dark:prose-invert max-w-none",
      "prose-headings:text-navy dark:prose-headings:text-white",
      "prose-p:text-navy/80 dark:prose-p:text-white/80"
    )}>
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
    </article>
  );
}