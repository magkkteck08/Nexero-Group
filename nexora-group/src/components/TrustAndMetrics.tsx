"use client";

import React from "react";
import { Shield, Layers, Globe2, TrendingUp } from "lucide-react";

const METRICS = [
  {
    label: "Ecosystem Platforms",
    value: "7+",
    sub: "Live & Active Pipeline",
    bg: "bg-[#FEF0B6]",
    icon: Layers,
  },
  {
    label: "Core Divisions",
    value: "4",
    sub: "Tech, Media, Games & Commerce",
    bg: "bg-[#EBF3F9]",
    icon: TrendingUp,
  },
  {
    label: "Operational Footprint",
    value: "Global",
    sub: "Nigeria HQ · UK & US Desks",
    bg: "bg-[#E8F8F0]",
    icon: Globe2,
  },
  {
    label: "Architecture Standard",
    value: "99.9%",
    sub: "Cloud Uptime & Reliability",
    bg: "bg-white",
    icon: Shield,
  },
];

export default function TrustAndMetrics() {
  return (
    <section className="py-14 border-b-2 border-[#1E1B2E]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`nb-card ${item.bg} p-5 flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#5A5868]">
                    {item.label}
                  </span>
                  <div className="w-9 h-9 rounded-xl border-2 border-[#1E1B2E] bg-white flex items-center justify-center shadow-[0_2px_0_0_#1E1B2E]">
                    <Icon className="w-4 h-4 text-[#1E1B2E]" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-black text-[#1E1B2E]">
                    {item.value}
                  </p>
                  <p className="text-xs font-bold text-[#3E735E] mt-1">
                    {item.sub}
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