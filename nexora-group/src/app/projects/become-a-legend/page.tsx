"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  Gamepad2,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Heart,
  Sparkles,
  Trophy,
  Target,
  Activity,
  Users,
  MessageCircle,
  Mail,
  Coffee,
} from "lucide-react";
import { PORTFOLIO_PROJECTS } from "../../../config/siteConfig";

// Official BuyMeAMalt Donor Link
const BUY_ME_A_MALT_URL = "https://buymeamalt.com/@becomealegend";

// Hidden Direct WhatsApp & Email Links (Subject-routed to central inbox)
const LEGEND_WHATSAPP_URL =
  "https://wa.me/2349073754047?text=Hello%20Nexora%20Group%2C%20I%20want%20to%20join%20the%20beta%20or%20collaborate%20on%20Become%20A%20Legend.";
const LEGEND_MAIL_URL =
  "mailto:magkk.muizomoyele@gmail.com?subject=%5BNexora%20Group%20-%20Become%20A%20Legend%5D%20Beta%20%26%20Collaboration%20Inquiry";

const GAME_PILLARS = [
  {
    title: "Grassroots to Pro Journey",
    description:
      "Start from local street and academy pitches, earn scouting trials, negotiate contracts, and climb to elite continental and global leagues.",
    icon: Trophy,
    bg: "bg-[#FEF0B6]",
  },
  {
    title: "Tactical Match Intelligence",
    description:
      "Master positional awareness, defensive reading, formation shifts, and high-pressure match moments that shape your player rating.",
    icon: Target,
    bg: "bg-[#EBF3F9]",
  },
  {
    title: "Real-Time Career Telemetry",
    description:
      "Track match performance metrics, stamina, morale, media reputation, and transfer market value across every season.",
    icon: Activity,
    bg: "bg-[#E8F8F0]",
  },
];

export default function BecomeALegendPage() {
  const project =
    PORTFOLIO_PROJECTS.find((p) => p.id.toLowerCase().includes("legend")) ||
    PORTFOLIO_PROJECTS[PORTFOLIO_PROJECTS.length - 1];

  return (
    <div className="min-h-screen flex flex-col justify-between text-[#1E1B2E]">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 space-y-12">
        {/* Back Navigation */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Product Ecosystem</span>
          </Link>
        </div>

        {/* 1. Hero Card */}
        <section className="nb-card bg-[#FEF0B6] p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#C5B4F0] px-3.5 py-1 text-xs font-extrabold uppercase text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>{project?.status || "R&D"} · Interactive Gaming</span>
            </span>

            <span className="rounded-full border-2 border-[#1E1B2E] bg-white px-3.5 py-1 text-xs font-extrabold text-[#3E735E] shadow-[0_2px_0_0_#1E1B2E]">
              Football Career &amp; Tactical Simulation
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1E1B2E] leading-[1.08]">
              {project?.title || "Become A Legend"}
            </h1>

            <p className="text-sm sm:text-lg font-medium text-[#4A4857] max-w-3xl leading-relaxed">
              {project?.fullOverview ||
                "An interactive football career, grassroots scouting, and tactical progression simulation engineered inside Nexora Group's Research & Development division."}
            </p>
          </div>

          {/* Primary Action Buttons: BuyMeAMalt + WhatsApp Beta + Email */}
          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
            {/* Official BuyMeAMalt Button (#75452d) */}
            <a
              href={BUY_ME_A_MALT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#75452d] px-6 py-3.5 text-sm sm:text-base font-extrabold text-white shadow-[0_4px_0_0_#1E1B2E] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#1E1B2E] active:translate-y-[4px] active:shadow-none"
            >
              <Coffee className="w-4 h-4 text-[#F7D147]" />
              <span>Buy me a Gemini AI subscription</span>
              <ArrowUpRight className="w-4 h-4 text-[#F7D147]" />
            </a>

            {/* Direct WhatsApp Beta / Collab */}
            <a
              href={LEGEND_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-6 py-3.5 text-sm font-extrabold text-[#1E1B2E] shadow-[0_4px_0_0_#1E1B2E] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#1E1B2E]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Join Beta on WhatsApp</span>
            </a>

            {/* Direct Email Collaboration */}
            <a
              href={LEGEND_MAIL_URL}
              className="nb-btn-secondary text-sm px-6 py-3.5"
            >
              <Mail className="w-4 h-4 text-[#3E735E]" />
              <span>Collaborate via Email</span>
            </a>
          </div>
        </section>

        {/* 2. Three Tactical & Career Pillars */}
        <section className="space-y-5">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#3E735E]">
              Simulation Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E1B2E] mt-0.5">
              Built Around Real Football Progression
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GAME_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`nb-card ${pillar.bg} p-6 flex flex-col justify-between space-y-4`}
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl border-2 border-[#1E1B2E] bg-white flex items-center justify-center shadow-[0_2px_0_0_#1E1B2E]">
                      <Icon className="w-5 h-5 text-[#1E1B2E]" />
                    </div>
                    <h3 className="text-lg font-black text-[#1E1B2E]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#4A4857] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Key Platform Capabilities */}
        <section className="nb-card bg-white p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl border-2 border-[#1E1B2E] bg-[#F7D147] flex items-center justify-center shadow-[0_2px_0_0_#1E1B2E]">
              <Users className="w-4 h-4 text-[#1E1B2E]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1E1B2E]">
                Key Gameplay &amp; Engine Capabilities
              </h2>
              <p className="text-xs font-bold text-[#5A5868]">
                Core features currently in R&amp;D and prototype testing
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {(
              project?.keyCapabilities || [
                "Grassroots-to-pro player career progression engine",
                "Tactical formation, defensive positioning & match intelligence",
                "Interactive story decisions on and off the pitch",
                "Community-backed episodic feature releases",
              ]
            ).map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-2.5 rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] p-4 text-xs sm:text-sm font-bold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#3E735E] shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Donor Campaign Callout Banner */}
        <section className="nb-card bg-[#EBF3F9] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-white px-3 py-0.5 text-[11px] font-extrabold uppercase text-[#3E735E]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Community-Backed R&amp;D</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#1E1B2E]">
              Back the Become A Legend Build
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#4A4857] leading-relaxed">
              Every contribution on our BuyMeAMalt campaign directly powers our Gemini AI subscription, game engine tooling, and early community test builds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={BUY_ME_A_MALT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#75452d] px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1.5px] transition-all"
            >
              <Heart className="w-4 h-4 fill-[#F7D147] text-[#F7D147]" />
              <span>Buy me a Gemini AI subscription</span>
              <ArrowUpRight className="w-4 h-4 text-[#F7D147]" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}