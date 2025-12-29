'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  // Placeholder images – replace with your own in public/images/ later
  const slideshowImages = [
    'https://assets.cfr.org/image/fetch/t_tgh-max_2600x2600/https://build.thinkglobalhealth.org//wp-content/uploads/2025/08/2014-08-26T120000Z_975161650_GM1EA8Q0YO401_RTRMADP_3_SOMALIA-KHAT.jpg',
    'https://c8.alamy.com/comp/B07XN4/a-man-with-one-cheek-bulging-from-the-qat-he-has-chewed-for-hours-B07XN4.jpg',
    'https://onlinelibrary.wiley.com/cms/asset/181ac6a0-71c3-4d2a-a636-1f0f0a619ea0/jicd12288-fig-0003-m.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/56/Catha_edulis.jpg',
    
    'https://assets.cfr.org/image/fetch/t_tgh-max_2600x2600/https://build.thinkglobalhealth.org//wp-content/uploads/2025/08/2014-08-26T120000Z_29871395_GM1EA8Q0YO201_RTRMADP_3_SOMALIA-KHAT.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
  };

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
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Slideshow */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden rounded-xl shadow-2xl shadow-lime-400/20">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={slideshowImages[currentIndex]}
                  alt={`Khat vibe ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Prev/Next Buttons */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-lime-400/80 p-3 rounded-full transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-lime-400" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-lime-400/80 p-3 rounded-full transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-lime-400" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slideshowImages.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'bg-lime-400 w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Text Content – Visions moved BELOW "What is $KHAT" */}
          <div className="order-1 lg:order-2 space-y-16">
            {/* WHAT IS $KHAT? – Now first */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2
                className="text-5xl md:text-6xl font-black text-lime-400 mb-8 text-center lg:text-left"
                style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
              >
                WHAT IS $KHAT?
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-yellow-100 leading-relaxed">
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Khat is a widely consumed recreational drug  In the trenches of Somalia, individuals who consumed khat heavily reported severe mental disabilities exhibited by psychotic symptoms.
                   
                </motion.p>

                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Binge chewing (more than two bundles a day) is also strongly correlated with the onset of paranoia and hallucinations. 
                  <span className="text-[#39ff14] animate-pulse">
                  <a href="https://www.thinkglobalhealth.org/article/somalilands-khat-conundrum#:~:text=GOVERNANCE-,Somaliland%27s%20Khat%20Conundrum,its%20rising%20use%20could%20contribute%20to%20youth%20unemployment%20and%20mental%20illness,-A%20man%20chews" target="_blank"> Read more...✨ </a> 
                  </span> 
                </motion.p>

                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-lime-400 text-2xl font-black"
                  style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                >
                  $KHAT is the memecoin for permanent stimulation. Chew hard.
                </motion.p>
              </div>
            </motion.div>

            
            {/* Visions List – Now BELOW everything */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="space-y-4"
            >
              <ul className="space-y-4 text-center lg:text-left">
                {experiences.map((experience, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="text-lime-400 text-xl md:text-2xl font-mono drop-shadow-[0_0_8px_rgba(132,204,22,0.5)]"
                  >
                    {experience}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}