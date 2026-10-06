import React from 'react';
import {
  PackageCheck,
  TrendingUp,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  BarChart3,
  MapPin,
  RefreshCcw,
} from 'lucide-react';

interface HeroProps {
  onExploreSupplier: () => void;
  onExploreShipping: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreSupplier,
  onExploreShipping,
  onOpenCalculator,
}) => {
  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-white">
      {/* Subtle background mesh gradients (clean, non-neon) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#EEF5FF] rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#F7F9FC] rounded-full blur-2xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Value Prop, Benefits, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Value Proposition Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#EEF5FF] text-[#2457D6] text-xs font-semibold tracking-wide uppercase mb-4 border border-[#DCE8FC]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>B2B E-Commerce Sourcing & Logistics Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#152033] tracking-tight leading-[1.12] mb-4">
              Source Smarter. <br className="hidden sm:inline" />
              Ship Cheaper. <br className="hidden sm:inline" />
              <span className="text-[#2457D6]">Scale Faster.</span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-semibold text-[#152033] mb-3">
              Winning Products + Pan India Shipping Under One Roof
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mb-6">
              Divine Essence helps e-commerce sellers access trending and winning products at competitive supplier pricing while also providing affordable Pan India shipping solutions.
            </p>

            {/* Prominent Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl mb-8">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                <div className="w-8 h-8 rounded-lg bg-[#E8F0FF] text-[#2457D6] flex items-center justify-center shrink-0 mt-0.5">
                  <PackageCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#667085] uppercase tracking-wider block">Sourcing Range</span>
                  <span className="text-sm font-bold text-[#152033]">Products approx. ₹80–₹200</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                <div className="w-8 h-8 rounded-lg bg-[#E8F0FF] text-[#16A36A] flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#667085] uppercase tracking-wider block">Retail Potential</span>
                  <span className="text-sm font-bold text-[#152033]">Selling approx. ₹799–₹1,200</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                <div className="w-8 h-8 rounded-lg bg-[#E8F0FF] text-[#2457D6] flex items-center justify-center shrink-0 mt-0.5">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#667085] uppercase tracking-wider block">National Logistics</span>
                  <span className="text-sm font-bold text-[#152033]">Shipping from ₹59 Pan India</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                <div className="w-8 h-8 rounded-lg bg-[#E8F0FF] text-[#16A36A] flex items-center justify-center shrink-0 mt-0.5">
                  <RefreshCcw className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#667085] uppercase tracking-wider block">RTO Cost Advantage</span>
                  <span className="text-sm font-bold text-[#152033]">₹0 RTO Cost on applicable plan</span>
                </div>
              </div>
            </div>

            {/* Bullet points for extra clarity */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#475467] font-medium mb-8">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A36A]" />
                Access to 50+ logistics & courier networks
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A36A]" />
                Dedicated seller-focused support
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-5">
              <button
                onClick={onExploreSupplier}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#2457D6] hover:bg-[#1d46b0] rounded-xl shadow-sm transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Supplier Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreShipping}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#152033] bg-[#F7F9FC] hover:bg-[#EEF5FF] hover:text-[#2457D6] border border-[#E2E8F0] rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Shipping Service</span>
              </button>
            </div>

            {/* Trust Line */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#667085] bg-[#F8FAFC] px-3.5 py-1.5 rounded-lg border border-[#EDF2F7]">
              <Layers className="w-4 h-4 text-[#2457D6]" />
              <span>
                <strong>Flexibility:</strong> Take only the products, only the shipping service, or combine both.
              </span>
            </div>
          </div>

          {/* Right Column: High-End Business & Logistics Visual (No product photos) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-5 sm:p-6 space-y-5">
                {/* Visual Header: Live Seller Dashboard Simulation */}
                <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#2457D6] flex items-center justify-center text-white font-bold text-sm">
                      DE
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-[#152033]">Seller Economics Console</h2>
                      <p className="text-[11px] text-[#667085]">Verified Margin & Logistics Flow</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EAF8F1] text-[#16A36A] border border-[#C6F0D9]">
                    Active Sync
                  </span>
                </div>

                {/* Simulated Order Card with Real Unit Economics */}
                <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E9EFF6]">
                  <div className="flex items-center justify-between text-xs text-[#667085] mb-2 font-medium">
                    <span>Illustrative Order Unit #DE-9842</span>
                    <span className="text-[#2457D6] font-semibold">Pan India Dispatch</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-[#EDF2F7]">
                      <span className="text-[#667085]">Supplier Sourcing (Divine Sourced)</span>
                      <span className="font-semibold text-[#152033]">₹150.00</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-[#EDF2F7]">
                      <span className="text-[#667085]">Pan India Shipping (Flat Base Rate)</span>
                      <span className="font-semibold text-[#152033]">₹59.00</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-[#EDF2F7]">
                      <span className="text-[#667085]">RTO Cost Risk (Applicable Plan)</span>
                      <span className="font-semibold text-[#16A36A]">₹0.00</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-[#EDF2F7]">
                      <span className="text-[#667085]">Customer Retail Selling Price</span>
                      <span className="font-bold text-[#152033]">₹899.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 text-sm">
                      <span className="font-bold text-[#152033]">Estimated Gross Margin</span>
                      <span className="font-extrabold text-[#16A36A] text-base">+₹520.00 (57.8%)</span>
                    </div>
                  </div>
                </div>

                {/* Logistics Route Map Simulation */}
                <div className="rounded-xl border border-[#E2E8F0] p-4 bg-white space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#152033] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#2457D6]" />
                      Smart Courier Routing
                    </span>
                    <span className="text-[11px] text-[#667085]">28,000+ PIN Codes</span>
                  </div>

                  {/* Route Steps */}
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <div className="text-center">
                      <div className="w-7 h-7 rounded-full bg-[#E8F0FF] text-[#2457D6] flex items-center justify-center mx-auto mb-1 font-bold">
                        1
                      </div>
                      <span className="text-[#667085]">Sourcing Hub</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-[#2457D6] to-[#16A36A] mx-2 relative">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-[#2457D6] rounded-full" />
                    </div>
                    <div className="text-center">
                      <div className="w-7 h-7 rounded-full bg-[#EAF8F1] text-[#16A36A] flex items-center justify-center mx-auto mb-1 font-bold">
                        2
                      </div>
                      <span className="text-[#667085]">Multi-Courier</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-[#E2E8F0] mx-2" />
                    <div className="text-center">
                      <div className="w-7 h-7 rounded-full bg-[#F1F5F9] text-[#152033] flex items-center justify-center mx-auto mb-1 font-bold">
                        3
                      </div>
                      <span className="text-[#667085]">Buyer Doorstep</span>
                    </div>
                  </div>
                </div>

                {/* Quick Calculator Trigger Banner */}
                <button
                  onClick={onOpenCalculator}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#EEF5FF] hover:bg-[#E2EDFF] text-[#2457D6] text-xs font-semibold flex items-center justify-between transition-colors border border-[#D0E2FE] cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4" />
                    Simulate your volume in Profit Calculator
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Floating Badge: Multi-Courier Network */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white rounded-xl p-3 border border-[#E2E8F0] shadow-lg items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#16A36A] text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left pr-2">
                  <div className="text-xs font-bold text-[#152033]">₹0 RTO Option</div>
                  <div className="text-[10px] text-[#667085]">On qualified shipping plans</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
