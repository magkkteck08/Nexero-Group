"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Shield, FileText, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, SERVICE_DIVISIONS } from "../config/siteConfig";

type LegalDocType = "privacy" | "terms" | null;

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalDocType>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveLegalModal(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-16 grid grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 border-b border-zinc-900">
          {/* Col 1: Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold tracking-tight text-lg">
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block" />
              <span>{SITE_CONFIG.name}</span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.corporatePositioning} A multi-sector enterprise building, operating, and scaling technology platforms and commercial ventures.
            </p>
          </div>

          {/* Col 2: Corporate Pages */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/company" className="hover:text-amber-400 transition-colors">Company Profile</Link></li>
              <li><Link href="/investors" className="hover:text-amber-400 transition-colors">Investors &amp; Partners</Link></li>
              <li><Link href="/#work" className="hover:text-amber-400 transition-colors">Product Portfolio</Link></li>
              <li><Link href="/projects/become-a-legend" className="hover:text-amber-400 transition-colors">Become A Legend R&amp;D</Link></li>
            </ul>
          </div>

          {/* Col 3: Divisions */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Business Divisions
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICE_DIVISIONS.map((div) => (
                <li key={div.id}>
                  <Link href="/#services" className="hover:text-amber-400 transition-colors">
                    {div.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Clean Corporate Desk Links (Hides Raw Emails/URLs) */}
          <div className="col-span-2 lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Corporate Desks
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.emails.general}`}
                  className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  <span>General Enquiries Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.emails.partnerships}`}
                  className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  <span>Partnerships &amp; Commercial</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.emails.founder}`}
                  className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  <span>Founder &amp; Executive Office</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="text-zinc-500 pt-1">{SITE_CONFIG.contact.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="text-center sm:text-left">
            © {currentYear !== null ? currentYear : "2026"} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveLegalModal("privacy")}
              className="hover:text-amber-400 transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveLegalModal("terms")}
              className="hover:text-amber-400 transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
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
            <div className="px-5 sm:px-8 py-4 sm:py-5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                {activeLegalModal === "privacy" ? (
                  <Shield className="w-5 h-5 text-amber-400" />
                ) : (
                  <FileText className="w-5 h-5 text-amber-400" />
                )}
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    {activeLegalModal === "privacy"
                      ? "Privacy Policy"
                      : "Terms of Service"}
                  </h2>
                  <p className="text-[11px] text-zinc-400">
                    {SITE_CONFIG.name} • Corporate Governance
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

            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeLegalModal === "privacy" ? (
                <>
                  <p className="text-zinc-400">
                    This Privacy Policy describes how <strong>{SITE_CONFIG.name}</strong> collects, uses, and safeguards personal and corporate information across our website, SaaS platforms (<em>Receipta</em>, <em>CatalogPal</em>, <em>Africommerce</em>, <em>ProfitPal</em>, <em>Velo Pulse</em>, <em>Creator Unite</em>), gaming R&amp;D (<em>Become A Legend</em>), and commercial ventures.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">1. Information Collection</h3>
                    <p>We collect contact and corporate brief details voluntarily submitted through our enquiry portal, investor desk requests, or platform registrations.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">2. Confidentiality &amp; Security</h3>
                    <p>Nexora Group does not sell or trade personal or business data. All investor, partner, and client communications are handled under strict commercial confidentiality.</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-zinc-400">
                    By accessing <strong>{SITE_CONFIG.name}</strong> platforms or engaging our business divisions, you agree to these institutional Terms of Service.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">1. Proprietary Intellectual Property</h3>
                    <p>All software architectures, trademarks, and original titles—including <em>Become A Legend</em>, <em>Receipta</em>, <em>CatalogPal</em>, <em>Africommerce</em>, <em>ProfitPal</em>, <em>Velo Pulse</em>, and <em>Creator Unite</em>—remain the exclusive property of Nexora Group.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">2. Forward-Looking &amp; R&amp;D Disclosures</h3>
                    <p>Materials presented on our Investors and R&amp;D pages are for strategic evaluation and partnership discussions and do not constitute a public offering of securities.</p>
                  </div>
                </>
              )}
            </div>

            <div className="px-5 sm:px-8 py-4 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between shrink-0">
              <button
                type="button"
                onClick={() =>
                  setActiveLegalModal(
                    activeLegalModal === "privacy" ? "terms" : "privacy"
                  )
                }
                className="text-xs text-amber-400 hover:underline font-medium"
              >
                Switch to {activeLegalModal === "privacy" ? "Terms of Service" : "Privacy Policy"}
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold px-5 py-2 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}