'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowToBuySection from '@/components/HowToBuySection';
import ChartSection from '@/components/ChartSection';
import Footer from '@/components/Footer';
import { KhatModeProvider } from '@/lib/KhatModeContext';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Keep your 3.5s loading vibe
    return () => clearTimeout(timer);
  }, []);

  return (
    <KhatModeProvider>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Main Content - Only shows after loading */}
      {!isLoading && (
        <main className="min-h-screen relative overflow-hidden bg-black text-white">
          {/* Optional fixed navbar if you want quick links */}
          <Navbar />

          {/* All sections stacked vertically - single scroll page */}
          <div className="flex flex-col">
            {/* Hero */}
            <section id="hero" className="min-h-screen flex items-center justify-center relative">
              <HeroSection />
            </section>

            {/* About / Lore */}
            <section id="about" className="py-20 px-8 max-w-5xl mx-auto">
              <AboutSection />
            </section>

            {/* How to Buy */}
            <section id="howtobuy" className="py-20 px-8 max-w-5xl mx-auto bg-black/80">
              <HowToBuySection />
            </section>

            {/* Chart / Live Data */}
            <section id="chart" className="py-20 px-8 max-w-7xl mx-auto">
              <ChartSection />
            </section>

            {/* Footer */}
            <Footer />
          </div>
        </main>
      )}
    </KhatModeProvider>
  );
}