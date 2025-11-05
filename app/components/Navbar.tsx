"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaDonate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <img src="/globe.svg" alt="Logo" className="h-7 w-7" />
          <span className="text-slate-900">Aminul Haque</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-green-700 ${
                  active ? 'text-green-700' : 'text-slate-700'
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-green-700"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="#donate"
          className="inline-flex items-center gap-2 rounded-md bg-[#E60000] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          <FaDonate /> Donate
        </Link>
      </div>
    </header>
  );
}


