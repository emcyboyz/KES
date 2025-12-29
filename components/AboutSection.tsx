'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const experiences = [
    'Seeing infinite green leaves',
    'Hearing the pump',
    'Cheeks never deflate',
    'Tasting colors',
    'Endless energy waves',
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
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <ul className="space-y-3 text-center">
            {experiences.map((experience, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-lime-400 text-xl font-mono"
              >
                {experience}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-yellow-300 text-2xl font-bold">///</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2
            className="text-5xl md:text-6xl font-black text-lime-400 text-center mb-8"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            ## WHAT IS $KHAT?
          </h2>

          <div className="space-y-6 text-left">
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-yellow-100 text-lg leading-relaxed"
            >
              In the trenches of Somalia, a legendary chewer found the eternal bundle. Qaad that
              never ends. He chewed through nights, days, dips, pumps.
            </motion.p>

            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-yellow-100 text-lg leading-relaxed"
            >
              Some say he became one with the wire. We say: WHO CARES, IT&apos;S A VIBE! ✨
            </motion.p>

            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-lime-400 text-xl font-black leading-relaxed"
              style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
            >
              $KHAT is the memecoin for permanent stimulation. Chew hard.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
