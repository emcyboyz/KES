'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { useKhatMode } from '@/lib/KhatModeContext';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const { khatMode } = useKhatMode();

  const contractAddress = 'Khat1234567890ABCDEFGHIJKLMNOP'; // Replace with real CA later

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Optional subtle background circles for that FKH void vibe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full border ${khatMode ? 'border-lime-400/40 animate-pulse' : 'border-lime-400/20'} scale-150`} />
        <div className={`absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border ${khatMode ? 'border-purple-400/30' : 'border-purple-400/10'}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text Content */}
        <div className="space-y-8 text-left">
          {/* Top small text */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-100 text-sm tracking-widest font-mono"
          >
            — DIMENSION X: ACTIVE
          </motion.p>

{/* Massive Title - White / Pulsing Purple / White - Properly spaced & moved left */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight text-left pl-8 md:pl-16 lg:pl-32"
  style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
>
  {/* KHAT - Pure White */}
  <h1 className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] mb-2 md:mb-4">
    KHAT
  </h1>

  {/* EATING - Oscillating Purple with subtle pulse glow */}
  <motion.h1
    animate={{
      color: ['#c084fc', '#a78bfa', '#e9d5ff', '#c084fc'], // Purple loop
      textShadow: [
        '0 0 30px rgba(192,132,252,0.8)',
        '0 0 50px rgba(167,139,250,1)',
        '0 0 30px rgba(192,132,252,0.8)',
      ],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="mb-2 md:mb-4"
  >
    EATING
  </motion.h1>

  {/* SOMALI - Pure White */}
  <h1 className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
    SOMALI
  </h1>
</motion.div>

          {/* Lore Box - Dark semi-transparent rounded */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 max-w-lg"
          >
            <p className="text-yellow-100 text-lg leading-relaxed mb-4">
              Born in the trenches. Endlessly chewing KHAT. sleep Deprived. Just eternal wire.
              <br />
              ALWAYS HIGH. CANT QUIT!
            </p>
            <p className="text-lime-400 font-mono text-sm tracking-wider">
              {'>> STATUS: PERMANENTLY WIRED 🌿💨'}
            </p>
          </motion.div>

          {/* Contract Address Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-black/70 border border-purple-500/50 rounded-xl p-4 inline-block"
          >
            <p className="text-purple-300 text-sm font-bold mb-2">CONTRACT ADDRESS</p>
            <div className="flex items-center gap-3">
              <code className="text-cyan-400 font-mono text-sm break-all">
                {contractAddress}
              </code>
              <button
                onClick={handleCopy}
                className="bg-purple-600/50 hover:bg-purple-500/70 p-2 rounded transition-all"
              >
                {copied ? <Check className="w-5 h-5 text-lime-400" /> : <Copy className="w-5 h-5 text-cyan-400" />}
              </button>
            </div>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -20 }}
                className="absolute text-lime-400 text-xs font-bold"
              >
                DATA COPIED!
              </motion.span>
            )}
          </motion.div>

          {/* Enter Button - Gradient Purple to Cyan */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-10 py-5 rounded-full font-black text-2xl shadow-2xl hover:shadow-purple-500/50 transition-all"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            ENTER THE VOID
          </motion.button>
        </div>

        {/* RIGHT: Flying Khat Chewer Image */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: khatMode ? [0, -5, 5, -3, 0] : 0,
          }}
          transition={{
            delay: 0.5,
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          }}
          className="relative w-full max-w-lg mx-auto"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-purple-500/40 shadow-2xl shadow-purple-600/50">
            <Image
              src="images/kes.png" // Put your edited flying Somali chewer here (wings, sky background)
              alt="Flying Khat Eating Somali"
              fill
              className="object-cover"
              style={{
                filter: khatMode ? 'hue-rotate(120deg) saturate(2) brightness(1.2)' : 'none',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}