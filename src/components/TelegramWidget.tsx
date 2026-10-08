"use client";

import React, { useState, useEffect } from "react";
import { Send, X, ArrowUpRight, CheckCircle2, Bell, Sparkles } from "lucide-react";
import { TELEGRAM_URL, BRAND_NAME } from "@/lib/constants";

export function TelegramWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);

  useEffect(() => {
    // Show teaser tooltip after 3.5 seconds
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Telegram Popup Card */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[370px] rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(6,26,64,0.35)] border border-[#DDE7F3] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#061A40] via-[#08245C] to-[#075FF7] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
                <Send className="w-5 h-5 -rotate-12 translate-x-0.5 text-white" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#061A40]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-black tracking-wide uppercase text-white font-mono">
                    {BRAND_NAME}
                  </h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3D9BFF]" />
                </div>
                <p className="text-[11px] text-white/70">
                  30,420+ subscribers • Active Channel
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Telegram widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F4F9FF]/40 space-y-3.5">
            {/* Telegram simulated chat bubble */}
            <div className="rounded-2xl bg-white p-3.5 shadow-sm border border-[#DDE7F3] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-semibold text-[#075FF7]">
                <span className="flex items-center gap-1">
                  <Bell className="w-3 h-3" />
                  <span>Latest Telegram Broadcast</span>
                </span>
                <span className="text-[10px] text-[#697386] font-mono">Just now</span>
              </div>
              <p className="text-xs text-[#061A40] leading-relaxed">
                🔔 <strong>Gold (XAU/USD)</strong> setup approaching key decision zone. Detailed confluence charts and entry levels are live in the channel!
              </p>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-semibold text-[#061A40]">
              <div className="p-1.5 rounded-lg bg-white border border-[#DDE7F3]">
                ⚡ Instant Signals
              </div>
              <div className="p-1.5 rounded-lg bg-white border border-[#DDE7F3]">
                📊 Daily Setups
              </div>
              <div className="p-1.5 rounded-lg bg-white border border-[#DDE7F3]">
                🔒 100% Free
              </div>
            </div>

            {/* Action CTA */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-sm font-bold text-white bg-[#075FF7] hover:bg-[#258BFF] shadow-[0_8px_20px_rgba(7,95,247,0.35)] hover:shadow-[0_12px_25px_rgba(7,95,247,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Join 30,000+ Members</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-center">
              <span className="text-[10px] text-[#697386]">
                One click directly opens Telegram app or web
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Teaser Pill (shown before clicking if widget closed) */}
      {!isOpen && showTeaser && (
        <div
          onClick={() => setIsOpen(true)}
          className="mb-3 cursor-pointer rounded-full bg-white/95 backdrop-blur-md px-4 py-2 shadow-xl border border-[#DDE7F3] flex items-center gap-2 text-xs font-bold text-[#061A40] hover:text-[#075FF7] transition-all hover:-translate-y-0.5 animate-in fade-in slide-in-from-bottom-2"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Join 30k+ Traders on Telegram</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#075FF7]" />
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTeaser(false);
        }}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#075FF7] to-[#258BFF] text-white shadow-[0_10px_25px_rgba(7,95,247,0.45)] hover:shadow-[0_15px_35px_rgba(7,95,247,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white"
        aria-label="Open Telegram Community popup"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform" />
        ) : (
          <>
            <Send className="w-6 h-6 -rotate-12 translate-x-0.5 text-white transition-transform group-hover:rotate-0" />
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white font-extrabold text-[10px] flex items-center justify-center border-2 border-white shadow-sm">
              1
            </span>
          </>
        )}
      </button>
    </div>
  );
}
