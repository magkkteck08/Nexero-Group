"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Cpu, ShieldCheck, Zap } from "lucide-react";

export default function FlagshipLab() {
  return (
    <section className="py-20 sm:py-24 border-b-2 border-[#1E1B2E]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="nb-card bg-[#FEF0B6] p-7 sm:p-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-white px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
                <Sparkles className="w-3.5 h-3.5 text-[#3E735E]" />
                <span>Nexora Flagship Lab</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight leading-tight">
                Engineering Next-Generation Commercial &amp; Interactive Systems
              </h2>

              <p className="text-sm sm:text-base font-medium text-[#4A4857] leading-relaxed">
                Inside our R&amp;D studio, we prototype high-utility SaaS platforms, AI-assisted merchant workflows, and sports simulation architectures built for global scalability.
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Link href="/projects" className="nb-btn-primary text-sm">
                  <span>Explore Lab Projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/investors" className="nb-btn-secondary text-sm">
                  <span>Partner With The Lab</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-4">
              <div className="rounded-2xl border-2 border-[#1E1B2E] bg-white p-4 shadow-[0_3px_0_0_#1E1B2E] flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl border-2 border-[#1E1B2E] bg-[#98E2C6]">
                  <Zap className="w-5 h-5 text-[#1E1B2E]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1E1B2E]">
                    Rapid Full-Stack Deployment
                  </h3>
                  <p className="text-xs font-medium text-[#5A5868] mt-0.5">
                    From architecture to production-grade web and mobile release.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-[#1E1B2E] bg-white p-4 shadow-[0_3px_0_0_#1E1B2E] flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl border-2 border-[#1E1B2E] bg-[#EBF3F9]">
                  <Cpu className="w-5 h-5 text-[#1E1B2E]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1E1B2E]">
                    Proprietary IP &amp; Engines
                  </h3>
                  <p className="text-xs font-medium text-[#5A5868] mt-0.5">
                    Custom billing, storefront, and sports telemetry infrastructure.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-[#1E1B2E] bg-white p-4 shadow-[0_3px_0_0_#1E1B2E] flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl border-2 border-[#1E1B2E] bg-[#C5B4F0]">
                  <ShieldCheck className="w-5 h-5 text-[#1E1B2E]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1E1B2E]">
                    Enterprise-Ready Security
                  </h3>
                  <p className="text-xs font-medium text-[#5A5868] mt-0.5">
                    Built for multi-tenant reliability, data integrity, and uptime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}