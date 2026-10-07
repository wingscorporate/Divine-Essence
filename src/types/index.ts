export type ServiceInterest = 'Product Supplier' | 'Shipping Partner' | 'Both Services';

export interface CalculatorState {
  productCost: number;
  sellingPrice: number;
  shippingCost: number;
  rtoPercentage: number;
  advertisingCost: number;
  packagingCost: number;
  codCharges: number;
  otherCost: number;
  monthlyOrders: number;
}

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  businessName: string;
  storeUrl: string;
  monthlyOrders: string;
  productCategory: string;
  currentShippingCost: string;
  serviceInterest: ServiceInterest;
  message: string;
}

export interface LogisticsPartner {
  id: string;
  name: string;
  category: 'Courier' | 'Surface & Cargo' | 'Express Air' | 'Hyperlocal' | 'Tech & Aggregator' | 'Postal';
  tag?: string;
  highlight?: string;
}
