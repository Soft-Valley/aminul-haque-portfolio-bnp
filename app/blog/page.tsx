import type { Metadata } from 'next';
import BlogCard from '../components/BlogCard';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'List of blog posts with date, author and category.',
};

const posts = [
  {
    title: 'Education Reform for All',
    excerpt: 'Expanding access to modern education across rural regions.',
    date: 'Nov 1, 2025',
    author: 'Admin',
    category: 'Education',
    href: '/blog/education-reform',
  },
  {
    title: 'Empowering Agriculture',
    excerpt: 'Smart irrigation and cooperative models for farmers.',
    date: 'Oct 25, 2025',
    author: 'Admin',
    category: 'Agriculture',
    href: '/blog/agriculture',
  },
  {
    title: 'Arts & Culture Initiatives',
    excerpt: 'Celebrating heritage and empowering youth creatives.',
    date: 'Oct 10, 2025',
    author: 'Admin',
    category: 'Culture',
    href: '/blog/arts-culture',
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Blog</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <BlogCard key={p.href} {...p} />
        ))}
      </div>
    </div>
  );
}


