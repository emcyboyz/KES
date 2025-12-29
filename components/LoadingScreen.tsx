'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  // Smooth linear progress to 100% in exactly 2 seconds
  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Rotating Circle + Spinning Image Container */}
      <div className="relative mb-12">
        {/* Outer rotating dashed gradient ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 w-80 h-80 md:w-96 md:h-96"
        >
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="6"
              strokeDasharray="10 20"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#84cc16" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Inner subtle pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-lime-400/20"
        />

        {/* Spinning Image - fits perfectly in circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/kes.png" // Your main loading image (ideally a flying khat chewer)
            alt="Khat Loading"
            fill
            className="object-cover" // Crops to fill circle perfectly
            priority
          />
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.h1
        animate={{
          opacity: [0.6, 1, 0.6],
          textShadow: [
            '0 0 20px rgba(132,204,22,0.4)',
            '0 0 40px rgba(132,204,22,0.8)',
            '0 0 20px rgba(132,204,22,0.4)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-4xl md:text-6xl font-black text-lime-400 mb-8 tracking-widest"
        style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
      >
        LOADING KHAT PACKS...
      </motion.h1>

      {/* Progress Bar */}
      <div className="w-80 md:w-96 h-4 bg-white/10 rounded-full overflow-hidden border border-lime-400/30">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
          className="h-full bg-gradient-to-r from-lime-400 to-purple-500 shadow-[0_0_20px_rgba(132,204,22,0.8)]"
        />
      </div>

      {/* Percentage */}
      <motion.p
        key={Math.floor(progress)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 text-3xl md:text-4xl font-black text-yellow-300"
        style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
      >
        {Math.floor(progress)}%
      </motion.p>
    </motion.div>
  );
}