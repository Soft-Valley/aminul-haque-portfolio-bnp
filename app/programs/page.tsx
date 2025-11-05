import type { Metadata } from 'next';
import ProgramCard from '../components/ProgramCard';
import { FaBookReader, FaSeedling, FaTheaterMasks, FaLandmark } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Programs',
  description: 'List of political programs displayed as cards.',
};

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Programs</h1>
      <p className="mt-2 text-slate-600">Education, agriculture, arts & culture — and more.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProgramCard
          icon={<FaBookReader className="h-10 w-10" />}
          title="Education"
          description="Scholarships, digital literacy, modernized curriculum and teacher training."
        />
        <ProgramCard
          icon={<FaSeedling className="h-10 w-10" />}
          title="Agriculture"
          description="Smart farming, fair pricing, irrigation and farmer cooperatives."
        />
        <ProgramCard
          icon={<FaTheaterMasks className="h-10 w-10" />}
          title="Arts & Culture"
          description="Festivals, heritage preservation, youth arts programs and community theaters."
        />
        <ProgramCard
          icon={<FaLandmark className="h-10 w-10" />}
          title="Good Governance"
          description="Transparency, accountability, and citizen-first services."
        />
      </div>
    </div>
  );
}


