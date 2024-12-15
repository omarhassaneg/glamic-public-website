"use client";

import { BlogPost } from "@/lib/blog/types";

export interface BlogPostHeaderProps {
  post: BlogPost;
}

export interface BlogPostContentProps {
  post: BlogPost;
}

export interface BlogPostMetaProps {
  post: BlogPost;
}

export interface ShareButtonProps {
  url: string;
  title: string;
}

export interface MarkdownRendererProps {
  content: string;
}

export interface FeaturedImageProps {
  src: string;
  alt: string;
}