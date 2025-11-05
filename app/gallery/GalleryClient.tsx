"use client";
import { useMemo, useState } from 'react';

type Category = 'All' | 'Leader' | 'Events' | 'Programs' | 'People';

const TABS: Category[] = ['All', 'Leader', 'Events', 'Programs', 'People'];

const GALLERY_ITEMS: { src: string; alt: string; category: Exclude<Category, 'All'> }[] = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Portrait_Placeholder.png', alt: 'Leader portrait placeholder', category: 'Leader' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', alt: 'Leader portrait alt', category: 'Leader' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Crowd_at_political_rally.jpg', alt: 'Community rally event', category: 'Events' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Public_meeting_in_auditorium.jpg', alt: 'Town hall meeting', category: 'Events' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Primary_school_students_in_Bangladesh.jpg', alt: 'Education program', category: 'Programs' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Bangladesh_farmer_in_field.jpg', alt: 'Agriculture program', category: 'Programs' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Portrait_Placeholder_Female.png', alt: 'Volunteer portrait', category: 'People' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg', alt: 'Supporter avatar', category: 'People' },
];

export default function GalleryClient() {
  const [active, setActive] = useState<Category>('All');

  const items = useMemo(() => {
    if (active === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((i) => i.category === active);
  }, [active]);

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {TABS.map((tab) => {
          const selected = tab === active;
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selected
                  ? 'border-green-700 bg-green-700 text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-green-600 hover:text-green-700'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <img
              src={item.src}
              alt={item.alt}
              className="h-40 w-full object-cover bg-white transition duration-300 group-hover:scale-105"
            />
            <div className="px-3 py-2 text-xs text-slate-500 border-t border-slate-100">
              {item.category}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


