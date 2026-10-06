import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenContact: (service?: 'Product Supplier' | 'Shipping Partner' | 'Both Services') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
      
      const sections = ['home', 'supplier', 'shipping', 'calculator', 'partners', 'how-it-works', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Supplier', href: '#supplier' },
    { label: 'Shipping', href: '#shipping' },
    { label: 'Profit Calculator', href: '#calculator' },
    { label: 'Shipping Partners', href: '#partners' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#EEF2F6]'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Logo */}
          <a
            href="#home"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457D6] rounded-md"
            aria-label="Divine Essence Home"
          >
            <BrandLogo className="h-14 sm:h-16 w-auto" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#667085]">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors duration-150 hover:text-[#152033] py-2 relative ${
                    isActive ? 'text-[#2457D6] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2457D6] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right-side CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919230554211?text=Hi%20Divine%20Essence%2C%20I%20want%20to%20talk%20to%20your%20team%20about%20e-commerce%20sourcing%20and%20shipping"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs md:text-sm font-medium text-[#152033] hover:text-[#2457D6] hover:bg-[#F7F9FC] border border-[#E2E8F0] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#2457D6]" />
              <span>Talk to Our Team</span>
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onOpenContact('Both Services');
              }}
              className="px-4 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#2457D6] hover:bg-[#1d46b0] active:bg-[#17388e] rounded-lg shadow-sm transition-all duration-150 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#2457D6] focus:ring-offset-2"
            >
              <span>Start Your Business</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenContact('Both Services')}
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-[#2457D6] rounded-md"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#152033] hover:bg-[#F7F9FC] focus:outline-none focus:ring-2 focus:ring-[#2457D6]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EEF2F6] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#F1F5F9]">
            <BrandLogo className="h-11 w-auto" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-[#667085] hover:text-[#152033]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-sm font-medium text-[#152033] hover:bg-[#F7F9FC] hover:text-[#2457D6] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#F1F5F9] flex flex-col gap-2">
            <a
              href="https://wa.me/919230554211?text=Hi%20Divine%20Essence%2C%20I%20want%20to%20talk%20to%20your%20team"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-sm font-medium text-[#152033] bg-[#F7F9FC] hover:bg-[#EEF5FF] border border-[#E2E8F0] rounded-lg text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#2457D6]" />
              Talk to Our Team (+91 92305 54211)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onOpenContact('Both Services');
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#2457D6] hover:bg-[#1d46b0] rounded-lg text-center shadow-xs flex items-center justify-center gap-2"
            >
              Start Your Business
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
