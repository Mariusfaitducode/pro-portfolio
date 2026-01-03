import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("marius@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative h-[90vh] flex flex-col justify-between p-6 md:p-12 bg-[#111111] text-white rounded-t-[3rem] mt-24 overflow-hidden">
      <div className="flex justify-between items-start">
        <div className="font-serif text-2xl">Marius.</div>
        <div className="text-right">
          <div className="font-mono text-xs text-gray-400 uppercase mb-2">Socials</div>
          <div className="flex flex-col gap-1 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
        <div className="relative group cursor-default">
           <h2 className="font-serif text-[12vw] leading-[0.8] text-center pointer-events-none group-hover:text-transparent transition-colors duration-500 bg-clip-text bg-cover"
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')` }}>
             <span className="text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#0047FF] to-[#0047FF] transition-all duration-700">
               Let's build
             </span>
             <br />
             <span className="text-gray-500 group-hover:text-white transition-colors duration-500">
               your vision.
             </span>
           </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-t border-gray-800 pt-8">
        <div className="flex flex-col gap-2">
           <span className="font-mono text-xs text-gray-500 uppercase">Contact</span>
           <button 
             onClick={handleCopy}
             className="flex items-center gap-3 text-2xl font-light hover:text-[#0047FF] transition-colors group"
           >
             contact@mariusdiguat.fr
             {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />}
           </button>
        </div>
        
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Marius Diguat Mateus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};