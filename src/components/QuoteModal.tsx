import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Sun } from 'lucide-react';
import { siteData } from '../siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetData?: {
    monthlyBill?: number;
    systemSizeKw?: number;
    propertyType?: string;
    serviceName?: string;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  presetData,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    addressOrZip: '',
    propertyType: 'Residential Bungalow / Flat',
    monthlyBill: 4500,
    roofType: 'Flat RCC Slab',
    serviceInterest: 'Solar Panel Installation',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationId, setConfirmationId] = useState('');

  useEffect(() => {
    if (presetData) {
      setFormData((prev) => ({
        ...prev,
        monthlyBill: presetData.monthlyBill || prev.monthlyBill,
        propertyType: presetData.propertyType || prev.propertyType,
        serviceInterest: presetData.serviceName || prev.serviceInterest,
      }));
    }
  }, [presetData]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.addressOrZip.trim()) {
      errs.addressOrZip = 'Please enter your city, locality or PIN code for DISCOM lookup';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate submission with realistic ID
    const randomId = 'SOL-IN-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationId(randomId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-1">
              Proposal Request Received
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 uppercase mb-2">
              YOUR FREE SOLAR AUDIT IS UNDERWAY
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-md">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our engineering desk has initiated your DISCOM feasibility analysis:
            </p>

            <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 text-left flex flex-col gap-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">File Reference No:</span>
                <span className="font-mono font-bold text-blue-600">{confirmationId}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Current Monthly Bill:</span>
                <span className="font-bold text-slate-900">₹{formData.monthlyBill.toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Project Type:</span>
                <span className="font-bold text-slate-900">{formData.propertyType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">PM Surya Ghar Subsidy:</span>
                <span className="font-bold text-emerald-600">Eligible (Up to ₹78,000 DBT)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Assigned Engineer:</span>
                <span className="font-bold text-blue-600">Er. Rajesh Patil & Desk</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              Our solar engineering specialist will contact you within 2 business hours at <span className="text-slate-900 font-semibold">{formData.phone}</span> or <span className="text-slate-900 font-semibold">{formData.email}</span> with your 3D sun-path simulation.
            </p>

            <button
              onClick={handleReset}
              className="w-full py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-blue-500/20"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                <Sun className="w-4 h-4 text-blue-600" />
                <span>Zero Obligation · 100% Free Survey</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                GET YOUR FREE SOLAR QUOTE
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Receive an engineered 3D roof layout, 25-year financial breakdown in Rupees, and PM Surya Ghar subsidy computation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Arvind Sharma"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white ${
                      errors.fullName ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="arvind@example.com"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Phone & Address / Zip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.phone}</span>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    City, Locality or PIN Code *
                  </label>
                  <input
                    type="text"
                    value={formData.addressOrZip}
                    onChange={(e) => setFormData({ ...formData, addressOrZip: e.target.value })}
                    placeholder="e.g. Baner, Pune / Pin 411045"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white ${
                      errors.addressOrZip ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.addressOrZip && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.addressOrZip}</span>
                  )}
                </div>
              </div>

              {/* Monthly Bill & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    Avg Monthly Bill: <span className="text-blue-600 font-bold">₹{formData.monthlyBill.toLocaleString('en-IN')}</span>
                  </label>
                  <input
                    type="range"
                    min="1500"
                    max="100000"
                    step="500"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: Number(e.target.value) })}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                  >
                    <option value="Residential Bungalow / Flat">Residential Bungalow / Flat</option>
                    <option value="Housing Society (Common Area)">Housing Society (CHS)</option>
                    <option value="Commercial Business / Office">Commercial Business / Office</option>
                    <option value="Industrial Factory / Warehouse">Industrial Factory / Warehouse</option>
                    <option value="Farmhouse / Remote Site">Farmhouse / Agro Site</option>
                  </select>
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  Primary Interest
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                >
                  <option value="Solar Panel Installation">Rooftop Solar with PM Surya Ghar Subsidy</option>
                  <option value="Battery Storage Systems">Hybrid Solar with LiFePO4 Battery Backup</option>
                  <option value="Solar Maintenance & Monitoring">Solar Maintenance, Cleaning & AMC</option>
                  <option value="Commercial Microgrids & Carports">Commercial Microgrid / Solar Carport</option>
                  <option value="Complete Off-Grid System">Full Turnkey Off-Grid Solar Pumping / System</option>
                </select>
              </div>

              {/* Trust markers */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Your contact info is strictly confidential. Certified MNRE & DISCOM channel partner.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                <span>SEND PROPOSAL REQUEST</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
