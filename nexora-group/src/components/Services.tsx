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

const CARD_THEMES = [
  "bg-[#FEF0B6]",
  "bg-[#EBF3F9]",
  "bg-white",
  "bg-[#E8F8F0]",
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="inline-block rounded-full border-2 border-[#1E1B2E] bg-[#EBF3F9] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
            Core Divisions
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight">
            Four Specialized Pillars Built for Execution
          </h2>
          <p className="text-[#5A5868] text-sm sm:text-base font-medium leading-relaxed">
            Our technology and advisory capabilities are structured into four dedicated divisions serving startups, enterprises, and commercial partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {SERVICE_DIVISIONS.map((division: ServiceDivision, idx: number) => {
            const IconComponent = ICON_MAP[division.iconName];
            const cardBg = CARD_THEMES[idx % CARD_THEMES.length];

            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`nb-card ${cardBg} p-6 sm:p-8 flex flex-col justify-between transition-transform hover:-translate-y-1`}
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F7D147] border-2 border-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] flex items-center justify-center text-[#1E1B2E]">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#1E1B2E]">
                      {division.title}
                    </h3>
                    <p className="text-sm text-[#4A4857] font-medium leading-relaxed">
                      {division.description}
                    </p>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                    {division.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E1B2E] bg-white/80 px-3 py-2 rounded-xl border-2 border-[#1E1B2E]"
                      >
                        <Check className="w-4 h-4 text-[#3E735E] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t-2 border-[#1E1B2E] flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1.5px] hover:shadow-[0_1.5px_0_0_#1E1B2E] transition-all"
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