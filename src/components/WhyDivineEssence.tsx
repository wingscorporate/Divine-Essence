import React from 'react';
import {
  Tag,
  Truck,
  RotateCcw,
  Sparkles,
  Network,
  Split,
  CheckCircle2,
} from 'lucide-react';

export const WhyDivineEssence: React.FC = () => {
  const benefits = [
    {
      title: 'Lower Product Cost',
      description: 'Access competitively priced products suitable for online selling.',
      icon: Tag,
      color: 'text-[#2457D6]',
      bg: 'bg-[#EEF5FF]',
      border: 'hover:border-[#2457D6]/40',
    },
    {
      title: 'Affordable Shipping',
      description: 'Pan India shipping starting from ₹59 under applicable plans.',
      icon: Truck,
      color: 'text-[#2457D6]',
      bg: 'bg-[#EEF5FF]',
      border: 'hover:border-[#2457D6]/40',
    },
    {
      title: 'RTO Cost Advantage',
      description: 'Selected shipping plans can include ₹0 RTO shipping cost.',
      icon: RotateCcw,
      color: 'text-[#16A36A]',
      bg: 'bg-[#EAF8F1]',
      border: 'hover:border-[#16A36A]/40',
    },
    {
      title: 'Winning Product Access',
      description: 'Receive product opportunities without publicly exposing the entire catalogue.',
      icon: Sparkles,
      color: 'text-[#2457D6]',
      bg: 'bg-[#EEF5FF]',
      border: 'hover:border-[#2457D6]/40',
    },
    {
      title: 'Multiple Courier Networks',
      description: 'Route shipments through a broad network of delivery providers.',
      icon: Network,
      color: 'text-[#2457D6]',
      bg: 'bg-[#EEF5FF]',
      border: 'hover:border-[#2457D6]/40',
    },
    {
      title: 'Flexible Services',
      description: 'Use supplier services, shipping services, or both.',
      icon: Split,
      color: 'text-[#16A36A]',
      bg: 'bg-[#EAF8F1]',
      border: 'hover:border-[#16A36A]/40',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EEF5FF] text-[#2457D6] text-xs font-semibold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Competitive Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#152033] tracking-tight mb-4">
            Built Around Seller Profitability
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Every capability at Divine Essence is designed to protect your gross margins, eliminate shipping leaks, and help you scale sustainably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-white border border-[#E2E8F0] ${item.border} p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#152033] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F8FAFC] flex items-center text-xs font-semibold text-[#2457D6]">
                  <span>Optimized for Indian E-Commerce</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
