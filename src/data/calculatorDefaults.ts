import { CalculatorState } from '../types';

export const DEFAULT_CALCULATOR_VALUES: CalculatorState = {
  productCost: 150,
  sellingPrice: 899,
  shippingCost: 59,
  advertisingCost: 150,
  packagingCost: 20,
  codCharges: 0,
  otherCost: 0,
  monthlyOrders: 100,
};

export interface ProductPreset {
  name: string;
  category: string;
  productCost: number;
  sellingPrice: number;
  shippingCost: number;
  advertisingCost: number;
  packagingCost: number;
  codCharges: number;
  otherCost: number;
}

export const PRODUCT_PRESETS: ProductPreset[] = [
  {
    name: 'Home Utility & Smart Gadget',
    category: 'Home & Kitchen',
    productCost: 150,
    sellingPrice: 899,
    shippingCost: 59,
    advertisingCost: 150,
    packagingCost: 20,
    codCharges: 0,
    otherCost: 0,
  },
  {
    name: 'Car Ergonomic & LED Accessory',
    category: 'Automotive',
    productCost: 120,
    sellingPrice: 799,
    shippingCost: 59,
    advertisingCost: 140,
    packagingCost: 18,
    codCharges: 0,
    otherCost: 0,
  },
  {
    name: 'Personal Grooming / Beauty Device',
    category: 'Beauty & Wellness',
    productCost: 190,
    sellingPrice: 1199,
    shippingCost: 59,
    advertisingCost: 180,
    packagingCost: 25,
    codCharges: 0,
    otherCost: 0,
  },
  {
    name: 'Fitness & Posture Lifestyle Tool',
    category: 'Fitness',
    productCost: 95,
    sellingPrice: 849,
    shippingCost: 59,
    advertisingCost: 130,
    packagingCost: 15,
    codCharges: 0,
    otherCost: 0,
  },
];
