"use client";

import React, { useEffect, useState } from "react";
import { Clock, Globe } from "lucide-react";

export default function WorldClock() {
  const [clocks, setClocks] = useState({
    nigeria: "--:--",
    london: "--:--",
    newYork: "--:--",
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const fmt = (tz: string) =>
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: tz,
        }).format(now);

      setClocks({
        nigeria: fmt("Africa/Lagos"),
        london: fmt("Europe/London"),
        newYork: fmt("America/New_York"),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Card 1: Pastel Yellow */}
        <div className="nb-card flex items-center justify-between bg-[#FEF0B6] p-5">
          <div>
            <span className="text-xs font-extrabold uppercase text-[#686677]">
              HQ Operations · Nigeria
            </span>
            <p className="mt-1 text-2xl font-black text-[#1E1B2E]">
              {clocks.nigeria}
            </p>
            <p className="mt-0.5 text-xs font-bold text-[#3E735E]">
              Ibadan / Lagos (WAT)
            </p>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#1E1B2E] bg-[#F7D147] shadow-[0_2px_0_0_#1E1B2E]">
            <Globe className="h-5 w-5 text-[#1E1B2E]" />
          </span>
        </div>

        {/* Card 2: Pastel Sky Blue */}
        <div className="nb-card flex items-center justify-between bg-[#EBF3F9] p-5">
          <div>
            <span className="text-xs font-extrabold uppercase text-[#686677]">
              European Desk · UK
            </span>
            <p className="mt-1 text-2xl font-black text-[#1E1B2E]">
              {clocks.london}
            </p>
            <p className="mt-0.5 text-xs font-bold text-[#686677]">
              London (GMT / BST)
            </p>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#1E1B2E] bg-white shadow-[0_2px_0_0_#1E1B2E]">
            <Clock className="h-5 w-5 text-[#1E1B2E]" />
          </span>
        </div>

        {/* Card 3: Warm White */}
        <div className="nb-card flex items-center justify-between bg-white p-5">
          <div>
            <span className="text-xs font-extrabold uppercase text-[#686677]">
              Capital Markets · US
            </span>
            <p className="mt-1 text-2xl font-black text-[#1E1B2E]">
              {clocks.newYork}
            </p>
            <p className="mt-0.5 text-xs font-bold text-[#686677]">
              New York (EST / EDT)
            </p>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#1E1B2E] bg-[#F7D147] shadow-[0_2px_0_0_#1E1B2E]">
            <Clock className="h-5 w-5 text-[#1E1B2E]" />
          </span>
        </div>
      </div>
    </section>
  );
}