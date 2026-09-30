import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { siteData } from '../siteData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const faqs = siteData.faqs;

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  const filteredFaqs = faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-display font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-3">
            Knowledge Base /
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Straightforward answers about subsidies, net metering tariffs, battery storage, and lifetime guarantees.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4 text-blue-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subsidies, warranty, net metering, battery..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors shadow-sm"
          />
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              No matching questions found. Contact our engineering team for personalized advice.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-blue-500 shadow-md shadow-blue-500/10'
                      : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-blue-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold text-blue-700 bg-sky-50 px-2.5 py-1 rounded-full shrink-0 border border-sky-200">
                        {faq.category}
                      </span>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                        {faq.question}
                      </h4>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-slate-700 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-blue-600 text-white shadow-sm' : 'bg-slate-200/80'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
