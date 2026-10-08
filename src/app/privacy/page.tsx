import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { TELEGRAM_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Expermiment Traders",
  description:
    "How Expermiment Traders collects, uses, stores and protects your personal information across our website and community channels.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Expermiment Traders",
    description:
      "How Expermiment Traders collects, uses, stores and protects your personal information across our website and community channels.",
    url: "/privacy",
    siteName: "Expermiment Traders",
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    body: [
      "Expermiment Traders is a market-focused community offering trading signals, market insights, financial-market education and, where applicable, funds-management services. This Privacy Policy explains how we collect, use, disclose and protect information when you visit this website, join our Telegram community or otherwise interact with us.",
      "By using this website or our community channels, you acknowledge that you have read and understood this policy.",
    ],
  },
  {
    id: "information-you-provide",
    title: "Information You Provide",
    body: ["We collect information that you choose to give us, including:"],
    list: [
      "Contact details such as your name, email address or Telegram username when you reach out to us.",
      "The content of your messages, questions, enquiries or feedback sent through Telegram, email or other channels.",
      "Information you provide when applying for or using our services, subject to any separate agreement or eligibility assessment.",
    ],
  },
  {
    id: "information-collected-automatically",
    title: "Information Collected Automatically",
    body: [
      "When you visit the website, certain data is collected automatically through cookies, server logs and similar technologies:",
    ],
    list: [
      "IP address, browser type, device type and operating system.",
      "Pages visited, time spent on pages, referring URLs and timestamps.",
      "Approximate location derived from IP address for analytics and security purposes.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    body: ["We use the information we collect to:"],
    list: [
      "Operate, maintain and improve the website and our community experience.",
      "Respond to your enquiries and provide the services you request.",
      "Send community updates, market insights and service-related messages through Telegram or other channels you have chosen.",
      "Monitor performance, understand how the website is used and develop new content.",
      "Detect, prevent and address fraud, abuse or security issues.",
      "Comply with legal obligations and enforce our terms.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Similar Technologies",
    body: [
      "Cookies are small files stored on your device that help the website function, remember preferences and provide analytics information. We may use essential cookies required for the site to work, plus analytics cookies that help us understand traffic and improve the experience.",
      "You can control or delete cookies through your browser settings. Disabling some cookies may affect how certain parts of the website behave.",
    ],
  },
  {
    id: "how-we-share",
    title: "How We Share Information",
    body: [
      "We do not sell your personal information. We may share information only in the following limited circumstances:",
    ],
    list: [
      "With service providers who help us operate the website, analytics or communications, under appropriate confidentiality obligations.",
      "With your consent or at your direction, such as when you join our Telegram community or open an account through a partner link.",
      "When required by law, regulation, legal process or enforceable governmental request.",
      "In connection with a merger, acquisition or sale of assets, in which case we will endeavour to ensure your information remains protected.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Services & Links",
    body: [
      "The website contains links to third-party services, including Telegram, social networks and broker partners such as Exness. These parties collect and process information under their own privacy policies, which we encourage you to review.",
      "We are not responsible for the privacy practices, content or security of third-party websites or services.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    body: [
      "We keep personal information only for as long as necessary to fulfil the purposes described in this policy, including to satisfy legal, accounting or reporting requirements. When information is no longer required, we delete it or anonymise it.",
      "Messages sent through Telegram remain subject to Telegram's own retention practices.",
    ],
  },
  {
    id: "security",
    title: "How We Protect Your Information",
    body: [
      "We use reasonable technical and organisational measures designed to protect your information from unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    body: ["Depending on where you live, you may have the right to:"],
    list: [
      "Request access to the personal information we hold about you.",
      "Request correction or deletion of your information.",
      "Object to or restrict certain processing, or withdraw consent where processing is based on consent.",
      "Request a copy of your information in a portable format.",
      "Opt out of non-essential cookies and marketing messages.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: [
      "This website and our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from minors. If you believe a minor has provided us with information, please contact us so we can remove it.",
    ],
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    body: [
      "Our community is global, so information may be processed in countries other than your own. Where we transfer information internationally, we take reasonable steps to ensure an appropriate level of protection is maintained.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology or legal requirements. The latest version will always be published on this page with an updated revision date. Continued use of the website after changes are made constitutes acceptance of the revised policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    body: [
      "If you have questions, requests or concerns about this Privacy Policy or how your information is handled, please reach out through our Telegram community and our team will assist you.",
    ],
    link: {
      href: TELEGRAM_URL,
      label: "Contact us on Telegram",
      external: true,
    },
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="Privacy Policy"
      title="Privacy Policy"
      description="This policy describes how Expermiment Traders collects, uses and protects your personal information when you use this website and our community channels."
      updated="8 October 2026"
      sections={SECTIONS}
      related={[
        {
          href: "/terms",
          label: "Legal",
          title: "Terms & Conditions",
          description:
            "The rules and disclaimers that apply when you use this website and our community.",
        },
      ]}
    />
  );
}
