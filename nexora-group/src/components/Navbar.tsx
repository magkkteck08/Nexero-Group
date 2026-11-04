"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "In The Lab", href: "#investors" },
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-zinc-200 py-3.5"
          : "bg-white border-zinc-200 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Wordmark (Updated to dark text) */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-zinc-950 font-bold tracking-tight text-lg"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
          <span>{SITE_CONFIG.name}</span>
        </a>

        {/* Desktop Nav (Updated to dark text) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Trigger (Updated to dark text) */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="md:hidden text-zinc-900 hover:text-blue-600 p-2 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer (Updated to white background) */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 pt-4 pb-6 space-y-3 absolute w-full left-0 top-full shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-zinc-600 hover:text-blue-600 border-b border-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-3 rounded-md transition-colors shadow-sm"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}