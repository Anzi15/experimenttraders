"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, TrendingUp, ShieldCheck, Activity } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 16;
    const y = ((clientY - top) / height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="pt-8 sm:pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Rounded Blue Hero Container */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] bg-gradient-to-br from-[#061A40] via-[#075FF7] to-[#258BFF] text-white p-7 sm:p-10 lg:p-14 shadow-[0_24px_60px_-15px_rgba(7,95,247,0.35)] border border-[#258BFF]/30"
      >
        {/* Subtle Market Pattern & Ambient Glows */}
        <div className="absolute inset-0 bg-market-pattern opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-arrows-pattern opacity-25 pointer-events-none" />
        
        {/* Ambient radial glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#258BFF]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] bg-[#061A40]/80 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(61,155,255,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col space-y-6 lg:pr-4">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-white/95 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#3D9BFF] animate-pulse" />
              <span>MARKET INSIGHTS • SIGNALS • FUND MANAGEMENT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-white">
              Experience the Markets{" "}
              <span className="block mt-1 bg-gradient-to-r from-white via-[#DCEEFF] to-[#93C5FD] bg-clip-text text-transparent">
                With Greater <span className="text-[#93C5FD] underline decoration-[#3D9BFF]/60 decoration-wavy underline-offset-8">Clarity.</span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl font-normal">
              Six years of market experience, structured analysis and disciplined decision-making — helping traders understand opportunities and navigate the financial markets with greater clarity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-[#061A40] bg-white hover:bg-[#F4F9FF] shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Join 30,000+ Members</span>
                <ArrowUpRight className="w-5 h-5 text-[#075FF7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/40 transition-all duration-200"
              >
                Explore Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-medium text-white/90">
              <div className="flex items-center gap-1.5">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-300">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Free to Join</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-300">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Market Insights</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-300">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Community Updates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Market Dashboard UI */}
          <div
            className="lg:col-span-6 relative flex flex-col items-center justify-center transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
            }}
          >
            <div className="relative w-full max-w-[520px] mx-auto min-h-[460px] flex items-center justify-center">
              
              {/* Card 1: XAU/USD Market Overview Chart (Main central card) */}
              <div className="relative w-full z-20 rounded-2xl glass-hero-card p-5 transition-transform duration-500 hover:scale-[1.02]">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#258BFF]/30 border border-[#3D9BFF]/30 flex items-center justify-center text-white font-bold text-xs">
                      AU
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">XAU/USD</h4>
                      <p className="text-[11px] text-white/70">Spot Gold vs US Dollar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-400/20 border border-emerald-400/30 px-2.5 py-0.5 rounded-full text-xs font-semibold text-emerald-300">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+0.82%</span>
                  </div>
                </div>

                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/60 block">Price Index</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">2,649.32</span>
                  </div>
                  <span className="text-xs text-white/60 font-mono">1D H: 2,654.10</span>
                </div>

                {/* SVG Area Line Chart */}
                <div className="mt-3 h-28 w-full relative">
                  <svg
                    viewBox="0 0 400 120"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3D9BFF" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#075FF7" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="50%" stopColor="#93C5FD" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                      </linearGradient>
                    </defs>

                    {/* Gradient fill */}
                    <path
                      d="M0,85 C50,75 80,95 130,65 C180,35 220,55 270,30 C320,10 360,25 400,12 L400,120 L0,120 Z"
                      fill="url(#heroChartGrad)"
                    />

                    {/* Glowing chart path line */}
                    <path
                      d="M0,85 C50,75 80,95 130,65 C180,35 220,55 270,30 C320,10 360,25 400,12"
                      fill="none"
                      stroke="url(#heroLineGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Glowing current price point */}
                    <circle cx="400" cy="12" r="5" fill="#FFFFFF" />
                    <circle cx="400" cy="12" r="9" fill="#93C5FD" opacity="0.5" className="animate-ping" />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/10 font-mono">
                  <span>08:00</span>
                  <span>12:00</span>
                  <span>16:00</span>
                  <span>20:00</span>
                  <span className="text-emerald-300 font-semibold">Active Session</span>
                </div>
              </div>

              {/* Card 2: Analysis Confidence (Top Right Floating Badge) */}
              <div className="absolute -top-6 -right-3 sm:-right-6 z-30 w-36 rounded-2xl glass-dark-card p-3 shadow-2xl animate-float-slow hidden sm:block">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-white/70">Confidence</span>
                  <Activity className="w-3.5 h-3.5 text-[#3D9BFF]" />
                </div>
                <div className="mt-2 flex items-center gap-2.5">
                  <div className="relative w-11 h-11">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/15"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#3D9BFF]"
                        strokeDasharray="78, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-extrabold text-white">
                      78%
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">High Bias</span>
                    <span className="text-[10px] text-white/60">Structured</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Signal Mockup Card (Floating Bottom Left) */}
              <div className="absolute -bottom-7 -left-3 sm:-left-7 z-30 w-64 rounded-2xl glass-dark-card p-3.5 shadow-2xl animate-float-delayed border border-[#3D9BFF]/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-bold text-white tracking-wider uppercase">Signal Setup</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    BUY
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1 py-1.5 px-2 rounded-lg bg-black/20 text-center font-mono">
                  <div>
                    <span className="text-[9px] text-white/50 block">ENTRY</span>
                    <span className="text-xs font-bold text-white">—</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/50 block">TARGET</span>
                    <span className="text-xs font-bold text-[#3D9BFF]">—</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/50 block">RISK</span>
                    <span className="text-xs font-bold text-white/90">Managed</span>
                  </div>
                </div>
                
                <div className="mt-2 flex items-center justify-between text-[10px] text-white/70">
                  <span>Instrument: XAU/USD</span>
                  <span className="text-[#93C5FD] font-medium flex items-center gap-0.5">
                    Telegram <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>

              {/* Card 4: Market Outlook List (Floating Bottom Right) */}
              <div className="absolute -bottom-8 -right-3 sm:-right-6 z-25 w-52 rounded-2xl glass-hero-card p-3 shadow-xl backdrop-blur-xl hidden md:block">
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1.5 flex items-center justify-between">
                  <span>Market Outlook</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3D9BFF]" />
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center justify-between p-1 rounded bg-white/5">
                    <span className="font-semibold text-white">XAU/USD</span>
                    <span className="text-emerald-300 font-mono font-medium">+0.82%</span>
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-white/5">
                    <span className="font-semibold text-white">EUR/USD</span>
                    <span className="text-rose-300 font-mono font-medium">-0.21%</span>
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-white/5">
                    <span className="font-semibold text-white">GBP/USD</span>
                    <span className="text-emerald-300 font-mono font-medium">+0.34%</span>
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-white/5">
                    <span className="font-semibold text-white">US30</span>
                    <span className="text-emerald-300 font-mono font-medium">+0.19%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
