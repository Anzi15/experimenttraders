import { Navbar } from "@/components/Navbar";
import { MarketTicker } from "@/components/MarketTicker";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { BigStatement } from "@/components/BigStatement";
import { ServicesSection } from "@/components/ServicesSection";
import { TimelineSection } from "@/components/TimelineSection";
import { HowItWorks } from "@/components/HowItWorks";
import { TelegramCommunity } from "@/components/TelegramCommunity";
import { WhyUs } from "@/components/WhyUs";
import { ExnessPartner } from "@/components/ExnessPartner";
import { FounderSection } from "@/components/FounderSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { TelegramWidget } from "@/components/TelegramWidget";
import { SocialProofToast } from "@/components/SocialProofToast";
import { TelegramPopup } from "@/components/TelegramPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0B0D12] overflow-x-hidden selection:bg-[#075FF7] selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Real-time Financial Market Ticker Marquee */}
      <div className="pt-20">
        <MarketTicker />
      </div>

      {/* Hero with Rounded Blue Container & Floating Glass UI */}
      <Hero />

      {/* Four Metrics Statistics Strip */}
      <StatsStrip />

      {/* Big Statement Editorial Section with Abstract Chart */}
      <BigStatement />

      {/* Two Core Services: Trading Signals & Funds Management */}
      <ServicesSection />

      {/* Six Years Journey & Horizontal Timeline */}
      <TimelineSection />

      {/* 4-Step Process: Analysis to Actionable Insight */}
      <HowItWorks />

      {/* 30,000+ Member Telegram Community Section */}
      <TelegramCommunity />

      {/* 4 Institutional Pillars of Expermiment Traders */}
      <WhyUs />

      {/* Recommended Broker: Exness Affiliate Partner Section */}
      <ExnessPartner />

      {/* Behind Expermiment Traders: Founder / Analyst Desk */}
      <FounderSection />

      {/* Manifesto Philosophy Typography Section */}
      <PhilosophySection />

      {/* Frequently Asked Questions 2-Column Accordion */}
      <FAQSection />

      {/* Final Call to Action Block with 3D Globe Visual */}
      <FinalCTA />

      {/* Footer & Comprehensive Risk Disclaimer */}
      <Footer />

      {/* Interactive Floating Telegram Widget (Right Side) */}
      <TelegramWidget />

      {/* Subtle Live Community Activity Toast (Left Side) */}
      <SocialProofToast />

      {/* First-Visit Telegram Join Popup (Center) */}
      <TelegramPopup />
    </main>
  );
}
