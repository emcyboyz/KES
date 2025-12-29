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
  const [activeScene, setActiveScene] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const renderScene = () => {
    switch (activeScene) {
      case 'hero':
        return <HeroSection key="hero" />;
      case 'about':
        return <AboutSection key="about" />;
      case 'howtobuy':
        return <HowToBuySection key="howtobuy" />;
      case 'chart':
        return <ChartSection key="chart" />;
      default:
        return <HeroSection key="hero" />;
    }
  };

  return (
    <KhatModeProvider>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <main className="min-h-screen relative overflow-hidden">
          <Navbar activeScene={activeScene} setActiveScene={setActiveScene} />

          <div className="pt-20 min-h-screen flex flex-col">
            <AnimatePresence mode="wait">
              {renderScene()}
            </AnimatePresence>

            <Footer />
          </div>
        </main>
      )}
    </KhatModeProvider>
  );
}
