import React, { useEffect, useState } from "react";
import { isAdSenseEnabled, loadAdSenseScript, initializeAd } from "../utils/adsense";

interface AdBannerProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  fullWidthResponsive?: boolean;
  className?: string;
}

// Extend window to avoid (window as any)
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdBanner: React.FC<AdBannerProps> = ({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
}) => {
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    // Load AdSense script if enabled
    loadAdSenseScript();

    if (!isAdSenseEnabled()) {
      console.log('AdSense disabled - development mode or not approved');
      return;
    }

    const loadAd = () => {
      try {
        const success = initializeAd();
        if (!success) {
          setAdError(true);
        }
      } catch (error) {
        console.warn("AdSense initialization failed:", error);
        setAdError(true);
      }
    };

    // Delay ad loading to ensure DOM and script are ready
    const timer = setTimeout(loadAd, 500);
    return () => clearTimeout(timer);
  }, [adSlot]);

  // Show placeholder in development or when AdSense is disabled
  if (!isAdSenseEnabled()) {
    return (
      <div className={`ad-banner ${className} ad-sens-main-div w-full max-w-full overflow-hidden`}>
        <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-sm">Ad Space (Development Mode)</p>
          <p className="text-gray-500 text-xs">Slot: {adSlot}</p>
          <p className="text-gray-400 text-xs mt-1">AdSense will load in production</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`ad-banner ${className} ad-sens-main-div w-full max-w-full overflow-hidden`}>
      {adError ? (
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
          <p className="text-gray-600 text-sm">Advertisement</p>
          <p className="text-gray-400 text-xs">Ad failed to load</p>
        </div>
      ) : (
        <ins
          className="adsbygoogle"
          style={{ 
            display: "block", 
            minHeight: "100px",
            width: "100%",
            maxWidth: "100%",
            overflow: "hidden"
          }}
          data-ad-client="ca-pub-8681185583405652"
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive.toString()}
        />
      )}
    </div>
  );
};

export default AdBanner;
