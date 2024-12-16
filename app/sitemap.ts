import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://glamic.com';
  const lastModified = new Date();

  // Get all blog posts
  const blogPosts = await getBlogPosts();

  // Define main routes
  const mainRoutes = [
    '',
    '/features',
    '/ai',
    '/pricing',
    '/comparison',
    '/about',
    '/download',
    '/auth/sign-in',
    '/auth/get-started',
    '/blog',
    '/privacy-policy',
    '/terms-of-use',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Create blog post routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...mainRoutes, ...blogRoutes];
}