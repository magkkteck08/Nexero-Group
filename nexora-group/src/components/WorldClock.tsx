"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
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

    const intervalId = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      aria-label="Global Operating Hours and World Clock"
      className="border-b border-zinc-900 bg-zinc-950/60"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <span>International Operations &amp; Time Synchronization</span>
          </div>
          <span className="text-xs text-zinc-500">
            Real-time local clocks across key commercial corridors
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORLD_CLOCK_LOCATIONS.map((loc: ClockLocation) => {
            const formatted =
              mounted && now ? formatLocationTime(now, loc.timeZone) : null;

            return (
              <div
                key={loc.timeZone}
                className={`rounded-lg p-4 border transition-colors ${
                  loc.isPrimary
                    ? "bg-zinc-900/90 border-blue-500/40"
                    : "bg-zinc-900/40 border-zinc-800/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white flex items-center gap-2">
                      <span>{loc.city}</span>
                      {loc.isPrimary && (
                        <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                          HQ
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-zinc-400">{loc.country}</p>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                    {formatted ? formatted.tzShort : "---"}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/70 flex items-baseline justify-between">
                  <span className="text-2xl font-mono font-semibold text-white tracking-tight">
                    {formatted ? formatted.time : "--:--:--"}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {formatted ? formatted.date : "Loading date..."}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}