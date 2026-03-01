"use client";

import { useEffect } from "react";

/**
 * Yandex.RTB reklama bloki — maqola o'qish sahifasida (matn ostida) ko'rsatiladi.
 *
 * Block ID: R-A-18670985-6
 *
 * Global Yandex RTB skripti va window.yaContextCb mavjud bo'lishini kutadi.
 *
 * @returns {import("react").JSX.Element} Reklama konteyneri.
 */
export default function YandexArticleAd() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.yaContextCb) {
      return;
    }

    window.yaContextCb.push(() => {
      if (!window.Ya?.Context?.AdvManager) {
        return;
      }

      window.Ya.Context.AdvManager.render({
        blockId: "R-A-18670985-6",
        renderTo: "yandex_rtb_R-A-18670985-6",
      });
    });
  }, []);

  return (
    <div className="my-4 flex justify-center">
      <div id="yandex_rtb_R-A-18670985-6" className="w-full" />
    </div>
  );
}
