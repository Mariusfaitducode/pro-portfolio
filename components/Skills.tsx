import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

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

        {/* Categories Menu + Skills Display */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-32">
          {/* Left Menu - Categories */}
          <div className="md:w-1/4 md:sticky md:top-32 md:self-start">
            {/* Mobile: flex-wrap horizontal */}
            <div className="flex flex-row flex-wrap gap-4 mb-8 md:hidden">
              {SKILL_CATEGORIES.map((category, idx) => (
                <span
                  key={idx}
                  onClick={() => setSelectedCategory(idx)}
                  className="relative cursor-pointer font-serif text-xl sm:text-2xl text-gray-600 hover:text-black transition-colors duration-300 group py-1"
                >
                  <span className={`transition-all duration-300 ${
                    selectedCategory === idx ? 'text-[#111111] font-bold' : 'font-normal'
                  }`}>
                    {category.title}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
                </span>
              ))}
            </div>
            
            {/* Desktop: menu vertical */}
            <div className="hidden md:flex md:flex-col gap-0">
              {SKILL_CATEGORIES.map((category, idx) => (
                <span
                  key={idx}
                  onClick={() => setSelectedCategory(idx)}
                  className="relative cursor-pointer text-left font-serif text-xl lg:text-2xl text-gray-600 hover:text-black transition-colors duration-300 group py-3"
                >
                  <span className={`transition-all duration-300 ${
                    selectedCategory === idx ? 'text-[#111111] font-bold' : 'font-normal'
                  }`}>
                    {category.title}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="md:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-wrap gap-4">
                  {SKILL_CATEGORIES[selectedCategory].items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <MagneticButton>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                        >
                          <div className="px-5 py-3 bg-white border border-gray-200 rounded-full text-sm text-gray-600 font-medium hover:border-[#0047FF] hover:text-[#0047FF] transition-all duration-300 shadow-sm flex items-center gap-3">
                            {item.logo && (
                              <img 
                                src={item.logo} 
                                alt={`${item.name} logo`}
                                className="w-5 h-5 object-contain flex-shrink-0"
                              />
                            )}
                            <span>{item.name}</span>
                          </div>
                        </a>
                      </MagneticButton>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};