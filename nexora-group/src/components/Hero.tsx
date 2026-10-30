"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-zinc-900"
    >
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="Nexora Group"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Seamless Blending Gradients */}
        <div className="absolute inset-0 bg-zinc-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-transparent" />
      </div>

      {/* Centered Content Overlay (Added pt-32 for mobile header clearance) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center pt-32 sm:pt-24 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 flex flex-col items-center"
        >
          {/* Refined Glassmorphism Pill Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/40 backdrop-blur-md border border-zinc-700/50 text-[10px] sm:text-xs font-medium text-zinc-200 shadow-2xl">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
            <span className="leading-tight">Multi-Sector Technology & Commercial Enterprise</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl drop-shadow-lg">
            {SITE_CONFIG.tagline}
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl text-zinc-300 max-w-2xl leading-relaxed drop-shadow">
            {SITE_CONFIG.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-md transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-medium text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-md transition-colors"
            >
              <span>View Our Work</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}