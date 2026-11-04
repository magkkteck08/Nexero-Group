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
    <section
      id="services"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#090D16] to-[#0F172A] border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Core Divisions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Four Specialized Pillars Built for Execution
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our technology and advisory capabilities are structured into four dedicated divisions serving startups, enterprises, and commercial partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {SERVICE_DIVISIONS.map((division: ServiceDivision, idx: number) => {
            const IconComponent = ICON_MAP[division.iconName];

            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-[#131C31]/90 hover:bg-[#17223B] border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all shadow-lg"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white">
                      {division.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {division.description}
                    </p>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                    {division.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-slate-200"
                      >
                        <Check className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href="#contact"
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