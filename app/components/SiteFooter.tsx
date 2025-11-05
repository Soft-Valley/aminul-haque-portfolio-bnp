import Link from 'next/link';

const recentPosts = [
  { title: 'Education Reform for All', href: '/blog/education-reform' },
  { title: 'Empowering Agriculture', href: '/blog/agriculture' },
  { title: 'Arts & Culture Initiatives', href: '/blog/arts-culture' },
];

export default function SiteFooter() {
  return (
    <footer className="mt-16 bg-[#008000] text-white">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bnp-story.avif)', filter: 'brightness(0.9)' }}
      >
        <div className="backdrop-blur-sm bg-green-900/60">
          <div className="mx-auto max-w-7xl px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <p className="text-sm text-gray-300 leading-6">
                A professional, modern and clean political portfolio highlighting vision, programs,
                achievements and community impact.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
              <ul className="space-y-2">
                {recentPosts.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-sm text-gray-300 hover:text-green-500">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Gallery</h4>
              <div className="grid grid-cols-3 gap-2">
                {['next.svg', 'vercel.svg', 'globe.svg', 'window.svg', 'file.svg', 'next.svg'].map(
                  (img, i) => (
                    <img
                      key={i}
                      src={`/${img}`}
                      alt="gallery"
                      className="h-16 w-full rounded object-contain bg-white/10 p-2"
                    />
                  ),
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Email: contact@example.com</li>
                <li>Phone: +880 1234-567890</li>
                <li>Address: Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between text-sm">
          <span className="text-gray-400">© {new Date().getFullYear()} Aminul Haque</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-green-500">Home</Link>
            <Link href="/about" className="hover:text-red-500">About</Link>
            <Link href="/contact" className="hover:text-green-500">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


