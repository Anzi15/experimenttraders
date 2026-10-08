import React from "react";
import Link from "next/link";
import { Send, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { TELEGRAM_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#DDE7F3] pt-16 pb-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-[#DDE7F3]">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <Link href="/#hero">
              <Logo size="lg" />
            </Link>
            <p className="text-sm text-[#697386] leading-relaxed max-w-sm pt-1">
              Market insights built on experience, analysis and discipline.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] flex items-center justify-center text-[#075FF7] hover:bg-[#075FF7] hover:text-white transition-all duration-200"
                aria-label="Telegram Community"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#061A40]">
              Company
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#hero" className="text-[#697386] hover:text-[#075FF7] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-[#697386] hover:text-[#075FF7] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#community" className="text-[#697386] hover:text-[#075FF7] transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="text-[#697386] hover:text-[#075FF7] transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#061A40]">
              Services
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-[#697386] hover:text-[#075FF7] transition-colors">
                  Trading Signals
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[#697386] hover:text-[#075FF7] transition-colors">
                  Funds Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#061A40]">
              Legal
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-[#697386] hover:text-[#075FF7] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#697386] hover:text-[#075FF7] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/terms#risk-disclosure" className="text-[#697386] hover:text-[#075FF7] transition-colors">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link href="/terms#affiliate-disclosure" className="text-[#697386] hover:text-[#075FF7] transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#061A40]">
              Social
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#075FF7] hover:text-[#258BFF] transition-colors"
                >
                  <span>Telegram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Risk Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-start justify-between gap-6 text-xs text-[#697386]">
          <div className="max-w-3xl leading-relaxed">
            <p className="font-semibold text-[#061A40] mb-1">Risk Disclaimer:</p>
            <p>
              Trading leveraged financial instruments involves significant risk and may not be suitable for all investors. Nothing on this website constitutes guaranteed returns, personalized financial advice or a promise of profit. Users are responsible for their own trading decisions and risk management. Past performance does not guarantee future results.
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 text-xs text-[#697386] shrink-0">
            <span className="whitespace-nowrap font-medium">
              © 2026 Expermiment Traders. All rights reserved.
            </span>
          </div>
        </div>

        {/* Anzi & Co. Credit — Very Bottom Row */}
        <div className="mt-6 pt-6 border-t border-[#DDE7F3] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#697386]">
            Website designed &amp; developed by
          </span>
          <span className="text-xl font-black tracking-tight text-[#061A40] leading-none whitespace-nowrap">
            ANZI <span className="text-[#075FF7]">&amp;</span> CO.
          </span>
        </div>
      </div>
    </footer>
  );
}
