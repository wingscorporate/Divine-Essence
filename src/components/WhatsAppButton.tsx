import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';

interface WhatsAppButtonProps {
  defaultPhone?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  defaultPhone = '919230554211', // Configured user number: 92305 54211 (+91)
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState(
    'Hi Divine Essence team, I want to learn more about your product supply and shipping services for my online store.'
  );

  const quickMessages = [
    'I want to enquire about Product Sourcing (approx ₹80–₹200 range).',
    'I want to enquire about Pan India Shipping (starting ₹59 & ₹0 RTO).',
    'I want to use both Sourcing & Shipping for my D2C brand.',
  ];

  const handleSendMessage = (msgToSend?: string) => {
    const text = encodeURIComponent(msgToSend || userMessage);
    const whatsappUrl = `https://wa.me/${defaultPhone}?text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40 group">
        {/* Tooltip on hover for desktop */}
        <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#152033] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none shadow-md">
          Chat With Divine Essence (+91 92305 54211)
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-[#152033]" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 cursor-pointer"
          aria-label="Chat With Divine Essence on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white fill-white" />
          )}
        </button>
      </div>

      {/* Interactive Popup Modal for WhatsApp */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#128C7E] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                DE
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Divine Essence Support</h4>
                <p className="text-[11px] text-white/90 font-medium">+91 92305 54211 · Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#EFEAE2]/30 max-h-[380px] overflow-y-auto">
            {/* Incoming message bubble */}
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-2xs text-xs text-[#152033] border border-[#E2E8F0] leading-relaxed">
              👋 Hello! How can our sourcing and logistics team assist your e-commerce business today?
            </div>

            {/* Quick choices */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-[#667085] block">Quick Questions:</span>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(msg)}
                  className="w-full text-left text-xs p-2.5 rounded-lg bg-white hover:bg-[#EEF5FF] hover:text-[#2457D6] border border-[#E2E8F0] transition-colors flex items-center justify-between text-[#152033]"
                >
                  <span className="line-clamp-1">{msg}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-1.5 text-[#667085]" />
                </button>
              ))}
            </div>

            {/* Custom input */}
            <div className="pt-2">
              <textarea
                rows={2}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-2.5 text-xs rounded-xl border border-[#CBD5E1] bg-white text-[#152033] focus:ring-1 focus:ring-[#128C7E] focus:border-[#128C7E]"
              />
            </div>

            <button
              onClick={() => handleSendMessage()}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20BD5A] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Open WhatsApp Chat</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
