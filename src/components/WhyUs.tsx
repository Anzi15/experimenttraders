import React from "react";
import { TrendingUp, Layers, Users, Target } from "lucide-react";

export function WhyUs() {
  const features = [
    {
      title: "Six Years in Markets",
      description: "Experience developed across changing market conditions.",
      icon: TrendingUp,
    },
    {
      title: "Structured Analysis",
      description: "A methodical approach rather than emotionally driven decisions.",
      icon: Layers,
    },
    {
      title: "Community First",
      description: "A growing community of more than 30,000 members.",
      icon: Users,
    },
    {
      title: "Focused Offering",
      description: "Signals and fund-management services without unnecessary complexity.",
      icon: Target,
    },
  ];

  return (
    <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F9FF] border border-[#DCEEFF] text-xs font-bold uppercase tracking-wider text-[#075FF7] mb-3">
          <span>WHY EXPERMIMENT TRADERS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#061A40] tracking-tight">
          A focused approach. <br />
          A growing community.
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="rounded-2xl p-6 bg-white border border-[#DDE7F3] hover:border-[#075FF7]/50 shadow-sm hover:shadow-[0_12px_30px_rgba(7,95,247,0.08)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F4F9FF] border border-[#DCEEFF] flex items-center justify-center text-[#075FF7] group-hover:bg-[#075FF7] group-hover:text-white transition-all duration-300 mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#061A40] mb-2 group-hover:text-[#075FF7] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#697386] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
