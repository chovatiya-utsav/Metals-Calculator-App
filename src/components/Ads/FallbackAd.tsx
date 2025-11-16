import { useEffect, useRef } from "react";

interface FallbackAdProps {
  type?: "media" | "adsterra" | "hilltopads";
}

export default function FallbackAd({ type = "media" }: FallbackAdProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");

    if (type === "media") {
      script.src = "https://contextual.media.net/dmedianet.js?cid=YOUR_MEDIA_NET_ID";
    } else if (type === "adsterra") {
      script.src = "https://ads.adsterra.com/YOUR_ADSTERRA_ID.js";
    } else if (type === "hilltopads") {
      // HilltopAds integration - Standard method
      script.src = 'https://hilltopads.com/script/8d733eb56b3bebe9cdc4';
      script.type = 'text/javascript';
    }

    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [type]);

  return (
    <div className="w-full flex justify-center py-3">
      <div 
        ref={adContainerRef}
        className="border border-gray-300 rounded-md w-full max-w-[300px] h-[250px] flex items-center justify-center text-gray-500 text-sm"
        id={type === "hilltopads" ? "hilltopads-container" : undefined}
      >
        {type === "hilltopads" ? (
          <div id="hilltopads-8d733eb56b3bebe9cdc4"></div>
        ) : (
          "Loading ads…"
        )}
      </div>
    </div>
  );
}
