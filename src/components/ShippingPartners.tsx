import React, { useState } from 'react';
import { Truck, Search, ShieldCheck, Info } from 'lucide-react';
import { LOGISTICS_PARTNERS } from '../data/logisticsPartners';

export const ShippingPartners: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Courier', 'Express Air', 'Surface & Cargo', 'Tech & Aggregator', 'Hyperlocal', 'Postal'];

  const filteredPartners = LOGISTICS_PARTNERS.filter((partner) => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (partner.highlight && partner.highlight.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (partner.tag && partner.tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || partner.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="partners" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EEF5FF] text-[#2457D6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5" />
            Pan India Courier Integrations
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#152033] tracking-tight mb-4">
            Our Logistics Network
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Access shipping options across a broad courier and logistics ecosystem.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#F7F9FC] p-1.5 rounded-xl border border-[#E9EFF6] w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-[#2457D6] shadow-xs border border-[#E2E8F0]'
                    : 'text-[#667085] hover:text-[#152033]'
                }`}
              >
                {cat === 'All' ? `All (${LOGISTICS_PARTNERS.length})` : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Find courier (e.g. Delhivery)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs font-medium rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#2457D6] focus:border-[#2457D6] text-[#152033] bg-[#F8FAFC]"
            />
          </div>
        </div>

        {/* Responsive Logo & Partner Wall:
            Desktop: 5-7 per row (grid-cols-5 to 6)
            Tablet: 3-4 per row (grid-cols-3 to 4)
            Mobile: 2-3 per row (grid-cols-2 to 3) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-white rounded-xl border border-[#E2E8F0] hover:border-[#2457D6] p-4 flex flex-col justify-between items-center text-center transition-all duration-150 hover:shadow-md min-h-[105px]"
            >
              <div className="w-full flex items-center justify-between text-[10px] text-[#94A3B8] mb-2">
                <span className="uppercase font-semibold tracking-wider truncate max-w-[80px]">
                  {partner.tag || partner.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A36A]" title="Active Network Hub" />
              </div>

              {/* Partner Name styled as clean, balanced brand typography card */}
              <div className="flex-1 flex items-center justify-center my-1 w-full">
                <span className="text-xs sm:text-sm font-bold text-[#152033] group-hover:text-[#2457D6] transition-colors leading-tight line-clamp-2">
                  {partner.name}
                </span>
              </div>

              {/* Secondary Subtitle */}
              <div className="text-[10px] text-[#667085] truncate w-full pt-1.5 border-t border-[#F1F5F9]">
                {partner.highlight || 'Integrated Partner'}
              </div>
            </div>
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center py-12 bg-[#F8FAFC] rounded-2xl border border-dashed border-[#CBD5E1]">
            <p className="text-sm text-[#667085]">No courier partner found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 text-xs font-semibold text-[#2457D6] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Required Safe Legal Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0] flex items-start gap-3 text-xs text-[#667085] leading-relaxed">
          <Info className="w-4 h-4 text-[#2457D6] shrink-0 mt-0.5" />
          <p>
            <strong>Courier & Logistics Network:</strong> Shipping services may be fulfilled through supported courier, logistics and aggregation networks. Availability may vary by location and service plan.
          </p>
        </div>
      </div>
    </section>
  );
};
