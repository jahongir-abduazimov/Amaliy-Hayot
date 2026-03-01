"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Yandex.RTB fullscreen reklama (touch platforma uchun).
 *
 * Block ID: R-A-18670985-5
 *
 * Eslatma:
 * - Fullscreen reklama `renderTo` talab qilmaydi.
 * - Faqat touch qurilmalarda ishga tushiriladi (platform: "touch").
 * - Birinchi kirishda (link orqali) reklama chiqmaydi; faqat F5/reload yoki sahifa almashganda chiqadi.
 * - Bir session ichida tez-tez chiqib ketmasligi uchun cooldown qo'llanadi (10 min).
 *
 * @returns {null} Hech qanday DOM node qaytarmaydi.
 */
function isReload() {
  if (typeof performance === "undefined" || !performance.getEntriesByType) {
    return false;
  }
  const nav = performance.getEntriesByType("navigation")[0];
  return nav?.type === "reload";
}

export default function YandexFullscreenAd() {
  const pathname = usePathname();
  const isFirstMountRef = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const firstMount = isFirstMountRef.current;
    if (firstMount) {
      isFirstMountRef.current = false;
      if (!isReload()) {
        return;
      }
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

    const cooldownMs = 10 * 60 * 1000; // 10 min
    const storageKey = "yandex_fullscreen_last_shown_at";
    const now = Date.now();

    try {
      const lastShownRaw = window.sessionStorage.getItem(storageKey);
      const lastShownAt = lastShownRaw ? Number(lastShownRaw) : 0;
      if (Number.isFinite(lastShownAt) && now - lastShownAt < cooldownMs) {
        return;
      }
      window.sessionStorage.setItem(storageKey, String(now));
    } catch {
      // sessionStorage bloklangan bo'lsa, shunchaki davom etamiz (cooldown bo'lmaydi).
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
  }, [pathname]);

  return null;
}

