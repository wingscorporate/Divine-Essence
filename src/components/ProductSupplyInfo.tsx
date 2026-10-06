import React from 'react';
import {
  Lock,
  Target,
  BadgeIndianRupee,
  TrendingUp,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
} from 'lucide-react';

interface ProductSupplyInfoProps {
  onRequestOpportunities: () => void;
}

export const ProductSupplyInfo: React.FC<ProductSupplyInfoProps> = ({
  onRequestOpportunities,
}) => {
  const points = [
    {
      title: 'Market-Driven Selection',
      description:
        'Products are selected around online selling potential and market relevance.',
      icon: Target,
      highlight: 'Demand Validation',
    },
    {
      title: 'Competitive Sourcing',
      description:
        'Selected products may be available in approximately the ₹80–₹200 sourcing range.',
      icon: BadgeIndianRupee,
      highlight: 'Direct Wholesale Basis',
    },
    {
      title: 'Seller Margin Opportunity',
      description:
        'Products can potentially be positioned in higher retail ranges depending on category, demand, branding, marketing and competition.',
      icon: TrendingUp,
      highlight: 'High Margin Potential',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F9FC] border-y border-[#EEF2F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFF7ED] text-[#C2410C] text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFEDD5]">
                <Lock className="w-3.5 h-3.5" />
                Strategic Product Privacy
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#152033] tracking-tight mb-4">
                Why We Don't Publicly List Our Winning Products
              </h2>

              <p className="text-base sm:text-lg text-[#667085] leading-relaxed mb-8">
                Winning products lose their advantage when everyone is selling the exact same thing. Divine Essence focuses on helping sellers access relevant product opportunities based on market demand instead of maintaining a public product catalogue.
              </p>

              {/* 3 Core Points */}
              <div className="space-y-4 mb-8">
                {points.map((pt, idx) => {
                  const Icon = pt.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E9EFF6] flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#EEF5FF] text-[#2457D6] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-[#152033]">
                            {pt.title}
                          </h3>
                          <span className="text-[10px] font-semibold text-[#2457D6] bg-[#E8F0FF] px-2 py-0.5 rounded">
                            {pt.highlight}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                          {pt.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div>
                <button
                  onClick={onRequestOpportunities}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#2457D6] hover:bg-[#1d46b0] shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Product Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Abstract Visual: Anti-Saturation Protocol */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E9EFF6]">
                  <span className="text-xs font-bold text-[#152033] flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-[#2457D6]" />
                    Anti-Saturation Protection
                  </span>
                  <span className="text-[10px] font-semibold bg-[#EAF8F1] text-[#16A36A] px-2 py-0.5 rounded-full">
                    Gated Network
                  </span>
                </div>

                <div className="space-y-3 text-xs text-[#667085]">
                  <div className="p-3 bg-white rounded-lg border border-[#E9EFF6]">
                    <div className="flex items-center gap-2 font-semibold text-[#152033] mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#16A36A]" />
                      Closed Wholesale Allocations
                    </div>
                    <p className="text-[11px]">
                      Opportunities are distributed directly to verified active sellers, protecting advertising conversion rates and creative ad spend.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#E9EFF6]">
                    <div className="flex items-center gap-2 font-semibold text-[#152033] mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#2457D6]" />
                      Factory-Direct Quality Check
                    </div>
                    <p className="text-[11px]">
                      Each batch is vetted for build quality, packaging strength, and transit durability before dispatch to reduce customer return rates.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#E9EFF6]">
                    <div className="flex items-center gap-2 font-semibold text-[#152033] mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#152033]" />
                      Private Seller Onboarding
                    </div>
                    <p className="text-[11px]">
                      Speak with our catalogue sourcing executive to receive opportunities matched to your target consumer niche.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#667085] text-center italic">
                  *No public catalogues. High-velocity opportunities shared on request.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
