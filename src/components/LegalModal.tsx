import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'shipping' | 'disclaimer';

interface LegalModalProps {
  type: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap: Record<LegalDocType, { title: string; body: React.ReactNode }> = {
    privacy: {
      title: 'Privacy Policy',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#475467] leading-relaxed">
          <p>
            At Divine Essence, we respect the commercial confidentiality of our sellers, drop-shippers, and D2C brand partners. We understand that your customer base, advertising metrics, and order volumes are trade secrets.
          </p>
          <h4 className="font-bold text-[#152033] text-sm">Information Collection & Use</h4>
          <p>
            We collect company contact details, store URLs, and shipping requirements purely for account onboarding, logistics dispatch coordination, and supplier quotation generation. We do not sell or trade your data to third-party advertising networks.
          </p>
          <h4 className="font-bold text-[#152033] text-sm">Winning Product Protection</h4>
          <p>
            Sourcing catalogues and recommendations shared between Divine Essence and registered sellers are subject to strict anti-saturation and commercial privacy protocols.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms & Conditions',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#475467] leading-relaxed">
          <p>
            Welcome to Divine Essence. By engaging our B2B product supply or shipping logistics solutions, you agree to these commercial terms.
          </p>
          <h4 className="font-bold text-[#152033] text-sm">Independent Business Nature</h4>
          <p>
            Divine Essence operates as an independent B2B service supplier and logistics aggregation facilitator. Divine Essence is not an e-commerce retail store and does not sell directly to end-consumers under retail contracts.
          </p>
          <h4 className="font-bold text-[#152033] text-sm">Service Flexibility</h4>
          <p>
            Sellers may subscribe exclusively to Product Supply, exclusively to Shipping Logistics, or integrate both simultaneously according to the executed commercial rate card.
          </p>
        </div>
      ),
    },
    shipping: {
      title: 'Shipping & Logistics Terms',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#475467] leading-relaxed">
          <p>
            Shipping rates starting from ₹59 Pan India apply to qualified base weight brackets (typically up to 500g) under designated standard service tiers.
          </p>
          <h4 className="font-bold text-[#152033] text-sm">RTO Terms & ₹0 Provision</h4>
          <p>
            The ₹0 RTO Cost benefit applies strictly to applicable shipping plans and requires compliance with minimum monthly order volume thresholds, non-delivery report (NDR) operational verification, and accurate parcel addressing.
          </p>
          <h4 className="font-bold text-[#152033] text-sm">Courier Network Fulfillment</h4>
          <p>
            Shipments may be routed dynamically through Delhivery, Blue Dart, DTDC, XpressBees, Ecom Express, Shadowfax, India Post, or other courier partners based on pin-code serviceability, transit speed, and cost efficiency.
          </p>
        </div>
      ),
    },
    disclaimer: {
      title: 'Commercial Disclaimer & Unit Economics Notice',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#475467] leading-relaxed">
          <p>
            Rates, product sourcing costs, RTO terms, margins, and service availability may vary by product specification, physical weight, volumetric dimensions, pickup/destination pin codes, courier fuel surcharges, and chosen service plans.
          </p>
          <h4 className="font-bold text-[#152033] text-sm">No Earnings or Selling Price Guarantees</h4>
          <p>
            Divine Essence does not guarantee selling prices, conversion rates, advertising return on investment (ROAS), or retail profits. Figures displayed on the website and within the Profit Calculator (such as ₹80–₹200 sourcing, ₹799–₹1,200 retail price, and ₹520 gross profit per order) are purely illustrative examples based on common marketplace categories.
          </p>
          <p>
            Actual business profits depend entirely on your marketing strategy, customer acquisition cost (CAC), return-to-origin percentages, payment processing gateway fees, and operating overheads.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#E2E8F0] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between p-5 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#2457D6]" />
            <h3 className="text-base font-bold text-[#152033]">{current.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#667085] hover:text-[#152033] hover:bg-[#F1F5F9]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          {current.body}
        </div>

        <div className="p-4 bg-[#F8FAFC] border-t border-[#F1F5F9] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-white bg-[#2457D6] hover:bg-[#1d46b0] rounded-lg transition-colors cursor-pointer"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
};
