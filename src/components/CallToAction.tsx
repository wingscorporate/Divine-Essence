import React from 'react';
import { Package, Truck, ArrowRight, ShieldCheck } from 'lucide-react';

interface CallToActionProps {
  onStartSupply: () => void;
  onStartShipping: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onStartSupply,
  onStartShipping,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#152033] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#2457D6]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#16A36A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[#EEF5FF] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A36A]" />
              Accelerate Your Margins
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Ready to Improve Your Product & Shipping Margins?
            </h2>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-8">
              Start with the service your business needs today. Use product sourcing, shipping support, or combine both as you grow.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
              <button
                onClick={onStartSupply}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#2457D6] hover:bg-[#1d46b0] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Package className="w-4 h-4" />
                <span>Start With Product Supply</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStartShipping}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-[#152033] bg-white hover:bg-[#F8FAFC] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Truck className="w-4 h-4 text-[#2457D6]" />
                <span>Start With Shipping</span>
                <ArrowRight className="w-4 h-4 text-[#152033]" />
              </button>
            </div>

            {/* Reassuring Note */}
            <p className="text-xs text-[#94A3B8]">
              No need to take both services. Choose what works for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
