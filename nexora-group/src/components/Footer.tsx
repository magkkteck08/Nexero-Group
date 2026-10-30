"use client"; // This makes it a Client Component

import React, { useState, useEffect } from "react";
import { SITE_CONFIG, SERVICE_DIVISIONS } from "../config/siteConfig";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  // This safely gets the year only after the component mounts on the client
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-zinc-950 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-zinc-900">
        {/* Col 1: Brand */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5 text-white font-semibold tracking-tight text-lg">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block" />
            <span>{SITE_CONFIG.name}</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
            {SITE_CONFIG.tagline} A multi-sector enterprise building technology products, digital growth systems, and commercial ventures.
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div className="lg:col-span-2 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-white">
            Navigation
          </p>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#ventures" className="hover:text-white transition-colors">Ventures</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Col 3: Divisions */}
        <div className="lg:col-span-3 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-white">
            Service Divisions
          </p>
          <ul className="space-y-2 text-sm">
            {SERVICE_DIVISIONS.map((div) => (
              <li key={div.id}>
                <a href="#services" className="hover:text-white transition-colors">
                  {div.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div className="lg:col-span-3 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-white">
            Direct Contact
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="hover:text-white transition-colors"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp: {SITE_CONFIG.contact.whatsappDisplay}
              </a>
            </li>
            <li className="text-zinc-500">{SITE_CONFIG.contact.location}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© {currentYear !== null ? currentYear : ""} {SITE_CONFIG.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-zinc-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-zinc-300 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}