import React from "react";

interface LogoProps {
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ light = false, className = "", size = "md" }: LogoProps) {
  const iconHeight = size === "lg" ? "h-9 w-9" : size === "sm" ? "h-6 w-6" : "h-7 w-7";
  const titleSize = size === "lg" ? "text-lg" : size === "sm" ? "text-xs" : "text-sm";
  const subSize = size === "lg" ? "text-base tracking-[0.18em]" : size === "sm" ? "text-[10px] tracking-[0.15em]" : "text-xs tracking-[0.16em]";

  return (
    <div className={`flex items-center gap-2.5 font-bold select-none ${className}`}>
      {/* Dynamic 5-bar ascending market icon */}
      <div className={`relative flex items-end gap-[3px] p-1.5 rounded-lg ${light ? "bg-white/10" : "bg-[#F0F6FF]"} ${iconHeight}`}>
        <span className="w-1 bg-[#258BFF] rounded-full h-[35%]" />
        <span className="w-1 bg-[#075FF7] rounded-full h-[55%]" />
        <span className="w-1 bg-[#075FF7] rounded-full h-[75%]" />
        <span className="w-1 bg-[#061A40] rounded-full h-[100%]" />
        <span className="w-1 bg-[#3D9BFF] rounded-full h-[60%]" />
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`font-black ${titleSize} tracking-tight ${
            light ? "text-white" : "text-[#061A40]"
          }`}
        >
          EXPERMIMENT
        </span>
        <span
          className={`font-bold ${subSize} font-mono ${
            light ? "text-[#3D9BFF]" : "text-[#075FF7]"
          }`}
        >
          TRADERS
        </span>
      </div>
    </div>
  );
}
