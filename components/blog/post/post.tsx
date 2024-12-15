"use client";

import { BlogPostHeader } from "./header";
import { BlogPostContent } from "./content";
import type { BlogPost } from "@/lib/blog/types";

export function BlogPost({ post }: { post: BlogPost }) {
  return (
    <article className="space-y-8">
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
    </article>
  );
}