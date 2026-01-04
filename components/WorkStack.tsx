import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

interface CardProps {
  project: typeof PROJECTS[0];
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ 
  project, 
  index, 
  progress, 
  range, 
  targetScale 
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className="relative flex flex-col md:flex-row w-full max-w-6xl h-[70vh] md:h-[600px] bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden origin-top"
      >
        {/* Left Content */}
        <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between h-full relative z-10 bg-white">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-mono uppercase text-gray-500">
                {project.year}
              </span>
              <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-mono uppercase text-gray-500">
                {project.category}
              </span>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">{project.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
               {project.tech.map(t => (
                 <span key={t} className="text-xs font-medium text-gray-400">#{t}</span>
               ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3 mt-8 md:mt-0">
            {project.url && (
              <MagneticButton>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#0047FF] transition-colors"
                >
                  <span>Visit</span>
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </MagneticButton>
            )}
            {project.github && (
              <MagneticButton>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#0047FF] transition-colors"
                >
                  <span>Code</span>
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
                    <Github className="w-3.5 h-3.5" />
                  </div>
                </a>
              </MagneticButton>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-3/5 h-full relative overflow-hidden bg-gray-100">
           <motion.div 
             style={{ scale: imageScale }}
             className="w-full h-full"
           >
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent mix-blend-multiply" />
           </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export const WorkStack: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} id="work" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Consistent Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-12">
           <h2 className="font-serif text-5xl md:text-7xl text-[#111111]">
             Selected Works
           </h2>
           <span className="font-mono text-sm uppercase tracking-wider text-gray-400 mb-2 md:mb-4">
             (02 — Portfolio)
           </span>
        </div>
        <div className="h-px w-full bg-gray-200" />
      </div>
      
      {PROJECTS.map((project, i) => {
        const targetScale = 1 - ( (PROJECTS.length - i) * 0.05);
        return (
          <Card 
            key={project.id} 
            index={i} 
            project={project} 
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale} 
          />
        )
      })}
    </section>
  );
};