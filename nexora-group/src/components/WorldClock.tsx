"use client";

import React, { useState, useEffect } from "react";
import { Globe2 } from "lucide-react";
import { WORLD_CLOCK_LOCATIONS, ClockLocation } from "../config/siteConfig";

interface FormattedClock {
  time: string;
  date: string;
  tzShort: string;
}

function formatLocationTime(now: Date, timeZone: string): FormattedClock {
  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const tzFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
  });
  const tzParts = tzFormatter.formatToParts(now);
  const tzShort =
    tzParts.find((p) => p.type === "timeZoneName")?.value || timeZone;
  return {
    time: timeFormatter.format(now),
    date: dateFormatter.format(now),
    tzShort,
  };
}

export default function WorldClock() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());
    const intervalId = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      aria-label="Global Operating Hours"
      className="relative z-20 -mt-6 sm:-mt-10 pb-12 border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800/90 p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Top Command Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-400">
              <Globe2 className="w-4 h-4 text-blue-400 animate-spin [animation-duration:12s]" />
              <span>Global Operations Command &amp; Live Time Sync</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span>Active Across 4 International Time Zones</span>
            </div>
          </div>

          {/* 2-Column on Mobile, 4-Column on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {WORLD_CLOCK_LOCATIONS.map((loc: ClockLocation) => {
              const formatted =
                mounted && now ? formatLocationTime(now, loc.timeZone) : null;
              return (
                <div
                  key={loc.timeZone}
                  className={`relative rounded-xl p-3.5 sm:p-4 border transition-all duration-300 ${
                    loc.isPrimary
                      ? "bg-gradient-to-br from-blue-950/60 via-zinc-900/90 to-zinc-950 border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                      : "bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{loc.city}</span>
                        {loc.isPrimary && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-500 text-white shadow-sm">
                            HQ
                          </span>
                        )}
                      </p>
                      <p className="text-[10px] sm:text-xs text-zinc-400">
                        {loc.country}
                      </p>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-blue-300 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-500/20 w-fit">
                      {formatted ? formatted.tzShort : "---"}
                    </span>
                  </div>

                  <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-zinc-800/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                    <span className="text-lg sm:text-2xl font-mono font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent tracking-tight">
                      {formatted ? formatted.time : "--:--:--"}
                    </span>
                    <span className="text-[9px] sm:text-[11px] text-zinc-400">
                      {formatted ? formatted.date : "Syncing..."}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}