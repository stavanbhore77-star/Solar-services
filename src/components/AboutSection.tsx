import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Zap } from 'lucide-react';
import { siteData } from '../siteData';
import { SafeImage } from './SafeImage';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { eyebrow, headline, paragraph, mainImage, stats, teamMembers } =
    siteData.aboutSection;

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F0F9FF]/40 relative overflow-hidden border-t border-sky-100">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Rounded Image + 3-Stat Row Below */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Image Container with 24px radius and soft shadow */}
            <div className="relative rounded-[24px] overflow-hidden border border-sky-100 shadow-xl group aspect-[4/3]">
              <SafeImage
                src={mainImage}
                alt="Solar technicians installing high-efficiency panels on a rooftop"
                fallbackText="Solara Engineers on Rooftop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Quality Badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md border border-sky-100 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-slate-900 text-xs font-semibold shadow-md">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Tier-1 Equipment Only</span>
              </div>
            </div>

            {/* Below Image: 3-Stat Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 bg-white border border-sky-100 rounded-2xl shadow-sm">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex flex-col ${
                    idx < stats.length - 1 ? 'border-r border-slate-200 pr-2 sm:pr-4' : ''
                  }`}
                >
                  <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 mt-1 truncate">
                    {stat.label}
                  </span>
                  {stat.description && (
                    <span className="hidden sm:block text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      {stat.description}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Eyebrow + Headline + Paragraph + Pill Button + 2 Avatar Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-blue-600 font-display font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-3">
                {eyebrow}
              </span>
              <h2
                className="font-display text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-[1.08] mb-6"
                style={{ textWrap: 'balance' }}
              >
                {headline}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {paragraph}
              </p>
            </div>

            {/* Additional details expandable */}
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-5 rounded-2xl bg-white border border-sky-100 text-sm text-slate-600 flex flex-col gap-2.5 shadow-sm"
              >
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Licensed Master Electricians & NABCEP Certified Designers</span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Zero-Subcontracting Policy: All work executed by full-time staff</span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Direct manufacturer wholesale sourcing with 25-year production insurance</span>
                </div>
              </motion.div>
            )}

            {/* Rounded Blue "Read more →" button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-md shadow-blue-500/20"
              >
                <span>{showDetails ? 'Show less' : 'Read more'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${showDetails ? '-rotate-90' : ''}`} />
              </button>
              <button
                onClick={onOpenQuoteModal}
                className="text-xs uppercase font-bold tracking-wider text-slate-700 hover:text-blue-600 hover:underline transition-all cursor-pointer"
              >
                Speak with an Engineer →
              </button>
            </div>

            {/* Two Small Testimonial Avatar Cards Below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-sky-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm hover:border-blue-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-sky-100 shadow-sm">
                    <SafeImage
                      src={member.image}
                      alt={member.name}
                      fallbackText={member.name.slice(0, 2)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display font-bold text-sm text-slate-900 truncate">
                      {member.name}
                    </h4>
                    <p className="text-xs text-blue-600 font-semibold truncate">
                      {member.title}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
