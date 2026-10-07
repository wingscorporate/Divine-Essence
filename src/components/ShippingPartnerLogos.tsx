import React from 'react';

import delhiveryLogo from '../assets/shipping-logos/delhivery.png';
import blueDartLogo from '../assets/shipping-logos/blue-dart.png';
import xpressbeesLogo from '../assets/shipping-logos/xpressbees.png';
import ecomExpressLogo from '../assets/shipping-logos/ecom-express.png';
import dtdcLogo from '../assets/shipping-logos/dtdc.webp';
import ekartLogo from '../assets/shipping-logos/ekart.png';
import shadowfaxLogo from '../assets/shipping-logos/shadowfax.svg';
import indiaPostLogo from '../assets/shipping-logos/india-post.svg';
import amazonShippingLogo from '../assets/shipping-logos/amazon-shipping.svg';
import dhlExpressLogo from '../assets/shipping-logos/dhl-express.svg';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        behavior?: string;
        direction?: string;
        scrollamount?: string;
      };
    }
  }
}

const shippingLogos = [
  { name: 'Delhivery', src: delhiveryLogo },
  { name: 'Blue Dart', src: blueDartLogo },
  { name: 'Xpressbees', src: xpressbeesLogo },
  { name: 'Ecom Express', src: ecomExpressLogo },
  { name: 'DTDC', src: dtdcLogo },
  { name: 'Ekart Logistics', src: ekartLogo },
  { name: 'Shadowfax', src: shadowfaxLogo },
  { name: 'India Post', src: indiaPostLogo },
  { name: 'Amazon Shipping', src: amazonShippingLogo },
  { name: 'DHL Express India', src: dhlExpressLogo },
];

export const ShippingPartnerLogos: React.FC = () => (
  <section id="partners" className="bg-white py-16 md:py-20" aria-labelledby="shipping-partners-heading">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        id="shipping-partners-heading"
        className="text-center text-2xl sm:text-4xl font-extrabold text-[#303E45] tracking-tight mb-10"
      >
        Our Shipping Partners
      </h2>

      <div className="overflow-hidden" aria-label="Shipping partner logos">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          <div className="inline-flex items-center whitespace-nowrap">
            {[...shippingLogos, ...shippingLogos].map((logo, index) => (
              <img
                key={`${logo.name}-${index}`}
                src={logo.src}
                alt={logo.name}
                aria-hidden={index >= shippingLogos.length}
                loading="lazy"
                decoding="async"
                className="mx-8 sm:mx-10 h-10 sm:h-[52px] w-auto max-w-[180px] object-contain align-middle"
              />
            ))}
          </div>
        </marquee>
      </div>
    </div>
  </section>
);
