import React from "react";
import { ArrowUpRight, Check, Send, Sparkles } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";
import { TelegramIcon } from "./icons/TelegramIcon";

export function TelegramCommunity() {
  return (
    <section id="community" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Full-width Rounded Deep-Blue Card */}
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] bg-gradient-to-br from-[#061A40] via-[#08245C] to-[#075FF7] text-white p-8 sm:p-12 lg:p-16 shadow-[0_24px_60px_-15px_rgba(6,26,64,0.5)] border border-[#258BFF]/30">
        
        {/* Subtle Background Pattern & Ambient Glows */}
        <div className="absolute inset-0 bg-arrows-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-market-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#258BFF]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#061A40]/80 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Side: Stats, Copy, CTA */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-white/95 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#3D9BFF]" />
              <span>OUR COMMUNITY</span>
            </div>

            <div className="flex flex-col">
              <span className="text-5xl sm:text-6xl lg:text-[72px] font-black text-white tracking-tight leading-none font-mono">
                30,000+
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                One Trading Community.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              Join thousands of traders receiving market commentary, market updates and insights directly through Telegram.
            </p>

            <div className="pt-2">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-[#061A40] bg-white hover:bg-[#F4F9FF] shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <TelegramIcon className="w-5 h-5 text-[#075FF7]" />
                <span>Join the Telegram Community</span>
                <ArrowUpRight className="w-5 h-5 text-[#075FF7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Below CTA Perks */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-medium text-white/85">
              <div className="flex items-center gap-1.5">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-300">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Join in seconds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-300">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-300">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Market insights</span>
              </div>
            </div>
          </div>

          {/* Right Side: Telegram-inspired Custom Message Cards */}
          <div className="lg:col-span-7 relative">
            <div className="relative min-h-[440px] sm:min-h-[420px] flex flex-col justify-center">
              
              {/* Message Card 1: Market Update (Top Left) */}
              <div className="relative sm:w-[90%] rounded-2xl bg-white p-5 text-[#061A40] shadow-2xl border border-white/60 mb-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#DDE7F3]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#075FF7] flex items-center justify-center text-white">
                      <Send className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-[#061A40] block">
                        EXPERMIMENT TRADERS
                      </span>
                      <span className="text-[10px] text-[#075FF7] font-semibold">
                        Market Update
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#697386] font-mono">09:14</span>
                </div>
                <p className="text-xs sm:text-sm text-[#0B0D12] leading-relaxed">
                  Gold approaching an important technical area. Full analysis and key levels shared in the channel.
                </p>
                <div className="mt-2.5 pt-2 border-t border-[#F0F6FF] flex justify-end">
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#075FF7] hover:text-[#258BFF] inline-flex items-center gap-1"
                  >
                    <span>View Full Analysis</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Glowing Central Floating Telegram Icon Badge */}
              <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-gradient-to-tr from-[#075FF7] to-[#3D9BFF] text-white flex items-center justify-center shadow-[0_0_35px_rgba(61,155,255,0.7)] border-2 border-white/80 animate-bounce">
                <Send className="w-8 h-8 -rotate-12 translate-x-0.5" />
              </div>

              {/* Message Card 2: Morning Outlook (Middle Right Offset) */}
              <div className="relative sm:ml-auto sm:w-[88%] rounded-2xl bg-[#08245C]/90 backdrop-blur-md p-5 text-white shadow-2xl border border-[#3D9BFF]/30 mb-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                  <span className="text-xs font-bold text-[#93C5FD] tracking-wide uppercase">
                    Morning Outlook
                  </span>
                  <span className="text-[11px] text-white/50 font-mono">08:30</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
                  <div className="p-1.5 rounded bg-white/5 flex items-center justify-between">
                    <span>XAU/USD</span>
                    <span className="text-emerald-300 font-semibold font-mono">Bullish Bias</span>
                  </div>
                  <div className="p-1.5 rounded bg-white/5 flex items-center justify-between">
                    <span>EUR/USD</span>
                    <span className="text-[#93C5FD] font-semibold font-mono">Key Resistance</span>
                  </div>
                  <div className="p-1.5 rounded bg-white/5 flex items-center justify-between">
                    <span>GBP/USD</span>
                    <span className="text-amber-300 font-semibold font-mono">Watching Support</span>
                  </div>
                  <div className="p-1.5 rounded bg-white/5 flex items-center justify-between">
                    <span>US30</span>
                    <span className="text-emerald-300 font-semibold font-mono">Potential Breakout</span>
                  </div>
                </div>
              </div>

              {/* Message Card 3: Trade Idea (Bottom Left) */}
              <div className="relative sm:w-[85%] rounded-2xl bg-white p-4 text-[#061A40] shadow-xl border border-white/60 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#DDE7F3]">
                  <span className="text-xs font-black text-[#075FF7] uppercase">
                    Trade Idea • EUR/USD
                  </span>
                  <span className="text-[11px] text-[#697386] font-mono">13:25</span>
                </div>
                <p className="text-xs text-[#0B0D12] leading-snug">
                  EUR/USD setup forming with strong confluence. Details in Telegram.
                </p>
                <div className="mt-2 flex justify-end">
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#075FF7] hover:underline flex items-center gap-1"
                  >
                    <span>View in Channel</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
