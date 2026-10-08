"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";

export function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const leftColumnFAQs = FAQS.slice(0, 4);
  const rightColumnFAQs = FAQS.slice(4, 8);

  const renderFAQItem = (faq: (typeof FAQS)[0], actualIndex: number) => {
    const isOpen = openIndices.includes(actualIndex);

    return (
      <div
        key={faq.question}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? "border-[#075FF7]/40 bg-[#F4F9FF]/40 shadow-sm"
            : "border-[#DDE7F3] bg-white hover:border-[#DDE7F3]"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFAQ(actualIndex)}
          className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-left gap-4"
          aria-expanded={isOpen}
        >
          <span className="text-base font-bold text-[#061A40]">
            {faq.question}
          </span>
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
              isOpen
                ? "bg-[#075FF7] text-white rotate-180"
                : "bg-[#F4F9FF] text-[#075FF7] hover:bg-[#DCEEFF]"
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </span>
        </button>

        {isOpen && (
          <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#697386] leading-relaxed border-t border-[#DDE7F3]/40">
            {faq.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] text-xs font-bold uppercase tracking-wider text-[#075FF7] mb-3">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#061A40] tracking-tight">
            Common Questions
          </h2>
        </div>
        <a
          href="#faqs"
          className="text-sm font-bold text-[#075FF7] hover:text-[#258BFF] transition-colors inline-flex items-center gap-1 w-fit"
        >
          View All FAQs
        </a>
      </div>

      {/* 2-Column Accordion Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumnFAQs.map((faq, idx) => renderFAQItem(faq, idx))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumnFAQs.map((faq, idx) => renderFAQItem(faq, idx + 4))}
        </div>
      </div>
    </section>
  );
}
