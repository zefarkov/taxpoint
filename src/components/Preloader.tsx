"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [state, setState] = useState<"visible" | "leaving" | "hidden">("visible");

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setState("leaving"), 1150);
    const hideTimer = window.setTimeout(() => setState("hidden"), 1500);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (state === "hidden") {
    return null;
  }

  return (
    <div
      className={`preloader-safe-hide pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-300 ${
        state === "leaving" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <img
        src="/brand/logo-animated.svg"
        alt=""
        className="h-[150px] w-[150px] object-contain sm:h-[190px] sm:w-[190px]"
      />
    </div>
  );
}
