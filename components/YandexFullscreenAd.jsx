"use client";

import { useEffect } from "react";

/**
 * Yandex.RTB fullscreen reklama (touch platforma uchun).
 *
 * Block ID: R-A-18670985-5
 *
 * Eslatma:
 * - Fullscreen reklama `renderTo` talab qilmaydi.
 * - Faqat touch qurilmalarda ishga tushiriladi (platform: "touch").
 *
 * @returns {null} Hech qanday DOM node qaytarmaydi.
 */
export default function YandexFullscreenAd() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const isTouch =
      (typeof window.matchMedia === "function" &&
        window.matchMedia("(pointer: coarse)").matches) ||
      "ontouchstart" in window ||
      (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0);

    if (!isTouch) {
      return;
    }

    if (!window.yaContextCb) {
      return;
    }

    window.yaContextCb.push(() => {
      try {
        if (!window.Ya?.Context?.AdvManager?.render) {
          return;
        }

        window.Ya.Context.AdvManager.render({
          blockId: "R-A-18670985-5",
          type: "fullscreen",
          platform: "touch",
        });
      } catch {
        // No-op: reklamani bloklash/RTB yuklanmagan holatlarda xatoga tushmasin.
      }
    });
  }, []);

  return null;
}

