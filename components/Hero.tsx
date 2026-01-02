import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Calendar } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="z-10 w-full max-w-5xl px-6 flex flex-col items-center"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center items-center gap-3"
        >
          <div className="h-px w-8 bg-gray-300"></div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">Enthusiastic Software Engineer</span>
          <div className="h-px w-8 bg-gray-300"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 w-full">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[#111111] mb-8">
              <motion.span 
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Designing
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                software that
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                works <span className="italic font-light text-gray-400">effortlessly.</span>
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="max-w-md mx-auto md:mx-0 text-gray-600 text-lg font-light leading-relaxed mb-10"
            >
              Building high-performance applications with a focus on intuitive design. Specialized in React, TypeScript, and 3D interactions.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <MagneticButton>
                <button className="px-8 py-4 bg-[#111111] text-white rounded-full font-medium text-sm uppercase tracking-wide hover:bg-[#0047FF] transition-colors flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book a slot
                </button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/images/profile/ProfileEtna.jpg" 
                alt="Marius Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Open to work decorative element */}
            {/* <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2">
               <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
               </span>
               <span className="text-xs font-bold text-gray-800">Open to work</span>
            </div> */}
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <MagneticButton>
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm group hover:border-gray-400 transition-colors">
             <ArrowDown className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors animate-bounce" />
          </div>
        </MagneticButton>
      </motion.div>
    </section>
  );
};