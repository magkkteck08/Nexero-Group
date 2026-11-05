"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  Gamepad2,
  ArrowLeft,
  Monitor,
  Cpu,
  Target,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "../../../config/siteConfig";

const GAMEPLAY_CONCEPTS = [
  {
    tag: "CAMERA & CONTROL",
    title: "Immersion-First 3rd-Person Perspective",
    description:
      "Rather than controlling all eleven players from a broadcast camera, players experience the match directly behind the shoulders of their footballer—reading defensive lines, timing sprint runs, and feeling pitch physicality.",
  },
  {
    tag: "CAREER PROGRESSION",
    title: "Grassroots Academy to Global Arenas",
    description:
      "Begin on community and academy pitches, earn scouting trials, negotiate club contracts, and rise toward top-flight domestic leagues and international tournaments.",
  },
  {
    tag: "FOOTBALL IQ ENGINE",
    title: "Tactical & Positional Evaluation",
    description:
      "Match ratings reward authentic football intelligence: defensive positioning, off-the-ball movement, pressing triggers, link-up passing, and clinical finishing.",
  },
  {
    tag: "COMPETITIVE MULTIPLAYER",
    title: "Online Squads & Pro-Club Lobbies",
    description:
      "Engineered to scale into multi-player online pitch lobbies where individual athletes lock into dedicated roles (Defender, Midfielder, Forward) in coordinated 5v5 and 11v11 competition.",
  },
];

const DEV_ROADMAP = [
  {
    phase: "Phase 01 • Active Prototype",
    status: "In Progress",
    title: "3rd-Person Locomotion, Camera & Ball Physics",
    detail:
      "Core player movement controller, sprint inertia, close-control dribbling, and spatial camera tracking.",
  },
  {
    phase: "Phase 02 • Vertical Slice",
    status: "Upcoming",
    title: "Tactical AI & Playable Match Demo",
    detail:
      "Teammate and opponent positional AI, stamina systems, and a playable single-match vertical slice for partner demonstrations.",
  },
  {
    phase: "Phase 03 • Alpha Build",
    status: "Roadmap",
    title: "Academy Story Loop & Closed Alpha",
    detail:
      "Character customization, attribute progression trees, training drills, and closed community alpha testing.",
  },
  {
    phase: "Phase 04 • Commercial Scale",
    status: "Long-Term",
    title: "Cross-Platform Release & Online Pro Clubs",
    detail:
      "Full commercial rollout across PC and console ecosystems alongside seasonal competitive multiplayer.",
  },
];

export default function BecomeALegendPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 overflow-x-hidden">
      <Navbar />

      <main className="relative flex-grow pt-28 pb-24">
        {/* Ambient Gold & Indigo Studio Spotlights */}
        <div className="fixed top-20 right-[-10%] w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="fixed bottom-10 left-[-10%] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 space-y-20">
          {/* Top Navigation Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Product Ecosystem</span>
            </Link>
          </motion.div>

          {/* Flagship Hero Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-amber-500/35 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wider uppercase">
                <Gamepad2 className="w-4 h-4" />
                <span>Nexora Gaming Division • Flagship R&amp;D</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Become A{" "}
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Legend
                </span>
              </h1>

              <p className="text-base sm:text-xl text-zinc-300 leading-relaxed">
                An original third-person football career and tactical action simulation that places players directly in the boots of an aspiring athlete—rising from grassroots academy pitches to international stadiums.
              </p>

              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href={`mailto:${SITE_CONFIG.emails.founder}?subject=Become%20A%20Legend%20-%20Investor%20%26%20Pitch%20Deck%20Request`}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
                >
                  <span>Request Pitch Deck</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/investors"
                  className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-xl transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Investor Relations Overview</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 1. Core Gameplay Architecture */}
          <section className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <Target className="w-4 h-4" />
                <span>Gameplay Pillars</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Engineered Around the Individual Footballer
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {GAMEPLAY_CONCEPTS.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-7 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800/90 hover:border-amber-500/40 transition-all space-y-3 shadow-lg"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 inline-block">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 2. Target Platforms */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-7 sm:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 grid md:grid-cols-3 gap-6 items-center"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Monitor className="w-4 h-4" />
                <span>Target Ecosystems</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Hardware &amp; Distribution
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Designed for controller-first tactile precision and scalable 3D rendering pipelines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/90 space-y-1.5">
              <p className="text-xs font-mono text-amber-400">PRIMARY TARGET</p>
              <p className="text-base font-bold text-white">
                PC Digital Distribution
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Steam &amp; Epic Games Store deployment with full gamepad integration for vertical slice and early access builds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/90 space-y-1.5">
              <p className="text-xs font-mono text-amber-400">CONSOLE EXPANSION</p>
              <p className="text-base font-bold text-white">
                Next-Gen Console Systems
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                PlayStation &amp; Xbox console ports following core gameplay validation and strategic studio co-development.
              </p>
            </div>
          </motion.section>

          {/* 3. Development Roadmap */}
          <section className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <Cpu className="w-4 h-4" />
                <span>Execution Timeline</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Phased Production Roadmap
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {DEV_ROADMAP.map((step, idx) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-amber-400">
                        {step.phase}
                      </span>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300">
                        {step.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 4. Investment & Partnership CTA */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-950 border border-amber-500/35 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <TrendingUp className="w-4 h-4" />
                <span>Seed Capital &amp; Studio Collaboration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Partner on Become A Legend
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                We are actively engaging angel investors, gaming venture funds, 3D technical artists, and co-development partners to accelerate our playable vertical slice and motion capture pipeline.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <span>Open Investment Enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={`mailto:${SITE_CONFIG.emails.partnerships}?subject=Studio%20Co-Development%20-%20Become%20A%20Legend`}
                className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <span>Studio Partnership Desk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}