import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";
import { TelegramIcon } from "./icons/TelegramIcon";

export function FinalCTA() {
  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] bg-gradient-to-r from-[#061A40] via-[#08245C] to-[#075FF7] text-white p-8 sm:p-12 lg:p-16 shadow-[0_24px_60px_-15px_rgba(6,26,64,0.5)] border border-[#258BFF]/30">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-arrows-pattern opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#258BFF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Copy, CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#93C5FD]">
              YOUR NEXT MARKET INSIGHT COULD BE ONE MESSAGE AWAY
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-tight">
              Join 30,000+ Traders.
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              Become part of the Expermiment Traders community and follow our latest market insights directly on Telegram.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-[#075FF7] hover:bg-[#258BFF] shadow-[0_10px_25px_rgba(7,95,247,0.4)] hover:shadow-[0_15px_35px_rgba(7,95,247,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/20"
              >
                <span>Join Telegram</span>
                <TelegramIcon className="w-5 h-5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#93C5FD]" />
              </a>
            </div>
          </div>

          {/* Right Column: Glowing 3D Financial Globe */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_50px_rgba(37,139,255,0.3)] border border-[#3D9BFF]/30">
              <Image
                src="/images/cta_globe.jpg"
                alt="Global Market Intelligence Network"
                fill
                className="object-cover object-center animate-pulse-gentle"
                sizes="(max-width: 768px) 100vw, 350px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061A40]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
