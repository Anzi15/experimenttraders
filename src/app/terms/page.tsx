import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { TELEGRAM_URL, EXNESS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | Expermiment Traders",
  description:
    "The terms, disclaimers and risk disclosures that apply when you use the Expermiment Traders website, community and services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions | Expermiment Traders",
    description:
      "The terms, disclaimers and risk disclosures that apply when you use the Expermiment Traders website, community and services.",
    url: "/terms",
    siteName: "Expermiment Traders",
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: [
      "These Terms & Conditions govern your access to and use of the Expermiment Traders website, our Telegram community and any related content or services. By visiting the website, joining the community or using our services, you confirm that you accept these Terms and agree to comply with them.",
      "If you do not agree with any part of these Terms, you must not use the website or our services.",
    ],
  },
  {
    id: "services",
    title: "Nature of Our Services",
    body: [
      "Expermiment Traders provides market-related content, which may include trading signals, technical and market analysis, educational material, community updates and other market insights. Where eligible and subject to separate agreement, we may also offer funds-management services.",
      "Content is provided for general informational purposes and may be changed, paused or withdrawn at any time without notice.",
    ],
  },
  {
    id: "advice",
    title: "No Financial Advice",
    body: [
      "Nothing on this website, in our community or in any of our communications constitutes personal financial advice, investment advice, tax advice or a recommendation to buy or sell any financial instrument. Signals and analysis express a view at the time they are published and are not tailored to your objectives, financial situation or needs.",
      "You should always do your own research and, where appropriate, consult an independent, qualified financial adviser before making investment decisions.",
    ],
  },
  {
    id: "no-guarantees",
    title: "No Guarantees of Profit",
    body: [
      "Trading involves risk and there is no guarantee of profit. Any performance figures, examples, testimonials or historical results shown are for illustration only and do not predict or promise future results. Past performance is not a reliable indicator of future performance.",
    ],
  },
  {
    id: "risk-disclosure",
    title: "Risk Disclosure",
    body: [
      "Trading leveraged financial instruments — including foreign exchange, commodities, indices and related products — carries a high level of risk and can result in the loss of some or all of your invested capital. Markets can move rapidly and unpredictably due to economic events, liquidity conditions and other factors outside anyone's control.",
      "You should never trade with money you cannot afford to lose, and you should carefully consider your financial situation, experience and risk tolerance before participating. You remain solely responsible for your own trading decisions and risk management.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    body: [
      "You must be at least 18 years old and legally capable of entering into a binding agreement in your jurisdiction to use the website or our services. You are responsible for confirming that use of our content and any trading activity is permitted where you live.",
    ],
  },
  {
    id: "responsibilities",
    title: "Your Responsibilities",
    body: ["When using the website and our community, you agree to:"],
    list: [
      "Provide accurate information where information is requested.",
      "Keep any credentials or access details confidential and notify us of any unauthorised use.",
      "Make your own independent assessment of any signal, analysis or market idea before acting on it.",
      "Comply with all applicable laws, regulations and third-party platform rules.",
    ],
  },
  {
    id: "community",
    title: "Telegram Community Rules",
    body: [
      "Our Telegram community is a space for market discussion and education. By joining, you agree not to post content that is unlawful, abusive, misleading, spammy or promotional without permission, or that infringes the rights of others.",
      "We may remove members who break these rules, and we reserve the right to moderate, restrict or discontinue the community at any time. Statements made by members are their own and do not represent the views of Expermiment Traders.",
    ],
  },
  {
    id: "funds",
    title: "Funds-Management Services",
    body: [
      "Funds-management services are offered only where appropriate, subject to eligibility, separate written terms, applicable regulation and individual assessment. Nothing on this website constitutes an offer to manage funds or a solicitation to invest.",
      "All trading decisions involve risk, and returns are never guaranteed. Any engagement for funds management is governed by its own agreement, which prevails over these Terms in the event of a conflict.",
    ],
  },
  {
    id: "affiliate-disclosure",
    title: "Affiliate Disclosure",
    body: [
      "We may participate in affiliate programmes and earn a commission. If you open an account with a broker — including through our Exness partner link — we may receive compensation at no additional cost to you. This does not affect the price you pay or the terms you receive.",
      "Affiliate relationships do not influence our analysis or signals, and we do not recommend any broker as suitable for your individual circumstances. Broker accounts are provided by the broker and are subject to that broker's own terms, policies and regulatory status.",
      "You can view the partner link we use on the dedicated broker section of this website.",
    ],
    link: {
      href: EXNESS_URL,
      label: "Visit our Exness partner link",
      external: true,
    },
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, chart illustrations, branding and software — is owned by or licensed to Expermiment Traders and is protected by copyright and other intellectual-property laws.",
      "You may view and share content for personal, non-commercial use. You may not reproduce, redistribute, sell or create derivative works from our content without prior written permission.",
    ],
  },
  {
    id: "prohibited",
    title: "Prohibited Conduct",
    body: ["You agree not to:"],
    list: [
      "Use the website or content for any unlawful or fraudulent purpose.",
      "Attempt to gain unauthorised access to any systems, accounts or data.",
      "Interfere with or disrupt the website, servers or networks.",
      "Scrape, copy or republish our signals or premium content for distribution.",
      "Impersonate any person or misrepresent your affiliation with us.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Services & Links",
    body: [
      "The website and community may include links to third-party websites, platforms or brokers, including Telegram and Exness. These are provided for convenience only. We do not control and are not responsible for the content, availability or practices of third-party services, and accessing them is at your own risk.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimers & Limitation of Liability",
    body: [
      "The website and all content are provided on an 'as is' and 'as available' basis without warranties of any kind, whether express or implied, including warranties of accuracy, completeness, merchantability or fitness for a particular purpose.",
      "To the maximum extent permitted by law, Expermiment Traders and its team shall not be liable for any indirect, incidental, special or consequential loss arising from your use of the website, reliance on any content or participation in any market, including loss of profits or capital.",
      "Your sole remedy for dissatisfaction with the website or services is to stop using them.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    body: [
      "You agree to indemnify and hold harmless Expermiment Traders and its team from any claims, damages, liabilities or expenses arising from your misuse of the website, your breach of these Terms or your trading activities.",
    ],
  },
  {
    id: "termination",
    title: "Suspension & Termination",
    body: [
      "We may suspend or terminate your access to the website or community at any time, with or without notice, if we reasonably believe these Terms have been breached or if required by law. Provisions that by their nature should survive termination — including disclaimers, liability limits and indemnities — will continue to apply.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: [
      "We may revise these Terms from time to time. The latest version will be published on this page with an updated revision date. Continued use of the website or our services after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: [
      "These Terms are governed by the laws applicable in the jurisdiction where Expermiment Traders operates, without regard to conflict-of-law principles. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    body: [
      "Questions about these Terms & Conditions can be sent through our Telegram community, where our team will be happy to assist you.",
    ],
    link: {
      href: TELEGRAM_URL,
      label: "Contact us on Telegram",
      external: true,
    },
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      badge="Terms & Conditions"
      title="Terms & Conditions"
      description="The terms, disclaimers and risk disclosures that apply when you visit this website, join the Expermiment Traders community or use our services."
      updated="8 October 2026"
      sections={SECTIONS}
      related={[
        {
          href: "/privacy",
          label: "Legal",
          title: "Privacy Policy",
          description:
            "How we collect, use and protect your personal information across our website and community.",
        },
      ]}
    />
  );
}
