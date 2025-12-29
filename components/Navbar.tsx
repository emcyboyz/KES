'use client';

import { motion } from 'framer-motion';
import { useKhatMode } from '@/lib/KhatModeContext';
import { Leaf } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { khatMode, toggleKhatMode } = useKhatMode();
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'howtobuy', label: 'HOW TO BUY' },
    { id: 'chart', label: 'CHART' },
  ];

  // Scroll spy (same as before)
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-lime-400/20"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Changed to justify-center to center everything */}
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-8">
            {/* Nav Links */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-bold tracking-wider transition-all duration-300 hover:text-lime-400 hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.8)] ${
                  activeSection === item.id
                    ? 'text-lime-400 drop-shadow-[0_0_12px_rgba(132,204,22,1)]'
                    : 'text-yellow-100'
                }`}
                style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
              >
                {item.label}
              </button>
            ))}

            {/* Khat Mode Button - now part of the centered group */}
            <motion.button
              onClick={toggleKhatMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-8 flex items-center space-x-2 px-5 py-2 rounded-lg font-bold text-sm transition-all duration-300 shadow-lg ${
                khatMode
                  ? 'bg-lime-400 text-black shadow-[0_0_25px_rgba(132,204,22,0.9)]'
                  : 'bg-purple-900/60 text-lime-400 border border-lime-400/40 hover:border-lime-400/80'
              }`}
              style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
            >
              <Leaf className={`w-5 h-5 ${khatMode ? 'animate-spin' : 'animate-pulse'}`} />
              <span>{khatMode ? 'KHAT MODE ON' : 'KHAT MODE'}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}