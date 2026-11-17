"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bus,
  Car,
  Sparkles,
  CalendarCheck,
  MessageCircle,
  Mail,
} from "lucide-react";

// Hidden behind buttons — never displayed as raw text on the UI
const BOOKING_WHATSAPP_URL =
  "https://wa.me/2349073754047?text=Hello%20Nexora%20Group%2C%20I%20saw%20your%20work%20and%20would%20like%20to%20book%20your%20team%20for%20a%20project.";
const BOOKING_MAIL_URL =
  "mailto:magkk.muizomoyele@gmail.com?subject=%5BNexora%20Group%20-%20Book%20Us%5D%20New%20Project%20%26%20Service%20Booking%20Inquiry";

export default function Hero() {
  const [vehicle, setVehicle] = useState<"bus" | "car">("car");
  const [showBookOptions, setShowBookOptions] = useState(false);

  return (
    <section className="relative overflow-hidden border-b-2 border-[#1E1B2E]">
      {/* 1. Full Background Hero Image + Cream Neo-Brutalist Veil */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="Nexora Group Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#FFFDF5]/80 via-[#FFFDF5]/88 to-[#FFFDF5]"
          style={{
            backgroundImage: "radial-gradient(#E5DEC9 1.3px, transparent 1.3px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* 2. Main Centered Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
            <Sparkles className="h-3.5 w-3.5 text-[#3E735E]" />
            <span>NEXORA GROUP · TECHNOLOGY &amp; VENTURES</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-[#1E1B2E] sm:text-6xl">
            Building the digital backbone.
            <span className="mt-1 block text-[#3E735E]">
              Scaling African ventures.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-lg font-semibold leading-relaxed text-[#4A4857]">
            Nexora Group architects, launches, and scales high-impact software
            platforms across e-commerce, merchant billing, digital journalism,
            and interactive sports intelligence.
          </p>

          {/* 3 Stacked Neo-Brutalist Pill Buttons */}
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3.5">
            {/* Button 1: Explore Products */}
            <Link href="/#work" className="nb-btn-primary text-base">
              <span>Explore products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Button 2: Book Us (Expands Direct WhatsApp & Email Dispatch) */}
            <button
              type="button"
              onClick={() => setShowBookOptions(!showBookOptions)}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-7 py-3.5 text-base font-bold text-[#1E1B2E] shadow-[0_4px_0_0_#1E1B2E] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#1E1B2E] active:translate-y-[4px] active:shadow-none cursor-pointer"
            >
              <CalendarCheck className="h-4 w-4" />
              <span>Book us for a project</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>

            {/* Expandable Direct WhatsApp & Mail Tray (Zero Raw Number/Email Shown) */}
            {showBookOptions && (
              <div className="nb-card bg-[#FEF0B6] p-3.5 space-y-2.5 animate-in fade-in duration-150">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#1E1B2E]">
                  Choose how you want to book Nexora Group:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={BOOKING_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#3E735E] px-4 py-2.5 text-xs font-extrabold text-white shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Direct WhatsApp</span>
                  </a>

                  <a
                    href={BOOKING_MAIL_URL}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
                  >
                    <Mail className="h-4 w-4 text-[#3E735E]" />
                    <span>Direct Booking Mail</span>
                  </a>
                </div>
              </div>
            )}

            {/* Button 3: Donor & Partner Hub */}
            <Link href="/investors" className="nb-btn-secondary text-base">
              <span>Donor &amp; partner hub</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 3. Animated Nexora Group HQ Campus with VIP Executive Reception */}
        <div className="nb-card mt-12 overflow-hidden bg-[#FFFDF5]/95 backdrop-blur-xs">
          {/* Scene Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#1E1B2E] bg-white px-3.5 py-3 sm:px-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#E8F8F0] px-3 py-0.5 text-[11px] font-extrabold text-[#1E1B2E]">
                <span className="h-2 w-2 rounded-full bg-[#3E735E]" />
                Nexora HQ Executive Arrival
              </span>
              <span className="hidden sm:inline-block rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] px-3 py-0.5 text-[11px] font-extrabold text-[#1E1B2E]">
                VIP Protocol Active
              </span>
            </div>

            {/* Toggle Between Company Bus and Executive Car */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setVehicle("bus")}
                className={`inline-flex items-center gap-1 rounded-full border-2 border-[#1E1B2E] px-3 py-1 text-xs font-extrabold transition cursor-pointer ${
                  vehicle === "bus"
                    ? "bg-[#F7D147] shadow-[0_2px_0_0_#1E1B2E]"
                    : "bg-white"
                }`}
              >
                <Bus className="h-3.5 w-3.5" />
                <span>Company Bus</span>
              </button>
              <button
                type="button"
                onClick={() => setVehicle("car")}
                className={`inline-flex items-center gap-1 rounded-full border-2 border-[#1E1B2E] px-3 py-1 text-xs font-extrabold transition cursor-pointer ${
                  vehicle === "car"
                    ? "bg-[#F7D147] shadow-[0_2px_0_0_#1E1B2E]"
                    : "bg-white"
                }`}
              >
                <Car className="h-3.5 w-3.5" />
                <span>Exec Car</span>
              </button>
            </div>
          </div>

          {/* Street, HQ Building & VIP Reception Animation Canvas */}
          <div className="relative h-64 sm:h-68 w-full overflow-hidden bg-[#FFFDF5] pt-6">
            {/* Concierge Welcome Floating Pill when Vehicle Parks */}
            <div className="animate-concierge-popup pointer-events-none absolute left-0 right-0 top-3 z-30 flex justify-center px-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] px-3.5 py-1 text-[10px] font-extrabold text-[#F7D147] shadow-[0_2px_0_0_#F7D147]">
                <span>
                  ✨ Protocol Officer: &ldquo;Welcome to Nexora Group HQ, Executive Team!&rdquo;
                </span>
              </div>
            </div>

            {/* Buildings Row */}
            <div className="absolute bottom-12 left-0 right-0 flex items-end justify-center gap-4 px-3">
              {/* Left Wing: Flagship Lab */}
              <div className="hidden sm:block w-28 rounded-t-lg border-2 border-b-0 border-[#1E1B2E] bg-[#EBF3F9] p-2.5">
                <p className="mb-1.5 text-center text-[9px] font-black uppercase text-[#1E1B2E]">
                  Flagship Lab
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                  <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                  <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                  <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                </div>
              </div>

              {/* Center HQ Building: NEXORA GROUP HQ */}
              <div className="relative flex flex-col items-center">
                <div className="mb-[-2px] rounded-t-md border-2 border-[#1E1B2E] bg-[#1E1B2E] px-4 py-1 text-[10px] font-black tracking-widest text-[#F7D147]">
                  NEXORA GROUP HQ
                </div>

                <div className="w-56 sm:w-64 rounded-t-lg border-2 border-b-0 border-[#1E1B2E] bg-white p-3">
                  <div className="mb-2.5 grid grid-cols-3 gap-2">
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-[#EBF3F9]" />
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-[#FEF0B6]" />
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-[#EBF3F9]" />
                  </div>

                  {/* HQ Main Entrance Canopy, Doors & Protocol Guards */}
                  <div className="relative mx-auto flex w-44 flex-col items-center">
                    <div className="w-full rounded-t border-2 border-[#1E1B2E] bg-[#F7D147] py-0.5 text-center text-[8px] font-black uppercase text-[#1E1B2E]">
                      VIP Executive Entrance
                    </div>

                    <div className="relative flex w-36 items-end justify-center gap-1 border-x-2 border-[#1E1B2E] bg-white px-2 pt-1.5">
                      <div
                        title="Nexora Protocol Officer"
                        className="mb-0.5 mr-1 flex flex-col items-center"
                      >
                        <span className="h-2.5 w-2.5 rounded-full border border-[#1E1B2E] bg-[#F7D147]" />
                        <span className="h-4 w-3 rounded-t border border-[#1E1B2E] bg-[#1E1B2E]" />
                      </div>

                      <div className="animate-nexora-door h-9 w-10 rounded-t border-2 border-b-0 border-[#1E1B2E]" />
                      <div className="animate-nexora-door h-9 w-10 rounded-t border-2 border-b-0 border-[#1E1B2E]" />

                      <div
                        title="Nexora Protocol Officer"
                        className="mb-0.5 ml-1 flex flex-col items-center"
                      >
                        <span className="h-2.5 w-2.5 rounded-full border border-[#1E1B2E] bg-[#F7D147]" />
                        <span className="h-4 w-3 rounded-t border border-[#1E1B2E] bg-[#3E735E]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Unrolling Red Carpet from HQ Door to Curbside */}
                <div className="animate-red-carpet pointer-events-none absolute -bottom-3 z-10 h-5 w-14 border-x-2 border-[#1E1B2E] bg-[#E5484D]" />

                {/* Alighting VIP Executives Walking from Vehicle into HQ */}
                <div className="pointer-events-none absolute -bottom-2 z-30 flex items-center justify-center">
                  <div className="animate-vip-one relative flex flex-col items-center">
                    <span className="h-3 w-3 rounded-full border-2 border-[#1E1B2E] bg-[#FFD6A5]" />
                    <div className="relative flex h-5 w-4 items-center justify-center rounded-t-md border-2 border-[#1E1B2E] bg-[#1E1B2E]">
                      <span className="h-2.5 w-0.5 bg-[#F7D147]" />
                      <span className="absolute -right-2.5 bottom-0.5 h-2.5 w-3 rounded-xs border border-[#1E1B2E] bg-[#F7D147]" />
                    </div>
                  </div>

                  <div className="animate-vip-two relative ml-3 flex flex-col items-center">
                    <span className="h-3 w-3 rounded-full border-2 border-[#1E1B2E] bg-[#FFD6A5]" />
                    <div className="relative flex h-5 w-4 items-center justify-center rounded-t-md border-2 border-[#1E1B2E] bg-[#3E735E]">
                      <span className="absolute -left-2 bottom-0.5 h-2.5 w-2 rounded-xs border border-[#1E1B2E] bg-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Wing: Venture Hub */}
              <div className="hidden sm:block w-28 rounded-t-lg border-2 border-b-0 border-[#1E1B2E] bg-[#FEF0B6] p-2.5">
                <p className="mb-1.5 text-center text-[9px] font-black uppercase text-[#1E1B2E]">
                  Venture Hub
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                  <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                  <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                  <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                </div>
              </div>
            </div>

            {/* Moving Bus / Executive Car Stopping at HQ Front Entrance */}
            <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-20 flex justify-center">
              <div className="animate-nexora-vehicle relative">
                {vehicle === "bus" ? (
                  <div className="relative flex h-11 w-36 flex-col justify-between rounded-xl border-2 border-[#1E1B2E] bg-[#F7D147] p-1.5 shadow-[0_3px_0_0_#1E1B2E]">
                    <div className="flex items-center gap-1">
                      <div className="h-3.5 w-6 rounded-xs border-2 border-[#1E1B2E] bg-white" />
                      <div className="h-3.5 w-6 rounded-xs border-2 border-[#1E1B2E] bg-white" />
                      <div className="h-3.5 w-6 rounded-xs border-2 border-[#1E1B2E] bg-white" />
                      <div className="h-3.5 flex-1 rounded-r-md border-2 border-[#1E1B2E] bg-[#EBF3F9]" />
                    </div>
                    <div className="flex items-center justify-between px-1">
                      <span className="animate-nexora-brake h-2 w-1.5 rounded-full bg-red-600" />
                      <span className="text-[7px] font-black tracking-wider text-[#1E1B2E]">
                        NEXORA SHUTTLE
                      </span>
                      <span className="h-2 w-1.5 rounded-full bg-amber-200" />
                    </div>
                    <div className="absolute -bottom-2 left-4 h-3.5 w-3.5 rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] ring-2 ring-inset ring-white" />
                    <div className="absolute -bottom-2 right-4 h-3.5 w-3.5 rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] ring-2 ring-inset ring-white" />
                  </div>
                ) : (
                  <div className="relative flex flex-col items-center">
                    <div className="mb-[-2px] flex h-4 w-22 gap-1 rounded-t-xl border-2 border-[#1E1B2E] bg-[#1E1B2E] px-2 pt-0.5">
                      <div className="h-2.5 flex-1 rounded-tl bg-[#EBF3F9]" />
                      <div className="h-2.5 flex-1 rounded-tr bg-[#EBF3F9]" />
                    </div>
                    <div className="relative flex h-6 w-34 items-center justify-between rounded-lg border-2 border-[#1E1B2E] bg-[#3E735E] px-2 shadow-[0_3px_0_0_#1E1B2E]">
                      <span className="animate-nexora-brake h-2 w-1.5 rounded-full bg-red-500" />
                      <span className="rounded bg-[#F7D147] px-1.5 text-[7px] font-black text-[#1E1B2E]">
                        NEXORA VIP
                      </span>
                      <span className="h-2 w-1.5 rounded-full bg-yellow-300" />
                    </div>
                    <div className="absolute -bottom-2 left-4 h-3.5 w-3.5 rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] ring-2 ring-inset ring-white" />
                    <div className="absolute -bottom-2 right-4 h-3.5 w-3.5 rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] ring-2 ring-inset ring-white" />
                  </div>
                )}
              </div>
            </div>

            {/* Asphalt Roadway */}
            <div className="absolute bottom-0 left-0 right-0 flex h-12 items-center justify-around border-t-2 border-[#1E1B2E] bg-[#464555] px-6">
              <div className="h-1 w-8 rounded bg-white/70" />
              <div className="h-1 w-8 rounded bg-white/70" />
              <div className="h-1 w-8 rounded bg-white/70" />
              <div className="h-1 w-8 rounded bg-white/70" />
              <div className="h-1 w-8 rounded bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}