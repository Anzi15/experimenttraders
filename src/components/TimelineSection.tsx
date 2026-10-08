import React from "react";
import { TIMELINE_MILESTONES } from "@/lib/constants";

export function TimelineSection() {
  return (
    <section id="about" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header with Top-Right Badge */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] text-xs font-bold uppercase tracking-wider text-[#075FF7] mb-3">
            <span>OUR JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#061A40] tracking-tight leading-[1.15]">
            Six years cannot be condensed <br className="hidden sm:inline" />
            into a trading course.
          </h2>
          <p className="text-base text-[#697386] max-w-2xl mt-4 leading-relaxed">
            It comes from observing different market environments, studying price behavior, managing risk and continuously adapting.
          </p>
        </div>

        {/* Small badge at top/right */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F9FF] border border-[#075FF7]/30 text-xs sm:text-sm font-bold text-[#075FF7] shadow-sm w-fit">
          <span className="w-2 h-2 rounded-full bg-[#075FF7] animate-pulse" />
          <span>6+ Years • Hundreds of Clients • 30K+ Community</span>
        </div>
      </div>

      {/* Horizontal Timeline Container */}
      <div className="relative mt-8">
        {/* Connecting Line across desktop */}
        <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-[2px] bg-gradient-to-r from-[#DDE7F3] via-[#075FF7] to-[#258BFF]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TIMELINE_MILESTONES.map((item, index) => {
            const isLatest = index === TIMELINE_MILESTONES.length - 1;
            return (
              <div
                key={item.year}
                className="relative flex flex-col group p-6 rounded-2xl bg-white hover:bg-[#F4F9FF] border border-[#DDE7F3] hover:border-[#075FF7]/40 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Year and Node */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${
                      isLatest ? "text-[#075FF7]" : "text-[#061A40]"
                    }`}
                  >
                    {item.year}
                  </span>
                  
                  {/* Glowing Node Marker */}
                  <div className="relative flex items-center justify-center">
                    <span
                      className={`w-4 h-4 rounded-full border-2 ${
                        isLatest
                          ? "bg-[#075FF7] border-white shadow-[0_0_12px_rgba(7,95,247,0.8)]"
                          : "bg-white border-[#075FF7] group-hover:bg-[#075FF7]"
                      } transition-colors`}
                    />
                    {isLatest && (
                      <span className="absolute w-7 h-7 rounded-full bg-[#075FF7]/20 animate-ping pointer-events-none" />
                    )}
                  </div>
                </div>

                {/* Milestone Content */}
                <h3 className="text-lg font-bold text-[#061A40] mb-2 group-hover:text-[#075FF7] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#697386] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
