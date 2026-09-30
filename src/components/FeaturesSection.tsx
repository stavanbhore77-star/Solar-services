import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';
import { siteData, ServiceCard } from '../siteData';
import { SafeImage } from './SafeImage';

interface FeaturesSectionProps {
  onSelectService: (service: ServiceCard) => void;
  onOpenQuoteModal: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onSelectService,
  onOpenQuoteModal,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { eyebrow, headline, supportingParagraph, socialProof, serviceCards } =
    siteData.featuresSection;

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.75;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-12 sm:pb-16 border-b border-slate-200">
          <div className="lg:col-span-7">
            <span className="text-blue-600 font-display font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-3">
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight leading-[1.05]">
              {headline}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {supportingParagraph}
            </p>
          </div>
        </div>

        {/* Main Content: Left Column (Avatars + Counter) + Right Column (Horizontal Carousel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-12 items-start">
          {/* Left Column: Stacked Avatars + 500+ Counter */}
          <div className="lg:col-span-4 bg-slate-50 border border-sky-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Stacked Customer Avatars */}
              <div className="flex items-center -space-x-3 mb-6">
                {socialProof.avatars.map((av, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm"
                  >
                    <SafeImage
                      src={av}
                      alt="Verified Solara customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-display font-bold text-xs flex items-center justify-center border-2 border-white shadow-sm">
                  +120
                </div>
              </div>

              {/* Large Metric */}
              <div className="mb-4">
                <span className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight tabular-nums block">
                  {socialProof.installationsCount}
                </span>
                <span className="text-xs uppercase tracking-wider text-blue-600 font-bold mt-1 block">
                  {socialProof.installationsLabel}
                </span>
              </div>

              {/* Short Blurb */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {socialProof.blurb}
              </p>
            </div>

            {/* Quick action buttons & Carousel nav triggers */}
            <div className="pt-6 border-t border-slate-200 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Browse Solutions
                </span>
                {/* Carousel arrow controls on left column */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    aria-label="Scroll services left"
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                      canScrollLeft
                        ? 'border-slate-300 bg-white text-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm'
                        : 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    aria-label="Scroll services right"
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                      canScrollRight
                        ? 'border-slate-300 bg-white text-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm'
                        : 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
              >
                <span>Get Solution Breakdown</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Horizontal Service-Card Carousel (3 visible cards) */}
          <div className="lg:col-span-8 overflow-hidden">
            <div
              ref={carouselRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {serviceCards.map((service, idx) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  onClick={() => onSelectService(service)}
                  className="group relative flex-none w-[280px] sm:w-[320px] md:w-[340px] h-[440px] rounded-3xl overflow-hidden cursor-pointer snap-start border border-sky-100 shadow-md hover:shadow-xl bg-slate-900"
                >
                  {/* Service Image with Zoom Effect on Hover */}
                  <div className="absolute inset-0 overflow-hidden">
                    <SafeImage
                      src={service.image}
                      alt={service.title}
                      fallbackText={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Dark Gradient Overlay for text contrast on image cards */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                  {/* Top-Right: Small Arrow Icon Circle */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-slate-900 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-45 group-hover:scale-110 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Top-Left: Index Number & Metric */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                    <span className="font-mono text-xs text-blue-900 bg-sky-100/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-sky-200 font-bold shadow-sm">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Bottom-Left: Bold White Label + Features Preview */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-400 uppercase tracking-wider mb-1.5">
                      <Zap className="w-3.5 h-3.5 fill-sky-400" />
                      <span>{service.metrics}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-snug group-hover:text-sky-300 transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-slate-200 text-xs leading-relaxed line-clamp-2 mb-3">
                      {service.shortDesc}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-white font-semibold">
                      <span className="group-hover:underline">View System Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
