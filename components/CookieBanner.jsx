"use client";

import { useState, useEffect } from "react";
import {
  getCookieConsent,
  acceptAllCookies,
  rejectAllCookies,
} from "@/lib/cookieConsent";
import CookiePreferencesModal from "./CookiePreferencesModal";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = getCookieConsent();
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setShowBanner(false);
    // Reload page to initialize scripts with consent
    window.location.reload();
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setShowBanner(false);
  };

  const handleCustomize = () => {
    setShowPreferences(true);
  };

  const handlePreferencesClose = () => {
    setShowPreferences(false);
    // Check if consent was given in preferences modal
    const consent = getCookieConsent();
    if (consent) {
      setShowBanner(false);
      window.location.reload();
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up"
        role="dialog"
        aria-label="Cookie foydalanishi haqida bildirishnoma"
        aria-modal="true"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl border-2 border-primary/20 p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      Cookie (Kukilar) haqida
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-2">
                      Bizning saytimiz sizning tajribangizni yaxshilash va
                      Google AdSense reklamalarini ko'rsatish uchun cookie
                      (kukilar) texnologiyasidan foydalanadi. Zaruriy cookie'lar
                      saytning ishlashi uchun talab qilinadi, boshqalari esa
                      ixtiyoriydir.
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      Cookie'lar haqida batafsil ma'lumot olish uchun{" "}
                      <a
                        href="/privacy"
                        className="text-primary hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Maxfiylik siyosati
                      </a>{" "}
                      sahifasini ko'rib chiqing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 md:flex-col md:min-w-[200px]">
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-green-500 cursor-pointer text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Barcha cookie'larni qabul qilish"
                >
                  Qabul qilish
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 bg-gray-200 cursor-pointer text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  aria-label="Ixtiyoriy cookie'larni rad etish"
                >
                  ❌ Rad etish
                </button>
                <button
                  onClick={handleCustomize}
                  className="px-6 py-3 border-2 border-primary cursor-pointer text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Cookie sozlamalarini boshqarish"
                >
                  Sozlash
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <CookiePreferencesModal onClose={handlePreferencesClose} />
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
