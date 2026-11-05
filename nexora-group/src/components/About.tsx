import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Mail, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export default function About() {
  const { founder } = SITE_CONFIG;

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-zinc-950 border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 space-y-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Corporate Overview */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <Building2 className="w-4 h-4" />
              <span>About Nexora Group</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Practical Problem-Solving Backed by Strategic Execution
            </h2>

            <p className="text-zinc-300 text-base leading-relaxed">
              Nexora Group is a multi-sector enterprise that builds, develops, operates, and invests in technology products and commercial ventures. Our software platforms are one pillar of the group—alongside interactive gaming, digital media publishing, physical product distribution, and emerging commercial opportunities.
            </p>

            <blockquote className="p-5 sm:p-6 rounded-xl bg-zinc-900/70 border-l-4 border-amber-400 text-sm sm:text-base text-zinc-200 italic leading-relaxed">
              &ldquo;{founder.visionQuote}&rdquo;
            </blockquote>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/company"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>View Full Corporate Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
              >
                <span>Investor &amp; Partnership Overview</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Founder & Group Executive Profile */}
          <div className="lg:col-span-5 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-amber-500/40 bg-zinc-800 shrink-0">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                  Executive Leadership
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {founder.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-400">
                  {founder.role}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {founder.summary}
            </p>

            {/* Division Responsibilities */}
            <div className="space-y-3 pt-2 border-t border-zinc-800/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Group Responsibilities
              </p>
              <div className="space-y-2.5">
                {founder.responsibilities.map((item) => (
                  <div
                    key={item.division}
                    className="p-3 rounded-lg bg-zinc-950/80 border border-zinc-800/80"
                  >
                    <p className="text-xs font-bold text-white">
                      {item.division}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Links */}
            <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-700 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 text-amber-400 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${founder.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{founder.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}