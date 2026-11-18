"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CalendarCheck,
  MessageCircle,
  Mail,
  Cpu,
  Rocket,
  Handshake,
  Server,
  Database,
  Globe,
  Zap,
} from "lucide-react";

const WORK_WHATSAPP_URL =
  "https://wa.me/2349073754047?text=Hello%20Nexora%20Group%2C%20I%20would%20like%20to%20work%20with%20your%20team%20on%20a%20project.";
const WORK_MAIL_URL =
  "mailto:magkk.muizomoyele@gmail.com?subject=%5BNexora%20Group%20-%20Work%20With%20Us%5D%20Project%20%26%20Consultation%20Enquiry";

const THREE_IDENTITIES = [
  {
    label: "01 · Technology",
    detail: "Software, platforms, infrastructure & enterprise digital solutions.",
    icon: Cpu,
    bg: "bg-[#EBF3F9]",
  },
  {
    label: "02 · Ventures",
    detail: "Developing, owning & operating independent digital businesses.",
    icon: Rocket,
    bg: "bg-[#FEF0B6]",
  },
  {
    label: "03 · Partnerships",
    detail: "Collaborating with investors, founders & strategic organisations.",
    icon: Handshake,
    bg: "bg-[#E8F8F0]",
  },
];

export default function Hero() {
  const [showWorkTray, setShowWorkTray] = useState(false);

  return (
    <section className="relative overflow-hidden border-b-2 border-[#1E1B2E] bg-[#FFFDF5]">
      {/* 1. LIVE ANIMATED DIGITAL BACKBONE BACKGROUND SCENE (Replaces Static Photo) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Architectural Isometric Grid Base */}
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `
              linear-gradient(to right, #E6DFC8 1px, transparent 1px),
              linear-gradient(to bottom, #E6DFC8 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />

        {/* Pulsing Center Digital Core Rings */}
        <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="animate-hero-core h-[440px] w-[440px] sm:h-[620px] sm:w-[620px] rounded-full border-2 border-dashed border-[#1E1B2E]/20 bg-[#FEF0B6]/20" />
          <div className="absolute h-[290px] w-[290px] sm:h-[420px] sm:w-[420px] rounded-full border-2 border-[#3E735E]/20" />
        </div>

        {/* Horizontal Highway Track 1 (Top) + Moving Neo-Brutalist Data Pod */}
        <div className="absolute top-[18%] left-0 right-0 h-[2px] bg-[#1E1B2E]/15">
          <div className="animate-packet-right-fast -top-3.5 absolute flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3 py-0.5 text-[9px] font-black text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
            <Zap className="h-2.5 w-2.5" />
            <span>RECEIPTA · FINTECH NODE</span>
          </div>
        </div>

        {/* Horizontal Highway Track 2 (Middle-Low) + Moving Neo-Brutalist Data Pod */}
        <div className="absolute top-[54%] left-0 right-0 h-[2px] bg-[#1E1B2E]/15">
          <div className="animate-packet-left -top-3.5 absolute flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-3 py-0.5 text-[9px] font-black text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
            <Globe className="h-2.5 w-2.5" />
            <span>AFRICOMMERCE · CLOUD RAIL</span>
          </div>
        </div>

        {/* Horizontal Highway Track 3 (Bottom) + Moving Neo-Brutalist Data Pod */}
        <div className="absolute top-[74%] left-0 right-0 h-[2px] bg-[#1E1B2E]/15">
          <div className="animate-packet-right-slow -top-3.5 absolute flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#EBF3F9] px-3 py-0.5 text-[9px] font-black text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
            <Database className="h-2.5 w-2.5 text-[#3E735E]" />
            <span>BIZREP · INTELLIGENCE SYNC</span>
          </div>
        </div>

        {/* Vertical Data Track Left */}
        <div className="hidden sm:block absolute top-0 bottom-0 left-[12%] w-[2px] bg-[#1E1B2E]/15">
          <div className="animate-packet-down-left -left-2 absolute h-8 w-4 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] shadow-[0_2px_0_0_#1E1B2E]" />
        </div>

        {/* Vertical Data Track Right */}
        <div className="hidden sm:block absolute top-0 bottom-0 right-[12%] w-[2px] bg-[#1E1B2E]/15">
          <div className="animate-packet-down-right -left-2 absolute h-8 w-4 rounded-full border-2 border-[#1E1B2E] bg-[#C5B4F0] shadow-[0_2px_0_0_#1E1B2E]" />
        </div>

        {/* Floating Perimeter Infrastructure Cards (Visible on Desktop Sides) */}
        <div className="hidden lg:flex animate-hero-node absolute left-8 top-24 items-center gap-2.5 rounded-2xl border-2 border-[#1E1B2E] bg-white/90 p-3 shadow-[0_4px_0_0_#1E1B2E]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-[#1E1B2E] bg-[#FEF0B6]">
            <Server className="h-4 w-4 text-[#1E1B2E]" />
          </div>
          <div>
            <p className="text-[9px] font-black uppercase text-[#3E735E]">
              Core Infrastructure
            </p>
            <p className="text-xs font-black text-[#1E1B2E]">
              99.9% Multi-Venture Uptime
            </p>
          </div>
        </div>

        <div className="hidden lg:flex animate-hero-node-delayed absolute right-8 top-36 items-center gap-2.5 rounded-2xl border-2 border-[#1E1B2E] bg-white/90 p-3 shadow-[0_4px_0_0_#1E1B2E]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-[#1E1B2E] bg-[#E8F8F0]">
            <Rocket className="h-4 w-4 text-[#1E1B2E]" />
          </div>
          <div>
            <p className="text-[9px] font-black uppercase text-[#3E735E]">
              Venture Studio
            </p>
            <p className="text-xs font-black text-[#1E1B2E]">
              5 Proprietary Platforms
            </p>
          </div>
        </div>

        {/* Radial Cream Center Focus Mask so Foreground Copy & Buttons Remain 100% Crisp */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, rgba(255, 253, 245, 0.92) 0%, rgba(255, 253, 245, 0.72) 55%, rgba(255, 253, 245, 0.35) 100%)",
          }}
        />
      </div>

      {/* 2. MAIN FOREGROUND HERO CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
            <Sparkles className="h-3.5 w-3.5 text-[#3E735E]" />
            <span>CORPORATE VENTURE GROUP · TECHNOLOGY &amp; ENTERPRISE</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-[#1E1B2E] sm:text-6xl">
            Building the digital backbone.
            <span className="mt-1 block text-[#3E735E]">
              Scaling African ventures.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-lg font-semibold leading-relaxed text-[#4A4857]">
            Nexora Group builds, operates, and scales technology-driven
            businesses across fintech, e-commerce, digital media, business
            intelligence, and sports technology—combining enterprise software
            engineering with long-term venture execution.
          </p>

          {/* Two Primary Tactile Buttons + One Secondary Link */}
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3.5">
            {/* Primary Button 1: Explore Our Ventures */}
            <Link href="/#ventures" className="nb-btn-primary text-base">
              <span>Explore Our Ventures</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Primary Button 2: Work With Us */}
            <button
              type="button"
              onClick={() => setShowWorkTray(!showWorkTray)}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-7 py-3.5 text-base font-extrabold text-[#1E1B2E] shadow-[0_4px_0_0_#1E1B2E] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#1E1B2E] active:translate-y-[4px] active:shadow-none cursor-pointer"
            >
              <CalendarCheck className="h-4 w-4" />
              <span>Work With Us</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>

            {/* Expandable Consultation & Project Dispatch Tray */}
            {showWorkTray && (
              <div className="nb-card bg-white p-4 space-y-3 text-left">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#1E1B2E]">
                  Start a project or book a consultation:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={WORK_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#3E735E] px-4 py-2.5 text-xs font-extrabold text-white shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Desk</span>
                  </a>

                  <a
                    href={WORK_MAIL_URL}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] px-4 py-2.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
                  >
                    <Mail className="h-4 w-4 text-[#1E1B2E]" />
                    <span>Project Enquiry Mail</span>
                  </a>
                </div>
                <Link
                  href="/#contact"
                  onClick={() => setShowWorkTray(false)}
                  className="block text-center text-xs font-extrabold text-[#3E735E] hover:underline pt-1"
                >
                  Or use our structured department contact form →
                </Link>
              </div>
            )}

            {/* Secondary Link: Partner With Nexora */}
            <div className="pt-1">
              <Link
                href="/#partnerships"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-white/95 px-6 py-2.5 text-xs sm:text-sm font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] transition hover:bg-[#FEF0B6]"
              >
                <Handshake className="h-4 w-4 text-[#3E735E]" />
                <span>Partner With Nexora</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Company Overview Strip: Nexora's 3 Distinct Business Identities */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {THREE_IDENTITIES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`nb-card ${item.bg} p-4 sm:p-5 flex items-start gap-3.5`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#1E1B2E] bg-white shadow-[0_2px_0_0_#1E1B2E]">
                  <Icon className="h-5 w-5 text-[#1E1B2E]" />
                </div>
                <div>
                  <h2 className="text-sm font-black uppercase tracking-wider text-[#1E1B2E]">
                    {item.label}
                  </h2>
                  <p className="mt-1 text-xs font-medium leading-relaxed text-[#4A4857]">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}