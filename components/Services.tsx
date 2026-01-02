import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Consistent Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-12">
           <h2 className="font-serif text-5xl md:text-7xl text-[#111111]">
             Services
           </h2>
           <span className="font-mono text-sm uppercase tracking-wider text-gray-400 mb-2 md:mb-4">
             (01 — What I do)
           </span>
        </div>
        <div className="h-px w-full bg-gray-200 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[400px] p-8 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:border-gray-300 transition-all duration-500"
            >
              {/* Animated Grid Background on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-[size:20px_20px] bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]"></div>
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#0047FF] group-hover:text-white transition-colors duration-500">
                  <service.icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};