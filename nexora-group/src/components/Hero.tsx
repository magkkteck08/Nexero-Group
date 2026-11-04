"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#07090E]"
    >
      {/* Background Artwork + Balanced Executive Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="Nexora Group"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/65 to-[#07090E]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[420px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start sm:items-center text-left sm:text-center space-y-6"
        >
          {/* Subtle Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
            <span>Multi-Sector Technology &amp; Commercial Enterprise</span>
          </div>

          {/* Clean, Well-Proportioned Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1] max-w-4xl">
            Building Ideas.{" "}
            <span className="text-blue-400">Developing Technology.</span>{" "}
            Creating Opportunities.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {SITE_CONFIG.description}
          </p>

          {/* Responsive Action Buttons (Full width on mobile, inline on tablet/desktop) */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/25"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#investors"
              className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/80 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>In The Lab &amp; Investors</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}