import React from "react";
import { ArrowUpRight, Check, Landmark, Timer, Layers3, ShieldCheck } from "lucide-react";
import { EXNESS_URL } from "@/lib/constants";

const EXNESS_PERKS = [
  {
    icon: Landmark,
    title: "Multi-Regulated Broker",
    description: "A globally recognised broker operating across multiple jurisdictions.",
  },
  {
    icon: Timer,
    title: "Fast Execution & Withdrawals",
    description: "Quick order execution with fast deposits and withdrawals.",
  },
  {
    icon: Layers3,
    title: "Flexible Account Types",
    description: "Account options designed for beginners and experienced traders alike.",
  },
  {
    icon: ShieldCheck,
    title: "Negative Balance Protection",
    description: "Risk controls so you can never lose more than your balance.",
  },
];

export function ExnessPartner() {
  return (
    <section id="exness" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] bg-gradient-to-br from-[#0B1220] via-[#061A40] to-[#0F2E6E] text-white p-8 sm:p-12 lg:p-16 shadow-[0_24px_60px_-15px_rgba(6,26,64,0.5)] border border-[#258BFF]/25">
        {/* Ambient glows */}
        <div className="absolute inset-0 bg-arrows-pattern opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FFD100]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#258BFF]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Heading, Copy & CTA */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-white/95 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FFD100] shadow-[0_0_10px_rgba(255,209,0,0.8)]" />
              <span>BROKER PARTNER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.12]">
              Trade with{" "}
              <span className="text-[#FFD100]">Exness</span>, our recommended broker.
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              Expermiment Traders is partnered with Exness, a globally recognised online broker.
              Open an account through our link and trade the same markets we analyse — forex,
              gold and indices — inside a fast, transparent trading environment.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={EXNESS_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-[#061A40] bg-[#FFD100] hover:bg-[#FFE14D] shadow-[0_10px_25px_rgba(255,209,0,0.25)] hover:shadow-[0_15px_35px_rgba(255,209,0,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Open an Exness Account</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#community"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>Join our Telegram first</span>
              </a>
            </div>

            <p className="text-xs text-white/50 leading-relaxed max-w-xl pt-1">
              Affiliate disclosure: we may earn a commission if you open an account through this
              link, at no extra cost to you. Trading financial markets involves significant risk.
            </p>
          </div>

          {/* Right Column: Why Exness Checklist Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl sm:rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FFD100]">
                  Why Exness
                </span>
                <span className="text-[11px] font-mono text-white/40">PARTNER PICK</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {EXNESS_PERKS.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.title} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 shrink-0 rounded-lg bg-[#FFD100] text-[#061A40] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="text-sm font-bold text-white leading-snug">
                          {perk.title}
                        </span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed pl-[42px]">
                        {perk.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-medium text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />
                  Free account opening
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />
                  Demo account available
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />
                  Mobile &amp; desktop platforms
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
