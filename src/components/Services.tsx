import React from 'react';
import {
  Package,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingUp,
  BarChart2,
  ShieldCheck,
  MapPin,
  Clock,
  Layers,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: 'Product Supplier' | 'Shipping Partner') => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const supplierBenefits = [
    'Trending product sourcing',
    'Winning product opportunities',
    'Competitive supplier pricing',
    'Approx. ₹80–₹200 sourcing range on selected products',
    'Potential for strong markup',
    'Suitable for dropshipping and e-commerce sellers',
    'No need to search through hundreds of suppliers',
    'Business-focused sourcing support',
  ];

  const shippingBenefits = [
    'Pan India delivery',
    'Multiple courier options',
    'Shipment tracking',
    'COD-friendly shipping support',
    'Seller-focused logistics',
    'Competitive shipping rates',
    'Easy shipping coordination',
    'RTO-focused cost optimisation',
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEF5FF] text-[#2457D6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Flexible Service Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#152033] tracking-tight mb-4">
            Two Core Services. Choose One or Combine Both.
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Whether you need winning products to sell, lower courier rates across India, or complete end-to-end fulfilment support, Divine Essence adapts to your business model.
          </p>
        </div>

        {/* Two Large Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CARD 1: PRODUCT SUPPLIER */}
          <div
            id="supplier"
            className="flex flex-col justify-between rounded-2xl bg-[#FFFFFF] border-2 border-[#E2E8F0] hover:border-[#2457D6]/50 shadow-sm hover:shadow-lg transition-all duration-200 p-6 sm:p-8"
          >
            <div>
              {/* Card Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#2457D6] flex items-center justify-center">
                  <Package className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2457D6] bg-[#EEF5FF] px-3 py-1 rounded-md">
                  Service 01
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl font-extrabold text-[#152033] tracking-tight mb-2">
                Trending & Winning Product Supply
              </h3>

              {/* Price Range Strip */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#152033] bg-[#F7F9FC] p-2.5 rounded-lg border border-[#EDF2F7] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#16A36A]" />
                <span>Selected Sourcing Range: <strong>₹80–₹200</strong></span>
                <span className="text-[#667085]">|</span>
                <span className="text-[#667085]">High Retail Potential</span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-6">
                Divine Essence helps sellers source products selected around market demand, pricing potential and online selling opportunities.
              </p>

              {/* Abstract Visual / Silhouettes (NO public catalogue, NO product grid) */}
              <div className="rounded-xl bg-[#F8FAFC] border border-[#E5EBF2] p-4 mb-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 text-xs font-semibold text-[#152033]">
                  <span className="flex items-center gap-1.5">
                    <BarChart2 className="w-4 h-4 text-[#2457D6]" />
                    Demand-Verified Sourcing Pipeline
                  </span>
                  <span className="text-[11px] text-[#667085]">Direct Factory Access</span>
                </div>

                {/* Abstract category metric bars */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-[#E9EFF6]">
                    <span className="text-[10px] text-[#667085] block">Home & Living</span>
                    <span className="font-bold text-[#152033]">High Margin</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-[#E9EFF6]">
                    <span className="text-[10px] text-[#667085] block">Auto & Utility</span>
                    <span className="font-bold text-[#152033]">High Volume</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-[#E9EFF6]">
                    <span className="text-[10px] text-[#667085] block">Wellness Tools</span>
                    <span className="font-bold text-[#152033]">Trending Tier</span>
                  </div>
                </div>

                {/* Mandatory Privacy/Edge Banner */}
                <div className="mt-3.5 p-3 rounded-lg bg-[#FFFDF5] border border-[#FBEAC4] flex items-start gap-2.5 text-xs text-[#7A5B04] leading-relaxed">
                  <Lock className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <p className="font-medium">
                    We don't publicly showcase winning products. Our seller network receives relevant product opportunities directly.
                  </p>
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-2.5 mb-8">
                <h4 className="text-xs font-bold text-[#152033] uppercase tracking-wider mb-3">
                  Sourcing Advantages:
                </h4>
                {supplierBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#475467]">
                    <CheckCircle2 className="w-4 h-4 text-[#16A36A] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => onSelectService('Product Supplier')}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-[#2457D6] hover:bg-[#1d46b0] active:bg-[#17388e] shadow-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Product Supply</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CARD 2: SHIPPING PARTNER */}
          <div
            id="shipping"
            className="flex flex-col justify-between rounded-2xl bg-[#FFFFFF] border-2 border-[#E2E8F0] hover:border-[#2457D6]/50 shadow-sm hover:shadow-lg transition-all duration-200 p-6 sm:p-8"
          >
            <div>
              {/* Card Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#EAF8F1] text-[#16A36A] flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16A36A] bg-[#EAF8F1] px-3 py-1 rounded-md">
                  Service 02
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl font-extrabold text-[#152033] tracking-tight mb-2">
                Affordable Pan India Shipping
              </h3>

              {/* Prominent Rates Banner */}
              <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-[#F7F9FC] border border-[#EDF2F7] mb-4">
                <div className="text-left">
                  <span className="text-[11px] text-[#667085] block">Starting Courier Rate</span>
                  <span className="text-sm font-extrabold text-[#2457D6]">Shipping from ₹59 Pan India</span>
                </div>
                <div className="text-left border-l border-[#E2E8F0] pl-3">
                  <span className="text-[11px] text-[#667085] block">RTO Cost Advantage</span>
                  <span className="text-sm font-extrabold text-[#16A36A]">₹0 RTO Cost on applicable plan</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-6">
                Divine Essence connects sellers with a broad courier and logistics network to make shipping more affordable and manageable.
              </p>

              {/* Logistics Network Preview (Abstract) */}
              <div className="rounded-xl bg-[#F8FAFC] border border-[#E5EBF2] p-4 mb-6">
                <div className="flex items-center justify-between mb-3 text-xs font-semibold text-[#152033]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#16A36A]" />
                    Optimized Delivery Ecosystem
                  </span>
                  <span className="text-[11px] text-[#667085]">Pan India Coverage</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-[#E9EFF6]">
                    <span className="text-[10px] text-[#667085] block">NDR & Returns</span>
                    <span className="font-bold text-[#16A36A]">Managed Tech</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-[#E9EFF6]">
                    <span className="text-[10px] text-[#667085] block">COD Remittance</span>
                    <span className="font-bold text-[#152033]">Fast Cycle</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-[#E9EFF6]">
                    <span className="text-[10px] text-[#667085] block">Couriers</span>
                    <span className="font-bold text-[#2457D6]">50+ Integrated</span>
                  </div>
                </div>

                <div className="mt-3.5 p-3 rounded-lg bg-[#EEF5FF] border border-[#D6E6FE] flex items-center gap-2.5 text-xs text-[#1D4ED8]">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span className="font-medium">
                    Slash shipping overheads and eliminate unabsorbed return costs with our seller-first shipping plans.
                  </span>
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-2.5 mb-8">
                <h4 className="text-xs font-bold text-[#152033] uppercase tracking-wider mb-3">
                  Logistics Advantages:
                </h4>
                {shippingBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#475467]">
                    <CheckCircle2 className="w-4 h-4 text-[#16A36A] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => onSelectService('Shipping Partner')}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-[#152033] hover:bg-[#2457D6] active:bg-[#1d46b0] shadow-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Activate Shipping Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
