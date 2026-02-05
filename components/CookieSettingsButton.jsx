"use client";

import { useState, useEffect } from "react";
import { hasAnyConsent } from "@/lib/cookieConsent";
import CookiePreferencesModal from "./CookiePreferencesModal";

export default function CookieSettingsButton() {
  const [showPreferences, setShowPreferences] = useState(false);
  const [hasConsent, setHasConsent] = useState(() => {
    try {
      return hasAnyConsent();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    // Listen for consent updates
    const handleConsentUpdate = () => {
      setHasConsent(hasAnyConsent());
    };

    window.addEventListener("cookieConsentUpdated", handleConsentUpdate);

    return () => {
      window.removeEventListener("cookieConsentUpdated", handleConsentUpdate);
    };
  }, []);

  const handleClick = () => {
    setShowPreferences(true);
  };

  const handleClose = () => {
    setShowPreferences(false);
    // Reload if consent was changed
    const consent = hasAnyConsent();
    if (consent !== hasConsent) {
      window.location.reload();
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="text-sm md:text-base text-neutral-text-gray hover:text-primary smooth inline-flex items-center group cursor-pointer"
        aria-label="Cookie sozlamalari"
      >
        <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 smooth"></span>
        Cookie sozlamalari
      </button>

      {showPreferences && <CookiePreferencesModal onClose={handleClose} />}
    </>
  );
}
