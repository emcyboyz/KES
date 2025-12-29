'use client';

import { motion } from 'framer-motion';

export default function HowToBuySection() {
  const steps = [
    { number: 1, text: 'Wallet Up – Phantom/Solflare + SOL' },
    { number: 2, text: 'DEX Time – Raydium/Jupiter' },
    { number: 3, text: 'Swap SOL → $KHAT (paste CA)' },
    { number: 4, text: 'Enter Trenches – Chew forever' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-lime-400 text-center mb-12"
          style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
        >
          ## CHEW LEVELS
        </motion.h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.15 }}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center text-black font-black text-xl group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <div className="flex-1">
                <p className="text-yellow-100 text-xl leading-relaxed group-hover:text-lime-400 transition-colors duration-300">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-lime-400 to-green-500 text-black px-10 py-4 rounded-lg font-black text-xl shadow-[0_0_30px_rgba(132,204,22,0.6)] hover:shadow-[0_0_50px_rgba(132,204,22,0.9)] transition-all duration-300"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            START CHEWING NOW
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
