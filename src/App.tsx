import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { ProfitCalculator } from './components/ProfitCalculator';
import { WhyDivineEssence } from './components/WhyDivineEssence';
import { HowItWorks } from './components/HowItWorks';
import { ShippingPartners } from './components/ShippingPartners';
import { ProductSupplyInfo } from './components/ProductSupplyInfo';
import { Comparison } from './components/Comparison';
import { Audience } from './components/Audience';
import { CallToAction } from './components/CallToAction';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { Footer } from './components/Footer';
import { ServiceInterest } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceInterest>('Both Services');
  const [calculatorNotes, setCalculatorNotes] = useState<string>('');
  const [activeLegalModal, setActiveLegalModal] = useState<LegalDocType | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithService = (service: ServiceInterest = 'Both Services') => {
    setSelectedService(service);
    scrollToSection('contact');
  };

  const handleStartWithConfig = (notes: string) => {
    setCalculatorNotes(notes);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white text-[#152033] flex flex-col font-sans selection:bg-[#2457D6] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar onOpenContact={handleOpenContactWithService} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreSupplier={() => scrollToSection('supplier')}
          onExploreShipping={() => scrollToSection('shipping')}
          onOpenCalculator={() => scrollToSection('calculator')}
        />

        {/* 3. Key Stats Section */}
        <Stats />

        {/* 4. Our Two Services */}
        <Services onSelectService={handleOpenContactWithService} />

        {/* 5. Profit Calculator */}
        <ProfitCalculator onStartWithConfig={handleStartWithConfig} />

        {/* 6. Why Divine Essence */}
        <WhyDivineEssence />

        {/* 7. How It Works */}
        <HowItWorks onStartFlow={() => scrollToSection('services')} />

        {/* 8. Shipping Partner Network */}
        <ShippingPartners />

        {/* 9. Product Supply Positioning */}
        <ProductSupplyInfo
          onRequestOpportunities={() => handleOpenContactWithService('Product Supplier')}
        />

        {/* 10. Comparison Section */}
        <Comparison onGetStarted={() => scrollToSection('contact')} />

        {/* 11. Who Is This For? */}
        <Audience />

        {/* 12. Call To Action Section */}
        <CallToAction
          onStartSupply={() => handleOpenContactWithService('Product Supplier')}
          onStartShipping={() => handleOpenContactWithService('Shipping Partner')}
        />

        {/* 13. FAQ */}
        <FAQ />

        {/* 14. Contact / Lead Form */}
        <ContactForm
          initialService={selectedService}
          initialNotes={calculatorNotes}
        />
      </main>

      {/* 15. Floating WhatsApp CTA */}
      <WhatsAppButton />

      {/* 16. Legal Modal */}
      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* 17. Footer */}
      <Footer
        onOpenLegal={(type) => setActiveLegalModal(type)}
        onNavigateTo={(id) => scrollToSection(id)}
      />
    </div>
  );
}
