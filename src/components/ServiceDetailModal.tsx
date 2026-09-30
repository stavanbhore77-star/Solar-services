import React from 'react';
import { X, CheckCircle2, Zap, ArrowRight, Shield } from 'lucide-react';
import { ServiceCard } from '../siteData';
import { SafeImage } from './SafeImage';

interface ServiceDetailModalProps {
  service: ServiceCard | null;
  onClose: () => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative aspect-[16/8] w-full shrink-0">
          <SafeImage
            src={service.image}
            alt={service.title}
            fallbackText={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-white/95 px-3 py-1 rounded-full border border-white/60 shadow-sm">
              {service.metrics}
            </span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-3">
            {service.title}
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            {service.fullDesc}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-amber-500" />
              <span>Engineering Specifications & Guarantees</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(service.title);
              }}
              className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/25"
            >
              <span>Get Free Quote For {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
