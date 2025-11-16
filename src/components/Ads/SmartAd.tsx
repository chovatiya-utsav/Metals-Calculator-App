import { useEffect, useRef, useState } from "react";
import GoogleAd from "./GoogleAd";
import FallbackAd from "./FallbackAd";

interface SmartAdProps {
  slot: string;
}

export default function SmartAd({ slot }: SmartAdProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const [showGoogle, setShowGoogle] = useState(true);
  const [showMedia, setShowMedia] = useState(true);
  const [showAdsterra, setShowAdsterra] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (adRef.current) {
        const height = adRef.current.clientHeight;

        if (height < 40) {
          setShowGoogle(false);
        }
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showGoogle) {
      const timer = setTimeout(() => {
        if (adRef.current) {
          const height = adRef.current.clientHeight;
          if (height < 40) {
            setShowMedia(false);
          }
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showGoogle]);

  useEffect(() => {
    if (!showGoogle && !showMedia) {
      const timer = setTimeout(() => {
        if (adRef.current) {
          const height = adRef.current.clientHeight;
          if (height < 40) {
            setShowAdsterra(false);
          }
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showGoogle, showMedia]);

  return (
    <div ref={adRef}>
      {showGoogle ? (
        <GoogleAd slot={slot} />
      ) : showMedia ? (
        <FallbackAd type="media" />
      ) : showAdsterra ? (
        <FallbackAd type="adsterra" />
      ) : (
        <FallbackAd type="hilltopads" />
      )}
    </div>
  );
}

