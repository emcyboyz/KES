'use client';

import { motion } from 'framer-motion';
import { Send, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-lime-400/20 bg-black/40 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/kes.png"
              alt="Khat Logo"
              width={60}
              height={60}
              className="rounded-full border-2 border-lime-400/50"
            />
            <div>
              <p
                className="text-lime-400 text-xl font-black"
                style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
              >
                CHEW HARD OR GO HOME
              </p>
              <p className="text-yellow-300 text-sm font-mono">NO SLEEP TILL MOON</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://t.me/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 bg-lime-400/20 hover:bg-lime-400/30 border border-lime-400/50 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Send className="w-5 h-5 text-lime-400" />
              <span className="text-lime-400 font-bold">TELEGRAM</span>
            </motion.a>

            <motion.a
              href="https://twitter.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-400/50 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Twitter className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-bold">X/TWITTER</span>
            </motion.a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-yellow-100/50 text-xs font-mono">
            $KHAT is a memecoin with no intrinsic value or expectation of financial return. For
            entertainment only.
          </p>
        </div>
      </div>
    </footer>
  );
}
