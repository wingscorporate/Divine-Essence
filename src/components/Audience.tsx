import React from 'react';
import {
  ShoppingBag,
  Store,
  Instagram,
  Globe2,
  Boxes,
  Users2,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export const Audience: React.FC = () => {
  const audiences = [
    {
      title: 'Dropshippers',
      description: 'Find competitive products without holding massive inventory risks and ship with zero upfront freight headaches.',
      icon: ShoppingBag,
    },
    {
      title: 'D2C Brands',
      description: 'Strengthen gross margins with factory-level sourcing prices and reliable nationwide logistics SLA.',
      icon: Store,
    },
    {
      title: 'Instagram Sellers',
      description: 'Transition from manual local post-office parcels to automated Pan India courier dispatch with tracking.',
      icon: Instagram,
    },
    {
      title: 'Marketplace Sellers',
      description: 'Diversify away from high marketplace commission fees with your own private, higher-margin supply chain.',
      icon: Globe2,
    },
    {
      title: 'Shopify Store Owners',
      description: 'Connect winning product supplies directly to your Shopify checkout and streamline Indian COD orders.',
      icon: Boxes,
    },
    {
      title: 'Resellers',
      description: 'Access curated product opportunities with room for healthy markups and nationwide home delivery.',
      icon: Users2,
    },
    {
      title: 'New E-commerce Entrepreneurs',
      description: 'Launch your first online business with lower startup barrier: low-cost inventory + starting ₹59 shipping.',
      icon: Sparkles,
    },
    {
      title: 'Scaling Online Businesses',
      description: 'Cut RTO losses and negotiate multi-courier volume rate cards as you scale from 100 to 2,000+ orders a day.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F9FC] border-t border-[#EEF2F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EEF5FF] text-[#2457D6] text-xs font-semibold uppercase tracking-wider mb-3">
            Tailored For Online Commerce
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#152033] tracking-tight mb-4">
            Built for People Who Want to Sell, Not Manage Logistics All Day
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Focus your energy on creative ads, high-converting store pages, and customer satisfaction while Divine Essence powers your backend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs hover:shadow-md hover:border-[#2457D6]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#EEF5FF] text-[#2457D6] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#152033] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
