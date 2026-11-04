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
      className="relative min-h-[82vh] flex items-center justify-center overflow-hidden"
    >
      {/* 1. Brighter Background Image + Luminous Radial Spotlight */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="Nexora Group"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65 scale-105 transition-transform duration-1000"
        />
        {/* Lighter tint so the artwork stays visible and vibrant */}
        <div className="absolute inset-0 bg-zinc-950/45" />
        {/* Bright Electric Blue & Cyan Center Spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] h-[350px] sm:h-[450px] bg-blue-500/25 rounded-full blur-[130px] pointer-events-none" />
        {/* Smooth bottom fade into the World Clock dock */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
      </div>

      {/* 2. Balanced, High-Contrast Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 flex flex-col items-center text-center pt-28 pb-16 sm:pt-36 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="space-y-6 flex flex-col items-center"
        >
          {/* Luminous Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-medium text-blue-100 shadow-[0_0_25px_rgba(59,130,246,0.25)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa] animate-pulse" />
            <span>Multi-Sector Technology &amp; Commercial Enterprise</span>
          </div>

          {/* Gradient Split Headline (Controlled Width for Executive Readability) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] max-w-3xl">
            <span className="text-white">Building Ideas. </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-200 to-white bg-clip-text text-transparent">
              Developing Technology.{" "}
            </span>
            <span className="text-white">Creating Opportunities.</span>
          </h1>

          {/* Supporting Description */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-200 max-w-2xl leading-relaxed font-normal">
            {SITE_CONFIG.description}
          </p>

          {/* Elevated CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-lg transition-all shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(59,130,246,0.65)]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#investors"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/15 text-white border border-white/20 font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-lg transition-all"
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