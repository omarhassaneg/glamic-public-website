"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { BlogPost } from "@/lib/blog";

export function BlogPostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={post.author.image} alt={post.author.name} />
        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-medium text-navy dark:text-white">{post.author.name}</div>
        <div className="text-sm text-navy/60 dark:text-white/60">
          {post.date} · {post.readTime} min read
        </div>
      </div>
    </div>
  );
}