import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A curated gallery of leadership moments and community work.',
};

// Client state and filtering moved into GalleryClient

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Gallery</h1>
          <p className="mt-2 text-slate-600">Moments from the journey — events, programs, and people.</p>
        </div>
      </div>

      <GalleryClient />

      <div className="mt-10 rounded-xl border border-slate-200 bg-[url('/bnp-story.avif')] bg-cover bg-center p-8 text-white">
        <div className="backdrop-blur-sm bg-black/40 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Share Your Photos</h2>
          <p className="mt-2 text-sm text-white/90">Have a moment to feature? Send it to contact@example.com</p>
        </div>
      </div>
    </div>
  );
}


