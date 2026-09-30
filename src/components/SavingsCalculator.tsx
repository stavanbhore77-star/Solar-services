import React, { useState, useId } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, Zap, Leaf, Sparkles, TrendingUp } from 'lucide-react';
import { siteData } from '../siteData';

interface SavingsCalculatorProps {
  onOpenQuoteModal: (presetData?: { monthlyBill: number; systemSizeKw: number; propertyType: string }) => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [monthlyBill, setMonthlyBill] = useState(4500);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [roofType, setRoofType] = useState('concrete-flat');
  const sliderId = useId();

  // Indian calculation math:
  // Monthly bill to annual: bill * 12
  // With DISCOM tariff escalation (avg 5.0% / yr) over 25 years:
  // Net savings = annualBill * 25 * 0.90 * 1.45 (compounding factor)
  const annualBill = monthlyBill * 12;
  const estimated25YearSavings = Math.round(
    annualBill * 25 * 0.9 * 1.45
  );

  // Approximate solar system size in kW:
  // Avg kWh unit cost in India ~₹8.50 -> monthly units = bill / 8.5
  // 1 kW solar generates ~1,400 kWh (units)/year in India (~115-125 units/month)
  const annualKwh = (monthlyBill / 8.5) * 12;
  const estimatedSystemKw = Math.max(2, Math.round((annualKwh / 1350) * 10) / 10);
  const panelCount = Math.round(estimatedSystemKw / 0.54); // 540W Tier-1 ALMM panels
  const co2TonsPrevented = Math.round((annualKwh * 25 * 0.82) / 1000);

  // Central Subsidy under PM Surya Ghar
  const subsidyAmount = propertyType === 'residential'
    ? estimatedSystemKw >= 3 ? 78000 : estimatedSystemKw >= 2 ? 60000 : 30000
    : 0;

  const handleClaimQuote = () => {
    onOpenQuoteModal({
      monthlyBill,
      systemSizeKw: estimatedSystemKw,
      propertyType: propertyType === 'residential' ? 'Residential Home' : 'Commercial Facility',
    });
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#F0F9FF]/30 relative overflow-hidden border-y border-sky-100">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Indian Solar ROI Engine</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            CALCULATE HOW MUCH YOU CAN SAVE WITH SOLAR
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            DISCOM electricity tariffs rise 5–8% every year. Check your 25-year financial upside and PM Surya Ghar government subsidy eligibility.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white border border-sky-100 rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Sliders & Controls */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Property Type Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                  Property Classification
                </label>
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType('residential');
                      if (monthlyBill > 15000) setMonthlyBill(4500);
                    }}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      propertyType === 'residential'
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-extrabold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Residential Bungalow / Flat
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType('commercial');
                      if (monthlyBill < 15000) setMonthlyBill(35000);
                    }}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      propertyType === 'commercial'
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-extrabold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Commercial / Factory
                  </button>
                </div>
              </div>

              {/* Monthly Electric Bill Slider */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <label htmlFor={sliderId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Average Monthly Electricity Bill
                  </label>
                  <div className="flex items-center gap-1 font-display font-black text-2xl sm:text-3xl text-slate-900">
                    <span className="text-blue-600 text-lg">₹</span>
                    <span className="tabular-nums">{monthlyBill.toLocaleString('en-IN')}</span>
                    <span className="text-xs font-normal text-slate-500 self-end mb-1">/mo</span>
                  </div>
                </div>

                <input
                  id={sliderId}
                  type="range"
                  min={propertyType === 'residential' ? 1500 : 15000}
                  max={propertyType === 'residential' ? 25000 : 250000}
                  step={propertyType === 'residential' ? 250 : 2500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />

                <div className="flex justify-between items-center text-[11px] text-slate-500 font-semibold mt-2">
                  <span>₹{propertyType === 'residential' ? '1,500' : '15,000'}/mo</span>
                  <span>₹{propertyType === 'residential' ? '25,000' : '2,50,000'}+ /mo</span>
                </div>
              </div>

              {/* Roof Surface Type */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                  Roof Surface Structure
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'concrete-flat', label: 'Flat RCC Slab' },
                    { id: 'standing-seam', label: 'Tin / Metal Sheet' },
                    { id: 'elevated', label: 'Elevated Gazebo' },
                  ].map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRoofType(r.id)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer truncate ${
                        roofType === r.id
                          ? 'border-blue-600 bg-sky-50 text-blue-900 font-bold shadow-sm'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* PM Surya Ghar Callout */}
              {propertyType === 'residential' && (
                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-2xl flex items-center justify-between text-xs text-amber-900">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold">PM Surya Ghar Subsidy:</span>
                  </div>
                  <span className="font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-amber-200 shadow-sm">
                    ₹{subsidyAmount.toLocaleString('en-IN')} Direct DBT
                  </span>
                </div>
              )}
            </div>

            {/* Right Column: Calculated Savings Display & CTA */}
            <div className="lg:col-span-6 bg-gradient-to-br from-sky-50/80 via-blue-50/40 to-white border border-sky-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-700 block mb-1">
                  Estimated 25-Year Net Savings
                </span>
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight mb-1 tabular-nums">
                  ₹{estimated25YearSavings.toLocaleString('en-IN')}
                </div>
                <div className="text-sm font-bold text-emerald-600 mb-2">
                  (Approx. ₹{(estimated25YearSavings / 100000).toFixed(2)} Lakhs)
                </div>
                <p className="text-xs text-slate-600 mb-6 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Assuming conservative 5.0% annual DISCOM tariff escalation</span>
                </p>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  <div className="bg-white p-3.5 rounded-xl border border-sky-100 shadow-sm">
                    <span className="text-[11px] text-slate-500 block font-medium">Recommended Plant</span>
                    <span className="font-display font-bold text-lg text-slate-900 tabular-nums">
                      {estimatedSystemKw} kW
                    </span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-sky-100 shadow-sm">
                    <span className="text-[11px] text-slate-500 block font-medium">ALMM Panels</span>
                    <span className="font-display font-bold text-lg text-slate-900 tabular-nums">
                      ~{panelCount} Panels
                    </span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-sky-100 shadow-sm col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-slate-500 block font-medium">CO2 Offset</span>
                    <span className="font-display font-bold text-lg text-emerald-600 tabular-nums">
                      {co2TonsPrevented} Tons
                    </span>
                  </div>
                </div>
              </div>

              {/* Bold Blue CTA Button */}
              <div>
                <button
                  onClick={handleClaimQuote}
                  className="w-full group bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.01]"
                >
                  <span>CLAIM SUBSIDY & GET FREE PROPOSAL</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="block text-center text-[11px] text-slate-500 mt-3 font-medium">
                  Free DISCOM net metering check · PM Surya Ghar portal assistance · Zero obligation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
