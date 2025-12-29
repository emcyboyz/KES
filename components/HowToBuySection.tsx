'use client';

import { motion } from 'framer-motion';
import { useKhatMode } from '@/lib/KhatModeContext';

export default function HowToBuySection() {
  const { khatMode } = useKhatMode();

  const steps = [
    {
      number: 1,
      title: 'Get a Wallet',
      description: 'Download Phantom or Solflare. Fund with SOL.',
    },
    {
      number: 2,
      title: 'Connect to DEX',
      description: 'Head to Raydium or Jupiter. Connect wallet.',
    },
    {
      number: 3,
      title: 'Swap for $KHAT',
      description: 'Paste contract address. Confirm transaction.',
    },
    {
      number: 4,
      title: 'Dimension X',
      description: 'Hold tight and enjoy the ride.',
    },
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-black to-purple-900/20" id="howtobuy">
      <div className="max-w-7xl mx-auto">
        {/* Small "PROTOCOL" text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-purple-400 text-sm tracking-widest text-center mb-4 font-mono"
        >
          PROTOCOL
        </motion.p>

        {/* Main Title with subtle pulse & color shift */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            textShadow: khatMode
              ? [
                  '0 0 20px rgba(132,204,22,0.6)',
                  '0 0 40px rgba(132,204,22,0.9)',
                  '0 0 20px rgba(132,204,22,0.6)',
                ]
              : [
                  '0 0 15px rgba(132,204,22,0.3)',
                  '0 0 30px rgba(132,204,22,0.5)',
                  '0 0 15px rgba(132,204,22,0.3)',
                ],
            color: khatMode ? '#84cc16' : '#a3e635',
          }}
          transition={{
            textShadow: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            color: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="text-6xl md:text-8xl font-black text-center mb-20"
          style={{
            fontFamily: 'Impact, Arial Black, sans-serif',
            textShadow: '0 0 20px rgba(132,204,22,0.5)',
          }}
        >
          HOW TO BUY $KHAT
        </motion.h2>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
            >
              <div className="flex items-center gap-6">
                {/* Circle Number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-lime-400/20 border-4 border-lime-400/50 flex items-center justify-center text-lime-400 text-3xl font-black">
                  {step.number}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}