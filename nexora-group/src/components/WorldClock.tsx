"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { WORLD_CLOCK_LOCATIONS, ClockLocation } from "../config/siteConfig";

interface FormattedClock {
  time: string;
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
  const tzFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
  });
  const tzParts = tzFormatter.formatToParts(now);
  const tzShort =
    tzParts.find((p) => p.type === "timeZoneName")?.value || timeZone;
  return {
    time: timeFormatter.format(now),
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
      aria-label="Global Time Reference"
      className="bg-zinc-950 border-t border-zinc-900 py-8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 shrink-0">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Global Time Reference</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full lg:w-auto">
            {WORLD_CLOCK_LOCATIONS.map((loc: ClockLocation) => {
              const formatted =
                mounted && now ? formatLocationTime(now, loc.timeZone) : null;
              return (
                <div
                  key={loc.timeZone}
                  className="flex items-center justify-between sm:justify-start gap-3 px-3 py-2 rounded-lg bg-zinc-950/80 border border-zinc-800/70"
                >
                  <div>
                    <p className="text-xs font-semibold text-white">
                      {loc.city}
                    </p>
                    <p className="text-[10px] text-zinc-500">
                      {formatted ? formatted.tzShort : "---"}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-amber-400">
                    {formatted ? formatted.time : "--:--:--"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}