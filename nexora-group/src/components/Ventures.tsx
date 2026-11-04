import React from "react";
import { Briefcase } from "lucide-react";
import { BUSINESS_VENTURES, VentureItem } from "../config/siteConfig";

function getVentureDotColor(status: VentureItem["status"]) {
  switch (status) {
    case "Active":
      return "bg-emerald-400";
    case "In Development":
      return "bg-blue-400";
    case "Upcoming":
      return "bg-slate-400";
  }
}

export default function Ventures() {
  return (
    <section
      id="ventures"
      className="py-20 sm:py-28 bg-[#0F172A] border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <Briefcase className="w-4 h-4" />
            <span>Commercial Activities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Broader Business Ventures
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Beyond software and digital strategy, Nexora Group develops and operates physical supply chain, distribution, and retail commerce initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_VENTURES.map((venture: VentureItem) => (
            <div
              key={venture.id}
              className="bg-[#162036] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-slate-200">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${getVentureDotColor(
                        venture.status
                      )}`}
                    />
                    <span>{venture.status}</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white pt-1">
                  {venture.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {venture.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
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