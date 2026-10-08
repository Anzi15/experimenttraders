import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";

export function FounderSection() {
  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Professional Photo */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden border border-[#DDE7F3] shadow-[0_20px_50px_rgba(7,95,247,0.08)] bg-white p-2">
            <div className="relative h-[340px] sm:h-[440px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/analyst.jpg"
                alt="Disciplined Market Analyst at Expermiment Traders"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061A40]/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-2 bg-[#061A40]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3D9BFF]" />
                  <span className="font-semibold">Discipline • Analysis • Structure</span>
                </div>
                <span className="hidden sm:inline-block text-[11px] text-white/80 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md">
                  Active Since 2020
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Content */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] text-xs font-bold uppercase tracking-wider text-[#075FF7] w-fit">
            <span>BEHIND EXPERMIMENT TRADERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#061A40] tracking-tight leading-[1.15]">
            Markets reward discipline <br />
            more than excitement.
          </h2>

          <p className="text-base sm:text-lg text-[#697386] leading-relaxed">
            Expermiment Traders was built around a simple goal — to help traders understand the markets through clearer analysis, discipline and a realistic approach. Over the past six years, the brand has worked with hundreds of clients and built a community of more than 30,000 members who share an interest in market awareness and improvement.
          </p>

          <div className="pt-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-[#075FF7] hover:bg-[#258BFF] shadow-[0_4px_16px_rgba(7,95,247,0.25)] hover:shadow-[0_8px_24px_rgba(7,95,247,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Meet the Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
