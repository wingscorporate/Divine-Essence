import React, { useState } from 'react';
import {
  Calculator,
  RotateCcw,
  TrendingUp,
  DollarSign,
  Package,
  Truck,
  Sparkles,
  Info,
  HelpCircle,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { DEFAULT_CALCULATOR_VALUES, PRODUCT_PRESETS, ProductPreset } from '../data/calculatorDefaults';
import { CalculatorState } from '../types';

interface ProfitCalculatorProps {
  onStartWithConfig: (notes: string) => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ onStartWithConfig }) => {
  const [values, setValues] = useState<CalculatorState>(DEFAULT_CALCULATOR_VALUES);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [showAdvancedInputs, setShowAdvancedInputs] = useState(false);

  const handleInputChange = (field: keyof CalculatorState, val: string | number) => {
    const num = typeof val === 'number' ? val : parseFloat(val) || 0;
    setValues((prev) => ({
      ...prev,
      [field]: Math.max(0, num),
    }));
    setActivePreset(null);
  };

  const applyPreset = (preset: ProductPreset) => {
    setValues({
      productCost: preset.productCost,
      sellingPrice: preset.sellingPrice,
      shippingCost: preset.shippingCost,
      advertisingCost: preset.advertisingCost,
      packagingCost: preset.packagingCost,
      codCharges: preset.codCharges,
      otherCost: preset.otherCost,
      monthlyOrders: values.monthlyOrders,
    });
    setActivePreset(preset.name);
  };

  const handleReset = () => {
    setValues(DEFAULT_CALCULATOR_VALUES);
    setActivePreset(null);
  };

  // Calculations
  const totalCostPerOrder =
    values.productCost +
    values.shippingCost +
    values.advertisingCost +
    values.packagingCost +
    values.codCharges +
    values.otherCost;

  const estimatedProfitPerOrder = values.sellingPrice - totalCostPerOrder;
  const profitMarginPercent =
    values.sellingPrice > 0
      ? (estimatedProfitPerOrder / values.sellingPrice) * 100
      : 0;

  // Monthly Volume Projections
  const monthlyRevenue = values.sellingPrice * values.monthlyOrders;
  const monthlyProductCost = values.productCost * values.monthlyOrders;
  const monthlyShippingCost = values.shippingCost * values.monthlyOrders;
  const monthlyAdCost = values.advertisingCost * values.monthlyOrders;
  const monthlyTotalExpenses = totalCostPerOrder * values.monthlyOrders;
  const monthlyGrossProfit = estimatedProfitPerOrder * values.monthlyOrders;

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#F7F9FC] border-y border-[#EEF2F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEF5FF] text-[#2457D6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Unit Economics
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#152033] tracking-tight mb-4">
            Calculate Your Potential Profit
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            See how sourcing and shipping costs can affect your unit economics.
          </p>
        </div>

        {/* Preset Selector Chips */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-[#667085] font-medium mr-1 hidden sm:inline">Quick Scenarios:</span>
          {PRODUCT_PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className={`px-3 py-1.5 rounded-lg border font-medium transition-all duration-150 cursor-pointer ${
                activePreset === preset.name
                  ? 'bg-[#2457D6] text-white border-[#2457D6] shadow-xs'
                  : 'bg-white text-[#152033] border-[#E2E8F0] hover:border-[#2457D6] hover:bg-[#EEF5FF]'
              }`}
            >
              {preset.name} (₹{preset.sellingPrice})
            </button>
          ))}
          <button
            onClick={handleReset}
            className="px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[#667085] hover:text-[#152033] hover:bg-[#F1F5F9] transition-colors flex items-center gap-1 cursor-pointer"
            title="Reset to defaults"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        {/* Main Grid: Inputs on Left, Results on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Inputs Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9] mb-6">
              <h3 className="text-lg font-bold text-[#152033]">
                Unit Order Inputs
              </h3>
              <span className="text-xs text-[#667085]">All values in INR (₹)</span>
            </div>

            <div className="space-y-5">
              {/* Selling Price */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="sellingPrice" className="text-xs font-semibold text-[#152033] flex items-center gap-1.5">
                    Selling Price (Buyer Retail Price)
                  </label>
                  <span className="text-xs font-bold text-[#2457D6]">₹{values.sellingPrice}</span>
                </div>
                <div className="relative rounded-lg shadow-2xs">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#667085] text-sm">₹</span>
                  <input
                    id="sellingPrice"
                    type="number"
                    min="1"
                    step="10"
                    value={values.sellingPrice}
                    onChange={(e) => handleInputChange('sellingPrice', e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 text-sm font-semibold rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#2457D6] focus:border-[#2457D6] text-[#152033]"
                  />
                </div>
                <input
                  type="range"
                  min="200"
                  max="2500"
                  step="20"
                  value={values.sellingPrice}
                  onChange={(e) => handleInputChange('sellingPrice', e.target.value)}
                  className="w-full h-1.5 bg-[#EEF2F6] rounded-lg appearance-none cursor-pointer accent-[#2457D6] mt-2"
                />
              </div>

              {/* Product Cost */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="productCost" className="text-xs font-semibold text-[#152033]">
                    Product Cost (Supplier Sourcing)
                  </label>
                  <span className="text-xs font-bold text-[#152033]">₹{values.productCost}</span>
                </div>
                <div className="relative rounded-lg shadow-2xs">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#667085] text-sm">₹</span>
                  <input
                    id="productCost"
                    type="number"
                    min="1"
                    step="5"
                    value={values.productCost}
                    onChange={(e) => handleInputChange('productCost', e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 text-sm font-semibold rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#2457D6] focus:border-[#2457D6] text-[#152033]"
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#667085] mt-1">
                  <span>Divine Sourcing typical range: ₹80–₹200</span>
                  <span className="font-semibold text-[#2457D6]">{Math.round((values.productCost / (values.sellingPrice || 1)) * 100)}% of price</span>
                </div>
              </div>

              {/* Shipping Cost */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="shippingCost" className="text-xs font-semibold text-[#152033]">
                    Shipping Cost (Pan India Courier)
                  </label>
                  <span className="text-xs font-bold text-[#2457D6]">₹{values.shippingCost}</span>
                </div>
                <div className="relative rounded-lg shadow-2xs">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#667085] text-sm">₹</span>
                  <input
                    id="shippingCost"
                    type="number"
                    min="0"
                    step="1"
                    value={values.shippingCost}
                    onChange={(e) => handleInputChange('shippingCost', e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 text-sm font-semibold rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#2457D6] focus:border-[#2457D6] text-[#152033]"
                  />
                </div>
                <p className="text-[11px] text-[#16A36A] mt-1 font-medium">
                  Divine Essence shipping starts from ₹59 Pan India under applicable plans.
                </p>
              </div>

              {/* Advertising Cost Per Order */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="adCost" className="text-xs font-semibold text-[#152033]">
                    Advertising Cost Per Order (Meta / Google / Ads CPP)
                  </label>
                  <span className="text-xs font-bold text-[#152033]">₹{values.advertisingCost}</span>
                </div>
                <div className="relative rounded-lg shadow-2xs">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#667085] text-sm">₹</span>
                  <input
                    id="adCost"
                    type="number"
                    min="0"
                    step="10"
                    value={values.advertisingCost}
                    onChange={(e) => handleInputChange('advertisingCost', e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 text-sm font-semibold rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#2457D6] focus:border-[#2457D6] text-[#152033]"
                  />
                </div>
              </div>

              {/* Packaging / Misc Cost */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="packagingCost" className="text-xs font-semibold text-[#152033]">
                    Packaging / Miscellaneous Cost
                  </label>
                  <span className="text-xs font-bold text-[#152033]">₹{values.packagingCost}</span>
                </div>
                <div className="relative rounded-lg shadow-2xs">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#667085] text-sm">₹</span>
                  <input
                    id="packagingCost"
                    type="number"
                    min="0"
                    step="5"
                    value={values.packagingCost}
                    onChange={(e) => handleInputChange('packagingCost', e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 text-sm font-semibold rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#2457D6] focus:border-[#2457D6] text-[#152033]"
                  />
                </div>
              </div>

              {/* Expandable Advanced Fees: Payment / COD & Other Cost */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowAdvancedInputs(!showAdvancedInputs)}
                  className="text-xs font-semibold text-[#2457D6] hover:text-[#1d46b0] flex items-center gap-1 py-1 cursor-pointer"
                >
                  <span>{showAdvancedInputs ? 'Hide' : 'Show'} Payment / COD & Other Costs</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAdvancedInputs ? 'rotate-180' : ''}`} />
                </button>

                {showAdvancedInputs && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 pt-3 border-t border-[#F1F5F9]">
                    <div>
                      <label htmlFor="codCharges" className="block text-xs font-semibold text-[#152033] mb-1">
                        Payment / COD Charges
                      </label>
                      <div className="relative rounded-lg shadow-2xs">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#667085] text-sm">₹</span>
                        <input
                          id="codCharges"
                          type="number"
                          min="0"
                          value={values.codCharges}
                          onChange={(e) => handleInputChange('codCharges', e.target.value)}
                          className="w-full pl-8 pr-3 py-2 text-sm rounded-lg border border-[#CBD5E1] text-[#152033]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="otherCost" className="block text-xs font-semibold text-[#152033] mb-1">
                        Other Cost
                      </label>
                      <div className="relative rounded-lg shadow-2xs">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#667085] text-sm">₹</span>
                        <input
                          id="otherCost"
                          type="number"
                          min="0"
                          value={values.otherCost}
                          onChange={(e) => handleInputChange('otherCost', e.target.value)}
                          className="w-full pl-8 pr-3 py-2 text-sm rounded-lg border border-[#CBD5E1] text-[#152033]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Volume Slider: Monthly Orders */}
              <div className="pt-4 border-t border-[#F1F5F9]">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="monthlyOrders" className="text-xs font-bold text-[#152033]">
                    Estimated Monthly Orders
                  </label>
                  <span className="text-sm font-extrabold text-[#2457D6] bg-[#EEF5FF] px-2.5 py-0.5 rounded-md">
                    {values.monthlyOrders} orders / month
                  </span>
                </div>
                <input
                  id="monthlyOrders"
                  type="range"
                  min="20"
                  max="2000"
                  step="10"
                  value={values.monthlyOrders}
                  onChange={(e) => handleInputChange('monthlyOrders', e.target.value)}
                  className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2457D6]"
                />
                <div className="flex justify-between text-[11px] text-[#667085] mt-1">
                  <span>20 orders (Getting Started)</span>
                  <span>500 orders</span>
                  <span>2,000+ orders (Scale)</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Results Cards & Volume Projections */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Order Result Card */}
            <div className="bg-white rounded-2xl border-2 border-[#2457D6]/20 p-6 sm:p-7 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F1F5F9]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                  Unit Economics Breakdown
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF8F1] text-[#16A36A]">
                  Per Order
                </span>
              </div>

              {/* Highlight summary matching prompt example */}
              <div className="space-y-2 text-xs mb-5">
                <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                  <span className="text-[#667085]">Selling Price:</span>
                  <span className="font-semibold text-[#152033]">₹{values.sellingPrice}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                  <span className="text-[#667085]">Product Cost:</span>
                  <span className="font-semibold text-[#152033]">₹{values.productCost}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                  <span className="text-[#667085]">Shipping:</span>
                  <span className="font-semibold text-[#152033]">₹{values.shippingCost}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                  <span className="text-[#667085]">Ads:</span>
                  <span className="font-semibold text-[#152033]">₹{values.advertisingCost}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                  <span className="text-[#667085]">Packaging:</span>
                  <span className="font-semibold text-[#152033]">₹{values.packagingCost}</span>
                </div>
                {values.codCharges > 0 && (
                  <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                    <span className="text-[#667085]">Payment/COD:</span>
                    <span className="font-semibold text-[#152033]">₹{values.codCharges}</span>
                  </div>
                )}
                {values.otherCost > 0 && (
                  <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                    <span className="text-[#667085]">Other:</span>
                    <span className="font-semibold text-[#152033]">₹{values.otherCost}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 text-sm font-bold text-[#152033] border-t border-[#EEF2F6]">
                  <span>Total Estimated Cost:</span>
                  <span>₹{totalCostPerOrder}</span>
                </div>
              </div>

              {/* Big Profit Per Order Highlight */}
              <div className="bg-[#EAF8F1] rounded-xl p-4 border border-[#C6F0D9] text-center mb-4">
                <span className="text-xs font-semibold text-[#16A36A] uppercase tracking-wider block mb-0.5">
                  Estimated Profit Per Order
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#16A36A] tracking-tight">
                  ₹{estimatedProfitPerOrder.toLocaleString('en-IN')}
                </div>
                <span className="text-xs font-bold text-[#16A36A] mt-1 inline-block">
                  {profitMarginPercent.toFixed(1)}% Profit Margin
                </span>
              </div>

              {/* Order Volume Multiplier */}
              <div className="bg-[#F7F9FC] rounded-xl p-4 border border-[#E9EFF6]">
                <div className="text-xs text-[#667085] mb-1">
                  Potential profit for {values.monthlyOrders} orders:
                </div>
                <div className="text-2xl font-black text-[#152033]">
                  {formatINR(monthlyGrossProfit)}
                </div>
                <div className="text-[11px] text-[#667085] mt-1">
                  Monthly gross profit projection based on selected inputs
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={() =>
                    onStartWithConfig(
                      `Target: ${values.monthlyOrders} orders/mo, Selling @ ₹${values.sellingPrice}, Sourcing @ ₹${values.productCost}, Shipping @ ₹${values.shippingCost}`
                    )
                  }
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-[#2457D6] hover:bg-[#1d46b0] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lock In These Margins With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Monthly Volume Projections Summary Table */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs">
              <h4 className="text-sm font-bold text-[#152033] mb-3 pb-2 border-b border-[#F1F5F9]">
                Monthly Projection ({values.monthlyOrders} Orders)
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#667085]">
                  <span>Total Gross Revenue</span>
                  <span className="font-bold text-[#152033]">{formatINR(monthlyRevenue)}</span>
                </div>
                <div className="flex justify-between text-[#667085]">
                  <span>Total Product Cost</span>
                  <span className="font-semibold text-[#152033]">{formatINR(monthlyProductCost)}</span>
                </div>
                <div className="flex justify-between text-[#667085]">
                  <span>Total Shipping Cost</span>
                  <span className="font-semibold text-[#152033]">{formatINR(monthlyShippingCost)}</span>
                </div>
                <div className="flex justify-between text-[#667085]">
                  <span>Total Advertising Cost</span>
                  <span className="font-semibold text-[#152033]">{formatINR(monthlyAdCost)}</span>
                </div>
                <div className="flex justify-between text-[#667085] pt-1 border-t border-[#F8FAFC]">
                  <span>Total Estimated Expenses</span>
                  <span className="font-bold text-[#152033]">{formatINR(monthlyTotalExpenses)}</span>
                </div>
                <div className="flex justify-between text-[#16A36A] pt-2 text-sm font-extrabold border-t border-[#EEF2F6]">
                  <span>Estimated Gross Profit</span>
                  <span>{formatINR(monthlyGrossProfit)}</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-[#667085]">
                  <span>Estimated Profit Margin</span>
                  <span>{profitMarginPercent.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Calculator Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-3 text-xs text-[#667085] leading-relaxed shadow-2xs">
          <Info className="w-4 h-4 text-[#2457D6] shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> The calculator provides illustrative estimates only. Actual margins depend on advertising performance, COD/RTO, taxes, payment fees, product selection, refunds and other business costs.
          </p>
        </div>
      </div>
    </section>
  );
};
