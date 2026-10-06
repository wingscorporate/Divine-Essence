export interface FAQItem {
  id: string;
  category: 'Service Model' | 'Shipping & RTO' | 'Product Sourcing' | 'Pricing & Margins';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Service Model',
    question: 'Can I take only your product supply service?',
    answer: 'Yes. Customers can use product sourcing without using the Divine Essence shipping service. You are completely free to utilize our supplier network while dispatching orders via your own courier partner or warehousing setup.'
  },
  {
    id: 'faq-2',
    category: 'Service Model',
    question: 'Can I use only the shipping service?',
    answer: 'Yes. You can use Divine Essence only as your shipping/logistics partner. If you already have your own manufacturers, imported inventory, or local suppliers, you can connect your store directly to our Pan India logistics and courier network.'
  },
  {
    id: 'faq-3',
    category: 'Shipping & RTO',
    question: 'How much does shipping cost?',
    answer: 'Selected shipping plans can start around ₹59 for Pan India shipments. Final rates can vary according to shipment weight, location, courier, COD requirements and service plan.'
  },
  {
    id: 'faq-4',
    category: 'Shipping & RTO',
    question: 'Is RTO really ₹0?',
    answer: 'Applicable plans may provide ₹0 RTO shipping cost. Terms and eligibility should be confirmed before onboarding to match your order volume, return thresholds, and chosen plan structure.'
  },
  {
    id: 'faq-5',
    category: 'Product Sourcing',
    question: 'How much do your products cost?',
    answer: 'Selected products may generally fall around the ₹80–₹200 sourcing range, depending on the product, order quantity, category specifications, and packaging customization.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & Margins',
    question: 'Can I sell the products for ₹799–₹1,200?',
    answer: 'That may be possible for certain products depending on branding, demand, marketing, competition and offer positioning. Divine Essence does not guarantee selling prices or profits, as commercial performance depends on your independent store strategy.'
  },
  {
    id: 'faq-7',
    category: 'Product Sourcing',
    question: 'Where can I see the product catalogue?',
    answer: 'Winning products are not publicly displayed on the website. Relevant product opportunities are shared with eligible sellers directly. This protects your market edge and prevents saturation.'
  },
  {
    id: 'faq-8',
    category: 'Shipping & RTO',
    question: 'Do you ship across India?',
    answer: 'Shipping services are intended for Pan India coverage, subject to courier serviceability and PIN code availability across 28 states and union territories.'
  },
  {
    id: 'faq-9',
    category: 'Shipping & RTO',
    question: 'Which courier companies are available?',
    answer: 'Shipping may be routed through multiple supported courier, logistics and aggregation networks depending on serviceability and the applicable plan.'
  }
];
