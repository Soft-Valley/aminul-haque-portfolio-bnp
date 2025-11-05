import Link from 'next/link';

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  category,
  href,
}: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  href: string;
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <span>{date}</span>
        <span>•</span>
        <span>{author}</span>
        <span className="ml-auto rounded bg-green-100 px-2 py-0.5 text-green-800">{category}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{excerpt}</p>
      <Link href={href} className="mt-3 inline-block text-sm font-semibold text-green-700 hover:text-red-600">
        Read more →
      </Link>
    </article>
  );
}


