"use client";

import { BlogPost } from "@/lib/blog/types";
import { FeaturedImage } from "./featured-image";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="space-y-8">
      <FeaturedImage src={post.image} alt={post.title} />
      <div 
        className="prose prose-navy dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}