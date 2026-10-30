"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Send, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [division, setDivision] = useState("Fintech & Digital Products");
  const [message, setMessage] = useState("");

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = [
      `*New Enquiry — ${SITE_CONFIG.name}*`,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Division / Interest:* ${division}`,
      `*Brief:* ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${
      SITE_CONFIG.contact.whatsappNumber
    }?text=${encodeURIComponent(formattedText)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Start A Conversation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Have an Idea? Let&apos;s Build Something That Works.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Whether you are launching a digital product, optimising search visibility, or exploring commercial partnerships, reach out to our team directly.
          </p>

          <div className="space-y-4 pt-2">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-3.5 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <p className="text-xs text-zinc-400">Business Email</p>
                <p className="text-sm font-medium text-white">
                  {SITE_CONFIG.contact.email}
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs text-zinc-400">Direct WhatsApp Desk</p>
                <p className="text-sm font-medium text-white">
                  {SITE_CONFIG.contact.whatsappDisplay}
                </p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-4">
            <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
              Corporate Channels
            </p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(SITE_CONFIG.contact.socials).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium capitalize px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <span>{platform}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Enquiry Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleEnquirySubmit}
            className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 sm:p-8 space-y-5"
          >
            <h3 className="text-lg font-bold text-white">Project &amp; Partnership Enquiry</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-zinc-400 mb-1.5"
                >
                  Full Name / Organization *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-zinc-400 mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="division"
                className="block text-xs font-medium text-zinc-400 mb-1.5"
              >
                Area of Interest
              </label>
              <select
                id="division"
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option>Gaming &amp; Interactive Experiences</option>
                <option>Fintech &amp; Digital Products</option>
                <option>SEO &amp; Digital Growth</option>
                <option>Consultation &amp; Strategy</option>
                <option>Commercial Ventures &amp; Distribution</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-zinc-400 mb-1.5"
              >
                Project Brief or Enquiry *
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a brief overview of your goals, timeline, or enquiry..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-6 py-3 rounded-md transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send Enquiry via WhatsApp</span>
              </button>

              <a
                href={`mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
                  `Enquiry: ${division}`
                )}&body=${encodeURIComponent(message)}`}
                className="text-xs text-zinc-400 hover:text-white underline text-center sm:text-right"
              >
                Prefer standard email? Click here
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}