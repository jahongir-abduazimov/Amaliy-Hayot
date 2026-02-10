"use client";

import { useEffect } from "react";

/**
 * Yandex.RTB banner reklama blokini ko'rsatadi.
 *
 * Block ID: R-A-18670985-4
 *
 * Bu komponent global Yandex RTB skripti oldindan yuklangan bo'lishini va
 * `window.yaContextCb` mavjud bo'lishini kutadi.
 *
 * @returns {import("react").JSX.Element} Banner ad konteyneri.
 */
export default function YandexBannerAd() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.yaContextCb) {
      return;
    }

    window.yaContextCb.push(() => {
      if (!window.Ya?.Context?.AdvManager) {
        return;
      }

      window.Ya.Context.AdvManager.render({
        blockId: "R-A-18670985-4",
        renderTo: "yandex_rtb_R-A-18670985-4",
      });
    });
  }, []);

  return (
    <div className="mt-8 flex justify-center">
      <div id="yandex_rtb_R-A-18670985-4" className="w-full" />
    </div>
  );
}

