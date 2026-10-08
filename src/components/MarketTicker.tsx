"use client";

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export function MarketTicker() {
  const tickerItems = [
    { symbol: "XAU/USD", name: "Gold", price: "2,649.32", change: "+0.82%", up: true },
    { symbol: "EUR/USD", name: "Euro", price: "1.0842", change: "-0.15%", up: false },
    { symbol: "GBP/USD", name: "Pound", price: "1.2985", change: "+0.31%", up: true },
    { symbol: "US30", name: "Dow Jones", price: "42,380.00", change: "+0.45%", up: true },
    { symbol: "NAS100", name: "Nasdaq", price: "20,410.50", change: "+0.62%", up: true },
    { symbol: "BTC/USD", name: "Bitcoin", price: "68,420.00", change: "+2.10%", up: true },
    { symbol: "USD/JPY", name: "Yen", price: "152.40", change: "-0.22%", up: false },
    { symbol: "DXY", name: "US Dollar Index", price: "103.45", change: "-0.08%", up: false },
  ];

  return (
    <div className="w-full bg-[#061A40] text-white/90 border-b border-[#08245C] text-xs py-2 overflow-hidden select-none">
      <div className="flex items-center gap-8 whitespace-nowrap animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={`${item.symbol}-${index}`} className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wide">{item.symbol}</span>
            <span className="text-white/60 font-mono">{item.price}</span>
            <span
              className={`flex items-center gap-0.5 font-mono text-[11px] font-semibold px-1.5 py-0.5 rounded ${
                item.up
                  ? "text-emerald-400 bg-emerald-400/10"
                  : "text-rose-400 bg-rose-400/10"
              }`}
            >
              {item.up ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
