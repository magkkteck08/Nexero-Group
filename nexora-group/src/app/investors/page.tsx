"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  SITE_CONFIG,
  SERVICE_DIVISIONS,
  PORTFOLIO_PROJECTS,
} from "../../config/siteConfig";
import {
  TrendingUp,
  Briefcase,
  Layers,
  Compass,
  Handshake,
  FileSpreadsheet,
  ArrowUpRight,
} from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 overflow-x-hidden">
      <Navbar />

      <main className="relative flex-grow pt-28 pb-24">
        {/* Ambient Gold Glow */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-amber-500/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 space-y-20">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 border-b border-zinc-900 pb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
              <span>Investor Relations &amp; Strategic Partnerships</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Building Sustainable Businesses &amp;{" "}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Scalable Technology
              </span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
              {SITE_CONFIG.corporatePositioning} Explore our group structure, operating portfolio, market trajectory, and structured avenues for capital and commercial collaboration.
            </p>
          </motion.div>

          {/* 1. About Nexora Group */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="grid md:grid-cols-12 gap-8 items-start"
          >
            <div className="md:col-span-4">
              <span className="text-xs font-mono text-amber-400">
                01 // MANDATE
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                About Nexora Group
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                Nexora Group is a multi-sector business and technology enterprise operating across proprietary software platforms, digital media, interactive entertainment, and physical commerce.
              </p>
              <p>
                Unlike traditional service agencies that build solely on commission, Nexora Group originates, owns, and operates digital products while participating in real-world distribution and commercial ventures.
              </p>
            </div>
          </motion.section>

          {/* 2. Business Divisions */}
          <section className="space-y-6 pt-10 border-t border-zinc-900">
            <div>
              <span className="text-xs font-mono text-amber-400">
                02 // OPERATING STRUCTURE
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Core Business Divisions
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {SERVICE_DIVISIONS.map((div, idx) => (
                <motion.div
                  key={div.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 hover:border-amber-500/30 transition-colors space-y-2.5"
                >
                  <h3 className="text-lg font-bold text-white">{div.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {div.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 3. Current Product Portfolio (Clean Action Buttons — No Raw URLs) */}
          <section className="space-y-6 pt-10 border-t border-zinc-900">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-amber-400">
                  03 // PROPRIETARY ASSETS
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  Current Product Portfolio
                </h2>
              </div>
              <Link
                href="/#work"
                className="text-xs font-semibold text-amber-400 hover:underline"
              >
                Explore Full Portfolio →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PORTFOLIO_PROJECTS.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 hover:border-zinc-700 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-amber-400">
                        {item.group}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    {item.visitUrl ? (
                      <a
                        href={item.visitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-amber-400 transition-colors"
                      >
                        <span>Launch Platform</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : item.learnMoreUrl ? (
                      <Link
                        href={item.learnMoreUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        <span>View R&amp;D Brief</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="text-xs text-zinc-500">
                        Internal Beta Build
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 4. Market Opportunities & 5. Development Roadmap */}
          <section className="grid md:grid-cols-2 gap-6 pt-10 border-t border-zinc-900">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-7 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4"
            >
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono">
                <TrendingUp className="w-4 h-4" />
                <span>04 // MARKET OPPORTUNITIES</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Addressing High-Growth Market Gaps
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <li>
                  <strong className="text-white">SME Digitalization:</strong>{" "}
                  Merchants across emerging markets require lightweight invoicing (Receipta), digital catalogues (CatalogPal), and margin tracking (ProfitPal) tailored for mobile workflows.
                </li>
                <li>
                  <strong className="text-white">Player-Centric Sports Gaming:</strong>{" "}
                  Strong global demand for immersive, third-person career football simulations (Become A Legend).
                </li>
                <li>
                  <strong className="text-white">Essential Distribution:</strong>{" "}
                  Combining digital coordination with physical foodstuff and merchandise supply creates resilient commercial cash flow.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="p-7 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4"
            >
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono">
                <Compass className="w-4 h-4" />
                <span>05 // DEVELOPMENT ROADMAP</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Phased Execution Priorities
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <li>
                  <strong className="text-white">Near-Term:</strong> Scale merchant adoption on Receipta, CatalogPal, and Africommerce while expanding Velo Pulse&apos;s contributor desk.
                </li>
                <li>
                  <strong className="text-white">Mid-Term:</strong> Release ProfitPal commercially and expand physical product sourcing and distribution operations.
                </li>
                <li>
                  <strong className="text-white">Long-Term R&amp;D:</strong>{" "}
                  Complete the playable vertical slice of <em>Become A Legend</em> alongside strategic studio and seed capital partners.
                </li>
              </ul>
            </motion.div>
          </section>

          {/* 6 & 7: Investment vs Commercial Partnerships */}
          <section className="space-y-6 pt-10 border-t border-zinc-900">
            <div>
              <span className="text-xs font-mono text-amber-400">
                06 &amp; 07 // CAPITAL &amp; COMMERCIAL ALIGNMENT
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Distinguishing Investment &amp; Partnership Tracks
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-500/40 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Layers className="w-4 h-4" />
                  <span>06 // Targeted Project Investment</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Become A Legend (Seed &amp; R&amp;D Track)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  We are actively engaging angel investors, gaming venture funds, and technical co-development partners for our flagship third-person football title, <strong>Become A Legend</strong>, as well as select group-level expansion initiatives.
                </p>
                <div className="pt-2">
                  <Link
                    href="/projects/become-a-legend"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:underline"
                  >
                    <span>Review Become A Legend R&amp;D Brief</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="p-7 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  <Handshake className="w-4 h-4 text-amber-400" />
                  <span>07 // Commercial Partnerships</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  SaaS Distribution, Media &amp; Supply Chain
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Our live platforms (<strong>Receipta, CatalogPal, Africommerce, Velo Pulse, Creator Unite</strong>) and physical distribution ventures are open to B2B integrations, merchant onboarding partnerships, media sponsorships, and wholesale supply agreements.
                </p>
                <div className="pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    <span>Route Proposal to Partnerships Desk</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Request an Investor Presentation */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-950 border border-amber-500/30 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <FileSpreadsheet className="w-4 h-4" />
                <span>08 // EXECUTIVE BRIEFING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Request an Investor Presentation
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Qualified investors, venture partners, and institutional collaborators can request our corporate presentation or the dedicated <em>Become A Legend</em> pitch deck directly from the Founder&apos;s Office.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 shrink-0">
              <a
                href={`mailto:${SITE_CONFIG.emails.founder}?subject=Request%20for%20Investor%20Presentation%20-%20Nexora%20Group`}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <span>Request Presentation Deck</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Open Enquiry Portal</span>
              </Link>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}