"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  ArrowUpRight,
  Building2,
  Handshake,
  Wrench,
  ShieldAlert,
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

const CORPORATE_DESKS = [
  {
    title: "General Enquiries Desk",
    subtitle: "Corporate information & general correspondence",
    categoryValue: "General Enquiry",
    email: SITE_CONFIG.emails.general,
    icon: Building2,
  },
  {
    title: "Partnerships & Commercial",
    subtitle: "B2B alliances, distribution & venture collaboration",
    categoryValue: "Partnership & Commercial",
    email: SITE_CONFIG.emails.partnerships,
    icon: Handshake,
  },
  {
    title: "Technical & Product Support",
    subtitle: "Platform assistance for Receipta, CatalogPal & SaaS",
    categoryValue: "Product / Technical Support",
    email: SITE_CONFIG.emails.support,
    icon: Wrench,
  },
  {
    title: "Founder & Executive Office",
    subtitle: "Investor relations, R&D & executive communications",
    categoryValue: "Investor Relations",
    email: SITE_CONFIG.emails.founder,
    icon: ShieldAlert,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    category: "General Enquiry",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFeedbackMessage(
        data.message ||
          "Thank you. Your enquiry has been delivered and an automatic confirmation has been sent to your inbox."
      );
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        category: "General Enquiry",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setFeedbackMessage(
        err instanceof Error
          ? err.message
          : "Unable to process submission right now. Please use our direct WhatsApp or mail link."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 bg-zinc-950 border-b border-zinc-900 overflow-hidden"
    >
      {/* Subtle Ambient Gold Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Clean Corporate Routing Cards (No Exposed Emails) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-5 space-y-7"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Corporate Communications
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Connect With Our Executive Desks
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Select a department below to route your message directly through our encrypted portal, or launch your mail client with one click.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
              Official Corporate Desks
            </p>

            <div className="grid grid-cols-1 gap-3">
              {CORPORATE_DESKS.map((desk) => {
                const Icon = desk.icon;
                const isSelected = formData.category === desk.categoryValue;
                return (
                  <div
                    key={desk.title}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        category: desk.categoryValue,
                      }))
                    }
                    className={`group cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-zinc-900/95 border-amber-500/60 shadow-[0_0_25px_rgba(245,158,11,0.08)]"
                        : "bg-zinc-900/40 border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/70"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`p-2.5 rounded-lg border shrink-0 mt-0.5 transition-colors ${
                          isSelected
                            ? "bg-amber-500/15 border-amber-500/40 text-amber-400"
                            : "bg-zinc-950 border-zinc-800 text-zinc-400 group-hover:text-amber-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                          {desk.title}
                        </p>
                        <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
                          {desk.subtitle}
                        </p>
                      </div>
                    </div>

                    <a
                      href={`mailto:${desk.email}`}
                      onClick={(e) => e.stopPropagation()}
                      title={`Compose direct email to ${desk.title}`}
                      className="shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-zinc-950 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 border border-zinc-800 transition-colors"
                    >
                      <span>Mail</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Clean Location & Instant WhatsApp Link (No Raw Numbers/URLs Needed) */}
          <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-300">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{SITE_CONFIG.contact.location}</span>
            </div>

            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct Executive WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Resend-Connected Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-7 bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-white">
              Official Enquiry Dispatch
            </h3>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
              Routing: {formData.category}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 mb-6">
            Complete the brief below. You will receive an immediate confirmation receipt in your inbox.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  placeholder="Organization or fund name"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@organization.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-2">
                  Phone / WhatsApp (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="International or local number"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-2">
                Select Destination Desk *
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="General Enquiry">General Enquiries Desk</option>
                <option value="Partnership & Commercial">
                  Partnerships &amp; Commercial Desk
                </option>
                <option value="Investor Relations">
                  Founder &amp; Investor Relations Office
                </option>
                <option value="Become A Legend (Game Investment)">
                  Become A Legend — R&amp;D &amp; Seed Investment
                </option>
                <option value="Product / Technical Support">
                  Product &amp; Technical Support Desk
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-2">
                Enquiry Details *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Outline your partnership proposal, enquiry, or investment interest..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {status === "success" && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-xs sm:text-sm text-emerald-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-xs sm:text-sm text-red-300">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-zinc-950 font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/10 cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Dispatching Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Official Enquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}