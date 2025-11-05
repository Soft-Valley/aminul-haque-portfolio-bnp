import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact form, address and map section.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <ContactForm />
        </div>
        <div>
          <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=Dhaka%2C%20Bangladesh&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="h-[360px] w-full"
            />
          </div>
          <div className="mt-4 text-sm text-slate-600">
            <p>Email: contact@example.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}


