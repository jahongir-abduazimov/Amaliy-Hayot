"use client";

import { useEffect } from "react";

/**
 * Yandex.RTB floor ad — ekran pastida ko'rinadigan yopishqoq reklama.
 * Block ID: R-A-18670985-2
 */
export default function YandexFloorAd() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.yaContextCb) {
      window.yaContextCb.push(() => {
        if (window.Ya?.Context?.AdvManager) {
          window.Ya.Context.AdvManager.render({
            blockId: "R-A-18670985-2",
            type: "floorAd",
            platform: "touch",
          });
        }
      });
    }
  }, []);

  return null;
}
