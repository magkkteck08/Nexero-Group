"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Rocket,
  CheckCircle2,
  Clock,
  Compass,
  BookOpen,
  X,
  AlertCircle,
  Wrench,
} from "lucide-react";

type OperationalStatus = "Live" | "In Development" | "Planned / R&D";

interface VentureItem {
  id: string;
  name: string;
  category: string;
  description: string;
  problemSolved: string;
  solutionDelivered: string;
  capabilities: string[];
  techStack: string[];
  status: OperationalStatus;
  image: string;
  cardBg: string;
  visitHref: string;
}

const NEXORA_VENTURES: VentureItem[] = [
  {
    id: "receipta",
    name: "Receipta",
    category: "Fintech / SaaS",
    description:
      "Digital receipts, automated invoicing, and merchant billing infrastructure built for modern businesses.",
    problemSolved:
      "SMEs and merchants lose track of paper receipts, manual invoices, and fragmented customer billing records.",
    solutionDelivered:
      "Instant digital receipt generation, automated invoicing, and verifiable merchant bookkeeping in the cloud.",
    capabilities: [
      "Instant branded digital receipts & PDF/link dispatch",
      "Automated merchant invoicing & customer payment tracking",
      "Real-time sales ledger & daily revenue summaries",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Resend"],
    status: "Live",
    image: "/projects/receipta.jpg",
    cardBg: "bg-[#FEF0B6]",
    visitHref: "/#contact",
  },
  {
    id: "africommerce",
    name: "Africommerce",
    category: "E-commerce",
    description:
      "Scalable e-commerce infrastructure, digital storefronts, and catalog management for African businesses.",
    problemSolved:
      "African merchants face high technical barriers when launching structured online storefronts and digital catalogs.",
    solutionDelivered:
      "Multi-tenant e-commerce storefront and catalog infrastructure tailored for local payment and social order flows.",
    capabilities: [
      "No-code merchant storefront & product catalog builder",
      "Direct WhatsApp & online checkout order routing",
      "Inventory management & multi-vendor scalability",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    status: "Live",
    image: "/projects/africommerce.jpg",
    cardBg: "bg-[#E8F8F0]",
    visitHref: "/#contact",
  },
  {
    id: "bizrep",
    name: "BizRep",
    category: "Business Technology",
    description:
      "Business intelligence, corporate reputation tracking, unit economics, and digital business management.",
    problemSolved:
      "Growing businesses lack clear visibility into daily unit economics, net profit margins, and digital brand reputation.",
    solutionDelivered:
      "Unified business intelligence dashboard combining expense/profit tracking (ProfitPal engine) with digital reputation management.",
    capabilities: [
      "Daily expense, margin & unit economics analytics",
      "Verified digital business profile & reputation tracking",
      "Automated executive reporting & operational insights",
    ],
    techStack: ["Next.js", "TypeScript", "Analytics Engine", "Supabase"],
    status: "In Development",
    image: "/projects/profitpal.jpg",
    cardBg: "bg-[#EBF3F9]",
    visitHref: "/#contact",
  },
  {
    id: "velo-pulse",
    name: "Velo Pulse",
    category: "Media",
    description:
      "Digital journalism, technology reporting, startup intelligence, and contemporary lifestyle media.",
    problemSolved:
      "Emerging technology, business, and cultural stories across Africa require a fast, modern editorial publication.",
    solutionDelivered:
      "High-velocity digital media platform featuring category filtering, archive search, and editorial dispatches.",
    capabilities: [
      "Category-driven technology, finance & lifestyle newsroom",
      "Mobile-first article reader & instant archive filtering",
      "Integrated social sharing & newsletter distribution",
    ],
    techStack: ["Next.js", "TypeScript", "Editorial CMS", "Tailwind CSS"],
    status: "Live",
    image: "/projects/velopulse.jpg",
    cardBg: "bg-white",
    visitHref: "/#news",
  },
  {
    id: "football-intelligence",
    name: "Football Intelligence",
    category: "Sports Technology",
    description:
      "Football tactical analysis, player scouting intelligence, and interactive career simulation (Become A Legend).",
    problemSolved:
      "Grassroots football lacks accessible tactical telemetry and interactive career progression simulations.",
    solutionDelivered:
      "2D top-down tactical football management, player profiling, and career progression simulation built from scratch.",
    capabilities: [
      "Grassroots-to-pro player career progression simulation",
      "Tactical formation analysis & positional match intelligence",
      "Custom HTML5 Canvas match engine without external game engines",
    ],
    techStack: ["Next.js", "HTML5 Canvas", "TypeScript", "Simulation Engine"],
    status: "Planned / R&D",
    image: "/nexora-logo.png",
    cardBg: "bg-[#C5B4F0]/45",
    visitHref: "/projects/become-a-legend",
  },
];

function getStatusBadge(status: OperationalStatus) {
  switch (status) {
    case "Live":
      return {
        style: "bg-[#98E2C6] text-[#1E1B2E]",
        icon: CheckCircle2,
        label: "Live Operating Venture",
      };
    case "In Development":
      return {
        style: "bg-[#F7D147] text-[#1E1B2E]",
        icon: Clock,
        label: "In Engineering & Beta",
      };
    case "Planned / R&D":
      return {
        style: "bg-[#C5B4F0] text-[#1E1B2E]",
        icon: Compass,
        label: "R&D / Planned Venture",
      };
  }
}

export default function Ventures() {
  const [filter, setFilter] = useState<"ALL" | OperationalStatus>("ALL");
  const [selectedVenture, setSelectedVenture] = useState<VentureItem | null>(
    null
  );

  const filteredVentures =
    filter === "ALL"
      ? NEXORA_VENTURES
      : NEXORA_VENTURES.filter((v) => v.status === filter);

  return (
    <section
      id="ventures"
      className="py-16 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-10">
        {/* Section Header + Status Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
              <Rocket className="h-3.5 w-3.5 text-[#3E735E]" />
              <span>Nexora Venture Ecosystem</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E1B2E] leading-[1.1]">
              Our Ventures.{" "}
              <span className="text-[#3E735E]">
                Building Beyond Boundaries.
              </span>
            </h2>

            <p className="text-sm sm:text-base font-medium text-[#5A5868] leading-relaxed">
              Nexora Group owns, develops, and operates independent digital ventures across high-growth industries—clearly structured into live platforms, ventures in active development, and long-horizon R&amp;D.
            </p>
          </div>

          {/* Operational Stage Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {(
              ["ALL", "Live", "In Development", "Planned / R&D"] as const
            ).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`rounded-full border-2 border-[#1E1B2E] px-4 py-2 text-xs font-extrabold transition cursor-pointer ${
                  filter === tab
                    ? "bg-[#1E1B2E] text-[#F7D147] shadow-[0_2px_0_0_#F7D147]"
                    : "bg-white text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#FEF0B6]"
                }`}
              >
                {tab === "ALL" ? "All Ventures (5)" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Venture Ecosystem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVentures.map((venture) => {
            const badge = getStatusBadge(venture.status);
            const StatusIcon = badge.icon;

            return (
              <article
                key={venture.id}
                className={`nb-card ${venture.cardBg} overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1`}
              >
                <div>
                  {/* Top Venture Visual Banner */}
                  <div className="relative aspect-[16/9] w-full border-b-2 border-[#1E1B2E] bg-white overflow-hidden">
                    <Image
                      src={venture.image}
                      alt={venture.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="rounded-full border-2 border-[#1E1B2E] bg-white px-3 py-0.5 text-[10px] font-black uppercase text-[#3E735E] shadow-[0_2px_0_0_#1E1B2E]">
                        {venture.category}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border-2 border-[#1E1B2E] px-2.5 py-0.5 text-[10px] font-extrabold shadow-[0_2px_0_0_#1E1B2E] ${badge.style}`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        <span>{venture.status}</span>
                      </span>
                    </div>
                  </div>

                  {/* Venture Info */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-2xl font-black text-[#1E1B2E]">
                      {venture.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#4A4857]">
                      {venture.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {venture.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#1E1B2E] bg-white/90 px-2 py-0.5 text-[10px] font-extrabold text-[#1E1B2E]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vertical Action Buttons */}
                <div className="p-5 sm:p-6 pt-4 border-t-2 border-[#1E1B2E] bg-white/75 flex flex-col gap-2.5">
                  <Link
                    href={venture.visitHref}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-4 py-2.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1px]"
                  >
                    <span>Visit Venture</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedVenture(venture)}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1px] hover:bg-[#FEF0B6] cursor-pointer"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-[#3E735E]" />
                    <span>Inspect Venture Profile</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Unified Venture Case Study Modal */}
      {selectedVenture && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedVenture(null)}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-[#1E1B2E]/60 backdrop-blur-sm p-0 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#FFFDF5] border-t-2 sm:border-2 border-[#1E1B2E] rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 space-y-5 shadow-[0_8px_0_0_#1E1B2E] max-h-[88vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3 py-0.5 text-xs font-extrabold uppercase text-[#1E1B2E]">
                  {selectedVenture.category} · {selectedVenture.status}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1E1B2E] mt-2">
                  {selectedVenture.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVenture(null)}
                className="nb-icon-circle h-9 w-9 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border-2 border-[#1E1B2E] bg-white p-4">
                <p className="text-xs font-black uppercase text-[#E5484D] flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>Problem Addressed</span>
                </p>
                <p className="mt-1 text-xs font-medium text-[#4A4857] leading-relaxed">
                  {selectedVenture.problemSolved}
                </p>
              </div>

              <div className="rounded-xl border-2 border-[#1E1B2E] bg-[#E8F8F0] p-4">
                <p className="text-xs font-black uppercase text-[#3E735E] flex items-center gap-1">
                  <Wrench className="h-3.5 w-3.5" />
                  <span>Solution Delivered</span>
                </p>
                <p className="mt-1 text-xs font-medium text-[#1E1B2E] leading-relaxed">
                  {selectedVenture.solutionDelivered}
                </p>
              </div>
            </div>

            <div className="rounded-xl border-2 border-[#1E1B2E] bg-white p-5 space-y-2.5">
              <p className="text-xs font-black uppercase tracking-wider text-[#1E1B2E]">
                Core Venture Capabilities
              </p>
              <ul className="space-y-2">
                {selectedVenture.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2 text-xs sm:text-sm font-bold text-[#1E1B2E]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#3E735E] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t-2 border-[#1E1B2E] flex items-center justify-between">
              <Link
                href={selectedVenture.visitHref}
                onClick={() => setSelectedVenture(null)}
                className="nb-btn-primary text-xs px-5 py-2.5"
              >
                <span>Open Venture</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <button
                type="button"
                onClick={() => setSelectedVenture(null)}
                className="text-xs font-extrabold text-[#1E1B2E] hover:underline cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}