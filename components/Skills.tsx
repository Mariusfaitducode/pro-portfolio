import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Consistent Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-12">
           <h2 className="font-serif text-5xl md:text-7xl text-[#111111]">
             My Skills
           </h2>
           <span className="font-mono text-sm uppercase tracking-wider text-gray-400 mb-2 md:mb-4">
             (04 — Stack & Certs)
           </span>
        </div>
        <div className="h-px w-full bg-gray-200 mb-16" />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="font-serif text-2xl text-gray-900 border-b border-gray-100 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 font-medium hover:border-gray-400 hover:text-black transition-colors cursor-default shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-12">
            <Award className="w-8 h-8 text-[#0047FF]" />
            <h3 className="font-serif text-3xl md:text-4xl">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-gray-800 pb-8 last:border-0"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[#0047FF] font-mono text-xs uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-gray-500 font-mono text-xs">
                    {cert.year}
                  </span>
                </div>
                <h4 className="font-serif text-xl md:text-2xl text-gray-200 group-hover:text-white transition-colors">
                  {cert.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};