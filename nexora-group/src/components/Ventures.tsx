import React from "react";
import { Briefcase } from "lucide-react";
import { BUSINESS_VENTURES, VentureItem } from "../config/siteConfig";

function getVentureBadgeStyle(status: VentureItem["status"]) {
  switch (status) {
    case "Active":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "In Development":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "Upcoming":
      return "bg-zinc-800 text-zinc-300 border-zinc-700";
  }
}

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 border-b border-zinc-900 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <Briefcase className="w-4 h-4" />
            <span>Commercial Activities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Broader Business Ventures
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Beyond software and digital strategy, Nexora Group develops and operates physical supply chain, distribution, and retail commerce initiatives.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_VENTURES.map((venture: VentureItem) => (
            <div
              key={venture.id}
              className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-medium px-2.5 py-0.5 rounded border ${getVentureBadgeStyle(
                      venture.status
                    )}`}
                  >
                    {venture.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white pt-1">
                  {venture.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {venture.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/70">
                <a
                  href="#contact"
                  className="text-xs font-medium text-zinc-300 hover:text-blue-400 transition-colors"
                >
                  Partner or Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}