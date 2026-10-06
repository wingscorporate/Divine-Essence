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
  { name: 'FedEx India', src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/FedEx_Corporation_logo.svg' },
  { name: 'Gati', src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Gati_Logo_SVG.svg' },
  { name: 'Safexpress', src: 'https://www.safexpress.com/assets/images/new-logo-black.png' },
  { name: 'TCI Express', src: 'https://www.hindnath.com/images/HIndnath-Media/LOGOS/TCIExpress.png' },
  { name: 'The Professional Couriers', src: 'https://www.tpcindia.com/images/dashboard_logo.png' },
  { name: 'Trackon Couriers', src: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Trackon_logo.jpg' },
  { name: 'Shree Maruti Courier', src: 'https://parsers.vc/logo/eac9026b-0b54-4ffd-bc08-3fe9100e9030-1.png' },
  { name: 'Shree Tirupati Courier', src: 'https://ecouriertracking.com/wp-content/uploads/2021/06/TCS-logo.jpg' },
  { name: 'Aramex India', src: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Aramex_logo.svg' },
  { name: 'Mahindra Logistics', src: 'https://upload.wikimedia.org/wikipedia/commons/7/70/MAHINDRA_LOGISTICS_LOGO.jpg' },
  { name: 'TVS Supply Chain Solutions', src: 'https://storage.googleapis.com/5paisa-prod-storage/files/2023-08/tvs-supply-chain-ipo.png' },
  { name: 'Allcargo Logistics', src: 'https://www.allcargologistics.com/assets/images/Allcargo-Logistics-logo.png' },
  { name: 'VRL Logistics', src: 'https://images.assettype.com/fortune-india/import/company/logos/VRL%20Logistics%20Ltd.png' },
  { name: 'CJ Darcl Logistics', src: 'https://images.assettype.com/fortune-india/import/company/logos/CJ%20DARCL%20Logistics%20Ltd.png' },
  { name: 'Kerry Indev Logistics', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Kerry_Logistics_LOGO_%28high_res%29_%28transparent%29.png' },
  { name: 'Snowman Logistics', src: 'https://www.equitybulls.com/equitybullsadmin/uploads/Snowman%20Logistics%20Limited%20Logo%202.jpg' },
  { name: 'Transport Corporation of India (TCI)', src: 'https://companieslogo.com/img/orig/TCI.NS_BIG-5f62392c.png?t=1720244494' },
  { name: 'DHL Supply Chain India', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/DHL_Supply_Chain_logo.png' },
  { name: 'UPS India', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/United_Parcel_Service_logo_2014.svg' },
  { name: 'DB Schenker India', src: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/DB_Schenker_logo.svg' },
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
