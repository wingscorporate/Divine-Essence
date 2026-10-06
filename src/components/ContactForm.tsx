import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Phone,
  MessageCircle,
  Mail,
  Globe,
  Package,
  Truck,
  Sparkles,
  Copy,
  Check,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { LeadFormData, ServiceInterest } from '../types';

interface ContactFormProps {
  initialService?: ServiceInterest;
  initialNotes?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = 'Both Services',
  initialNotes = '',
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    businessName: '',
    storeUrl: '',
    monthlyOrders: '100 - 500 orders',
    productCategory: 'Home & Kitchen Gadgets',
    currentShippingCost: '₹70 - ₹90',
    serviceInterest: initialService,
    message: initialNotes,
  });

  const [sameAsPhone, setSameAsPhone] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceInterest: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n${initialNotes}` : initialNotes,
      }));
    }
  }, [initialNotes]);

  const generateWhatsAppUrl = (data: LeadFormData, refId: string) => {
    const lines = [
      `*Divine Essence - Seller Onboarding [Ref: ${refId}]*`,
      `• *Name:* ${data.fullName}`,
      `• *Business Name:* ${data.businessName}`,
      `• *Phone:* ${data.phoneNumber}`,
      `• *WhatsApp:* ${data.whatsappNumber}`,
      `• *Email:* ${data.email}`,
      data.storeUrl ? `• *Store / URL:* ${data.storeUrl}` : null,
      `• *Service Interested In:* ${data.serviceInterest}`,
      `• *Monthly Volume:* ${data.monthlyOrders}`,
      `• *Product Category:* ${data.productCategory}`,
      `• *Current Shipping Cost:* ${data.currentShippingCost}`,
      data.message ? `• *Business Notes:* ${data.message}` : null,
    ].filter(Boolean);

    const message = lines.join('\n');
    return `https://wa.me/919230554211?text=${encodeURIComponent(message)}`;
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phoneNumber.trim())) {
      errs.phoneNumber = 'Enter a valid phone number (10 digits)';
    }

    if (!sameAsPhone && !formData.whatsappNumber.trim()) {
      errs.whatsappNumber = 'WhatsApp number is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address';
    }

    if (!formData.businessName.trim()) {
      errs.businessName = 'Business or store name is required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const newRefId = `DE-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(newRefId);

    const waUrl = generateWhatsAppUrl(formData, newRefId);
    setWhatsappRedirectUrl(waUrl);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      // Automatically redirect to WhatsApp in a new tab/window
      try {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        console.warn('Browser prevented automatic tab open', err);
      }
    }, 600);
  };

  const handleCopySummary = () => {
    const summary = `Divine Essence Onboarding Request [Ref: ${referenceId}]\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nBusiness: ${formData.businessName}\nService: ${formData.serviceInterest}\nOrders: ${formData.monthlyOrders}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EEF5FF] text-[#2457D6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Seller Onboarding
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#152033] tracking-tight mb-4">
            Connect With Divine Essence
          </h2>
          <p className="text-base text-[#667085]">
            Fill out your business requirements below to receive supplier rate cards, courier pricing, and seller account activation.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-lg p-6 sm:p-10">
          {submittedSuccess ? (
            <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#EAF8F1] text-[#16A36A] flex items-center justify-center mx-auto border-2 border-[#A3E6B9] shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#16A36A] uppercase tracking-wider bg-[#EAF8F1] px-3 py-1 rounded-md border border-[#C6F0D9]">
                  Enquiry Submitted Successfully
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#152033] mt-3 mb-1">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-[#667085] max-w-md mx-auto">
                  Your reference ID is <strong>{referenceId}</strong>. We are connecting you directly to our WhatsApp seller onboarding desk at <strong>+91 92305 54211</strong>.
                </p>
              </div>

              {/* WhatsApp Redirect Banner & Primary Button */}
              <div className="bg-[#E7F9EE] border-2 border-[#25D366]/40 rounded-2xl p-6 max-w-lg mx-auto shadow-xs">
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#166534] mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
                  <span>Redirecting to WhatsApp (+91 92305 54211)</span>
                </div>
                <p className="text-xs text-[#374151] mb-4">
                  If the WhatsApp chat didn't open automatically in a new window, tap the button below to continue with your pre-filled inquiry:
                </p>
                <a
                  href={whatsappRedirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-white" />
                  <span>Continue on WhatsApp (+91 92305 54211)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Summary Card */}
              <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-5 max-w-lg mx-auto text-left text-xs space-y-2">
                <div className="font-bold text-[#152033] border-b border-[#E9EFF6] pb-2 flex justify-between items-center">
                  <span>Application Summary</span>
                  <span className="text-[#2457D6] font-mono">{referenceId}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#667085]">Business Name:</span>
                  <span className="font-semibold text-[#152033]">{formData.businessName}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#667085]">Service Chosen:</span>
                  <span className="font-semibold text-[#2457D6]">{formData.serviceInterest}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#667085]">Monthly Volume:</span>
                  <span className="font-semibold text-[#152033]">{formData.monthlyOrders}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#667085]">Phone / WhatsApp:</span>
                  <span className="font-semibold text-[#152033]">{formData.phoneNumber}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleCopySummary}
                  className="px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-semibold text-[#152033] hover:bg-[#F8FAFC] flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-[#16A36A]" /> : <Copy className="w-4 h-4 text-[#667085]" />}
                  <span>{copied ? 'Summary Copied' : 'Copy Application Summary'}</span>
                </button>
                <button
                  onClick={() => {
                    setSubmittedSuccess(false);
                    setFormData((prev) => ({ ...prev, fullName: '', phoneNumber: '', email: '', businessName: '' }));
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#2457D6] text-white text-xs font-semibold hover:bg-[#1d46b0] transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-[#152033] uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative rounded-xl">
                    <User className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-white text-[#152033] transition-colors ${
                        errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-[#CBD5E1] focus:ring-[#2457D6] focus:border-[#2457D6]'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-xs font-bold text-[#152033] uppercase tracking-wider mb-1.5">
                    Business Name *
                  </label>
                  <div className="relative rounded-xl">
                    <Building className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="businessName"
                      type="text"
                      placeholder="e.g. TrendKart Online"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-white text-[#152033] transition-colors ${
                        errors.businessName ? 'border-red-500 focus:ring-red-500' : 'border-[#CBD5E1] focus:ring-[#2457D6] focus:border-[#2457D6]'
                      }`}
                    />
                  </div>
                  {errors.businessName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-[#152033] uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative rounded-xl">
                    <Phone className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData({
                          ...formData,
                          phoneNumber: val,
                          whatsappNumber: sameAsPhone ? val : formData.whatsappNumber,
                        });
                      }}
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-white text-[#152033] transition-colors ${
                        errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-[#CBD5E1] focus:ring-[#2457D6] focus:border-[#2457D6]'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="whatsapp" className="text-xs font-bold text-[#152033] uppercase tracking-wider">
                      WhatsApp Number *
                    </label>
                    <label className="text-[11px] text-[#667085] flex items-center gap-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sameAsPhone}
                        onChange={(e) => {
                          setSameAsPhone(e.target.checked);
                          if (e.target.checked) {
                            setFormData((prev) => ({ ...prev, whatsappNumber: prev.phoneNumber }));
                          }
                        }}
                        className="rounded text-[#2457D6] focus:ring-[#2457D6] w-3.5 h-3.5"
                      />
                      Same as phone
                    </label>
                  </div>
                  <div className="relative rounded-xl">
                    <MessageCircle className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="whatsapp"
                      type="tel"
                      disabled={sameAsPhone}
                      placeholder="+91 98765 43210"
                      value={sameAsPhone ? formData.phoneNumber : formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-white text-[#152033] transition-colors ${
                        errors.whatsappNumber ? 'border-red-500 focus:ring-red-500' : 'border-[#CBD5E1] focus:ring-[#2457D6] focus:border-[#2457D6]'
                      } ${sameAsPhone ? 'bg-slate-50 text-slate-500' : ''}`}
                    />
                  </div>
                  {errors.whatsappNumber && !sameAsPhone && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.whatsappNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Email Address & Store URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#152033] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative rounded-xl">
                    <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="email"
                      type="email"
                      placeholder="seller@yourstore.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-white text-[#152033] transition-colors ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#CBD5E1] focus:ring-[#2457D6] focus:border-[#2457D6]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="storeUrl" className="block text-xs font-bold text-[#152033] uppercase tracking-wider mb-1.5">
                    Website / Store URL (Optional)
                  </label>
                  <div className="relative rounded-xl">
                    <Globe className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="storeUrl"
                      type="text"
                      placeholder="https://myshopify.com or Instagram handle"
                      value={formData.storeUrl}
                      onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#CBD5E1] bg-white text-[#152033] focus:ring-[#2457D6] focus:border-[#2457D6]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Service Interested In Dropdown */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E9EFF6]">
                <label htmlFor="serviceInterest" className="block text-xs font-bold text-[#152033] uppercase tracking-wider mb-2">
                  Service Interested In *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['Product Supplier', 'Shipping Partner', 'Both Services'] as ServiceInterest[]).map((service) => (
                    <label
                      key={service}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.serviceInterest === service
                          ? 'bg-[#EEF5FF] border-[#2457D6] text-[#2457D6] font-bold shadow-2xs'
                          : 'bg-white border-[#E2E8F0] text-[#152033] hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceInterest"
                        value={service}
                        checked={formData.serviceInterest === service}
                        onChange={() => setFormData({ ...formData, serviceInterest: service })}
                        className="text-[#2457D6] focus:ring-[#2457D6]"
                      />
                      <span className="text-xs sm:text-sm font-semibold">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 5: Monthly Orders, Category, Current Shipping */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="monthlyOrdersSelect" className="block text-xs font-bold text-[#152033] uppercase tracking-wider mb-1.5">
                    Monthly Orders
                  </label>
                  <select
                    id="monthlyOrdersSelect"
                    value={formData.monthlyOrders}
                    onChange={(e) => setFormData({ ...formData, monthlyOrders: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-[#CBD5E1] bg-white text-[#152033] focus:ring-[#2457D6] focus:border-[#2457D6]"
                  >
                    <option value="Under 50 orders (New)">Under 50 orders (New)</option>
                    <option value="50 - 200 orders">50 - 200 orders</option>
                    <option value="200 - 500 orders">200 - 500 orders</option>
                    <option value="500 - 1500 orders">500 - 1,500 orders</option>
                    <option value="1500+ orders (Enterprise)">1,500+ orders (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="productCategory" className="block text-xs font-bold text-[#152033] uppercase tracking-wider mb-1.5">
                    Current Category
                  </label>
                  <select
                    id="productCategory"
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-[#CBD5E1] bg-white text-[#152033] focus:ring-[#2457D6] focus:border-[#2457D6]"
                  >
                    <option value="Home & Kitchen Gadgets">Home & Kitchen Gadgets</option>
                    <option value="Beauty, Hair & Wellness">Beauty, Hair & Wellness</option>
                    <option value="Automotive & Bike Accessories">Automotive & Bike Accessories</option>
                    <option value="Fitness & Smart Lifestyle">Fitness & Smart Lifestyle</option>
                    <option value="Baby & Kids Products">Baby & Kids Products</option>
                    <option value="Multiple / General E-com">Multiple / General E-com</option>
                    <option value="Looking For Guidance">Looking For Guidance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="currentShippingCost" className="block text-xs font-bold text-[#152033] uppercase tracking-wider mb-1.5">
                    Current Shipping Cost
                  </label>
                  <select
                    id="currentShippingCost"
                    value={formData.currentShippingCost}
                    onChange={(e) => setFormData({ ...formData, currentShippingCost: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-[#CBD5E1] bg-white text-[#152033] focus:ring-[#2457D6] focus:border-[#2457D6]"
                  >
                    <option value="Not shipping yet">Not shipping yet</option>
                    <option value="₹90 - ₹120+ per order">₹90 - ₹120+ per order</option>
                    <option value="₹70 - ₹90 per order">₹70 - ₹90 per order</option>
                    <option value="₹60 - ₹70 per order">₹60 - ₹70 per order</option>
                    <option value="Under ₹60 per order">Under ₹60 per order</option>
                  </select>
                </div>
              </div>

              {/* Row 6: Message field */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#152033] uppercase tracking-wider mb-1.5">
                  Tell us about your current business
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Share details about what you sell, your target order volumes, current RTO pain points, or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-sm rounded-xl border border-[#CBD5E1] bg-white text-[#152033] focus:ring-[#2457D6] focus:border-[#2457D6]"
                />
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-[#2457D6] hover:bg-[#1d46b0] active:bg-[#17388e] shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Registering Seller Profile...</span>
                  ) : (
                    <>
                      <span>Get Started With Divine Essence</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-[#667085] mt-2">
                  No spam. Your store details and product niches remain confidential.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
