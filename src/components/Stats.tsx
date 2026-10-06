import React from 'react';
import { Truck, RotateCcw, Tag, TrendingUp, Info } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      metric: '₹59',
      label: 'Pan India Shipping*',
      subtext: 'Selected plans starting rate',
      icon: Truck,
      color: 'text-[#2457D6]',
      bg: 'bg-[#EEF5FF]',
    },
    {
      metric: '₹0',
      label: 'RTO Cost*',
      subtext: 'Under applicable shipping plan',
      icon: RotateCcw,
      color: 'text-[#16A36A]',
      bg: 'bg-[#EAF8F1]',
    },
    {
      metric: '₹80–₹200',
      label: 'Typical Product Sourcing Range*',
      subtext: 'Competitively priced opportunities',
      icon: Tag,
      color: 'text-[#2457D6]',
      bg: 'bg-[#EEF5FF]',
    },
    {
      metric: '₹799–₹1,200',
      label: 'Potential Selling Range*',
      subtext: 'Illustrative online retail band',
      icon: TrendingUp,
      color: 'text-[#152033]',
      bg: 'bg-[#F7F9FC]',
    },
  ];

  return (
    <section className="bg-[#F7F9FC] py-12 border-y border-[#EEF2F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 sm:p-6 border border-[#E9EFF6] shadow-xs hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#667085] uppercase tracking-wider">
                    DE Metric
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#152033] tracking-tight mb-1">
                  {stat.metric}
                </div>
                <div className="text-sm font-bold text-[#152033] mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-[#667085]">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mandatory Disclaimer */}
        <div className="mt-6 p-3.5 rounded-lg bg-white border border-[#E5EBF2] flex items-start gap-2.5 text-xs text-[#667085] leading-relaxed">
          <Info className="w-4 h-4 text-[#2457D6] shrink-0 mt-0.5" />
          <p>
            *Rates, product costs, RTO terms, margins and service availability may vary by product, location, courier, weight, category and applicable plan. Selling prices and profits are illustrative and are not guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};
