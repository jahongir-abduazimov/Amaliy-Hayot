"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TELEGRAM_BAR_DISMISSED_KEY = "telegram_bar_dismissed";
const FROM_TELEGRAM_SESSION_KEY = "from_telegram_session";

function isFromTelegram() {
  if (typeof window === "undefined") return false;
  const stored = window.sessionStorage.getItem(FROM_TELEGRAM_SESSION_KEY);
  if (stored === "true") return true;
  const ref = document.referrer || "";
  if (ref.includes("t.me") || ref.includes("telegram.org")) {
    window.sessionStorage.setItem(FROM_TELEGRAM_SESSION_KEY, "true");
    return true;
  }
  return false;
}

export default function MobileTelegramBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isFromTelegram()) return;
    const dismissed = window.localStorage.getItem(TELEGRAM_BAR_DISMISSED_KEY);

    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  // const handleClose = () => {
  //   setIsVisible(false);
  //   if (typeof window === "undefined") return;
  //   window.localStorage.setItem(TELEGRAM_BAR_DISMISSED_KEY, "true");
  // };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="rounded-t-2xl bg-ocean-gradient text-white shadow-xl shadow-blue border border-white/40 px-4 pt-3 pb-4 flex flex-col gap-2">
        <p className="text-sm font-semibold tracking-wide uppercase text-center">
          Telegram kanalimiz
        </p>

        <div className="flex items-center gap-3">
          <p className="text-xs opacity-90">
            Eng so‘nggi qo‘llanmalar va foydali maslahatlarni Telegramda oling.
          </p>
          <Link
            href="https://t.me/amaliyhayot_uz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white text-primary text-xs font-extrabold shadow-blue hover:bg-gray-100 smooth whitespace-nowrap cursor-pointer flex items-center gap-1"
          >
            <svg
              className="w-4 h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span>Obuna bo‘ling</span>
          </Link>
        </div>

        {/* <button
          type="button"
          onClick={handleClose}
          aria-label="Telegram panelini yopish"
          className="p-1 rounded-full text-neutral-text-gray hover:text-neutral-text-dark hover:bg-gray-100 smooth cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
}
