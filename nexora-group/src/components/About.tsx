import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Mail,
  ArrowUpRight,
  Target,
  Eye,
  Sparkles,
  ShieldCheck,
  Leaf,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

const CORE_VALUES = [
  {
    name: "Innovation",
    detail: "Engineering practical, forward-looking digital products.",
    icon: Sparkles,
    bg: "bg-[#FEF0B6]",
  },
  {
    name: "Integrity",
    detail: "Transparent governance, honest reporting, and trusted execution.",
    icon: ShieldCheck,
    bg: "bg-[#EBF3F9]",
  },
  {
    name: "Sustainability",
    detail: "Building resilient ventures designed for long-term commercial viability.",
    icon: Leaf,
    bg: "bg-[#E8F8F0]",
  },
  {
    name: "Collaboration",
    detail: "Partnering closely with founders, merchants, and institutions.",
    icon: Users,
    bg: "bg-white",
  },
  {
    name: "Excellence",
    detail: "High standards in software architecture, design, and operations.",
    icon: Award,
    bg: "bg-[#FEF0B6]",
  },
  {
    name: "Impact",
    detail: "Strengthening Africa's digital backbone and everyday commerce.",
    icon: Zap,
    bg: "bg-[#EBF3F9]",
  },
];

const FOUNDER_MAIL_HREF =
  "mailto:magkk.muizomoyele@gmail.com?subject=%5BNexora%20Group%20-%20Executive%20Leadership%5D%20Corporate%20Enquiry";

export default function About() {
  const { founder } = SITE_CONFIG;

  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Part 1: Who We Are + Mission & Vision + Executive Leadership */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Cols: Who We Are, Mission & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
              <Building2 className="w-4 h-4" />
              <span>About Nexora Group</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight leading-[1.1]">
              More Than Technology.{" "}
              <span className="text-[#3E735E]">Building Businesses.</span>
            </h2>

            {/* Who We Are */}
            <div className="space-y-2">
              <p className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
                Who We Are
              </p>
              <p className="text-[#4A4857] text-sm sm:text-base font-medium leading-relaxed">
                Nexora Group is a technology and venture-building company focused on developing digital infrastructure, launching innovative products, and supporting the growth of technology-driven businesses across Africa and beyond.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="nb-card bg-[#FEF0B6] p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1E1B2E]">
                  <Target className="w-4 h-4 text-[#3E735E]" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#1E1B2E] leading-relaxed">
                  To build accessible, scalable, and impactful digital solutions that empower businesses and strengthen Africa&apos;s digital economy.
                </p>
              </div>

              <div className="nb-card bg-[#EBF3F9] p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1E1B2E]">
                  <Eye className="w-4 h-4 text-[#3E735E]" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#1E1B2E] leading-relaxed">
                  To become a leading African technology and venture group, building sustainable businesses with global relevance.
                </p>
              </div>
            </div>

            <blockquote className="rounded-2xl border-2 border-[#1E1B2E] bg-white p-5 text-sm sm:text-base font-bold text-[#1E1B2E] italic leading-relaxed shadow-[0_3px_0_0_#1E1B2E]">
              &ldquo;{founder.visionQuote}&rdquo;
            </blockquote>

            <div className="pt-1 flex flex-wrap gap-3.5">
              <Link
                href="/company"
                className="nb-btn-primary text-xs sm:text-sm"
              >
                <span>Full Corporate Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#partnerships"
                className="nb-btn-secondary text-xs sm:text-sm"
              >
                <span>Partnerships &amp; Investment</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right 5 Cols: Founder & Group Executive Profile */}
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
                Group Leadership Scope
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

            {/* Executive Action Buttons (Zero Raw Email Exposed) */}
            <div className="pt-4 border-t-2 border-[#1E1B2E] flex flex-wrap items-center justify-between gap-3">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-extrabold px-4 py-2 rounded-full bg-[#F7D147] text-[#1E1B2E] border-2 border-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={FOUNDER_MAIL_HREF}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold px-4 py-2 rounded-full bg-white text-[#1E1B2E] border-2 border-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#FEF0B6] transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#3E735E]" />
                <span>Email Executive Office</span>
              </a>
            </div>
          </div>
        </div>

        {/* Part 2: Section 08 — Our 6 Core Values */}
        <div className="space-y-5 pt-4 border-t-2 border-[#1E1B2E]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#3E735E]">
                Corporate DNA
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1E1B2E] mt-0.5">
                Our Core Values
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#5A5868]">
              The principles guiding how we engineer products, operate ventures, and partner with organisations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.name}
                  className={`nb-card ${val.bg} p-5 flex items-start gap-3.5`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#1E1B2E] bg-white shadow-[0_2px_0_0_#1E1B2E]">
                    <Icon className="h-5 w-5 text-[#1E1B2E]" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-[#1E1B2E]">
                      {val.name}
                    </h4>
                    <p className="mt-1 text-xs font-medium text-[#4A4857] leading-relaxed">
                      {val.detail}
                    </p>
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