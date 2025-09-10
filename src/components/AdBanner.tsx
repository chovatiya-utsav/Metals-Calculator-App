import React, { useEffect } from "react";

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
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.warn("AdSense initialization failed:", error);
    }
  }, [adSlot]); // run again if slot changes

  return (
    <div className={`ad-banner ${className} ad-sens-main-div w-full max-w-full overflow-hidden`}>
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
    </div>
  );
};

export default AdBanner;
