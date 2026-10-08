import React from "react";

export function PhilosophySection() {
  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#DDE7F3]/70">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Heading */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] text-xs font-bold uppercase tracking-wider text-[#075FF7] w-fit">
            <span>OUR PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#061A40] tracking-tight leading-[1.15]">
            We don’t believe every <br className="hidden sm:inline" />
            market move is an opportunity.
          </h2>

          <p className="text-base text-[#697386] leading-relaxed max-w-md pt-2">
            The difference between sustainable trading and emotional speculation is knowing when to stand aside, waiting for true statistical edge and technical confluence.
          </p>
        </div>

        {/* Right Column: Monumental Royal Blue Manifesto Typography */}
        <div className="lg:col-span-6 lg:pl-6 border-l-0 lg:border-l lg:border-[#DDE7F3]">
          <div className="space-y-2 sm:space-y-4">
            <div className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-[#075FF7] leading-none">
              Analysis.{" "}
              <span className="text-[#258BFF]">Patience.</span>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-[#061A40] leading-none">
              Risk.{" "}
              <span className="text-[#075FF7]">Execution.</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#697386] uppercase tracking-widest mt-6">
            // Core Tenets of Expermiment Traders
          </p>
        </div>
      </div>
    </section>
  );
}
