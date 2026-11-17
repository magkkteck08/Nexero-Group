"use client";

import React, { useState } from "react";
import {
  Handshake,
  Wrench,
  HeartHandshake,
  Send,
  CheckCircle2,
  Mail,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

// Inside src/components/Contact.tsx (Line 16)
export const DONOR_CAMPAIGN_URL = "https://buymeamalt.com/@becomealegend";

// Centralized Email & WhatsApp (Kept inside hrefs only — never shown as raw text)
const CENTRAL_EMAIL = "magkk.muizomoyele@gmail.com";
export const CENTRAL_WHATSAPP_URL =
  "https://wa.me/2349073754047?text=Hello%20Nexora%20Group%2C%20I%20would%20like%20to%20book%20your%20services%20or%20make%20an%20inquiry.";

const CORPORATE_DESKS = [
  {
    title: "Partnerships & Commercial",
    subtitle: "B2B alliances, distribution, project bookings & venture collaboration",
    categoryValue: "Partnerships & Commercial",
    subjectTag: "[Nexora Group - Partnerships & Commercial] B2B & Booking Inquiry",
    buttonLabel: "Email Partnerships Desk",
    icon: Handshake,
    bg: "bg-[#FEF0B6]",
  },
  {
    title: "Technical & Product Support",
    subtitle: "Platform assistance for Receipta, CatalogPal, Africommerce & SaaS",
    categoryValue: "Technical & Product Support",
    subjectTag: "[Nexora Group - Technical & Product Support] Platform Assistance",
    buttonLabel: "Email Support Desk",
    icon: Wrench,
    bg: "bg-[#EBF3F9]",
  },
  {
    title: "Donor Campaign & Founder Desk",
    subtitle: "Back our R&D via BuyMeAMalt or message the executive desk directly",
    categoryValue: "Donor Campaign & Founder Desk",
    subjectTag: "[Nexora Group - Founder & Donor Desk] Executive Inquiry",
    buttonLabel: "Email Founder Desk",
    icon: HeartHandshake,
    bg: "bg-[#E8F8F0]",
    campaignUrl: DONOR_CAMPAIGN_URL,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(CORPORATE_DESKS[0].categoryValue);
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
          subject: `[Nexora Group - ${category}] Inquiry from ${name}`,
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
      className="py-20 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
              Direct Communications &amp; Booking
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight">
              Corporate &amp; Booking Desks
            </h2>
            <p className="text-sm sm:text-base font-medium text-[#5A5868]">
              Select a desk below, chat with us directly on WhatsApp, or send a structured dispatch. Every inquiry is automatically routed by subject.
            </p>
          </div>

          {/* Direct WhatsApp & Email Quick Buttons (Hidden Number & Email) */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CENTRAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-5 py-3 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1.5px] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </a>

            <a
              href={`mailto:${CENTRAL_EMAIL}?subject=${encodeURIComponent(
                "[Nexora Group - Direct Booking] Project Inquiry"
              )}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-white px-5 py-3 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1.5px] transition-all"
            >
              <Mail className="w-4 h-4 text-[#3E735E]" />
              <span>Direct Booking Mail</span>
            </a>
          </div>
        </div>

        {/* 3 Desk Cards (No raw email text shown — pure action buttons with Subject routing) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORPORATE_DESKS.map((desk) => {
            const Icon = desk.icon;
            const mailtoHref = `mailto:${CENTRAL_EMAIL}?subject=${encodeURIComponent(
              desk.subjectTag
            )}`;

            return (
              <div
                key={desk.title}
                onClick={() => setCategory(desk.categoryValue)}
                className={`nb-card ${desk.bg} p-6 flex flex-col justify-between cursor-pointer transition-transform hover:-translate-y-1`}
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl border-2 border-[#1E1B2E] bg-white flex items-center justify-center shadow-[0_2px_0_0_#1E1B2E]">
                    <Icon className="w-5 h-5 text-[#1E1B2E]" />
                  </div>
                  <h3 className="text-lg font-black text-[#1E1B2E]">
                    {desk.title}
                  </h3>
                  <p className="text-xs font-medium text-[#4A4857] leading-relaxed">
                    {desk.subtitle}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <a
                    href={mailtoHref}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#F7D147] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#3E735E]" />
                    <span>{desk.buttonLabel}</span>
                  </a>

                  {desk.campaignUrl && (
                    <a
                      href={desk.campaignUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3.5 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
                    >
                      <span>BuyMeAMalt</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Dispatch Form (Sent via Resend to CENTRAL_EMAIL with Subject Line) */}
        <form
          onSubmit={handleSubmit}
          className="nb-card bg-white p-6 sm:p-8 space-y-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-black text-[#1E1B2E]">
              Send an Instant Dispatch
            </h3>
            <span className="rounded-full border border-[#1E1B2E] bg-[#FEF0B6] px-3 py-0.5 text-[11px] font-extrabold text-[#1E1B2E]">
              Subject: [Nexora Group - {category}]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                Full Name / Organization
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name or brand"
                className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                Your Reply Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                Subject / Desk Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-bold text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
              >
                {CORPORATE_DESKS.map((d) => (
                  <option key={d.categoryValue} value={d.categoryValue}>
                    {d.categoryValue}
                  </option>
                ))}
                <option value="Book Us for a Project">
                  Book Us for a Project
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
              Message / Project Details
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project, partnership, or support inquiry..."
              className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            {sent ? (
              <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#3E735E]">
                <CheckCircle2 className="w-4 h-4" /> Dispatched directly to Nexora Group!
              </span>
            ) : (
              <span className="text-xs font-bold text-[#5A5868]">
                Automatically tagged by subject and delivered via Resend.
              </span>
            )}

            <button
              type="submit"
              disabled={loading}
              className="nb-btn-primary text-sm cursor-pointer"
            >
              <span>{loading ? "Sending..." : "Send Dispatch"}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}