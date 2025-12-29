'use client';

import { motion } from 'framer-motion';

export default function ChartSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-4 py-12 w-full">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-lime-400 text-center mb-8"
          style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
        >
          LIVE CHEWING DATA
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative w-full"
          style={{ paddingBottom: '56.25%' }}
        >
          <iframe
            src="https://dexscreener.com/solana/placeholder?embed=1&theme=dark"
            className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-lime-400/30 shadow-[0_0_30px_rgba(132,204,22,0.3)]"
            title="DEXScreener Chart"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-yellow-100 text-lg font-mono">
            {'>> MONITORING ETERNAL PUMP LEVELS...'}
          </p>
          <p className="text-lime-400 text-sm font-mono mt-2">
            {'[CHARTS NEVER LIE. ONLY PAPER HANDS DO.]'}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
