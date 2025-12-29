'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 rounded-full border-4 border-lime-400/30 animate-ping" style={{ animationDuration: '2s' }}></div>
        <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 animate-ping" style={{ animationDuration: '3s' }}></div>

        <Image
          src="/images/kes.png"
          alt="Loading"
          width={200}
          height={200}
          className="relative z-10 rounded-full"
          priority
        />
      </motion.div>

      <motion.h1
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-3xl md:text-5xl font-black text-lime-400 mb-4 tracking-wider"
        style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
      >
        LOADING KHAT BUNDLE...
      </motion.h1>

      <div className="text-6xl font-black text-yellow-300">
        {Math.min(Math.floor(progress), 100)}%
      </div>
    </motion.div>
  );
}
