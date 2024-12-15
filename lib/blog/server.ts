import fs from 'fs';
import path from 'path';
import { BlogPost, BlogPostMetadata } from './types';
import { sortBlogPosts } from './utils';

const blogDir = path.join(process.cwd(), 'content/blog');

function extractMetadata(html: string): BlogPostMetadata {
  const metadataMatch = html.match(/<meta name="blog-metadata" content='(.*?)'>/);
  if (!metadataMatch) {
    throw new Error('Blog metadata not found');
  }
  return JSON.parse(metadataMatch[1]);
}

function extractContent(html: string): string {
  const bodyMatch = html.match(/<body>(.*?)<\/body>/s);
  if (!bodyMatch) {
    throw new Error('Blog content not found');
  }
  return bodyMatch[1].trim();
}

export async function getBlogPosts(): Promise<BlogPostMetadata[]> {
  const files = fs.readdirSync(blogDir);
  const posts = files
    .filter(file => file.endsWith('.html'))
    .map(file => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return extractMetadata(fileContent);
    });

  return sortBlogPosts(posts);
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const files = fs.readdirSync(blogDir);
    const file = files.find(file => file.startsWith(slug));

    if (!file) {
      return null;
    }

    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const metadata = extractMetadata(fileContent);
    const content = extractContent(fileContent);

    return {
      ...metadata,
      content,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}