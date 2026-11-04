"use client";

import React from "react";
import { Cpu, ShieldCheck } from "lucide-react";
import { OPERATIONAL_METRICS, TECH_INFRASTRUCTURE } from "../config/siteConfig";

export default function TrustAndMetrics() {
  return (
    <section
      aria-label="Operational Scale and Technology Infrastructure"
      className="bg-[#0F172A] border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-16 space-y-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {OPERATIONAL_METRICS.map((item) => (
            <div
              key={item.label}
              className="p-5 sm:p-6 rounded-2xl bg-[#162036] border border-slate-700/60 flex flex-col justify-between shadow-sm"
            >
              <div>
                <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-blue-400 mt-1.5">
                  {item.label}
                </p>
              </div>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 shrink-0">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>Core Engineering &amp; Cloud Stack</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {TECH_INFRASTRUCTURE.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[#0B1120] border border-slate-800 text-slate-200"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}