"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { hasConsent, CookieTypes } from "@/lib/cookieConsent";

export default function ConditionalScripts() {
  const [mounted, setMounted] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [advertisingConsent, setAdvertisingConsent] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check consent status
    const checkConsent = () => {
      setAnalyticsConsent(hasConsent(CookieTypes.ANALYTICS));
      setAdvertisingConsent(hasConsent(CookieTypes.ADVERTISING));
    };

    checkConsent();

    // Listen for consent updates
    const handleConsentUpdate = () => {
      checkConsent();
    };

    window.addEventListener("cookieConsentUpdated", handleConsentUpdate);

    return () => {
      window.removeEventListener("cookieConsentUpdated", handleConsentUpdate);
    };
  }, []);

  // Don't render anything until mounted (client-side only)
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Google Analytics - Only load if analytics consent is given */}
      {analyticsConsent && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-C0V2H81380"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C0V2H81380', {
                'anonymize_ip': true
              });
            `}
          </Script>
        </>
      )}

      {/* Yandex.Metrika - Only load if analytics consent is given */}
      {analyticsConsent && (
        <>
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106256595', 'ym');

              ym(106256595, 'init', {
                ssr:true, 
                webvisor:true, 
                clickmap:true, 
                ecommerce:"dataLayer", 
                accurateTrackBounce:true, 
                trackLinks:true
              });
            `}
          </Script>
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/106256595"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        </>
      )}

      {/* Google AdSense - Only load if advertising consent is given */}
      {advertisingConsent && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4193324716237811"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
