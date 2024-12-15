"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/blog/types";
import { BlogPostMeta } from "./meta";
import { BlogPostShare } from "./share";
import { useEffect, useState } from "react";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-navy/60 dark:text-white/60">
        <Link href="/blog" className="hover:text-navy dark:hover:text-white">Blog</Link>
        <span>→</span>
        <span>{post.category}</span>
      </div>
      <h1 className="text-4xl font-bold text-navy dark:text-white">{post.title}</h1>
      <div className="flex items-center justify-between">
        <BlogPostMeta post={post} />
        <BlogPostShare url={currentUrl} title={post.title} />
      </div>
    </div>
  );
}