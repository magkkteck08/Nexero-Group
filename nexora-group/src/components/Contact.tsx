"use client";

import React, { useState } from "react";
import {
  Mail,
  Briefcase,
  Handshake,
  TrendingUp,
  Wrench,
  Newspaper,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export const DONOR_CAMPAIGN_URL = "https://buymeamalt.com/@becomealegend";
const CENTRAL_EMAIL = "magkk.muizomoyele@gmail.com";
export const CENTRAL_WHATSAPP_URL =
  "https://wa.me/2349073754047?text=Hello%20Nexora%20Group%2C%20I%20would%20like%20to%20make%20an%20enquiry.";

const ENQUIRY_DEPARTMENTS = [
  {
    title: "General Enquiries",
    subtitle: "Corporate information, operations & general questions",
    categoryValue: "General Enquiries",
    icon: Mail,
    bg: "bg-[#FEF0B6]",
  },
  {
    title: "Project Requests",
    subtitle: "Software development, e-commerce & digital transformation",
    categoryValue: "Project Requests",
    icon: Briefcase,
    bg: "bg-[#EBF3F9]",
  },
  {
    title: "Business Partnerships",
    subtitle: "Strategic alliances, commercial distribution & co-building",
    categoryValue: "Business Partnerships",
    icon: Handshake,
    bg: "bg-[#E8F8F0]",
  },
  {
    title: "Investment Enquiries",
    subtitle: "Venture funding, seed capital & institutional backing",
    categoryValue: "Investment Enquiries",
    icon: TrendingUp,
    bg: "bg-white",
  },
  {
    title: "Technical Support",
    subtitle: "Platform assistance for Receipta, Africommerce & BizRep",
    categoryValue: "Technical Support",
    icon: Wrench,
    bg: "bg-[#FEF0B6]",
  },
  {
    title: "Media Enquiries",
    subtitle: "Press releases, Velo Pulse editorial & interview requests",
    categoryValue: "Media Enquiries",
    icon: Newspaper,
    bg: "bg-[#EBF3F9]",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(
    ENQUIRY_DEPARTMENTS[1].categoryValue
  );
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          category,
          subject: `[Nexora Group - ${category}] Enquiry from ${name}`,
          message,
        }),
      });
      if (res.ok) {
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
              Contact &amp; Project Enquiries
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight">
              Let&apos;s Build Something{" "}
              <span className="text-[#3E735E]">That Matters.</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-[#5A5868]">
              Select a department below so your enquiry reaches the right Nexora Group team immediately.
            </p>
          </div>

          {/* Direct Action Channels */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CENTRAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-5 py-2.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Corporate Desk</span>
            </a>

            <a
              href={`mailto:${CENTRAL_EMAIL}?subject=${encodeURIComponent(
                "[Nexora Group - Direct] Corporate Enquiry"
              )}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-white px-5 py-2.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
            >
              <Mail className="w-4 h-4 text-[#3E735E]" />
              <span>Direct Email</span>
            </a>
          </div>
        </div>

        {/* 6 Department Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ENQUIRY_DEPARTMENTS.map((dept) => {
            const Icon = dept.icon;
            const isSelected = category === dept.categoryValue;
            return (
              <button
                key={dept.title}
                type="button"
                onClick={() => setCategory(dept.categoryValue)}
                className={`nb-card ${dept.bg} p-5 text-left flex flex-col justify-between transition-all cursor-pointer ${
                  isSelected
                    ? "ring-4 ring-[#1E1B2E] -translate-y-1"
                    : "hover:-translate-y-0.5"
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl border-2 border-[#1E1B2E] bg-white flex items-center justify-center shadow-[0_2px_0_0_#1E1B2E]">
                      <Icon className="w-5 h-5 text-[#1E1B2E]" />
                    </div>
                    {isSelected && (
                      <span className="rounded-full border border-[#1E1B2E] bg-[#1E1B2E] px-2.5 py-0.5 text-[10px] font-black text-[#F7D147]">
                        Selected
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-black text-[#1E1B2E]">
                    {dept.title}
                  </h3>
                  <p className="text-xs font-medium text-[#4A4857] leading-relaxed">
                    {dept.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Department-Routed Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="nb-card bg-white p-6 sm:p-8 space-y-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-black text-[#1E1B2E]">
              Dispatch to: <span className="text-[#3E735E]">{category}</span>
            </h3>
            <span className="rounded-full border border-[#1E1B2E] bg-[#FEF0B6] px-3 py-0.5 text-[11px] font-extrabold text-[#1E1B2E]">
              Subject: [Nexora Group - {category}]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                Full Name / Organisation
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name or company"
                className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                Reply Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                Enquiry Department
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-bold text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
              >
                {ENQUIRY_DEPARTMENTS.map((d) => (
                  <option key={d.categoryValue} value={d.categoryValue}>
                    {d.categoryValue}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
              Enquiry Details / Project Brief
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share the details of your project, partnership, or support request..."
              className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            {sent ? (
              <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#3E735E]">
                <CheckCircle2 className="w-4 h-4" /> Dispatched to {category} Desk!
              </span>
            ) : (
              <span className="text-xs font-bold text-[#5A5868]">
                Routed automatically via Resend to the selected department.
              </span>
            )}

            <button
              type="submit"
              disabled={loading}
              className="nb-btn-primary text-sm cursor-pointer"
            >
              <span>{loading ? "Sending..." : "Send Enquiry"}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}