"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const VENTURES_DATA = [
  {
    name: "Africommerce",
    category: "Digital Commerce",
    model: "Pan-African Storefronts",
    stage: "Flagship",
    image: "/projects/africommerce.jpg",
    badgeColor: "bg-[#C5B4F0]",
    href: "/projects",
  },
  {
    name: "Receipta",
    category: "FinTech & Billing",
    model: "Smart Invoicing SaaS",
    stage: "Live Platform",
    image: "/projects/receipta.jpg",
    badgeColor: "bg-[#F7D147]",
    href: "/projects",
  },
  {
    name: "CatalogPal",
    category: "Merchant Tools",
    model: "Digital Product Catalogs",
    stage: "Live Platform",
    image: "/projects/catalogpal.jpg",
    badgeColor: "bg-[#98E2C6]",
    href: "/projects",
  },
  {
    name: "Velo Pulse",
    category: "Digital Media",
    model: "Tech & Startup News",
    stage: "Active Media",
    image: "/projects/velopulse.jpg",
    badgeColor: "bg-[#EBF3F9]",
    href: "/projects",
  },
  {
    name: "Creator Unite",
    category: "Creator Economy",
    model: "Brand & Audience Hub",
    stage: "Scaling",
    image: "/projects/creatorunite.jpg",
    badgeColor: "bg-[#FFD6A5]",
    href: "/projects",
  },
  {
    name: "ProfitPal",
    category: "SME Analytics",
    model: "Margin & Expense Tracker",
    stage: "Active SaaS",
    image: "/projects/profitpal.jpg",
    badgeColor: "bg-[#FEF0B6]",
    href: "/projects",
  },
  {
    name: "Become A Legend",
    category: "Sports Tech",
    model: "Grassroots Scouting & Stats",
    stage: "Pilot Phase",
    image: "/nexora-logo.png",
    badgeColor: "bg-[#C5B4F0]",
    href: "/projects",
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-[#1E1B2E]">
            Ecosystem ventures
          </h2>
          <p className="mt-1 flex items-center gap-2 text-xs font-bold text-[#686677]">
            <span className="h-2 w-2 rounded-full bg-[#1E1B2E]" />7 active
            platforms engineered by Nexora Group
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm font-extrabold text-[#1E1B2E] hover:underline"
        >
          All projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Stacked Divided Directory Container */}
      <div className="nb-card divide-y-2 divide-[#1E1B2E] overflow-hidden">
        {VENTURES_DATA.map((item) => (
          <div
            key={item.name}
            className="flex flex-col justify-between gap-4 p-5 transition-colors hover:bg-[#FFFDF5] sm:flex-row sm:items-center"
          >
            <div className="flex items-start gap-4">
              {/* Circular Avatar with Thick Border */}
              <div
                className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#1E1B2E] ${item.badgeColor}`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-black text-[#1E1B2E]">
                  {item.name}
                </h3>
                <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-[#686677]">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.model}</span>
                  <span>•</span>
                  <span>Nexora Ecosystem</span>
                </div>
              </div>
            </div>

            <div className="pl-16 sm:pl-0">
              <Link
                href={item.href}
                className="inline-block -rotate-1 rounded-xl border-2 border-[#1E1B2E] bg-[#F3F2EE] px-4 py-1.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] transition hover:rotate-0 hover:bg-[#F7D147]"
              >
                {item.stage}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
