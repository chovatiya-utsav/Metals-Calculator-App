import React from "react";
import GoogleAd from "./Ads/GoogleAd";

interface AdBannerProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  fullWidthResponsive?: boolean;
  className?: string;
}

/**
 * AdBanner component - Wrapper around GoogleAd for backward compatibility
 * This component now uses the new GoogleAd component with automatic fallback support
 */
const AdBanner: React.FC<AdBannerProps> = ({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
}) => {
  return (
    <GoogleAd
      adSlot={adSlot}
      adFormat={adFormat}
      fullWidthResponsive={fullWidthResponsive}
      className={className}
    />
  );
};

export default AdBanner;
