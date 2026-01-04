import React from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../constants';

export const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the #
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-sm">
        {/* Logo */}
        <div className="flex-1">
          <span className="font-serif text-2xl font-bold tracking-tight text-gray-900">Marius.</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Status */}
        <div className="flex-1 flex justify-end items-center gap-2">
        <a
            href="https://calendar.app.google/ks3sMnmdP5Z5ZbUj9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            style={{ textDecoration: 'none' }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-gray-500 hidden sm:block">Available</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
};