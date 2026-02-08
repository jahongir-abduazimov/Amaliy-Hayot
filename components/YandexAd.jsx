"use client";

import { useEffect } from "react";

/**
 * Yandex.RTB reklama blokini ko'rsatadi.
 * Block ID: R-A-18670985-1
 */
export default function YandexAd() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.yaContextCb) {
      window.yaContextCb.push(() => {
        if (window.Ya?.Context?.AdvManager) {
          window.Ya.Context.AdvManager.render({
            blockId: "R-A-18670985-1",
            renderTo: "yandex_rtb_R-A-18670985-1",
          });
        }
      });
    }
  }, []);

  return (
    <div className="my-8 flex justify-center">
      <div
        id="yandex_rtb_R-A-18670985-1"
        className="w-full"
      />
    </div>
  );
}
