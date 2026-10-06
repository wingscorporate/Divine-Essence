import React, { useState } from 'react';
import brandLogo from '../brandlogo-transparent.png';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  lightBackground?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-10 w-auto',
  showText = false,
  lightBackground = true,
}) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center text-white font-bold text-lg shadow-sm">
          DE
        </div>
        <div>
          <span className={`font-bold tracking-tight text-lg ${lightBackground ? 'text-[#152033]' : 'text-white'}`}>
            DIVINE ESSENCE
          </span>
          <span className="block text-[10px] tracking-wider uppercase text-[#667085] font-medium">
            Sourcing & Logistics
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <img
        src={brandLogo}
        alt="Divine Essence"
        className={`object-contain transition-transform duration-200 ${className}`}
        onError={() => setImageError(true)}
      />
      {showText && (
        <span className={`font-bold tracking-tight text-lg hidden sm:inline ${lightBackground ? 'text-[#152033]' : 'text-white'}`}>
          DIVINE ESSENCE
        </span>
      )}
    </div>
  );
};
