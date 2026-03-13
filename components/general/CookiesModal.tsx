"use client";

import { useState, useEffect } from "react";

import TextLink from "../ui/TextLink";

import { setCookieConsent } from "@/actions/cookies";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!document.cookie.includes("_cookieConsent")) {
      setShow(true);
    }
  }, []);

  const handleAcceptAll = async () => {
    await setCookieConsent({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    });

    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-calc(100%-32px) max-w-[600px] m-4 bg-white shadow-lg p-4 z-50 border-2 border-secondary rounded-md">
      <p className="text-sm text-zinc-700 mb-2">
        We use cookies to improve your experience. Manage your preferences or
        accept all.
      </p>
      <div className="flex gap-4 items-center justify-end mt-4">
        <button
          onClick={handleAcceptAll}
          className="bg-primary text-white px-3 py-1 rounded cursor-pointer hover:bg-secondary transition-colors duration-300"
        >
          Accept all
        </button>
        <TextLink href="/manage-cookies">Manage preferences</TextLink>
      </div>
    </div>
  );
};

export default CookieBanner;
