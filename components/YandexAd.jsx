"use client";

import { useEffect, useRef } from "react";

/**
 * Above-the-fold Yandex RTB reklama bloki (YAN).
 *
 * UX maqsadlari:
 * - CLS kamaytirish uchun reklama joyini oldindan band qilish (min-height).
 * - Reklama render bo'lguncha skeleton/placeholder ko'rsatish.
 * - onRender/onError callback'lar va timeout fallback bilan skeletni olib tashlash.
 *
 * Block ID: R-A-18670985-1
 *
 * @returns {import("react").JSX.Element} Above-the-fold ad konteyneri.
 */
export default function YandexAd() {
  const doneRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const boxId = "ad_top";
    const skelId = "ad_top_skel";

    const done = (mode) => {
      if (doneRef.current) {
        return;
      }

      doneRef.current = true;

      const skel = document.getElementById(skelId);
      skel?.remove();

      if (mode === "collapse") {
        const box = document.getElementById(boxId);
        if (box) {
          box.style.minHeight = "0";
          box.style.display = "none";
        }
      }
    };

    const timeoutMs = 3200;
    const timeoutId = window.setTimeout(() => {
      const box = document.getElementById(boxId);
      const hasAd = Boolean(box?.querySelector("iframe"));
      done(hasAd ? "keep" : "collapse");
    }, timeoutMs);

    if (!window.yaContextCb) {
      window.clearTimeout(timeoutId);
      done("collapse");
      return;
    }

    window.yaContextCb.push(() => {
      try {
        if (!window.Ya?.Context?.AdvManager?.render) {
          window.clearTimeout(timeoutId);
          done("collapse");
          return;
        }

        window.Ya.Context.AdvManager.render({
          blockId: "R-A-18670985-1",
          renderTo: boxId,
          onRender: () => {
            window.clearTimeout(timeoutId);
            done("keep");
          },
          onError: () => {
            window.clearTimeout(timeoutId);
            done("collapse");
          },
        });
      } catch {
        window.clearTimeout(timeoutId);
        done("collapse");
      }
    });

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div id="ad_top" className="ad-box md:mt-8 mt-5 w-full flex justify-center items-center">
      <div id="ad_top_skel" className="ad-skel">
        Loading…
      </div>
    </div>
  );
}
