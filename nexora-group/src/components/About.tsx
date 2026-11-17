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
      className="py-20 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 space-y-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Corporate Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
              <Building2 className="w-4 h-4" />
              <span>About Nexora Group</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight leading-[1.12]">
              Practical Problem-Solving Backed by{" "}
              <span className="text-[#3E735E]">Strategic Execution.</span>
            </h2>

            <p className="text-[#4A4857] text-base font-medium leading-relaxed">
              Nexora Group is a multi-sector enterprise that builds, develops, operates, and invests in technology products and commercial ventures. Our software platforms are one pillar of the group—alongside interactive gaming, digital media publishing, physical product distribution, and emerging commercial opportunities.
            </p>

            <div className="nb-card p-5 sm:p-6 bg-[#FEF0B6] text-sm sm:text-base font-bold text-[#1E1B2E] italic leading-relaxed">
              &ldquo;{founder.visionQuote}&rdquo;
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/company"
                className="nb-btn-primary text-xs sm:text-sm"
              >
                <span>View Full Corporate Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/investors"
                className="nb-btn-secondary text-xs sm:text-sm"
              >
                <span>Investor &amp; Partnership Overview</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Founder & Group Executive Profile */}
          <div className="lg:col-span-5 nb-card bg-white p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#1E1B2E] bg-[#F7D147] shadow-[0_3px_0_0_#1E1B2E] shrink-0">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-block rounded-full border border-[#1E1B2E] bg-[#98E2C6] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-[#1E1B2E]">
                  Executive Leadership
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#1E1B2E] mt-1">
                  {founder.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#3E735E]">
                  {founder.role}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4A4857] font-medium leading-relaxed">
              {founder.summary}
            </p>

            {/* Division Responsibilities */}
            <div className="space-y-3 pt-3 border-t-2 border-[#1E1B2E]">
              <p className="text-xs font-black uppercase tracking-wider text-[#1E1B2E]">
                Group Responsibilities
              </p>
              <div className="space-y-2.5">
                {founder.responsibilities.map((item) => (
                  <div
                    key={item.division}
                    className="p-3.5 rounded-xl bg-[#FFFDF5] border-2 border-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]"
                  >
                    <p className="text-xs font-black text-[#1E1B2E]">
                      {item.division}
                    </p>
                    <p className="text-[11px] font-medium text-[#5A5868] mt-0.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Links */}
            <div className="pt-4 border-t-2 border-[#1E1B2E] flex flex-wrap items-center justify-between gap-3">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-extrabold px-4 py-2 rounded-full bg-[#F7D147] text-[#1E1B2E] border-2 border-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#1E1B2E] fill-current"
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
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1E1B2E] hover:underline"
              >
                <Mail className="w-3.5 h-3.5 text-[#3E735E]" />
                <span>{founder.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}