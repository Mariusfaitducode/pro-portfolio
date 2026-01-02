import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

interface MarqueeCardProps {
  testimonial: typeof TESTIMONIALS[0];
}

const MarqueeCard: React.FC<MarqueeCardProps> = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[450px] p-8 mx-4 bg-white rounded-xl border border-gray-200 shadow-sm">
    <p className="font-serif text-xl text-gray-800 italic mb-6">"{testimonial.quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
        {testimonial.name[0]}
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
        <div className="text-xs text-gray-500 font-mono uppercase">{testimonial.role}</div>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <h2 className="font-serif text-4xl text-gray-900">Trusted by founders & engineering leads</h2>
      </div>

      <div className="relative flex w-full overflow-hidden mask-linear-gradient">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <MarqueeCard key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};