import { Metadata } from 'next';
import Hero from './components/Hero';
import ProgramCard from './components/ProgramCard';
import TestimonialCarousel from './components/TestimonialCarousel';
import BlogCard from './components/BlogCard';
import ContactForm from './components/ContactForm';
import VideoImageTabs from './components/VideoImageTabs';
import { FaBookReader, FaSeedling, FaTheaterMasks, FaLandmark } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Home of Aminul Haque portfolio — hero intro, programs, testimonials, blog and contact.',
};

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Election Manifesto Section */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Election Manifesto</h2>
          <h3 className="text-base md:text-lg font-medium text-slate-500 leading-tight">Our Vision for Change</h3>
          <h3 className="text-base md:text-lg font-medium text-slate-500 leading-tight mb-8">Building a Better Future</h3>
          <div className="relative aspect-video w-full mx-auto">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Election Manifesto"
              className="h-full w-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-slate-50 pt-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Political Programs</h2>
        </div>
      </section>

      {/* Video and Image Tabs Section */}
      <VideoImageTabs />

      {/* Achievements Counter (static placeholders) */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Programs Launched', value: '25+' },
            { label: 'Communities Reached', value: '120+' },
            { label: 'Volunteers', value: '5K+' },
            { label: 'Awards', value: '12' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 p-6 text-center">
              <div className="text-3xl font-extrabold text-green-700">{item.value}</div>
              <div className="mt-1 text-sm text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Testimonials</h2>
          <TestimonialCarousel
            testimonials={[
              { quote: "A leader with vision and compassion. His dedication to education reform has transformed our community.", author: "Nusrat J.", role: "Teacher" },
              { quote: "Practical solutions for farmers like me. The agricultural programs have made a real difference in our lives.", author: "Rahim U.", role: "Farmer" },
              { quote: "Investing in youth and culture. The arts initiatives have given our children amazing opportunities.", author: "Tanvir A.", role: "Artist" },
              { quote: "Transparent governance and genuine care for the people. A true public servant.", author: "Fatima K.", role: "Community Leader" },
              { quote: "The programs launched have directly improved our quality of life. Thank you for your service.", author: "Mohammad H.", role: "Resident" },
            ]}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Latest Blog */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Latest Blog Posts</h2>
            <p className="mt-2 text-slate-600">Insights and updates.</p>
          </div>
          <a href="/blog" className="text-sm font-semibold text-green-700 hover:text-red-600">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlogCard
            title="Education Reform for All"
            excerpt="Expanding access to modern education across rural regions."
            date="Nov 1, 2025"
            author="Admin"
            category="Education"
            href="/blog/education-reform"
          />
          <BlogCard
            title="Empowering Agriculture"
            excerpt="Smart irrigation and cooperative models for farmers."
            date="Oct 25, 2025"
            author="Admin"
            category="Agriculture"
            href="/blog/agriculture"
          />
          <BlogCard
            title="Arts & Culture Initiatives"
            excerpt="Celebrating heritage and empowering youth creatives."
            date="Oct 10, 2025"
            author="Admin"
            category="Culture"
            href="/blog/arts-culture"
          />
        </div>
      </section>

      {/* Contact with Map */}
      <section id="contact" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Get in Touch</h2>
            <p className="mt-2 text-slate-600">We value your thoughts and support.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <iframe
                title="Map"
                src="https://maps.google.com/maps?q=Dhaka%2C%20Bangladesh&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="donate" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-green-50 to-red-50 p-8 md:p-12 text-center shadow-sm">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Join the Movement</h3>
          <p className="mt-2 text-slate-600">Volunteer, donate, or spread the word to support positive change.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="/contact" className="rounded-md bg-green-700 px-6 py-3 text-white font-semibold hover:bg-green-800">Join Now</a>
            <a href="#top" className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:border-red-600 hover:text-red-700">Learn More</a>
          </div>
        </div>
      </section>
    </main>
  );
}
