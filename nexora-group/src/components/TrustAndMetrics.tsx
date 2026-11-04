"use client";

import React from "react";
import { Cpu, ShieldCheck } from "lucide-react";
import { OPERATIONAL_METRICS, TECH_INFRASTRUCTURE } from "../config/siteConfig";

export default function TrustAndMetrics() {
  return (
    <section
      aria-label="Operational Scale and Technology Infrastructure"
      className="border-b border-zinc-900 bg-zinc-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* 1. Executive Traction & Capability Ribbon (2-col on mobile, 4-col on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {OPERATIONAL_METRICS.map((item) => (
            <div
              key={item.label}
              className="p-4 sm:p-6 rounded-lg bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-blue-400 mt-1">
                  {item.label}
                </p>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-2 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Enterprise Technology & Infrastructure Strip */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 shrink-0">
            <Cpu className="w-4 h-4 text-blue-500" />
            <span>Core Engineering &amp; Cloud Stack</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {TECH_INFRASTRUCTURE.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300"
              >
                <ShieldCheck className="w-3 h-3 text-blue-400 shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}