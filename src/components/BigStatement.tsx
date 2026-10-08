import React from "react";
import Image from "next/image";
import { BarChart2, ShieldCheck, Layers } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";
import { TelegramIcon } from "./icons/TelegramIcon";

export function BigStatement() {
  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] text-xs font-bold uppercase tracking-wider text-[#075FF7] w-fit">
            <span>Philosophy & Perspective</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#061A40] tracking-tight leading-[1.12]">
            Markets are <br />
            complicated. <br />
            <span className="text-[#075FF7]">
              Your approach <br />
              doesn’t have to be.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#697386] leading-relaxed max-w-lg">
            We combine market observation, technical analysis and structured risk thinking to help our community navigate financial markets with greater discipline.
          </p>

          <div className="pt-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-[#075FF7] hover:bg-[#258BFF] shadow-[0_4px_16px_rgba(7,95,247,0.25)] hover:shadow-[0_8px_24px_rgba(7,95,247,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <TelegramIcon className="w-5 h-5" />
              <span>Join Telegram</span>
            </a>
          </div>
        </div>

        {/* Right Column: Abstract Market Visual with Floating Badges */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden border border-[#DDE7F3] shadow-[0_20px_50px_rgba(7,95,247,0.08)] bg-gradient-to-b from-[#FFFFFF] to-[#F5FAFF] p-2 sm:p-4">
            
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3D9BFF]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#075FF7]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Market Chart Graphic */}
            <div className="relative h-[320px] sm:h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/market_chart.jpg"
                alt="Disciplined Market Analysis Chart"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge 1: Higher Probability Setups (Top) */}
            <div className="absolute top-6 right-6 sm:right-10 z-20 rounded-xl glass-light-card py-2 px-3.5 shadow-lg border border-white/80 animate-float-slow">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#F4F9FF] border border-[#DCEEFF] flex items-center justify-center text-[#075FF7]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="text-xs font-bold text-[#061A40] block">
                    Higher Probability Setups
                  </span>
                  <span className="text-[10px] text-[#697386]">Defined Risk Boundary</span>
                </div>
              </div>
            </div>

            {/* Floating Badge 2: Disciplined Analysis (Bottom Left) */}
            <div className="absolute bottom-6 left-6 sm:left-10 z-20 rounded-xl glass-light-card py-2 px-3.5 shadow-lg border border-white/80 animate-float-delayed">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#075FF7] text-white flex items-center justify-center">
                  <BarChart2 className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="text-xs font-bold text-[#061A40] block">
                    Disciplined Analysis
                  </span>
                  <span className="text-[10px] text-[#697386]">Technical Structure</span>
                </div>
              </div>
            </div>

            {/* Floating Badge 3: Multiple Markets (Right Middle) */}
            <div className="absolute bottom-16 right-6 z-20 rounded-xl glass-light-card py-2 px-3.5 shadow-lg border border-white/80 hidden sm:block">
              <div className="flex items-center gap-2 mb-1.5">
                <Layers className="w-3.5 h-3.5 text-[#075FF7]" />
                <span className="text-xs font-bold text-[#061A40]">Multiple Markets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-[#F4F9FF] text-[#075FF7] font-mono font-bold text-[10px] border border-[#DCEEFF]">
                  XAU
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#F4F9FF] text-[#075FF7] font-mono font-bold text-[10px] border border-[#DCEEFF]">
                  EUR
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#F4F9FF] text-[#075FF7] font-mono font-bold text-[10px] border border-[#DCEEFF]">
                  GBP
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#F4F9FF] text-[#075FF7] font-mono font-bold text-[10px] border border-[#DCEEFF]">
                  US30
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
