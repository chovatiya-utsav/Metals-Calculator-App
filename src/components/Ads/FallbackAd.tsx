import { useEffect, useRef, useState } from "react";

interface FallbackAdProps {
  type?: "media" | "adsterra" | "hilltopads";
}

// HilltopAds banner images
const HILLTOPADS_BANNERS = [
  {
    url: "https://hilltopads.com/?ref=344501",
    image: "https://static.hilltopads.com/other/banners/pub/huge_income/728x90.gif?v=1763139776",
    alt: "Huge Income - HilltopAds"
  },
  {
    url: "https://hilltopads.com/?ref=344501",
    image: "https://static.hilltopads.com/other/banners/pub/get_high_ecpm/728x90.gif?v=1763139776",
    alt: "Get High eCPM - HilltopAds"
  },
  {
    url: "https://hilltopads.com/?ref=344501",
    image: "https://static.hilltopads.com/other/banners/pub/make_big_money/728x90.gif?v=1763139776",
    alt: "Make Big Money - HilltopAds"
  }
];

export default function FallbackAd({ type = "media" }: FallbackAdProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // For HilltopAds, we only show banners - no script needed
    if (type === "hilltopads") {
      return; // Banners are displayed directly, no script loading needed
    }

    const script = document.createElement("script");

    if (type === "media") {
      script.src = "https://contextual.media.net/dmedianet.js?cid=YOUR_MEDIA_NET_ID";
    } else if (type === "adsterra") {
      script.src = "https://ads.adsterra.com/YOUR_ADSTERRA_ID.js";
    }

    script.async = true;
    
    // Add error handling to prevent 400 errors from breaking the page
    script.onerror = () => {
      // Silently handle script loading errors
      console.log(`Ad script failed to load for type: ${type}`);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [type]);

  // Rotate banners every 5 seconds for HilltopAds
  useEffect(() => {
    if (type === "hilltopads") {
      const interval = setInterval(() => {
        setBannerIndex((prev) => (prev + 1) % HILLTOPADS_BANNERS.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [type]);

  // Get current banner
  const currentBanner = HILLTOPADS_BANNERS[bannerIndex];

  return (
    <div className="w-full flex justify-center py-3">
      {type === "hilltopads" ? (
        <div 
          ref={adContainerRef}
          className="w-full max-w-[728px] h-[90px] flex items-center justify-center mx-auto"
          id="hilltopads-container"
        >
          {/* HilltopAds Script Container - Removed to prevent 400 errors */}
          {/* <div id="hilltopads-8d733eb56b3bebe9cdc4" className="hidden"></div> */}
          
          {/* HilltopAds Banner Display */}
          {!imageError ? (
            <a 
              href={currentBanner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full transition-opacity duration-500 hover:opacity-90"
              style={{ minHeight: '90px' }}
            >
              <img 
                src={currentBanner.image}
                alt={currentBanner.alt}
                className="w-full h-auto max-w-full mx-auto"
                style={{ 
                  width: '100%', 
                  maxWidth: '728px', 
                  height: 'auto',
                  minHeight: '90px',
                  objectFit: 'contain' 
                }}
                loading="lazy"
                onError={() => {
                  // Try next banner
                  const nextIndex = (bannerIndex + 1) % HILLTOPADS_BANNERS.length;
                  if (nextIndex === 0 && bannerIndex === HILLTOPADS_BANNERS.length - 1) {
                    // All banners tried, show fallback
                    setImageError(true);
                  } else {
                    // Try next banner
                    setBannerIndex(nextIndex);
                  }
                }}
              />
            </a>
          ) : (
            // Fallback display if images fail
            <div className="w-full h-full flex items-center justify-center bg-gray-100 border border-gray-300 rounded">
              <a 
                href={currentBanner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Visit HilltopAds
              </a>
            </div>
          )}
        </div>
      ) : (
        <div 
          ref={adContainerRef}
          className="border border-gray-300 rounded-md w-full max-w-[300px] h-[250px] flex items-center justify-center text-gray-500 text-sm"
        >
          Loading ads…
        </div>
      )}
    </div>
  );
}
