"use client";

import React from "react";
import {
  Gamepad2,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  Flame,
  Mail,
} from "lucide-react";
import {
  FLAGSHIP_GAME_PROJECT,
  ROADMAP_MILESTONES,
  SITE_CONFIG,
} from "../config/siteConfig";

export default function FlagshipLab() {
  const investorWhatsappUrl = `https://wa.me/${
    SITE_CONFIG.contact.whatsappNumber
  }?text=${encodeURIComponent(
    "Hello Muiz / Nexora Group, I am interested in learning more about investing in or partnering on the 'Become A Legend' 3rd-Person Football Game and Nexora Group's product pipeline."
  )}`;

  const investorEmailUrl = `mailto:${
    SITE_CONFIG.contact.email
  }?subject=${encodeURIComponent(
    "Investor Enquiry: Become A Legend (Football Game) & Nexora Group"
  )}&body=${encodeURIComponent(
    "Hello Muiz,\n\nI visited the Nexora Group website and would like to request the investor brief / schedule a call regarding Become A Legend and your digital product ecosystem.\n\nName:\nOrganization / Fund:"
  )}`;

  return (
    <section
      id="investors"
      className="py-20 sm:py-24 border-b border-zinc-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* PART 1: FLAGSHIP IN THE LAB — BECOME A LEGEND */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-950/40 via-zinc-900/90 to-zinc-950 border border-blue-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <Flame className="w-4 h-4 text-blue-400" />
              <span>{FLAGSHIP_GAME_PROJECT.statusBadge}</span>
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              NEXORA GAMING DIVISION // R&amp;D
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Game Pitch & Investor CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2.5 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Gamepad2 className="w-4 h-4" />
                <span>Flagship Interactive Title In Production</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {FLAGSHIP_GAME_PROJECT.title}
              </h2>

              <p className="text-base sm:text-lg font-medium text-blue-200">
                {FLAGSHIP_GAME_PROJECT.subtitle}
              </p>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {FLAGSHIP_GAME_PROJECT.overview}
              </p>

              <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Investment &amp; Partnership Opportunity
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {FLAGSHIP_GAME_PROJECT.investmentGoals}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={investorWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-md transition-colors shadow-lg shadow-blue-600/20"
                >
                  <span>Invest / Partner on Become A Legend</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={investorEmailUrl}
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs sm:text-sm font-medium px-5 py-3 rounded-md transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Request Investor Deck</span>
                </a>
              </div>
            </div>

            {/* Right Column: 4 Core Gameplay & Commercial Pillars (2x2 Grid) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FLAGSHIP_GAME_PROJECT.keyPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/90 hover:border-blue-500/40 transition-colors space-y-2"
                >
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <h3 className="text-white font-bold text-sm">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PART 2: STRATEGIC ROADMAP & PIPELINE */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
              <Rocket className="w-4 h-4" />
              <span>Forward Trajectory &amp; Investor Outlook</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What We Have Built &amp; Where We Are Going
            </h3>
            <p className="text-sm text-zinc-400">
              Our execution roadmap across live revenue-ready SaaS platforms, digital publishing, and interactive gaming.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ROADMAP_MILESTONES.map((milestone) => (
              <div
                key={milestone.title}
                className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-zinc-400">
                      {milestone.quarter}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded border ${
                        milestone.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : milestone.status === "In Progress"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-blue-400">
                    {milestone.division}
                  </p>

                  <h4 className="text-lg font-bold text-white">
                    {milestone.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}