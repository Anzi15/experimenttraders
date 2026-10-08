import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Expermiment Traders | Trading Signals & Market Insights",
  description:
    "Join the Expermiment Traders community for structured market insights, trading signals and financial-market education backed by six years of experience and a 30,000+ member community.",
  keywords: [
    "trading signals",
    "market insights",
    "forex analysis",
    "gold analysis",
    "trading community",
    "financial market education",
    "Telegram trading community",
    "Expermiment Traders",
  ],
  authors: [{ name: "Expermiment Traders" }],
  creator: "Expermiment Traders",
  publisher: "Expermiment Traders",
  metadataBase: new URL("https://expermimenttraders.com"),
  openGraph: {
    title: "Expermiment Traders | Trading Signals & Market Insights",
    description:
      "Join the Expermiment Traders community for structured market insights, trading signals and financial-market education backed by six years of experience and a 30,000+ member community.",
    siteName: "Expermiment Traders",
    images: [
      {
        url: "/images/market_chart.jpg",
        width: 1200,
        height: 630,
        alt: "Expermiment Traders Market Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expermiment Traders | Trading Signals & Market Insights",
    description:
      "Join the Expermiment Traders community for structured market insights, trading signals and financial-market education backed by six years of experience and a 30,000+ member community.",
    images: ["/images/market_chart.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-[#FFFFFF] text-[#0B0D12] font-sans antialiased selection:bg-[#075FF7] selection:text-white">
        {children}
      </body>
    </html>
  );
}
