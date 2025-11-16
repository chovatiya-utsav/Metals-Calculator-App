import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface GoogleAdProps {
  slot: string;
  onAdFailed?: () => void;
}

export default function GoogleAd({ slot, onAdFailed }: GoogleAdProps) {
  const adRef = useRef<HTMLModElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    // Only initialize once
    if (isInitialized) return;

    // Check if using placeholder IDs - don't initialize if so
    const adClient = adRef.current?.getAttribute('data-ad-client');
    const adSlot = adRef.current?.getAttribute('data-ad-slot');
    
    if (adClient?.includes('YOUR_ADSENSE_ID') || adSlot === '1234567890') {
      // Using placeholder IDs - report failure immediately
      setHasFailed(true);
      onAdFailed?.();
      return;
    }

    // Check if in development mode
    if (import.meta.env.DEV || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      // In dev mode, report failure so fallback can work
      setHasFailed(true);
      onAdFailed?.();
      return;
    }

    let observer: IntersectionObserver | null = null;
    let retryTimer: ReturnType<typeof setTimeout> | null = null;

    const initializeAd = () => {
      try {
        // Check if adsbygoogle is available
        if (!window.adsbygoogle) {
          return;
        }

        // Check if ad element exists
        if (!adRef.current) {
          return;
        }

        // Check if ad is already initialized (has data-adsbygoogle-status attribute)
        if (adRef.current.hasAttribute('data-adsbygoogle-status')) {
          setIsInitialized(true);
          return;
        }

        // Check if container has width (visible)
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          if (width === 0) {
            // Container not visible yet, retry after a delay
            retryTimer = setTimeout(initializeAd, 500);
            return;
          }
        }

        // Initialize the ad
        window.adsbygoogle.push({});
        setIsInitialized(true);
        
        // Monitor ad status changes using MutationObserver
        if (adRef.current) {
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.type === 'attributes' && mutation.attributeName === 'data-adsbygoogle-status') {
                const status = adRef.current?.getAttribute('data-adsbygoogle-status');
                if (status === 'error' || status === 'unfilled') {
                  // Ad failed to load
                  setHasFailed(true);
                  onAdFailed?.();
                  observer.disconnect();
                } else if (status === 'done') {
                  // Ad loaded, check if it has content
                  setTimeout(() => {
                    if (adRef.current) {
                      const hasContent = adRef.current.children.length > 0 || 
                                        adRef.current.innerHTML.trim().length > 0 ||
                                        adRef.current.offsetHeight > 50;
                      
                      if (!hasContent) {
                        // Ad marked as done but has no content - likely failed
                        setHasFailed(true);
                        onAdFailed?.();
                      }
                      observer.disconnect();
                    }
                  }, 1000);
                }
              }
            });
          });
          
          observer.observe(adRef.current, {
            attributes: true,
            attributeFilter: ['data-adsbygoogle-status']
          });
          
          // Also check after a delay in case MutationObserver doesn't fire
          setTimeout(() => {
            if (adRef.current) {
              const status = adRef.current.getAttribute('data-adsbygoogle-status');
              if (status === 'error' || status === 'unfilled') {
                setHasFailed(true);
                onAdFailed?.();
              } else if (status === 'done') {
                const hasContent = adRef.current.children.length > 0 || 
                                  adRef.current.innerHTML.trim().length > 0 ||
                                  adRef.current.offsetHeight > 50;
                if (!hasContent) {
                  setHasFailed(true);
                  onAdFailed?.();
                }
              } else if (!status) {
                // No status after 3 seconds - likely failed
                setHasFailed(true);
                onAdFailed?.();
              }
              observer.disconnect();
            }
          }, 3000);
        }
      } catch {
        // Silently handle errors - ad blockers or other issues
        setHasFailed(true);
        onAdFailed?.();
      }
    };

    // Wait for DOM to be ready and check if element is visible
    const checkAndInit = () => {
      if (containerRef.current && containerRef.current.offsetWidth > 0) {
        initializeAd();
      } else {
        // Use Intersection Observer to detect when element becomes visible
        if (containerRef.current && 'IntersectionObserver' in window) {
          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0) {
                  initializeAd();
                  if (observer) {
                    observer.disconnect();
                    observer = null;
                  }
                }
              });
            },
            { threshold: 0.1 }
          );
          observer.observe(containerRef.current);
        } else {
          // Fallback: retry after delay
          retryTimer = setTimeout(initializeAd, 1000);
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(checkAndInit, 100);

    return () => {
      clearTimeout(timer);
      if (retryTimer) {
        clearTimeout(retryTimer);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isInitialized, onAdFailed]);

  // Check if using placeholder IDs
  const isPlaceholder = slot === '1234567890' || slot.includes('YOUR_');
  const adClientId = 'ca-pub-YOUR_ADSENSE_ID';
  const isPlaceholderClient = adClientId.includes('YOUR_ADSENSE_ID');

  // Don't render ad element if using placeholders or failed
  // Return null so SmartAd can detect failure and show fallback
  if (hasFailed || isPlaceholder || isPlaceholderClient || import.meta.env.DEV) {
    return null;
  }

  return (
    <div ref={containerRef} className="w-full flex justify-center py-3" style={{ minHeight: '100px' }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: "320px", width: "100%", maxWidth: "100%" }}
        data-ad-client={adClientId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef}
      ></ins>
    </div>
  );
}
