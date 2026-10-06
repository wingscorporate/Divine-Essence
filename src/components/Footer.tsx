import React from 'react';
import { BrandLogo } from './BrandLogo';
import { LegalDocType } from './LegalModal';
import { PhoneCall, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onNavigateTo }) => {
  return (
    <footer className="bg-[#152033] text-white pt-16 pb-12 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#243247]">
          {/* Col 1 & 2: Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 p-2 rounded-xl inline-block">
              <BrandLogo className="h-14 w-auto brightness-110" lightBackground={false} />
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Helping Indian online sellers access better sourcing and smarter shipping solutions.
            </p>

            <div className="space-y-2.5 text-xs text-[#94A3B8] pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2457D6]" />
                <span>Pan India Fulfilment & Sourcing Network</span>
              </div>
              <a
                href="https://wa.me/919230554211?text=Hi%20Divine%20Essence%2C%20I%20want%20to%20learn%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +91 92305 54211</span>
              </a>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#2457D6]" />
                <span>Call: +91 92305 54211</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2457D6]" />
                <span>support@divineessence.in</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <button
                  onClick={() => onNavigateTo('supplier')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Product Supply
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('shipping')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shipping Partner
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('calculator')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Profit Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Seller Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <button
                  onClick={() => onNavigateTo('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('partners')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Courier Network
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('shipping')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Shipping Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('disclaimer')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© Divine Essence. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>B2B Supply & Logistics Ecosystem</span>
            <span aria-hidden="true">·</span>
            <span>Made for Indian E-Commerce</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
