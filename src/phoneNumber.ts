// ============================================================
//  CENTRAL PHONE NUMBER CONFIG
// ============================================================
//  Change the number ONLY here and it updates across the whole website.
//
//  PHONE_NUMBER_DIGITS : digits only, with country code (used in wa.me links)
//  PHONE_NUMBER_DISPLAY: human-readable format (shown in the UI text)
// ============================================================

// Digits only, including country code — no spaces, "+", or dashes.
export const PHONE_NUMBER_DIGITS = '918016787121';

// Display format shown to users across the website.
export const PHONE_NUMBER_DISPLAY = '+91 80167 87121';

// Pre-built WhatsApp base URL for convenience.
export const WHATSAPP_BASE_URL = `https://wa.me/${PHONE_NUMBER_DIGITS}`;

// Build a WhatsApp deep link with a pre-filled message.
export const getWhatsAppUrl = (message: string) =>
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
