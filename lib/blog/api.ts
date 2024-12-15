import { BlogPost, BlogPostMetadata } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

export async function getBlogPosts(): Promise<BlogPostMetadata[]> {
  const response = await fetch(`${BASE_URL}/api/blog`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const response = await fetch(`${BASE_URL}/api/blog/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog post');
  }
  return response.json();
}