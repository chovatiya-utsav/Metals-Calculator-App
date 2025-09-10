// AdSense configuration and utilities

export const ADSENSE_CONFIG = {
  clientId: 'ca-pub-8681185583405652',
  // Replace these with your actual ad slot IDs from AdSense
  adSlots: {
    topBanner: '1234567890', // Replace with actual slot ID
    bottomBanner: '1234567890', // Replace with actual slot ID
    sidebar: '1234567890', // Replace with actual slot ID
  }
};

export const isAdSenseEnabled = () => {
  // Only enable AdSense in production and when not blocked
  return (
    import.meta.env.PROD &&
    typeof window !== 'undefined' &&
    !window.location.hostname.includes('localhost') &&
    !window.location.hostname.includes('127.0.0.1')
  );
};

export const loadAdSenseScript = () => {
  if (typeof window === 'undefined' || !isAdSenseEnabled()) {
    return;
  }

  // Check if script is already loaded
  if (document.querySelector('script[src*="adsbygoogle.js"]')) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  script.setAttribute('data-ad-client', ADSENSE_CONFIG.clientId);
  script.crossOrigin = 'anonymous';
  
  script.onerror = () => {
    console.warn('AdSense script failed to load');
  };

  document.head.appendChild(script);
};

export const initializeAd = () => {
  if (!isAdSenseEnabled() || typeof window === 'undefined') {
    return false;
  }

  try {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
      return true;
    }
  } catch (error) {
    console.warn('AdSense initialization failed:', error);
  }
  
  return false;
};
