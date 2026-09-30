import React, { useState } from 'react';
import { Sun, ArrowUpRight, Phone, Mail, MapPin, Clock, Check, Send } from 'lucide-react';
import { siteData } from '../siteData';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setIsSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <footer id="contact" className="bg-slate-50 text-slate-600 pt-16 pb-12 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Banner Bar: "Get a Free Quote" newsletter / fast audit bar */}
        <div className="bg-gradient-to-r from-sky-50 via-blue-50/50 to-sky-50 border border-sky-200 rounded-3xl p-6 sm:p-10 mb-16 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-700 block mb-1">
              Zero Initial Cost · Direct Savings
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              READY TO CUT YOUR ELECTRICITY BILL?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Join over 1,200+ satisfied Indian homeowners and commercial facilities generating clean power with DISCOM net metering.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            {isSubscribed ? (
              <div className="px-6 py-3.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you! Solar savings guide sent to your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="w-full sm:w-auto flex items-center gap-2">
                <div className="relative w-full sm:w-72">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-full text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 shadow-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm shadow-blue-500/20"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5 text-sky-200" />
                </button>
              </form>
            )}

            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-500/25 shrink-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>GET FREE QUOTE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-0.5 shadow-md flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full rounded-[14px] bg-gradient-to-br from-blue-700 to-slate-900 flex items-center justify-center">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-amber-400"
                  >
                    <circle cx="16" cy="16" r="4.5" fill="#FBBF24" />
                    <path d="M16 3L18.2 10.5H13.8L16 3Z" fill="#38BDF8" />
                    <path d="M16 29L13.8 21.5H18.2L16 29Z" fill="#38BDF8" />
                    <path d="M29 16L21.5 18.2V13.8L29 16Z" fill="#38BDF8" />
                    <path d="M3 16L10.5 13.8V18.2L3 16Z" fill="#38BDF8" />
                    <circle cx="23.5" cy="8.5" r="1.7" fill="#F59E0B" />
                    <circle cx="8.5" cy="23.5" r="1.7" fill="#F59E0B" />
                    <circle cx="23.5" cy="23.5" r="1.7" fill="#F59E0B" />
                    <circle cx="8.5" cy="8.5" r="1.7" fill="#F59E0B" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl text-slate-950 tracking-wider">
                  {siteData.company.name}
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
                  SOLAR SYSTEMS · INDIA
                </span>
              </div>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              {siteData.company.tagline}. Leading tier-1 solar photovoltaic design, certified battery storage, and proactive asset monitoring engineered to perform 25+ years.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteData.company.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors text-xs font-bold"
              >
                in
              </a>
              <a
                href={siteData.company.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors text-xs font-bold"
              >
                𝕏
              </a>
              <a
                href={siteData.company.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors text-xs font-bold"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              {siteData.navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-blue-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solar Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 mb-4">
              Solutions & Tech
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              {siteData.featuresSection.serviceCards.map((sc) => (
                <li key={sc.id}>
                  <a href="#services" className="hover:text-blue-600 transition-colors">
                    {sc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3 flex flex-col gap-3 text-xs text-slate-600">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 mb-1">
              Contact Engineering
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>{siteData.company.headquarters}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-blue-600 shrink-0" />
              <a href={`tel:${siteData.company.phone}`} className="hover:text-slate-950 transition-colors">
                {siteData.company.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <a href={`mailto:${siteData.company.email}`} className="hover:text-slate-950 transition-colors">
                {siteData.company.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{siteData.company.hours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Unboxed Metadata Separators */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteData.company.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#home" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#home" className="hover:text-slate-700 transition-colors">Terms of Service</a>
            <span aria-hidden="true">·</span>
            <a href="#home" className="hover:text-slate-700 transition-colors">Net Metering Guide</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
