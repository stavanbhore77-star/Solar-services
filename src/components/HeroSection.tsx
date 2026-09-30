import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { siteData } from '../siteData';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onSelectTag?: (tag: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
  onSelectTag,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = siteData.hero.slides;
  const currentSlide = slides[currentSlideIndex];

  // Auto-rotate slides
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel without gradient fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <SafeImage
              src={currentSlide.image}
              alt={currentSlide.headline}
              fallbackSrc="/hero-bg.png"
              fallbackText="Solara Solar Installation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Clear, uniform contrast overlay - no gradient fades */}
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      {/* Top Banner Tag / Location Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-2 sm:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-sky-200 text-blue-950 text-xs font-bold uppercase tracking-wider shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          <span className="font-display font-semibold text-blue-900">{currentSlide.location}</span>
        </motion.div>
      </div>

      {/* Center Main Stage: Clean, concise headline + short subtext & CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          {/* Left Column: Bold Headline */}
          <div className="lg:col-span-7">
            <motion.h1
              key={`headline-${currentSlide.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.95] drop-shadow-md"
              style={{ textWrap: 'balance' }}
            >
              {currentSlide.headline}
            </motion.h1>
          </div>

          {/* Right Column: Short concise subtext + CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-end gap-5">
            <motion.p
              key={`subtext-${currentSlide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white/95 text-sm sm:text-base leading-relaxed font-normal drop-shadow-md max-w-lg"
            >
              {currentSlide.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 pt-1"
            >
              <button
                onClick={onOpenQuoteModal}
                className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/30 hover:scale-[1.02] cursor-pointer"
              >
                <span>REQUEST FREE PROPOSAL</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#services"
                className="text-xs font-bold text-slate-800 hover:text-blue-600 uppercase tracking-wider px-4 py-3 rounded-full bg-white/95 hover:bg-white backdrop-blur-md border border-sky-200 shadow-md transition-all"
              >
                Explore Systems
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Stage: Clean 3 Pill Tags (Left) + Sleek Slide Indicator (Right) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Pill Tag Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-2"
          >
            {siteData.hero.pillTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onSelectTag?.(tag)}
                className="px-3 py-1 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-blue-600 border border-sky-100 hover:border-blue-400 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-sm backdrop-blur-md"
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Carousel Indicator `‹ 01 ───●─── 05 ›` */}
          <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-100 text-slate-900 shadow-md">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="p-1 rounded-full hover:bg-sky-50 text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Number 01 */}
            <span className="font-mono text-xs font-bold tabular-nums text-slate-900">
              {String(currentSlideIndex + 1).padStart(2, '0')}
            </span>

            {/* Progress Dots */}
            <div className="flex items-center gap-1.5 px-1.5">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  aria-label={`Jump to slide ${idx + 1}`}
                  className="group py-1 cursor-pointer"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlideIndex
                        ? 'w-5 bg-blue-600 shadow-sm shadow-blue-400'
                        : 'w-1.5 bg-slate-300 group-hover:bg-blue-300'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Number Total */}
            <span className="font-mono text-xs font-semibold tabular-nums text-slate-400">
              {String(slides.length).padStart(2, '0')}
            </span>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="p-1 rounded-full hover:bg-sky-50 text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
