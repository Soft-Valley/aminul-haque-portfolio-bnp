"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#008000]">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-900/80 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 space-y-6"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
            Introducing True Changes
            <br />
            <span className="block mt-2 text-white">to Improve Your Life</span>
          </h1>
          <p className="text-white/80 max-w-prose">
            Championing education, agriculture, arts, and culture to empower our people. Join the
            movement to build a brighter future for Bangladesh.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#about"
              className="rounded-md bg-[#E60000] px-6 py-3 text-white font-semibold shadow hover:bg-red-700"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-full w-full min-h-[500px] md:h-[calc(100vh-8rem)]"
        >
          <img
            src="/aminul_haque.jpg"
            alt="Aminul Haque"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-green-900 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}


