"use client";

import React from "react";
import { OPERATIONAL_METRICS, SITE_CONFIG } from "../config/siteConfig";

export default function TrustAndMetrics() {
  return (
    <section
      aria-label="Corporate Overview and Capabilities"
      className="bg-zinc-950 border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-16 space-y-10">
        {/* Institutional Positioning Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-900">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Corporate Mandate
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {SITE_CONFIG.corporatePositioning}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Nexora Group builds, operates, and scales proprietary software products, interactive gaming experiences, and commercial distribution ventures.
          </p>
        </div>

        {/* 4 Verified Capability Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {OPERATIONAL_METRICS.map((item) => (
            <div
              key={item.label}
              className="p-5 sm:p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/90 flex flex-col justify-between"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-white mt-1.5">
                  {item.label}
                </p>
              </div>
              <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}