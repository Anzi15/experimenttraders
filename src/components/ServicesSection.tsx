"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, CheckCircle2, X, Shield, Lock, Activity } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";

export function ServicesSection() {
  const [fundsModalOpen, setFundsModalOpen] = useState(false);

  return (
    <section id="services" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] text-xs font-bold uppercase tracking-wider text-[#075FF7] mb-3">
            <span>OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#061A40] tracking-tight leading-[1.15]">
            Everything we focus on <br className="hidden sm:inline" />
            comes down to two things.
          </h2>
        </div>
        <p className="text-base text-[#697386] max-w-md lg:text-right leading-relaxed">
          Practical market insights and professional support for traders and investors, built on experience, discipline and a long-term perspective.
        </p>
      </div>

      {/* Services 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* SERVICE 01: Trading Signals */}
        <div className="rounded-3xl border border-[#DDE7F3] bg-gradient-to-b from-[#FFFFFF] to-[#F5FAFF] p-7 sm:p-9 shadow-[0_12px_35px_rgba(7,95,247,0.05)] hover:shadow-[0_20px_45px_rgba(7,95,247,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <span className="text-4xl sm:text-5xl font-black text-[#075FF7]/80 font-mono tracking-tight block mb-3">
              01
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#061A40] mb-3">
              Trading Signals
            </h3>
            <p className="text-base text-[#697386] leading-relaxed mb-6">
              Structured market setups based on analysis, with relevant market context designed to help members understand potential opportunities.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-8">
              {[
                "Real-time market insights",
                "Clear analysis and context",
                "Multiple instruments",
                "Delivered through Telegram",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#061A40]">
                  <CheckCircle2 className="w-4 h-4 text-[#075FF7] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Floating Blue Signal Mockup Inside Card */}
          <div className="my-6 relative rounded-2xl bg-[#061A40] p-4 text-white shadow-xl border border-[#258BFF]/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#258BFF]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <div>
                <span className="text-xs font-extrabold tracking-wider text-white">XAU/USD</span>
                <span className="text-[10px] text-white/60 block">Market Setup</span>
              </div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                BUY
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-3 text-center font-mono">
              <div className="bg-white/5 rounded p-1.5">
                <span className="text-[9px] text-white/50 block">ENTRY</span>
                <span className="text-xs font-bold text-white">—</span>
              </div>
              <div className="bg-white/5 rounded p-1.5">
                <span className="text-[9px] text-white/50 block">TARGET</span>
                <span className="text-xs font-bold text-[#3D9BFF]">—</span>
              </div>
              <div className="bg-white/5 rounded p-1.5">
                <span className="text-[9px] text-white/50 block">RISK LEVEL</span>
                <span className="text-xs font-bold text-white/90">—</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-white/70">Direction: BUY Bias</span>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#075FF7] hover:bg-[#258BFF] text-white transition-colors flex items-center gap-1"
              >
                <span>View Full Analysis</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card CTA */}
          <div className="relative z-10 pt-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#075FF7] hover:bg-[#258BFF] shadow-[0_4px_14px_rgba(7,95,247,0.3)] hover:shadow-[0_8px_20px_rgba(7,95,247,0.4)] transition-all duration-200"
            >
              <span>Join Signals Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* SERVICE 02: Funds Management */}
        <div className="rounded-3xl border border-[#DDE7F3] bg-gradient-to-b from-[#FFFFFF] to-[#F5FAFF] p-7 sm:p-9 shadow-[0_12px_35px_rgba(7,95,247,0.05)] hover:shadow-[0_20px_45px_rgba(7,95,247,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <span className="text-4xl sm:text-5xl font-black text-[#075FF7]/80 font-mono tracking-tight block mb-3">
              02
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#061A40] mb-3">
              Funds Management
            </h3>
            <p className="text-base text-[#697386] leading-relaxed mb-6">
              A more hands-off service for eligible clients seeking professional support in managing their trading approach, subject to applicable terms, risk disclosures and jurisdictional requirements.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-8">
              {[
                "Professional management support",
                "Structured risk approach",
                "Transparent communication",
                "For eligible clients only",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#061A40]">
                  <CheckCircle2 className="w-4 h-4 text-[#075FF7] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3D Glass Growth Bars Visual Graphic */}
          <div className="my-6 relative rounded-2xl overflow-hidden h-44 border border-[#DDE7F3] bg-white shadow-md">
            <Image
              src="/images/funds_growth.jpg"
              alt="Funds Management Structured Growth Architecture"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#061A40] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#DDE7F3]">
                Structured Risk Management
              </span>
              <span className="text-[11px] text-[#697386] font-medium bg-white/90 px-2 py-0.5 rounded">
                Strict Drawdown Controls
              </span>
            </div>
          </div>

          {/* Card CTA */}
          <div className="relative z-10 pt-2">
            <button
              type="button"
              onClick={() => setFundsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#061A40] bg-white hover:bg-[#F4F9FF] border border-[#DDE7F3] hover:border-[#075FF7] shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Learn About Fund Management</span>
              <ArrowRight className="w-4 h-4 text-[#075FF7]" />
            </button>
          </div>
        </div>

      </div>

      {/* Institutional Funds Management Modal */}
      {fundsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl bg-white p-7 sm:p-9 shadow-2xl border border-[#DDE7F3] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setFundsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#697386] hover:text-[#061A40] hover:bg-[#F4F9FF] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] text-xs font-bold text-[#075FF7] mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>SERVICE SPECIFICATION</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#061A40] mb-3">
              Funds Management Overview
            </h3>

            <p className="text-sm text-[#697386] leading-relaxed mb-5">
              Expermiment Traders offers structured capital support tailored exclusively for eligible, qualified clients who understand market realities and prioritize disciplined risk management over speculation.
            </p>

            <div className="space-y-3.5 mb-6 text-sm">
              <div className="p-3.5 rounded-xl bg-[#F4F9FF] border border-[#DCEEFF]">
                <div className="flex items-center gap-2 font-bold text-[#061A40] mb-1">
                  <Activity className="w-4 h-4 text-[#075FF7]" />
                  <span>Strict Risk Boundaries</span>
                </div>
                <p className="text-xs text-[#697386]">
                  Every strategy operates under predefined drawdown limits, capital allocation rules, and continuous monitoring.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F4F9FF] border border-[#DCEEFF]">
                <div className="flex items-center gap-2 font-bold text-[#061A40] mb-1">
                  <Lock className="w-4 h-4 text-[#075FF7]" />
                  <span>Client Eligibility & Disclosures</span>
                </div>
                <p className="text-xs text-[#697386]">
                  Participation is subject to individual suitability review, local jurisdiction compliance, and full risk acknowledgment. No fixed returns or profit guarantees are ever offered.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 leading-normal mb-6">
              <strong>Risk Disclosure:</strong> Financial markets involve substantial risk. Past performance does not guarantee future results. Capital may fluctuate.
            </div>

            <div className="flex items-center gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setFundsModalOpen(false)}
                className="flex-1 text-center py-3 px-5 rounded-full text-sm font-bold text-white bg-[#075FF7] hover:bg-[#258BFF] shadow-md transition-all"
              >
                Inquire via Telegram ↗
              </a>
              <button
                type="button"
                onClick={() => setFundsModalOpen(false)}
                className="py-3 px-5 rounded-full text-sm font-semibold text-[#697386] hover:bg-[#F4F9FF] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
