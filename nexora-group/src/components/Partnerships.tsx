"use client";

import React, { useState } from "react";
import {
  Handshake,
  TrendingUp,
  Cpu,
  Users,
  Send,
  CheckCircle2,
  Heart,
  ArrowUpRight,
  Coffee,
  ShieldCheck,
} from "lucide-react";

export const BUY_ME_A_MALT_URL = "https://buymeamalt.com/@becomealegend";

type FormTrack =
  | "Partnership Enquiry"
  | "Investment Enquiry"
  | "Collaboration Proposal";

const PARTNERSHIP_CATEGORIES = [
  {
    code: "A",
    title: "Strategic Partners",
    subtitle: "Commercial & Institutional Alliances",
    description:
      "Organisations, enterprises, and industry bodies interested in co-developing solutions, distribution alliances, or commercial collaborations with Nexora Group.",
    formTrack: "Partnership Enquiry" as FormTrack,
    icon: Handshake,
    bg: "bg-[#FEF0B6]",
  },
  {
    code: "B",
    title: "Investors",
    subtitle: "Venture & Seed Capital Discussions",
    description:
      "Angel investors, venture funds, and strategic backers interested in discussing long-term funding for viable Nexora Group ventures and spin-outs.",
    formTrack: "Investment Enquiry" as FormTrack,
    icon: TrendingUp,
    bg: "bg-[#EBF3F9]",
  },
  {
    code: "C",
    title: "Technology Partners",
    subtitle: "Infrastructure, Cloud & API Providers",
    description:
      "Technology providers, payment gateways, cloud infrastructure companies, and engineering teams looking to integrate with our ecosystem.",
    formTrack: "Partnership Enquiry" as FormTrack,
    icon: Cpu,
    bg: "bg-white",
  },
  {
    code: "D",
    title: "Venture Collaborators",
    subtitle: "Founders, Operators & Co-Builders",
    description:
      "Founders, domain experts, and entrepreneurs interested in co-building new digital products or incubating businesses alongside Nexora Group.",
    formTrack: "Collaboration Proposal" as FormTrack,
    icon: Users,
    bg: "bg-[#E8F8F0]",
  },
];

export default function Partnerships() {
  const [activeTrack, setActiveTrack] = useState<FormTrack>(
    "Partnership Enquiry"
  );
  const [partnerType, setPartnerType] = useState("Strategic Partners");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [proposal, setProposal] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSelectCategory = (title: string, track: FormTrack) => {
    setPartnerType(title);
    setActiveTrack(track);
    const formEl = document.getElementById("partnership-form");
    if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${name} (${organization || "Independent"})`,
          email,
          category: `${activeTrack} — ${partnerType}`,
          subject: `[Nexora Group - ${activeTrack}] ${partnerType} from ${name}`,
          message: proposal,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setName("");
        setOrganization("");
        setEmail("");
        setProposal("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="partnerships"
      className="py-16 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
            <Handshake className="h-3.5 w-3.5 text-[#3E735E]" />
            <span>Partnerships &amp; Venture Backing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E1B2E] leading-[1.1]">
            Building Together.{" "}
            <span className="text-[#3E735E]">Growing Together.</span>
          </h2>

          <p className="text-sm sm:text-base font-medium text-[#5A5868] leading-relaxed">
            Long-term value is built through strong alliances. Nexora Group collaborates with strategic organisations, technology providers, venture backers, and entrepreneurial co-builders across four dedicated tracks.
          </p>
        </div>

        {/* 4 Partnership Categories Grid (A, B, C, D) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PARTNERSHIP_CATEGORIES.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.code}
                className={`nb-card ${item.bg} p-6 sm:p-7 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#1E1B2E] bg-white shadow-[0_3px_0_0_#1E1B2E]">
                      <Icon className="h-6 w-6 text-[#1E1B2E]" />
                    </div>
                    <span className="rounded-full border-2 border-[#1E1B2E] bg-white px-3 py-0.5 text-xs font-black text-[#1E1B2E]">
                      Track {item.code}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#3E735E]">
                      {item.subtitle}
                    </p>
                    <h3 className="text-2xl font-black text-[#1E1B2E] mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[#4A4857] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-[#1E1B2E] flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#5A5868]">
                    {item.formTrack}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      handleSelectCategory(item.title, item.formTrack)
                    }
                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] hover:bg-white transition-all cursor-pointer"
                  >
                    <span>Submit Proposal</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Partnership, Investment & Collaboration Proposal Form + Donor Hub */}
        <div
          id="partnership-form"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left 7 Cols: 3-in-1 Partnership / Investment / Collaboration Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 nb-card bg-white p-6 sm:p-8 space-y-5"
          >
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
                Official Partner Desk
              </span>
              <h3 className="text-2xl font-black text-[#1E1B2E]">
                Submit a Partnership or Venture Proposal
              </h3>
            </div>

            {/* Form Type Switcher Tabs */}
            <div className="flex flex-wrap gap-2 pt-1">
              {(
                [
                  "Partnership Enquiry",
                  "Investment Enquiry",
                  "Collaboration Proposal",
                ] as FormTrack[]
              ).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTrack(tab)}
                  className={`rounded-full border-2 border-[#1E1B2E] px-3.5 py-1.5 text-xs font-extrabold transition cursor-pointer ${
                    activeTrack === tab
                      ? "bg-[#F7D147] text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]"
                      : "bg-[#FFFDF5] text-[#5A5868] hover:bg-[#FEF0B6]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                  Organisation / Venture
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Company, fund, or project name"
                  className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="partner@organisation.com"
                  className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                  Partnership Track
                </label>
                <select
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                  className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-bold text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
                >
                  {PARTNERSHIP_CATEGORIES.map((c) => (
                    <option key={c.title} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                {activeTrack} Overview
              </label>
              <textarea
                rows={4}
                required
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                placeholder="Outline the scope of collaboration, target venture, or partnership goals..."
                className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              {submitted ? (
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#3E735E]">
                  <CheckCircle2 className="h-4 w-4" /> Proposal routed to Nexora Partnerships Desk!
                </span>
              ) : (
                <span className="text-[11px] font-bold text-[#5A5868]">
                  Reviewed directly by Nexora Group leadership.
                </span>
              )}

              <button
                type="submit"
                disabled={loading}
                className="nb-btn-primary text-xs sm:text-sm px-6 py-3 cursor-pointer"
              >
                <span>{loading ? "Submitting..." : `Send ${activeTrack}`}</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Right 5 Cols: Governance Note + Community & Donor Support Hub */}
          <div className="lg:col-span-5 space-y-6">
            {/* Community Donor & R&D Support Box (Moved from Hero per Blueprint) */}
            <div className="nb-card bg-[#FEF0B6] p-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-white px-3 py-0.5 text-[11px] font-extrabold uppercase text-[#1E1B2E]">
                <Heart className="h-3.5 w-3.5 fill-[#E5484D]" />
                <span>Community &amp; Donor Backing</span>
              </div>

              <h3 className="text-xl font-black text-[#1E1B2E]">
                Support Our Independent R&amp;D &amp; AI Compute
              </h3>

              <p className="text-xs sm:text-sm font-medium text-[#4A4857] leading-relaxed">
                Want to directly support our engineering workflow, AI tooling, and independent R&amp;D builds like <strong>Become A Legend</strong> without a formal equity structure? Back our community campaign below.
              </p>

              <a
                href={BUY_ME_A_MALT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#75452d] px-5 py-3 text-xs sm:text-sm font-extrabold text-white shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1px]"
              >
                <Coffee className="h-4 w-4 text-[#F7D147]" />
                <span>Buy me a Gemini AI subscription</span>
                <ArrowUpRight className="h-4 w-4 text-[#F7D147]" />
              </a>
            </div>

            {/* Transparent Partnership Governance Note */}
            <div className="nb-card bg-white p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#3E735E]">
                <ShieldCheck className="h-4 w-4" />
                <span>Partnership &amp; Capital Policy</span>
              </div>
              <p className="text-xs font-medium text-[#5A5868] leading-relaxed">
                Nexora Group evaluates strategic alliances and venture funding on a project-by-project basis. This section is strictly for informational and B2B partnership exploration and does not constitute a public solicitation or guarantee of financial return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}