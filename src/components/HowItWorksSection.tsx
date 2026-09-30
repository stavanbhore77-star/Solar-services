import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, PenTool, Wrench, Activity, Clock, CheckCircle } from 'lucide-react';
import { siteData } from '../siteData';

const stepIcons = [Compass, PenTool, Wrench, Activity];

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = siteData.howItWorks;

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-display font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-3">
            Execution Roadmap /
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
            FROM ROOFTOP SURVEY TO CLEAN POWER IN 4 STEPS
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our streamlined process eliminates bureaucratic bottlenecks and paperwork delays. We handle everything from CAD engineering to utility interconnection.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            const isSelected = activeStep === idx;

            return (
              <motion.div
                key={step.stepNumber}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-blue-600 shadow-xl shadow-blue-500/10'
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-blue-200 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl sm:text-4xl text-slate-300 transition-colors">
                      {step.stepNumber}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                          : 'bg-white text-blue-600 border border-sky-100 shadow-sm'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Duration */}
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{step.duration}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom detail pill */}
                <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="line-clamp-1">{step.details}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
