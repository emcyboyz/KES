'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { useKhatMode } from '@/lib/KhatModeContext';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const { khatMode } = useKhatMode();

  const contractAddress = 'Khat1234567890ABCDEFGHIJKLMNOP';

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 relative"
    >
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-yellow-100 text-sm tracking-widest font-mono">
            KHAT EATING SOMALI | $KHAT | ETERNAL CHEW
          </p>
        </motion.div>

        <div className="mb-12">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-9xl font-black text-green-600 leading-none mb-2"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif', textAlign: 'left', marginLeft: '0' }}
          >
            KHAT
          </motion.h1>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              textShadow: khatMode
                ? [
                    '0 0 20px rgba(132,204,22,0.8)',
                    '0 0 40px rgba(132,204,22,1)',
                    '0 0 20px rgba(132,204,22,0.8)',
                  ]
                : '0 0 20px rgba(132,204,22,0.5)',
            }}
            transition={{
              delay: 0.4,
              textShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="text-7xl md:text-9xl font-black text-purple-600 leading-none mb-2"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif', textAlign: 'center' }}
          >
            EATING
          </motion.h1>

          <motion.h1
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-7xl md:text-9xl font-black text-purple-400 leading-none"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif', textAlign: 'right', marginRight: '0' }}
          >
            SOMALI
          </motion.h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-left mb-8"
        >
          <p className="text-yellow-100 text-lg mb-4 max-w-2xl">
            Born in the Somali trenches. Endless qaad chew. No sleep. Just pump. Or whatever.
          </p>

          <p className="text-lime-400 font-mono text-sm tracking-wider">
            {'>> STATUS: PERMANENTLY WIRED 🌿💨'}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <p className="text-yellow-100 text-left mb-2 font-bold">CA:</p>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-black/60 border border-lime-400/30 px-4 py-3 rounded font-mono text-lime-400 text-sm break-all">
              {contractAddress}
            </div>
            <button
              onClick={handleCopy}
              className="bg-lime-400/20 hover:bg-lime-400/30 border border-lime-400/50 p-3 rounded transition-all duration-300 relative"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-lime-400" />
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: -30 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 text-lime-400 text-xs font-bold whitespace-nowrap"
                  >
                    DATA COPIED!
                  </motion.span>
                </>
              ) : (
                <Copy className="w-5 h-5 text-lime-400" />
              )}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-400 text-black px-8 py-4 rounded-lg font-black text-lg shadow-[0_0_20px_rgba(132,204,22,0.6)] hover:shadow-[0_0_30px_rgba(132,204,22,0.9)] transition-all duration-300"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            BUY $KHAT
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-yellow-100 px-8 py-4 rounded-lg font-black text-lg border-2 border-purple-400 hover:bg-purple-500 transition-all duration-300"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            ENTER $KHAT COMMUNITY
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          rotate: khatMode ? [0, -2, 2, -2, 0] : 0,
        }}
        transition={{
          x: { delay: 0.5 },
          opacity: { delay: 0.5 },
          rotate: {
            duration: 0.5,
            repeat: khatMode ? Infinity : 0,
            repeatDelay: 0.1,
          },
        }}
        className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2 w-80 h-80"
      >
        <Image
          src="/images/kes.png"
          alt="Khat Chewer"
          fill
          className="object-contain drop-shadow-[0_0_30px_rgba(239,68,68,0.6)]"
          style={{
            filter: khatMode ? 'hue-rotate(90deg) saturate(1.5)' : 'none',
          }}
        />
      </motion.div>
    </motion.section>
  );
}
