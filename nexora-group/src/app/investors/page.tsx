"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Heart,
  Coffee,
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Copy,
  Check,
  Mail,
} from "lucide-react";

// Your official BuyMeAMalt URL & Widget Code
const BUY_ME_A_MALT_URL = "https://buymeamalt.com/@becomealegend";
const RAW_WIDGET_HTML = `<a href="https://buymeamalt.com/@becomealegend" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:12px 20px;background:#75452d;color:#fff;border-radius:8px;text-decoration:none;font-family:system-ui">Buy me a Gemini AI subscription</a>`;

const SPONSOR_MAIL_URL =
  "mailto:magkk.muizomoyele@gmail.com?subject=%5BNexora%20Group%20-%20Donor%20Campaign%5D%20Direct%20Sponsorship%20%26%20Support";

export default function DonorCampaignPage() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(BUY_ME_A_MALT_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(RAW_WIDGET_HTML);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between text-[#1E1B2E]">
      <Navbar />

      <main className="mx-auto w-full max-w-3xl px-5 py-14 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1E1B2E] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Main Donor Campaign Card */}
        <div className="nb-card bg-[#FEF0B6] p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-white px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
            <Heart className="w-3.5 h-3.5 fill-[#E5484D] text-[#1E1B2E]" />
            <span>Community &amp; Donor Campaign</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E1B2E] leading-[1.1]">
            Fuel Our AI &amp; R&amp;D Builds.{" "}
            <span className="text-[#3E735E]">Back the Vision.</span>
          </h1>

          <p className="text-sm sm:text-base font-medium text-[#4A4857] leading-relaxed">
            We are engineering <strong>Become A Legend</strong>,{" "}
            <strong>Receipta</strong>, <strong>CatalogPal</strong>, and{" "}
            <strong>Africommerce</strong> from the ground up. You can directly support our engineering workflow, AI compute, and R&amp;D tooling through our BuyMeAMalt campaign below.
          </p>

          {/* Primary BuyMeAMalt Button (Using your #75452d Malt Brown + Neo-Brutalist Border) */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href={BUY_ME_A_MALT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#1E1B2E] bg-[#75452d] px-7 py-3.5 text-base font-extrabold text-white shadow-[0_4px_0_0_#1E1B2E] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#1E1B2E] active:translate-y-[4px] active:shadow-none"
            >
              <Coffee className="w-5 h-5 text-[#F7D147]" />
              <span>Buy me a Gemini AI subscription</span>
              <ArrowUpRight className="w-4 h-4 text-[#F7D147]" />
            </a>

            <a
              href={SPONSOR_MAIL_URL}
              className="nb-btn-secondary text-sm justify-center"
            >
              <Mail className="w-4 h-4 text-[#3E735E]" />
              <span>Direct Sponsorship Mail</span>
            </a>
          </div>

          {/* Direct Link + Embed Code Copy Box */}
          <div className="rounded-2xl border-2 border-[#1E1B2E] bg-white p-4 sm:p-5 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#3E735E]">
                  Direct Campaign Handle
                </p>
                <p className="text-sm font-black text-[#1E1B2E] mt-0.5 break-all">
                  {BUY_ME_A_MALT_URL}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3.5 py-1.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#3E735E]" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleCopyHtml}
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#F3F2EE] px-3.5 py-1.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#FEF0B6] transition-colors cursor-pointer"
                >
                  {copiedHtml ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#3E735E]" />
                      <span>Widget Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy HTML Button</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Short 2-Card Impact Breakdown */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="nb-card bg-[#EBF3F9] p-5">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#1E1B2E]">
              <Sparkles className="w-4 h-4 text-[#3E735E]" />
              <span>AI &amp; Cloud Tooling</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-[#4A4857] leading-relaxed">
              Every contribution directly powers our Gemini AI subscriptions, cloud servers, and continuous engineering across all Nexora Group platforms.
            </p>
          </div>

          <div className="nb-card bg-white p-5">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#1E1B2E]">
              <Heart className="w-4 h-4 text-[#E5484D]" />
              <span>Become A Legend Backer Perks</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-[#4A4857] leading-relaxed">
              Supporters on <strong>@becomealegend</strong> get early test access to new football simulation updates and recognition on our community wall.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}