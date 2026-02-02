"use client";

import { useState, useEffect } from "react";
import {
  getCookieConsent,
  saveCookieConsent,
  CookieTypes,
} from "@/lib/cookieConsent";

export default function CookiePreferencesModal({ onClose }) {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    // Load existing preferences if available
    const existing = getCookieConsent();
    if (existing) {
      setPreferences({
        necessary: true,
        analytics: existing.analytics || false,
        advertising: existing.advertising || false,
      });
    }
  }, []);

  const handleToggle = (type) => {
    if (type === CookieTypes.NECESSARY) {
      return; // Cannot disable necessary cookies
    }
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSave = () => {
    saveCookieConsent(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      advertising: true,
    };
    setPreferences(allAccepted);
    saveCookieConsent(allAccepted);
    onClose();
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true,
      analytics: false,
      advertising: false,
    };
    setPreferences(allRejected);
    saveCookieConsent(allRejected);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Cookie sozlamalari"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Cookie sozlamalari
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Yopish"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Quyida turli cookie turlarini boshqarishingiz mumkin. Zaruriy
            cookie'lar saytning ishlashi uchun talab qilinadi va o'chirib
            bo'lmaydi.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Necessary Cookies */}
          <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    Zaruriy cookie'lar
                  </h3>
                  <span className="px-2 py-1 text-xs font-semibold bg-primary/20 text-primary rounded">
                    Majburiy
                  </span>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Bu cookie'lar saytning asosiy funksiyalarini ta'minlash uchun
                  zarurdir. Ular saytning ishlashi, xavfsizligi va asosiy
                  funksiyalarini ta'minlash uchun talab qilinadi va o'chirib
                  bo'lmaydi.
                </p>
              </div>
              <div className="shrink-0">
                <label className="relative inline-flex items-center cursor-not-allowed">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="w-12 h-6 bg-primary rounded-full appearance-none cursor-not-allowed opacity-75"
                    readOnly
                  />
                  <span className="sr-only">Zaruriy cookie'lar</span>
                </label>
              </div>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="border border-gray-200 rounded-lg p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    Analitik cookie'lar
                  </h3>
                  <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded">
                    Ixtiyoriy
                  </span>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-2">
                  Bu cookie'lar bizga saytning qanday ishlatilayotganini
                  tushunishga yordam beradi. Ular Google Analytics va
                  Yandex.Metrika kabi xizmatlar orqali statistik ma'lumotlarni
                  to'playdi.
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  <strong>Foydalaniladigan xizmatlar:</strong> Google Analytics,
                  Yandex.Metrika
                </p>
              </div>
              <div className="shrink-0">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handleToggle(CookieTypes.ANALYTICS)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  <span className="sr-only">
                    Analitik cookie'larni yoqish/o'chirish
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Advertising Cookies */}
          <div className="border border-gray-200 rounded-lg p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    Reklama cookie'lari
                  </h3>
                  <span className="px-2 py-1 text-xs font-semibold bg-orange-100 text-orange-700 rounded">
                    Ixtiyoriy
                  </span>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-2">
                  Bu cookie'lar Google AdSense orqali sizning qiziqishlaringizga
                  mos reklamalarni ko'rsatish uchun ishlatiladi. Ular sizning
                  tashriflaringiz va qiziqishlaringizga asoslangan reklamalarni
                  yaratishga yordam beradi.
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  <strong>Foydalaniladigan xizmatlar:</strong> Google AdSense
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google reklama sozlamalarini boshqarish
                  </a>
                </p>
              </div>
              <div className="shrink-0">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.advertising}
                    onChange={() => handleToggle(CookieTypes.ADVERTISING)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  <span className="sr-only">
                    Reklama cookie'larini yoqish/o'chirish
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong>Eslatma:</strong> Cookie sozlamalarini o'zgartirgandan
              so'ng, o'zgarishlarni amalga oshirish uchun sahifa qayta
              yuklanadi. Cookie'lar haqida batafsil ma'lumot olish uchun{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Maxfiylik siyosati
              </a>{" "}
              sahifasini ko'rib chiqing.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={handleRejectAll}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Faqat zaruriy cookie'lar
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Hammasini qabul qilish
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Saqlash
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
