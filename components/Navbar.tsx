'use client';

import { motion } from 'framer-motion';
import { useKhatMode } from '@/lib/KhatModeContext';
import { Leaf } from 'lucide-react';

interface NavbarProps {
  activeScene: string;
  setActiveScene: (scene: string) => void;
}

export default function Navbar({ activeScene, setActiveScene }: NavbarProps) {
  const { khatMode, toggleKhatMode } = useKhatMode();

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'howtobuy', label: 'HOW TO BUY' },
    { id: 'chart', label: 'CHART' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-md border-b border-lime-400/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveScene(item.id)}
                className={`text-sm font-bold tracking-wider transition-all duration-300 hover:text-lime-400 hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.8)] ${
                  activeScene === item.id
                    ? 'text-lime-400 drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]'
                    : 'text-yellow-100'
                }`}
                style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <motion.button
            onClick={toggleKhatMode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
              khatMode
                ? 'bg-lime-400 text-black shadow-[0_0_20px_rgba(132,204,22,0.8)]'
                : 'bg-purple-900/50 text-lime-400 border border-lime-400/30'
            }`}
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            <Leaf className={`w-4 h-4 ${khatMode ? 'animate-spin' : ''}`} />
            <span>KHAT MODE</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
