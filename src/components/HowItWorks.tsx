import React from 'react';
import {
  ListChecks,
  MessageSquareText,
  KeyRound,
  Rocket,
  ArrowRight,
} from 'lucide-react';

interface HowItWorksProps {
  onStartFlow: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartFlow }) => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Service',
      description: 'Select product supply, shipping, or both.',
      icon: ListChecks,
      subtext: 'Tailored to your current setup',
    },
    {
      number: '02',
      title: 'Connect With Our Team',
      description: 'Tell us about your business, order requirements and current operations.',
      icon: MessageSquareText,
      subtext: 'Quick 10-minute seller onboarding',
    },
    {
      number: '03',
      title: 'Get Access',
      description: 'Receive product opportunities and/or shipping support depending on your selected service.',
      icon: KeyRound,
      subtext: 'Active rate cards & curated supply',
    },
    {
      number: '04',
      title: 'Start Selling & Shipping',
      description: 'Focus on marketing and sales while Divine Essence supports sourcing and logistics.',
      icon: Rocket,
      subtext: 'Maximize net profit margin',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F7F9FC] border-t border-[#EEF2F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EEF5FF] text-[#2457D6] text-xs font-semibold uppercase tracking-wider mb-3">
            Simple 4-Step Onboarding
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#152033] tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Getting started is seamless. From your first enquiry to daily order dispatches across India, we handle the friction.
          </p>
        </div>

        {/* Desktop Horizontal Process */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {/* Connector Line Behind Cards */}
          <div className="absolute top-1/4 left-16 right-16 h-0.5 bg-[#CBD5E1] -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative z-10 bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#2457D6]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#2457D6] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#152033] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F8FAFC] text-[11px] font-medium text-[#2457D6]">
                  {step.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-xs flex items-start gap-4"
              >
                <div className="flex flex-col items-center">
                  <span className="w-9 h-9 rounded-xl bg-[#EEF5FF] text-[#2457D6] font-bold text-sm flex items-center justify-center shrink-0">
                    {step.number}
                  </span>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-[#E2E8F0] my-2" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-[#152033]">
                      {step.title}
                    </h3>
                    <Icon className="w-4 h-4 text-[#2457D6]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-1.5">
                    {step.description}
                  </p>
                  <span className="text-[11px] font-medium text-[#2457D6] block">
                    {step.subtext}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Onboarding Action Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartFlow}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#2457D6] hover:bg-[#1d46b0] shadow-sm transition-all cursor-pointer"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
