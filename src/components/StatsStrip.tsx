import React from "react";
import { Clock, Users, Briefcase, Layers } from "lucide-react";

export function StatsStrip() {
  const stats = [
    {
      value: "6+",
      label: "Years of Market Experience",
      icon: Clock,
      subtext: "Navigating diverse market cycles",
    },
    {
      value: "30K+",
      label: "Community Members",
      icon: Users,
      subtext: "Traders receiving insights daily",
    },
    {
      value: "Hundreds",
      label: "of Clients Worked With",
      icon: Briefcase,
      subtext: "Personalized market engagement",
    },
    {
      value: "2",
      label: "Core Services",
      icon: Layers,
      subtext: "Signals & Fund Management",
    },
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl border border-[#DDE7F3] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-[#DDE7F3]">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-start gap-4 ${
                  idx !== 0 ? "lg:pl-8" : ""
                } ${idx > 1 ? "pt-6 lg:pt-0" : ""}`}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#F4F9FF] border border-[#DCEEFF] flex items-center justify-center text-[#075FF7]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#061A40] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-[#0B0D12] mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-xs text-[#697386] mt-0.5 hidden sm:block">
                    {stat.subtext}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
