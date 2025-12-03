import EventDetailClient from './EventDetailClient';

export const dynamic = "error";

// Sample event data - In production, this would come from a CMS or API
const eventsData: { [key: string]: any } = {
  'youth-development-workshop-2025': {
    title: 'যুব উন্নয়ন কর্মশালা ২০২৫',
    date: '২৫ ডিসেম্বর ২০২৫',
    time: 'সকাল ১০:০০ - দুপুর ২:০০',
    location: 'উত্তরা কমিউনিটি সেন্টার',
    fullAddress: 'সেক্টর ৭, উত্তরা মডেল টাউন, ঢাকা-১২৩০',
    mapLocation: {
      lat: 23.8759,
      lng: 90.3795,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.564!2d90.3795!3d23.8759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzMzLjIiTiA5MMKwMjInNDYuMiJF!5e0!3m2!1sen!2sbd!4v1234567890'
    },
    description: `
      <h2>কর্মশালার উদ্দেশ্য</h2>
      <p>এই কর্মশালার মূল উদ্দেশ্য হল তরুণদের মধ্যে দক্ষতা উন্নয়ন এবং নেতৃত্বের গুণাবলী বিকাশ করা। আমরা বিশ্বাস করি যে তরুণরাই আগামীর বাংলাদেশ গড়ার কারিগর।</p>

      <h2>কর্মসূচীর বিবরণ</h2>
      <ul>
        <li><strong>উদ্যোক্তা উন্নয়ন:</strong> কীভাবে নিজের ব্যবসা শুরু করবেন</li>
        <li><strong>নেতৃত্ব প্রশিক্ষণ:</strong> কার্যকর নেতৃত্বের গুণাবলী</li>
        <li><strong>ক্যারিয়ার গাইডেন্স:</strong> সঠিক ক্যারিয়ার পথ নির্বাচন</li>
        <li><strong>দক্ষতা উন্নয়ন:</strong> যোগাযোগ এবং উপস্থাপনা দক্ষতা</li>
        <li><strong>নেটওয়ার্কিং:</strong> সমমনা তরুণদের সাথে সংযোগ স্থাপন</li>
      </ul>

      <h2>বক্তা</h2>
      <p>সফল উদ্যোক্তা, কর্পোরেট লিডার এবং যুব উন্নয়ন বিশেষজ্ঞরা তাদের অভিজ্ঞতা শেয়ার করবেন।</p>

      <h2>নিবন্ধন</h2>
      <p>কর্মশালায় অংশগ্রহণ সম্পূর্ণ বিনামূল্যে। আগ্রহী তরুণরা (১৮-৩০ বছর) আমাদের অফিসে যোগাযোগ করে নিবন্ধন করতে পারেন।</p>
    `,
    isPast: false,
    hasVideo: false,
    videos: [],
    image: '/aminul_haque.jpg',
    confirmationMessage: 'নিবন্ধনের পর আপনি ইমেইল এবং এসএমএসের মাধ্যমে নিশ্চিতকরণ বার্তা পাবেন।'
  },
  'community-health-camp': {
    title: 'সম্প্রদায় স্বাস্থ্য ক্যাম্প',
    date: '৩০ ডিসেম্বর ২০২৫',
    time: 'সকাল ৯:০০ - দুপুর ১:০০',
    location: 'মিরপুর সরকারি স্কুল মাঠ',
    fullAddress: 'মিরপুর-১০, ঢাকা-১২১৬',
    mapLocation: {
      lat: 23.8069,
      lng: 90.3685,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.0!2d90.3685!3d23.8069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzI0LjgiTiA5MMKwMjInMDYuNiJF!5e0!3m2!1sen!2sbd!4v1234567890'
    },
    description: `
      <h2>স্বাস্থ্য ক্যাম্পের উদ্দেশ্য</h2>
      <p>স্থানীয় সম্প্রদায়ের জন্য বিনামূল্যে স্বাস্থ্য সেবা প্রদান এবং স্বাস্থ্য সচেতনতা বৃদ্ধি করা।</p>

      <h2>সেবা সমূহ</h2>
      <ul>
        <li><strong>রক্তচাপ পরীক্ষা:</strong> বিনামূল্যে BP চেক</li>
        <li><strong>ডায়াবেটিস স্ক্রিনিং:</strong> রক্তে সুগার লেভেল পরীক্ষা</li>
        <li><strong>সাধারণ স্বাস্থ্য পরীক্ষা:</strong> MBBS ডাক্তারদের দ্বারা</li>
        <li><strong>ওষুধ বিতরণ:</strong> প্রয়োজনীয় ওষুধ বিনামূল্যে</li>
        <li><strong>স্বাস্থ্য পরামর্শ:</strong> বিশেষজ্ঞ ডাক্তারদের সাথে</li>
      </ul>

      <h2>কারা অংশগ্রহণ করতে পারবেন</h2>
      <p>সকল বয়সের মানুষ এই স্বাস্থ্য ক্যাম্পে অংশগ্রহণ করতে পারবেন। বিশেষ করে যারা নিয়মিত চিকিৎসা সেবা পান না তাদের জন্য এটি একটি সুবর্ণ সুযোগ।</p>

      <h2>গুরুত্বপূর্ণ নির্দেশনা</h2>
      <p>দয়া করে আপনার পূর্ববর্তী প্রেসক্রিপশন এবং চিকিৎসা রিপোর্ট (যদি থাকে) সাথে নিয়ে আসুন।</p>
    `,
    isPast: false,
    hasVideo: false,
    videos: [],
    image: '/aminul_haque.jpg',
    confirmationMessage: 'আপনি এসএমএসের মাধ্যমে ক্যাম্পের সময়সূচী এবং অবস্থানের বিস্তারিত তথ্য পাবেন।'
  },
  'education-development-conference-2025': {
    title: 'শিক্ষা উন্নয়ন সম্মেলন ২০২৫',
    date: '১৫ নভেম্বর ২০২৫',
    time: 'সকাল ১০:০০ - বিকাল ৪:০০',
    location: 'ঢাকা রিপোর্টার্স ইউনিটি',
    fullAddress: 'সেগুনবাগিচা, ঢাকা-১০০০',
    mapLocation: {
      lat: 23.7380,
      lng: 90.3978,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8!2d90.3978!3d23.7380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ0JzE2LjgiTiA5MMKwMjMnNTIuMSJF!5e0!3m2!1sen!2sbd!4v1234567890'
    },
    description: `
      <h2>সম্মেলনের উদ্দেশ্য</h2>
      <p>বাংলাদেশের শিক্ষা ব্যবস্থার উন্নয়নে করণীয় নিয়ে জাতীয় পর্যায়ের আলোচনা এবং সুপারিশ প্রণয়ন।</p>

      <h2>আলোচ্য বিষয়</h2>
      <ul>
        <li>প্রাথমিক শিক্ষার মান উন্নয়ন</li>
        <li>মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা সংস্কার</li>
        <li>শিক্ষকদের প্রশিক্ষণ ও উন্নয়ন</li>
        <li>ডিজিটাল শিক্ষা ব্যবস্থা</li>
        <li>শিক্ষায় বরাদ্দ বৃদ্ধি</li>
      </ul>

      <h2>অংশগ্রহণকারী</h2>
      <p>শিক্ষাবিদ, শিক্ষক, অভিভাবক প্রতিনিধি, সরকারি কর্মকর্তা এবং শিক্ষা নিয়ে কাজ করা সংগঠনের প্রতিনিধিরা অংশগ্রহণ করেন।</p>

      <h2>সম্মেলনের ফলাফল</h2>
      <p>সম্মেলন শেষে একটি বিস্তারিত সুপারিশমালা প্রণয়ন করা হয় যা সরকারের কাছে পেশ করা হয়েছে।</p>
    `,
    isPast: true,
    hasVideo: true,
    videos: [
      {
        title: 'সম্মেলনের মূল অধিবেশন',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      },
      {
        title: 'প্যানেল আলোচনা - শিক্ষার গুণমান',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      }
    ],
    image: '/aminul_haque.jpg',
  },
  'youth-football-tournament': {
    title: 'যুব ফুটবল টুর্নামেন্ট',
    date: '২০ অক্টোবর ২০২৫',
    time: 'সকাল ৯:০০ - সন্ধ্যা ৬:০০',
    location: 'উত্তরা স্টেডিয়াম',
    fullAddress: 'সেক্টর ৪, উত্তরা মডেল টাউন, ঢাকা-১২৩০',
    mapLocation: {
      lat: 23.8759,
      lng: 90.3795,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.564!2d90.3795!3d23.8759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzMzLjIiTiA5MMKwMjInNDYuMiJF!5e0!3m2!1sen!2sbd!4v1234567890'
    },
    description: `
      <h2>টুর্নামেন্টের বিবরণ</h2>
      <p>স্থানীয় যুবকদের মধ্যে ফুটবলের প্রতি আগ্রহ বৃদ্ধি এবং প্রতিভা বিকাশের লক্ষ্যে এই টুর্নামেন্টের আয়োজন করা হয়।</p>

      <h2>অংশগ্রহণকারী দল</h2>
      <p>মোট ১৬টি দল টুর্নামেন্টে অংশগ্রহণ করে। প্রতিটি দলে ১৫ জন খেলোয়াড় ছিল।</p>

      <h2>বিজয়ী দল</h2>
      <ul>
        <li><strong>চ্যাম্পিয়ন:</strong> উত্তরা ইউনাইটেড</li>
        <li><strong>রানার আপ:</strong> মিরপুর স্পোর্টস</li>
        <li><strong>তৃতীয় স্থান:</strong> গুলশান এফসি</li>
      </ul>

      <h2>বিশেষ পুরস্কার</h2>
      <ul>
        <li>সেরা খেলোয়াড়: সাকিব হোসেন</li>
        <li>সর্বোচ্চ গোলদাতা: রফিক আহমেদ (৮ গোল)</li>
        <li>সেরা গোলরক্ষক: জামাল উদ্দিন</li>
      </ul>
    `,
    isPast: true,
    hasVideo: true,
    videos: [
      {
        title: 'ফাইনাল ম্যাচের হাইলাইটস',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      },
      {
        title: 'পুরস্কার বিতরণী অনুষ্ঠান',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      },
      {
        title: 'সেরা গোল সংকলন',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      }
    ],
    image: '/aminul_haque.jpg',
  },
};

export function generateStaticParams() {
  return Object.keys(eventsData).map(slug => ({ slug }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function EventDetailPage({ params }: PageProps) {
  const event = eventsData[params.slug];
  return <EventDetailClient event={event} />;
}


