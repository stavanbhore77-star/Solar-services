import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { siteData } from '../siteData';
import { SafeImage } from './SafeImage';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = siteData.testimonials;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F0F9FF]/30 relative overflow-hidden border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-display font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-3">
            Real Results /
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
            HEAR FROM OUR CLEAN ENERGY CLIENTS
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Over 500 installations commissioned with an average 4.9/5 star verified satisfaction rating.
          </p>
        </div>

        {/* Testimonials Carousel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="bg-white border border-sky-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Top: Star Rating + System Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                    {item.systemSize}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-sky-100 shadow-sm">
                  <SafeImage
                    src={item.avatar}
                    alt={item.name}
                    fallbackText={item.name.slice(0, 2)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="font-display font-bold text-sm text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 truncate">{item.role}</p>
                  <p className="text-[11px] text-blue-600 font-medium truncate">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
