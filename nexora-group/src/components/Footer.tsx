"use client";

import React, { useState, useEffect } from "react";
import { X, Shield, FileText } from "lucide-react";
import { SITE_CONFIG, SERVICE_DIVISIONS } from "../config/siteConfig";

type LegalDocType = "privacy" | "terms" | null;

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalDocType>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    // Close modal on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveLegalModal(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (activeLegalModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeLegalModal]);

  return (
    <>
      <footer className="bg-zinc-950 text-zinc-400 text-sm border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 border-b border-zinc-900">
          {/* Col 1: Brand (Full width on mobile, 4 cols on desktop) */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-semibold tracking-tight text-lg">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block" />
              <span>{SITE_CONFIG.name}</span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.tagline} A multi-sector enterprise building technology products, digital growth systems, and commercial ventures.
            </p>
          </div>

          {/* Col 2: Navigation (1 col on mobile, 2 cols on desktop) */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#investors" className="hover:text-white transition-colors">In The Lab</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#ventures" className="hover:text-white transition-colors">Ventures</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Divisions (1 col on mobile, 3 cols on desktop) */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Service Divisions
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICE_DIVISIONS.map((div) => (
                <li key={div.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {div.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact (Full width on mobile, 3 cols on desktop) */}
          <div className="col-span-2 lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Contact
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {SITE_CONFIG.contact.whatsappDisplay}
                </a>
              </li>
              <li className="text-zinc-500">{SITE_CONFIG.contact.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="text-center sm:text-left">
            © {currentYear !== null ? currentYear : "2026"} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveLegalModal("privacy")}
              className="hover:text-zinc-200 transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveLegalModal("terms")}
              className="hover:text-zinc-200 transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>

      {/* --- RESPONSIVE LEGAL DOCUMENT MODAL --- */}
      {activeLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-6"
          onClick={() => setActiveLegalModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[88vh] sm:max-h-[85vh] bg-zinc-950 border-t sm:border border-zinc-800 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="px-5 sm:px-8 py-4 sm:py-5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                {activeLegalModal === "privacy" ? (
                  <Shield className="w-5 h-5 text-blue-400" />
                ) : (
                  <FileText className="w-5 h-5 text-blue-400" />
                )}
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    {activeLegalModal === "privacy"
                      ? "Privacy Policy"
                      : "Terms of Service"}
                  </h2>
                  <p className="text-[11px] text-zinc-400">
                    {SITE_CONFIG.name} • Effective November 2026
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                aria-label="Close modal"
                className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeLegalModal === "privacy" ? (
                <>
                  <p className="text-zinc-400">
                    This Privacy Policy describes how <strong>{SITE_CONFIG.name}</strong> (&ldquo;Nexora Group&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and safeguards personal and business information across our corporate website, digital SaaS products (including <em>Receipta</em>, <em>CatalogPal</em>, <em>Africommerce</em>, <em>ProfitPal</em>, <em>Velo Pulse</em>, and <em>Creator Unite</em>), interactive gaming experiences (<em>Become A Legend</em>), and commercial ventures.
                  </p>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      1. Information We Collect
                    </h3>
                    <p>
                      We collect information that you voluntarily provide when you submit a project enquiry, request an investor deck, apply as a contributor on Velo Pulse, or register on any Nexora Group platform:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                      <li><strong>Contact &amp; Identity Data:</strong> Name, organization name, email address, and phone/WhatsApp number.</li>
                      <li><strong>Project &amp; Commercial Briefs:</strong> Information shared regarding software builds, SEO audits, strategic consultations, or investment inquiries.</li>
                      <li><strong>Technical &amp; Usage Telemetry:</strong> Browser type, time zone, device diagnostics, and anonymized interaction metrics used to maintain platform security and performance.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      2. How We Use Your Information
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                      <li>To respond to client consultation requests, partnership proposals, and investor relations inquiries.</li>
                      <li>To operate, maintain, and scale our SaaS platforms, digital publishing networks, and interactive gaming experiences.</li>
                      <li>To fulfill commercial orders across our food distribution, sourcing, and general merchandise ventures.</li>
                      <li>To comply with applicable data protection regulations, including the Nigeria Data Protection Act (NDPA) and international privacy standards (GDPR/CCPA where applicable).</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      3. Data Confidentiality &amp; Third-Party Services
                    </h3>
                    <p>
                      Nexora Group does not sell, rent, or trade your personal or corporate data. Project briefs and investor communications are treated with strict commercial confidentiality. We only utilize trusted infrastructure providers (such as cloud hosting, database providers, and direct communication gateways like WhatsApp/Email) necessary to deliver our services.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      4. Data Retention &amp; Your Rights
                    </h3>
                    <p>
                      You may request access to, correction of, or deletion of your personal information held by Nexora Group at any time by contacting our data desk at{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-blue-400 underline"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-zinc-400">
                    Welcome to <strong>{SITE_CONFIG.name}</strong>. By accessing this website, engaging our consulting or engineering divisions, using our digital platforms, or participating in our commercial ventures, you agree to the following Terms of Service.
                  </p>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      1. Scope of Services &amp; Platforms
                    </h3>
                    <p>
                      Nexora Group operates across four primary technology divisions—Gaming &amp; Interactive Experiences, Fintech &amp; Digital Products, SEO &amp; Digital Growth, and Consultation &amp; Strategy—alongside physical commercial distribution ventures. Specific client engagements, custom software builds, and retainers are governed by separate written Statements of Work (SOW) or service agreements.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      2. Intellectual Property Rights
                    </h3>
                    <p>
                      All proprietary software architectures, brand assets, trademarks, game mechanics, and products showcased on this website—including but not limited to <em>Become A Legend</em>, <em>Receipta</em>, <em>CatalogPal</em>, <em>Africommerce</em>, <em>ProfitPal</em>, <em>Velo Pulse</em>, and <em>Creator Unite</em>—are the intellectual property of Nexora Group unless otherwise stated in a client agreement. Unauthorized reproduction or reverse engineering is strictly prohibited.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      3. Investor &amp; Forward-Looking Statements
                    </h3>
                    <p>
                      Information presented in the &ldquo;In The Lab&rdquo; and Roadmap sections (including development milestones for <em>Become A Legend</em> and beta platforms) is provided for informational and partnership exploration purposes. It does not constitute a public solicitation of securities. Formal investment terms are provided exclusively through qualified investor agreements.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      4. Limitation of Liability &amp; Governing Law
                    </h3>
                    <p>
                      Nexora Group provides its website information on an &ldquo;as-is&rdquo; basis and shall not be liable for indirect or consequential damages arising from the use of this website or third-party links. These Terms are governed by the laws of the Federal Republic of Nigeria, without prejudice to international commercial arbitration where agreed in writing.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-8 py-4 bg-zinc-900/90 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3 text-xs">
                <button
                  type="button"
                  onClick={() =>
                    setActiveLegalModal(
                      activeLegalModal === "privacy" ? "terms" : "privacy"
                    )
                  }
                  className="text-blue-400 hover:text-blue-300 font-medium underline-offset-4 hover:underline"
                >
                  Switch to{" "}
                  {activeLegalModal === "privacy"
                    ? "Terms of Service"
                    : "Privacy Policy"}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2 rounded-md transition-colors"
              >
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}