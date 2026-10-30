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
      {/* 1. Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg" // Ensure this matches your file in the public folder
          alt="Nexora Group"
          fill
          priority
          className="object-cover object-center"
        />
        {/* 1. Base dark tint so white text is always readable */}
<div className="absolute inset-0 bg-zinc-950/60" />

{/* 2. Heavy blend at the bottom to melt into the next section */}
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

{/* 3. Soft blend at the top so the navbar sits cleanly */}
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-transparent" />
      </div>

      {/* 2. Centered Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900/50 backdrop-blur-md border border-zinc-700/50 text-xs font-medium text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Multi-Sector Technology & Commercial Enterprise</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl">
            {SITE_CONFIG.tagline}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl leading-relaxed">
            {SITE_CONFIG.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-8 py-3.5 rounded-md transition-colors"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-medium text-sm px-8 py-3.5 rounded-md transition-colors"
            >
              <span>View Our Work</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}