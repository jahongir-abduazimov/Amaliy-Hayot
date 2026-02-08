"use client";

import { useEffect } from "react";

/**
 * Yandex.RTB feed reklama blokini ko'rsatadi.
 * Block ID: R-A-18670985-3
 */
export default function YandexFeedAd() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.yaContextCb) {
      window.yaContextCb.push(() => {
        if (window.Ya?.Context?.AdvManager) {
          window.Ya.Context.AdvManager.render({
            blockId: "R-A-18670985-3",
            renderTo: "yandex_rtb_R-A-18670985-3",
            type: "feed",
          });
        }
      });
    }
  }, []);

  return (
    <div className="my-8 flex justify-center">
      <div id="yandex_rtb_R-A-18670985-3" className="w-full" />
    </div>
  );
}
