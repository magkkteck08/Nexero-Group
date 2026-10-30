"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Landmark,
  TrendingUp,
  Compass,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { SERVICE_DIVISIONS, ServiceDivision } from "../config/siteConfig";

const ICON_MAP = {
  Gamepad2,
  Landmark,
  TrendingUp,
  Compass,
};

export default function Services() {
  return (
    <section id="services" className="py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Core Divisions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Four Specialized Pillars Built for Execution
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Our technology and advisory capabilities are structured into four dedicated divisions serving startups, enterprises, and commercial partners.
          </p>
        </div>

        {/* 2x2 Service Division Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICE_DIVISIONS.map((division: ServiceDivision, idx: number) => {
            const IconComponent = ICON_MAP[division.iconName];

            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-zinc-900/50 hover:bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 rounded-lg p-7 flex flex-col justify-between transition-all"
              >
                <div className="space-y-5">
                  <div className="w-11 h-11 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      {division.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {division.description}
                    </p>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-2.5 pt-2">
                    {division.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-zinc-300"
                      >
                        <Check className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <a
                    href={`#contact`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 group-hover:text-blue-300 transition-colors"
                  >
                    <span>Enquire About {division.title.split(" ")[0]}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}