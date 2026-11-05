"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[84vh] flex items-center justify-center overflow-hidden bg-zinc-950 border-b border-zinc-900"
    >
      {/* Background Ecosystem Visual + Black & Gold Executive Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="Nexora Group Ecosystem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-zinc-950" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[680px] h-[300px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center space-y-6">
          {/* Corporate Positioning Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-xs font-semibold text-amber-300">
            <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{SITE_CONFIG.corporatePositioning}</span>
          </div>

          {/* Primary Homepage Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1] max-w-4xl">
            Building Ideas.{" "}
            <span className="text-amber-400">Developing Technology.</span>{" "}
            Creating Opportunities.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            {SITE_CONFIG.description}
          </p>

          {/* Actions */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-7 py-3.5 rounded-lg transition-colors"
            >
              <span>Explore Product Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/investors"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors"
            >
              <span>Investors &amp; Partnerships</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}