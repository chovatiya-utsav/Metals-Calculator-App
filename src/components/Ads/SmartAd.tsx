import { useEffect, useRef, useState } from "react";
import GoogleAd from "./GoogleAd";
import FallbackAd from "./FallbackAd";

interface SmartAdProps {
  slot: string;
}

export default function SmartAd({ slot }: SmartAdProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const [showGoogle, setShowGoogle] = useState(true);
  const [showMedia, setShowMedia] = useState(false);
  const [showAdsterra, setShowAdsterra] = useState(false);
  const [showHilltopads, setShowHilltopads] = useState(false);

  // Handle Google Ad failure callback - skip directly to HilltopAds
  const handleGoogleAdFailed = () => {
    setShowGoogle(false);
    setShowMedia(false);
    setShowAdsterra(false);
    setShowHilltopads(true);
  };

  // Check if Google Ad actually loaded - immediate check
  useEffect(() => {
    // Immediate check - if GoogleAd returns null, it means it failed
    const immediateCheck = setTimeout(() => {
      if (showGoogle && adRef.current) {
        const googleAdElement = adRef.current.querySelector('.adsbygoogle');
        if (!googleAdElement) {
          // GoogleAd returned null (failed or placeholder) - skip to HilltopAds immediately
          setShowGoogle(false);
          setShowMedia(false);
          setShowAdsterra(false);
          setShowHilltopads(true);
        }
      }
    }, 100);

    // Delayed check for actual ad content
    const timer = setTimeout(() => {
      if (showGoogle && adRef.current) {
        const googleAdElement = adRef.current.querySelector('.adsbygoogle');
        if (googleAdElement) {
          // Check if ad has actual content
          const status = googleAdElement.getAttribute('data-adsbygoogle-status');
          const hasContent = googleAdElement.children.length > 0 || 
                           googleAdElement.innerHTML.trim().length > 0 ||
                           googleAdElement.offsetHeight > 50;
          
          if (status === 'error' || status === 'unfilled' || (!hasContent && status === 'done')) {
            // Google Ad failed - skip to HilltopAds
            setShowGoogle(false);
            setShowMedia(false);
            setShowAdsterra(false);
            setShowHilltopads(true);
          }
        } else {
          // No Google Ad element found - skip to HilltopAds
          setShowGoogle(false);
          setShowMedia(false);
          setShowAdsterra(false);
          setShowHilltopads(true);
        }
      }
    }, 2500);

    return () => {
      clearTimeout(immediateCheck);
      clearTimeout(timer);
    };
  }, [showGoogle]);

  // Check Media.net ad
  useEffect(() => {
    if (showMedia && !showGoogle) {
      const timer = setTimeout(() => {
        if (adRef.current) {
          const mediaAdElement = adRef.current.querySelector('[id*="media"], [class*="media"]');
          const height = adRef.current.clientHeight;
          
          // Media.net ads usually create elements with specific IDs
          // If no height and no media element, it failed
          if (height < 40 && !mediaAdElement) {
            setShowMedia(false);
            setShowAdsterra(true);
          }
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showGoogle, showMedia]);

  // Check Adsterra ad
  useEffect(() => {
    if (showAdsterra && !showGoogle && !showMedia) {
      const timer = setTimeout(() => {
        if (adRef.current) {
          const adsterraElement = adRef.current.querySelector('[id*="adsterra"], [class*="adsterra"]');
          const height = adRef.current.clientHeight;
          
          if (height < 40 && !adsterraElement) {
            setShowAdsterra(false);
            setShowHilltopads(true);
          }
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showGoogle, showMedia, showAdsterra]);

  // Fallback to HilltopAds if all others fail
  useEffect(() => {
    if (!showGoogle && !showMedia && !showAdsterra) {
      setShowHilltopads(true);
    }
  }, [showGoogle, showMedia, showAdsterra]);

  return (
    <div ref={adRef} style={{ minHeight: '90px' }}>
      {showGoogle ? (
        <GoogleAd slot={slot} onAdFailed={handleGoogleAdFailed} />
      ) : showMedia ? (
        <FallbackAd type="media" />
      ) : showAdsterra ? (
        <FallbackAd type="adsterra" />
      ) : showHilltopads ? (
        <FallbackAd type="hilltopads" />
      ) : (
        // Final fallback - always show HilltopAds
        <FallbackAd type="hilltopads" />
      )}
    </div>
  );
}

