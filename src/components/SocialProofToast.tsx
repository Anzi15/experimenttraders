"use client";

import React, { useState, useEffect } from "react";
import { Send, X, ShieldCheck } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";

const PROOF_EVENTS = [
  { location: "London, UK", time: "2m ago", text: "joined the Telegram community" },
  { location: "Dubai, UAE", time: "5m ago", text: "accessed daily Gold analysis" },
  { location: "Singapore", time: "7m ago", text: "joined 30,000+ members" },
  { location: "Frankfurt, Germany", time: "11m ago", text: "joined the Telegram community" },
  { location: "Sydney, Australia", time: "14m ago", text: "accessed market signals channel" },
];

export function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show first toast after 5s
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    // Rotate every 16s
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PROOF_EVENTS.length);
        setVisible(true);
      }, 1000);
    }, 16000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const current = PROOF_EVENTS[currentIndex];

  return (
    <aside aria-label="Recent activity notification" className="fixed bottom-6 left-6 z-40 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="relative rounded-2xl bg-white/95 backdrop-blur-md p-3.5 pr-8 shadow-[0_12px_35px_rgba(6,26,64,0.12)] border border-[#DDE7F3] max-w-sm flex items-center gap-3">
        {/* Telegram Icon */}
        <div className="w-9 h-9 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] flex items-center justify-center text-[#075FF7] flex-shrink-0">
          <Send className="w-4 h-4 -rotate-12 translate-x-0.5" />
        </div>

        {/* Content */}
        <div className="text-xs leading-tight">
          <p className="font-semibold text-[#061A40]">
            Trader from <span className="font-bold text-[#075FF7]">{current.location}</span>
          </p>
          <p className="text-[#697386] mt-0.5">
            {current.text} • <span className="font-mono text-[11px]">{current.time}</span>
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 text-[#697386] hover:text-[#061A40] p-1 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
