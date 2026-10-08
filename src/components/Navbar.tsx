"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { TelegramIcon } from "./icons/TelegramIcon";
import { TELEGRAM_URL, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#DDE7F3] shadow-[0_4px_20px_rgba(6,26,64,0.04)] py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-[#DDE7F3]/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/#hero" className="transition-opacity hover:opacity-90">
            <Logo />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={`/${link.href}`}
                className="px-3.5 py-1.5 text-sm font-medium text-[#697386] hover:text-[#075FF7] hover:bg-[#F4F9FF] rounded-full transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#075FF7] hover:bg-[#258BFF] shadow-[0_4px_14px_rgba(7,95,247,0.3)] hover:shadow-[0_6px_20px_rgba(7,95,247,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <TelegramIcon className="w-4 h-4" />
              <span>Join Telegram</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#061A40] hover:bg-[#F4F9FF] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#DDE7F3] bg-white px-4 pt-3 pb-6 shadow-xl transition-all">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={`/${link.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-[#061A40] hover:bg-[#F4F9FF] hover:text-[#075FF7] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-base font-semibold text-white bg-[#075FF7] hover:bg-[#258BFF] shadow-md transition-colors"
              >
                <TelegramIcon className="w-4 h-4" />
                <span>Join Telegram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
