import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';
import siteMetadata from '@/assets/siteMetadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;
  const blogRoutes = allPosts.map((post) => {
    const basePath = post.path.split('/')[0];
    return {
      url: `${siteUrl}/${basePath}/${post.url}`,
      lastModified: post.lastmod || post.date
    };
  });

  const routes = ['', 'posts', 'tags', 'about'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...blogRoutes];
}
