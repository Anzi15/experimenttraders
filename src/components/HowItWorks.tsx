import React from "react";
import { Search, FileSpreadsheet, Send, UserCheck, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "search":
        return Search;
      case "file-text":
        return FileSpreadsheet;
      case "send":
        return Send;
      case "user-check":
        return UserCheck;
      default:
        return Search;
    }
  };

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] text-xs font-bold uppercase tracking-wider text-[#075FF7] mb-3">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#061A40] tracking-tight leading-[1.15]">
            From Market Analysis <br className="hidden sm:inline" />
            to Actionable Insight.
          </h2>
        </div>
        <p className="text-base text-[#697386] max-w-md lg:text-right leading-relaxed">
          A simple and transparent process designed to keep you informed and in control.
        </p>
      </div>

      {/* 4 Process Cards with Horizontal Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {HOW_IT_WORKS_STEPS.map((step, idx) => {
          const Icon = getIcon(step.icon);
          const isNotLast = idx < HOW_IT_WORKS_STEPS.length - 1;

          return (
            <div key={step.number} className="relative group">
              <div className="h-full rounded-2xl bg-white border border-[#DDE7F3] group-hover:border-[#075FF7]/40 p-6 shadow-sm group-hover:shadow-[0_12px_30px_rgba(7,95,247,0.08)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Top: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#F4F9FF] border border-[#DCEEFF] flex items-center justify-center text-[#075FF7] group-hover:bg-[#075FF7] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold font-mono text-[#697386] bg-[#F4F9FF] px-2.5 py-1 rounded-full border border-[#DCEEFF]">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#061A40] mb-2.5 group-hover:text-[#075FF7] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#697386] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Desktop Arrow */}
              {isNotLast && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-[#DDE7F3] shadow-sm items-center justify-center text-[#075FF7]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
