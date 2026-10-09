"use client";

import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";

/** How long the popup waits before appearing on a page load. */
const SHOW_DELAY_MS = 2500;

export function TelegramPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // No persistence on purpose: closing only hides it for the current page view,
  // so the popup appears again on the next visit or refresh.
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Escape key closes, background scroll is locked while open.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeBtnRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Join our Telegram community"
    >
      {/* Backdrop — click anywhere outside the poster to dismiss */}
      <button
        type="button"
        aria-label="Close Telegram popup"
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 cursor-default bg-[#04102A]/80 backdrop-blur-sm animate-overlay-in"
      />

      {/* Poster card — image edge-to-edge, the whole card opens Telegram */}
      <div className="relative w-[min(90vw,400px,70dvh)] overflow-hidden rounded-[28px] bg-[#061A40] ring-1 ring-white/10 shadow-[0_40px_90px_-25px_rgba(2,10,30,0.95)] animate-popup-in">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join our Telegram community"
          className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#258BFF]"
        >
          {/* Plain <img>: intrinsic sizing keeps the popup exactly the banner's size, border to border */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/telegram-popup.png"
            alt="Join our Telegram for signals, news and account management"
            className="block h-auto w-full"
          />
        </a>

        {/* Dismiss control (never triggers the redirect) */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close Telegram popup"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#061A40]/70 text-white/80 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white focus:outline-none"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
