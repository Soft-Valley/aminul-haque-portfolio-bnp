import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Biography, vision & mission, timeline of achievements, and photos.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">About</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Biography</h2>
            <p className="mt-2 text-slate-700">
              Aminul Haque is a public servant dedicated to inclusive growth and community
              empowerment across Bangladesh, advocating reforms in education, agriculture, arts and
              culture.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Vision & Mission</h2>
            <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-1">
              <li>Vision: Education-first nation with equitable opportunities.</li>
              <li>Mission: Deliver practical programs for every community.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Timeline of Achievements</h2>
            <ol className="mt-2 list-decimal pl-6 text-slate-700 space-y-1">
              <li>2018 — Launched rural scholarship program</li>
              <li>2020 — Established farmer cooperative networks</li>
              <li>2023 — City-wide youth culture festivals</li>
            </ol>
          </section>
        </div>
        <aside>
          <h3 className="text-xl font-semibold text-slate-900">Photos</h3>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {['next.svg', 'vercel.svg', 'globe.svg', 'window.svg'].map((img) => (
              <img key={img} src={`/${img}`} alt="gallery" className="rounded border border-slate-200 bg-white p-3" />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}


