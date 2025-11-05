import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating?: number;
  isActive?: boolean;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  image = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  rating = 5,
  isActive = false,
}: TestimonialCardProps) {
  const quoteIconColor = isActive ? 'text-green-700' : 'text-gray-300';
  const textColor = isActive ? 'text-slate-900' : 'text-gray-600';
  const nameColor = isActive ? 'text-slate-900' : 'text-gray-600';
  const cardShadow = isActive ? 'shadow-lg' : 'shadow-sm';
  const imageFilter = isActive ? '' : 'grayscale';

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-6 ${cardShadow} transition-all duration-300`}>
      {/* Quote Icon */}
      <div className="mb-4">
        <FaQuoteLeft className={`text-5xl ${quoteIconColor}`} />
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={author}
          className={`w-20 h-20 rounded-full object-cover ${imageFilter} transition-all duration-300`}
        />
      </div>

      {/* Quote Text */}
      <p className={`text-center mb-4 leading-relaxed ${textColor}`}>"{quote}"</p>

      {/* Author and Role */}
      <div className="text-center">
        <div className={`font-semibold ${nameColor} mb-1`}>{author}</div>
        <div className={`text-sm ${textColor}`}>{role}</div>
      </div>
    </div>
  );
}


