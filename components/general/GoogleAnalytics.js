"use client";

import Script from "next/script";

import usePageView from "@/lib/hooks/usePageView";
import { useEffect } from "react";

const GoogleAnalytics = ({ consent }) => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (consent) {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    } else {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }, [consent]);

  usePageView();

  if (
    !consent ||
    process.env.NEXT_PUBLIC_NODE_ENV !== "production" ||
    !GA_MEASUREMENT_ID
  )
    return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
