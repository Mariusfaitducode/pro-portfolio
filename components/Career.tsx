import React from 'react';
import { motion } from 'framer-motion';
import { CAREER_TIMELINE } from '../constants';
import { MagneticButton } from './ui/MagneticButton';

export const Career: React.FC = () => {
  return (
    <section id="career" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Consistent Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-12">
           <h2 className="font-serif text-5xl md:text-7xl text-[#111111]">
             Career Path
           </h2>
           <span className="font-mono text-sm uppercase tracking-wider text-gray-400 mb-2 md:mb-4">
             (03 — Experience)
           </span>
        </div>
        <div className="h-px w-full bg-gray-200 mb-16" />

        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          {/* Header Description */}
          <div className="md:w-1/3 md:sticky md:top-32 md:self-start">
            <p className="font-serif text-2xl md:text-3xl text-gray-800 leading-tight">
              My journey in the world of software engineering.
            </p>
          </div>

          {/* Timeline */}
          <div className="md:w-2/3 flex flex-col gap-12 border-l border-gray-200 pl-8 ml-8 md:pl-16 relative">
            {CAREER_TIMELINE.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Logo */}
                {item.logo && item.url && (
                  <div className="absolute -left-[52px] md:-left-[88px] top-0 z-10">
                    <MagneticButton>
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-lg border-2 border-gray-200 hover:border-[#0047FF] transition-colors p-1.5 md:p-2 shadow-sm cursor-pointer"
                      >
                        <img 
                          src={item.logo} 
                          alt={`${item.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </a>
                    </MagneticButton>
                  </div>
                )}
                
                <span className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-2 block">
                  {item.date}
                </span>
                <h3 className="font-serif text-2xl text-gray-900 mb-1">
                  {item.role}
                </h3>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0047FF] font-medium mb-3 hover:underline transition-all cursor-pointer inline-block"
                  >
                    {item.company}
                  </a>
                ) : (
                  <div className="text-[#0047FF] font-medium mb-3">
                    {item.company}
                  </div>
                )}
                <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};