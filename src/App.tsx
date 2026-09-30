/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceCard } from './siteData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePresetData, setQuotePresetData] = useState<{
    monthlyBill?: number;
    systemSizeKw?: number;
    propertyType?: string;
    serviceName?: string;
  }>({});
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const handleOpenQuoteModal = (preset?: {
    monthlyBill?: number;
    systemSizeKw?: number;
    propertyType?: string;
    serviceName?: string;
  }) => {
    if (preset) {
      setQuotePresetData(preset);
    } else {
      setQuotePresetData({});
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectTag = (tag: string) => {
    // Scroll smoothly to services
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 flex flex-col font-sans selection:bg-[#F5A623] selection:text-slate-950">
      {/* Fixed Navigation Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Hero Section */}
      <main className="flex-1">
        <HeroSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onSelectTag={handleSelectTag}
        />

        {/* Features / Our Services Section with Horizontal Carousel */}
        <FeaturesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* About Section — "Excellence in Solar Energy" */}
        <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* How It Works — 4-Step Process */}
        <HowItWorksSection />

        {/* Interactive Savings Calculator & CTA Band */}
        <SavingsCalculator onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Projects / Portfolio Grid */}
        <ProjectsSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Testimonials Carousel & Grid */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive Free Quote Lead Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        presetData={quotePresetData}
      />

      {/* In-depth Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuoteModal={(serviceName) => handleOpenQuoteModal({ serviceName })}
      />
    </div>
  );
}
