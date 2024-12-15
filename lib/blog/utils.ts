import { BlogPostMetadata } from './types';

export function sortBlogPosts(posts: BlogPostMetadata[]): BlogPostMetadata[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}