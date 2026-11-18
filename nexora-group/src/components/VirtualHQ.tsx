"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bus,
  Car,
  Building2,
  Cpu,
  Rocket,
  Trophy,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const VIRTUAL_WINGS = [
  {
    id: "reception",
    floor: "Ground Level",
    name: "Corporate Reception & Executive Desk",
    lead: "Group Operations, Client Onboarding & Partner Routing",
    description:
      "Our virtual front desk routes commercial inquiries, enterprise consultations, and partner proposals directly to the right operating unit.",
    ctaLabel: "Contact Reception",
    ctaHref: "/#contact",
    badge: "Open 24/7",
    bg: "bg-[#FEF0B6]",
    icon: Building2,
  },
  {
    id: "tech",
    floor: "Wing 01",
    name: "Engineering & Infrastructure Lab",
    lead: "Web Apps, SaaS Platforms, E-Commerce & Automation",
    description:
      "Where our engineers architect full-stack applications, merchant billing engines, and digital transformation systems for businesses.",
    ctaLabel: "Explore Services",
    ctaHref: "/#services",
    badge: "Active Build",
    bg: "bg-[#EBF3F9]",
    icon: Cpu,
  },
  {
    id: "ventures",
    floor: "Wing 02",
    name: "Nexora Venture Studio",
    lead: "Receipta · Africommerce · BizRep · CatalogPal",
    description:
      "Dedicated product teams managing and scaling Nexora Group's proprietary software ventures from initial MVP to commercial operations.",
    ctaLabel: "View Ventures",
    ctaHref: "/#ventures",
    badge: "5 Ventures",
    bg: "bg-[#E8F8F0]",
    icon: Rocket,
  },
  {
    id: "media-sports",
    floor: "Wing 03",
    name: "Media & Sports Intelligence Suite",
    lead: "Velo Pulse & Football Intelligence (Become A Legend)",
    description:
      "Home to our digital journalism network and our interactive football analytics, scouting, and career simulation R&D unit.",
    ctaLabel: "Inspect R&D",
    ctaHref: "/projects/become-a-legend",
    badge: "Media & R&D",
    bg: "bg-[#C5B4F0]",
    icon: Trophy,
  },
];

export default function VirtualHQ() {
  const [vehicle, setVehicle] = useState<"bus" | "car">("car");
  const [activeWing, setActiveWing] = useState(VIRTUAL_WINGS[0]);

  return (
    <section
      id="headquarters"
      className="py-16 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#EBF3F9] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
              <Building2 className="w-3.5 h-3.5 text-[#3E735E]" />
              <span>Virtual Headquarters Experience</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight">
              Welcome to Nexora Headquarters.
            </h2>

            <p className="text-sm sm:text-base font-medium text-[#5A5868] leading-relaxed">
              Explore our interactive digital campus—connecting our corporate reception, engineering labs, venture studio, and global partner desks in one unified virtual headquarters.
            </p>
          </div>

          <Link
            href="/#partnerships"
            className="nb-btn-secondary text-xs sm:text-sm px-5 py-2.5 w-fit shrink-0"
          >
            <Handshake className="w-4 h-4 text-[#3E735E]" />
            <span>Schedule Virtual Visit</span>
          </Link>
        </div>

        {/* Interactive HQ Grid: Animated Architectural Campus (Left 7 cols) + Virtual Office Directory (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 7 Cols: Architectural Virtual HQ & Executive Arrival */}
          <div className="lg:col-span-7 nb-card overflow-hidden bg-[#FFFDF5] flex flex-col justify-between">
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#1E1B2E] bg-white px-4 py-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#E8F8F0] px-3 py-0.5 text-[11px] font-extrabold text-[#1E1B2E]">
                  <span className="h-2 w-2 rounded-full bg-[#3E735E]" />
                  Digital HQ · Cloud Campus
                </span>
                <span className="rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-[#1E1B2E]">
                  Virtual Experience
                </span>
              </div>

              {/* Switch Company Shuttle / Executive Vehicle */}
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
                  <span>Company Shuttle</span>
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
                  <span>Executive Vehicle</span>
                </button>
              </div>
            </div>

            {/* Architectural Illustration Canvas */}
            <div className="relative h-68 sm:h-76 w-full overflow-hidden bg-[#FFFDF5] pt-6">
              {/* Corporate Reception Greeting Banner */}
              <div className="animate-concierge-popup pointer-events-none absolute left-0 right-0 top-3 z-30 flex justify-center px-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] px-3.5 py-1 text-[10px] font-extrabold text-[#F7D147] shadow-[0_2px_0_0_#F7D147]">
                  <span>
                    Corporate Reception: &ldquo;Welcome to Nexora Virtual Headquarters&rdquo;
                  </span>
                </div>
              </div>

              {/* Architectural Wings Row */}
              <div className="absolute bottom-12 left-0 right-0 flex items-end justify-center gap-3 sm:gap-4 px-3">
                {/* Left Wing: Tech & SaaS */}
                <button
                  type="button"
                  onClick={() => setActiveWing(VIRTUAL_WINGS[1])}
                  className="hidden sm:block w-28 rounded-t-lg border-2 border-b-0 border-[#1E1B2E] bg-[#EBF3F9] p-2.5 text-left transition hover:bg-[#F7D147] cursor-pointer"
                >
                  <p className="mb-1.5 text-center text-[8px] font-black uppercase text-[#1E1B2E]">
                    Wing 01 · Tech
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                  </div>
                </button>

                {/* Center Building: NEXORA HEADQUARTERS */}
                <div className="relative flex flex-col items-center">
                  <div className="mb-[-2px] rounded-t-md border-2 border-[#1E1B2E] bg-[#1E1B2E] px-4 py-1 text-[10px] font-black tracking-widest text-[#F7D147]">
                    NEXORA HEADQUARTERS
                  </div>

                  <div className="w-56 sm:w-64 rounded-t-lg border-2 border-b-0 border-[#1E1B2E] bg-white p-3">
                    <div className="mb-2.5 grid grid-cols-3 gap-2">
                      <div className="h-5 rounded border-2 border-[#1E1B2E] bg-[#EBF3F9]" />
                      <div className="h-5 rounded border-2 border-[#1E1B2E] bg-[#FEF0B6]" />
                      <div className="h-5 rounded border-2 border-[#1E1B2E] bg-[#EBF3F9]" />
                    </div>

                    {/* Executive Entrance & Corporate Reception */}
                    <div className="relative mx-auto flex w-44 flex-col items-center">
                      <div className="w-full rounded-t border-2 border-[#1E1B2E] bg-[#F7D147] py-0.5 text-center text-[8px] font-black uppercase text-[#1E1B2E]">
                        Executive Entrance
                      </div>

                      <div className="relative flex w-36 items-end justify-center gap-1 border-x-2 border-[#1E1B2E] bg-white px-2 pt-1.5">
                        {/* Left Reception Officer */}
                        <div className="mb-0.5 mr-1 flex flex-col items-center">
                          <span className="h-2.5 w-2.5 rounded-full border border-[#1E1B2E] bg-[#F7D147]" />
                          <span className="h-4 w-3 rounded-t border border-[#1E1B2E] bg-[#1E1B2E]" />
                        </div>

                        {/* Glowing Reception Doors */}
                        <div className="animate-nexora-door h-9 w-10 rounded-t border-2 border-b-0 border-[#1E1B2E]" />
                        <div className="animate-nexora-door h-9 w-10 rounded-t border-2 border-b-0 border-[#1E1B2E]" />

                        {/* Right Reception Officer */}
                        <div className="mb-0.5 ml-1 flex flex-col items-center">
                          <span className="h-2.5 w-2.5 rounded-full border border-[#1E1B2E] bg-[#F7D147]" />
                          <span className="h-4 w-3 rounded-t border border-[#1E1B2E] bg-[#3E735E]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Red Carpet + Alighting Executives */}
                  <div className="animate-red-carpet pointer-events-none absolute -bottom-3 z-10 h-5 w-14 border-x-2 border-[#1E1B2E] bg-[#E5484D]" />

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

                {/* Right Wing: Ventures */}
                <button
                  type="button"
                  onClick={() => setActiveWing(VIRTUAL_WINGS[2])}
                  className="hidden sm:block w-28 rounded-t-lg border-2 border-b-0 border-[#1E1B2E] bg-[#FEF0B6] p-2.5 text-left transition hover:bg-[#F7D147] cursor-pointer"
                >
                  <p className="mb-1.5 text-center text-[8px] font-black uppercase text-[#1E1B2E]">
                    Wing 02 · Ventures
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                    <div className="h-5 rounded border-2 border-[#1E1B2E] bg-white" />
                  </div>
                </button>
              </div>

              {/* Moving Shuttle / Executive Vehicle */}
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
                          COMPANY SHUTTLE
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
                          EXEC VEHICLE
                        </span>
                        <span className="h-2 w-1.5 rounded-full bg-yellow-300" />
                      </div>
                      <div className="absolute -bottom-2 left-4 h-3.5 w-3.5 rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] ring-2 ring-inset ring-white" />
                      <div className="absolute -bottom-2 right-4 h-3.5 w-3.5 rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] ring-2 ring-inset ring-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Roadway */}
              <div className="absolute bottom-0 left-0 right-0 flex h-12 items-center justify-around border-t-2 border-[#1E1B2E] bg-[#464555] px-6">
                <div className="h-1 w-8 rounded bg-white/70" />
                <div className="h-1 w-8 rounded bg-white/70" />
                <div className="h-1 w-8 rounded bg-white/70" />
                <div className="h-1 w-8 rounded bg-white/70" />
                <div className="h-1 w-8 rounded bg-white/70" />
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Interactive Virtual Office Directory */}
          <div className="lg:col-span-5 nb-card bg-white p-5 sm:p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
                  Virtual Office Directory
                </span>
                <span className="rounded-full border border-[#1E1B2E] bg-[#F3F2EE] px-2.5 py-0.5 text-[10px] font-extrabold text-[#1E1B2E]">
                  Select a Wing
                </span>
              </div>

              {/* Wing Selector Tabs */}
              <div className="grid grid-cols-2 gap-2">
                {VIRTUAL_WINGS.map((wing) => {
                  const Icon = wing.icon;
                  const isSelected = activeWing.id === wing.id;
                  return (
                    <button
                      key={wing.id}
                      type="button"
                      onClick={() => setActiveWing(wing)}
                      className={`flex items-center gap-2 rounded-xl border-2 border-[#1E1B2E] px-3 py-2 text-left text-xs font-extrabold transition cursor-pointer ${
                        isSelected
                          ? "bg-[#F7D147] shadow-[0_2px_0_0_#1E1B2E]"
                          : "bg-[#FFFDF5] hover:bg-[#FEF0B6]/60"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0 text-[#1E1B2E]" />
                      <span className="truncate">{wing.floor}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Wing Details Card */}
              <div
                className={`rounded-2xl border-2 border-[#1E1B2E] ${activeWing.bg} p-4 space-y-2.5`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#3E735E]">
                    {activeWing.floor}
                  </span>
                  <span className="rounded-full border border-[#1E1B2E] bg-white px-2.5 py-0.5 text-[10px] font-extrabold text-[#1E1B2E]">
                    {activeWing.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#1E1B2E]">
                  {activeWing.name}
                </h3>

                <p className="text-xs font-extrabold text-[#3E735E]">
                  {activeWing.lead}
                </p>

                <p className="text-xs font-medium leading-relaxed text-[#4A4857]">
                  {activeWing.description}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t-2 border-[#1E1B2E] flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#5A5868]">
                Digital-First Operations · Oyo State, NG
              </span>
              <Link
                href={activeWing.ctaHref}
                className="inline-flex items-center gap-1 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-4 py-1.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
              >
                <span>{activeWing.ctaLabel}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}