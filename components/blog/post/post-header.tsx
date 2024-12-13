"use client";

import Link from "next/link";
import { BlogPostMeta } from "./post-meta";
import { BlogPostShare } from "./post-share";
import type { BlogPost } from "@/lib/blog";

export function BlogPostHeader({ post }: { post: BlogPost }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-sm text-navy/60 dark:text-white/60 mb-4">
        <Link href="/blog" className="hover:text-navy dark:hover:text-white">Blog</Link>
        <span>→</span>
        <span>{post.category}</span>
      </div>
      <h1 className="text-4xl font-bold text-navy dark:text-white mb-6">{post.title}</h1>
      <div className="flex items-center justify-between">
        <BlogPostMeta post={post} />
        <BlogPostShare />
      </div>
    </div>
  );
}