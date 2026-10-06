import React from 'react';
import { Check, X, Shield, ArrowRight } from 'lucide-react';

interface ComparisonProps {
  onGetStarted: () => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ onGetStarted }) => {
  const comparisonRows = [
    {
      feature: 'Product Discovery',
      traditional: 'Manual searching across markets & portals',
      divine: 'Market-focused, demand-tested opportunities',
      divineAdvantage: true,
    },
    {
      feature: 'Starting Product Cost',
      traditional: 'Often higher with middleman markups',
      divine: 'Competitive sourcing (approx. ₹80–₹200 range)',
      divineAdvantage: true,
    },
    {
      feature: 'Shipping Arrangement',
      traditional: 'Separate agreements, high minimum pickups',
      divine: 'Shipping support integrated under one roof',
      divineAdvantage: true,
    },
    {
      feature: 'Courier Options',
      traditional: 'Limited to 1 or 2 local couriers',
      divine: 'Broad logistics network across 50+ providers',
      divineAdvantage: true,
    },
    {
      feature: 'RTO Cost',
      traditional: 'Can be expensive, sellers bear 100% of returns',
      divine: '₹0 RTO shipping cost under applicable plan',
      divineAdvantage: true,
    },
    {
      feature: 'Business Flexibility',
      traditional: 'Supplier only (inflexible lock-ins)',
      divine: 'Product only / Shipping only / Both together',
      divineAdvantage: true,
    },
    {
      feature: 'Support',
      traditional: 'Basic customer service or uncontactable',
      divine: 'Seller-focused dedicated growth support',
      divineAdvantage: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EEF5FF] text-[#2457D6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            Clear Value Comparison
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#152033] tracking-tight mb-4">
            Traditional Supplier vs Divine Essence
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            See why high-volume sellers and emerging direct-to-consumer brands transition to Divine Essence.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] shadow-xs">
          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <th className="py-4 px-6 text-xs font-bold text-[#667085] uppercase tracking-wider w-1/3">
                  Service Dimension
                </th>
                <th className="py-4 px-6 text-xs font-bold text-[#667085] uppercase tracking-wider w-1/3">
                  Traditional Supplier
                </th>
                <th className="py-4 px-6 text-xs font-bold text-[#2457D6] uppercase tracking-wider w-1/3 bg-[#EEF5FF]/70 border-l border-[#D9E6FC]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2457D6]" />
                    Divine Essence
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-sm">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#F8FAFC]/60 transition-colors"
                >
                  {/* Dimension */}
                  <td className="py-4 px-6 font-semibold text-[#152033]">
                    {row.feature}
                  </td>

                  {/* Traditional */}
                  <td className="py-4 px-6 text-[#667085]">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-[#94A3B8] shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>

                  {/* Divine Essence */}
                  <td className="py-4 px-6 font-semibold text-[#152033] bg-[#EEF5FF]/30 border-l border-[#D9E6FC]">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#16A36A] shrink-0 mt-0.5" />
                      <span>{row.divine}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#2457D6] hover:bg-[#1d46b0] shadow-xs transition-all cursor-pointer"
          >
            <span>Upgrade to Divine Essence</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
