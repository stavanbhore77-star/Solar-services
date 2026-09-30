import React, { useState, useEffect } from 'react';
import { Sun, ArrowUpRight, Menu, X, PhoneCall } from 'lucide-react';
import { siteData } from '../siteData';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHash(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2 sm:py-2.5'
          : 'bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Zone with Sleek Solar Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-slate-900 font-display font-black tracking-tight transition-transform hover:scale-[1.01]"
            onClick={() => handleNavClick('#home')}
          >
            {/* Compact Modern Solar Emblem */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-0.5 shadow-md shadow-blue-600/20 flex items-center justify-center overflow-hidden shrink-0">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:4px_4px]" />
              <div className="relative w-full h-full rounded-[10px] bg-gradient-to-br from-blue-700 to-slate-900 flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300"
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
              <div className="flex items-center gap-1 leading-none">
                <span className="text-xl sm:text-2xl font-black text-slate-950 tracking-wider">
                  SOLARA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block shadow-sm shadow-amber-400 animate-pulse" />
              </div>
              <span className="text-[9px] font-bold tracking-[0.2em] text-blue-600 uppercase mt-0.5">
                SOLAR SYSTEMS · INDIA
              </span>
            </div>
          </a>

          {/* Center: Nav Pills (Compact & Clean) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/90 backdrop-blur-md p-1 rounded-full border border-sky-100 shadow-sm">
            {siteData.navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 font-bold'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Indian Phone & Compact "GET FREE QUOTE" button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteData.company.phone}`}
              className="hidden xl:flex flex-col text-right hover:text-blue-600 transition-colors"
            >
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-900 justify-end">
                <PhoneCall className="w-3 h-3 text-blue-600" />
                <span>{siteData.company.phone}</span>
              </div>
              <span className="text-[9px] font-semibold text-emerald-600">
                Toll Free: 1800 209 8899
              </span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="group relative flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider pl-4 pr-1.5 py-1.5 sm:py-2 rounded-full transition-all duration-200 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 cursor-pointer whitespace-nowrap hover:scale-[1.01]"
            >
              <span>GET FREE QUOTE</span>
              <div className="w-6 h-6 rounded-full bg-white text-blue-600 group-hover:bg-blue-50 group-hover:text-blue-700 flex items-center justify-center transition-all duration-200 group-hover:rotate-45 shadow-sm">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="text-xs font-bold uppercase tracking-wider bg-blue-600 text-white px-3 py-1.5 rounded-full shadow-sm"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white text-slate-800 border border-slate-200 hover:bg-sky-50 transition-colors shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-sky-100 shadow-xl">
          <div className="flex flex-col gap-2">
            {siteData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide uppercase text-slate-700 hover:text-blue-600 hover:bg-sky-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={`tel:${siteData.company.phone}`}
                className="flex items-center gap-2 text-xs font-medium text-slate-600 px-4"
              >
                <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                <span>{siteData.company.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-md shadow-blue-500/20"
              >
                <span>GET FREE SOLAR QUOTE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
