"use client";

import { BlogPostMetadata } from "@/lib/blog/types";
import { PostCard } from "./post-card";

interface BlogGridProps {
  posts: BlogPostMetadata[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="container px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}