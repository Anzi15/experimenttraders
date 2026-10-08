import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Home } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export interface LegalSection {
  id: string;
  title: string;
  body?: string[];
  list?: string[];
  link?: {
    href: string;
    label: string;
    external?: boolean;
  };
}

export interface RelatedLink {
  href: string;
  label: string;
  title: string;
  description: string;
}

interface LegalPageProps {
  badge: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
  related: RelatedLink[];
}

export function LegalPage({
  badge,
  title,
  description,
  updated,
  sections,
  related,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-white text-[#0B0D12] selection:bg-[#075FF7] selection:text-white">
      {/* Sticky Header */}
      <Navbar />
      <div className="pt-20" />

      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F9FF] via-white to-white border-b border-[#DDE7F3]">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#075FF7]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#3D9BFF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#697386] font-medium mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[#075FF7] hover:text-[#258BFF] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-[#DDE7F3]">/</span>
            <span className="text-[#061A40] font-semibold">{title}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCEEFF] text-xs font-bold uppercase tracking-wider text-[#075FF7] w-fit mb-4 shadow-sm">
            <span>{badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#061A40] tracking-tight leading-[1.1] max-w-3xl">
            {title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#697386] leading-relaxed max-w-2xl">
            {description}
          </p>

          <p className="mt-4 text-xs font-mono text-[#697386] uppercase tracking-wider">
            Last updated: {updated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl border border-[#DDE7F3] bg-[#FAFCFF] p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#061A40]">
                On this page
              </span>
              <ul className="mt-4 flex flex-col space-y-2.5 text-sm">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex items-start gap-2.5 text-[#697386] hover:text-[#075FF7] transition-colors"
                    >
                      <span className="font-mono text-[11px] pt-0.5 text-[#075FF7]/70 w-5 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#DDE7F3]">
            {sections.map((section, index) => (
              <article key={section.id} id={section.id} className="py-8 first:pt-0 scroll-mt-28">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-sm font-bold text-[#075FF7]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#061A40] tracking-tight">
                    {section.title}
                  </h2>
                </div>

                {section.body?.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-[15px] sm:text-base text-[#697386] leading-relaxed mb-3 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[15px] sm:text-base text-[#697386] leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#075FF7] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.link && (
                  <a
                    href={section.link.href}
                    target={section.link.external ? "_blank" : undefined}
                    rel={section.link.external ? "noopener noreferrer" : undefined}
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#075FF7] hover:bg-[#258BFF] shadow-[0_4px_14px_rgba(7,95,247,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>{section.link.label}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related Legal Pages */}
      <section className="pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-[#DDE7F3] bg-white p-6 hover:border-[#075FF7]/50 hover:shadow-[0_12px_30px_rgba(7,95,247,0.08)] transition-all duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#075FF7]">
                {link.label}
              </span>
              <h3 className="mt-2 text-lg font-bold text-[#061A40] group-hover:text-[#075FF7] transition-colors">
                {link.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#697386] leading-relaxed">{link.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#075FF7]">
                <span>Read</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#697386] hover:text-[#075FF7] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
