"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  SITE_CONFIG,
  SERVICE_DIVISIONS,
  BUSINESS_VENTURES,
} from "../../config/siteConfig";
import {
  Building2,
  ShieldCheck,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function CompanyPage() {
  const { founder, emails } = SITE_CONFIG;

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 overflow-x-hidden">
      <Navbar />

      <main className="relative flex-grow pt-28 pb-24">
        {/* Ambient Backlight */}
        <div className="fixed top-24 right-1/4 w-[450px] h-[350px] bg-amber-500/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 space-y-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 border-b border-zinc-900 pb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <Building2 className="w-3.5 h-3.5" />
              <span>Corporate Identity &amp; Governance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              {SITE_CONFIG.corporatePositioning}
            </p>
            <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
              Nexora Group is a multi-sector enterprise focused on building, operating, and scaling technology products, digital publishing platforms, interactive gaming experiences, and commercial supply ventures.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <section className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-7 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Corporate Vision
              </p>
              <h2 className="text-xl font-bold text-white">
                Sustainable Businesses &amp; Practical Innovation
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {founder.visionQuote}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="p-7 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Corporate Mission
              </p>
              <h2 className="text-xl font-bold text-white">
                Execution Across Technology &amp; Commerce
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                To originate and operate practical software tools, engaging digital media, and dependable commercial supply networks that empower merchants, creators, and everyday consumers.
              </p>
            </motion.div>
          </section>

          {/* Leadership */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-950 border border-zinc-800 grid lg:grid-cols-12 gap-8 items-center shadow-xl"
          >
            <div className="lg:col-span-4 flex flex-col items-start space-y-4">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-amber-500/40 bg-zinc-800 shadow-lg">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  Executive Leadership
                </p>
                <h2 className="text-2xl font-bold text-white mt-0.5">
                  {founder.name}
                </h2>
                <p className="text-sm text-zinc-400">{founder.role}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-zinc-950 text-white border border-zinc-700 hover:border-amber-400 transition-colors"
                >
                  <span>Executive LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:underline"
                >
                  <span>Founder&apos;s Office</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {founder.summary}
              </p>
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {founder.responsibilities.map((resp) => (
                  <div
                    key={resp.division}
                    className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800/90"
                  >
                    <p className="text-xs font-bold text-white">
                      {resp.division}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {resp.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Business Divisions & Commercial Activities */}
          <section className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Business Divisions &amp; Commercial Activities
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {SERVICE_DIVISIONS.map((div) => (
                <div
                  key={div.id}
                  className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-2"
                >
                  <h3 className="text-base font-bold text-white">{div.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {div.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {BUSINESS_VENTURES.map((venture) => (
                <div
                  key={venture.id}
                  className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-2"
                >
                  <span className="text-[11px] font-semibold text-amber-400">
                    {venture.status}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {venture.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {venture.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Corporate Governance & Clean Desk Links (No Raw Domain/Emails Printed) */}
          <section className="grid md:grid-cols-2 gap-6 pt-8 border-t border-zinc-900">
            <div className="p-7 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Corporate Governance</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Entity &amp; Compliance Overview
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                <strong>Operating Entity:</strong> NEXORA GROUP<br />
                <strong>Headquarters:</strong> Ibadan, Oyo State, Federal Republic of Nigeria<br />
                <strong>Statutory Filings:</strong> Corporate registration documentation, vendor compliance records, and commercial references are provided upon verified partner or institutional request.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{SITE_CONFIG.contact.location}</span>
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Send className="w-4 h-4" />
                  <span>Official Desks</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Direct Department Routing
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Connect directly with our corporate desks without exposing sensitive correspondence details publicly.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <a
                    href={`mailto:${emails.general}`}
                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 text-xs font-semibold text-white flex items-center justify-between transition-colors"
                  >
                    <span>General Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                  <a
                    href={`mailto:${emails.partnerships}`}
                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 text-xs font-semibold text-white flex items-center justify-between transition-colors"
                  >
                    <span>Partnerships</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                  <a
                    href={`mailto:${emails.support}`}
                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 text-xs font-semibold text-white flex items-center justify-between transition-colors"
                  >
                    <span>Support Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                  <a
                    href={`mailto:${emails.founder}`}
                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 text-xs font-semibold text-white flex items-center justify-between transition-colors"
                  >
                    <span>Founder&apos;s Office</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/#contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs py-3 rounded-xl transition-colors"
                >
                  <span>Open Encrypted Enquiry Form</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}