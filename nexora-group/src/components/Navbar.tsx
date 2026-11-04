"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isScrolled = mounted && scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3"
          : "bg-white border-slate-200 py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        {/* Mobile & Desktop Safe Logo Lockup */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          {!logoError ? (
            <div className="flex items-center gap-2.5">
              {/* Dark pill container guarantees white or dark logos are always visible on mobile */}
              <div className="bg-slate-950 px-3 py-1.5 rounded-lg flex items-center justify-center shadow-sm border border-slate-800">
                <Image
                  src="/nexora-logo.png"
                  alt={SITE_CONFIG.name}
                  width={120}
                  height={32}
                  priority
                  unoptimized
                  onError={() => setLogoError(true)}
                  className="h-6 sm:h-7 w-auto object-contain"
                />
              </div>
            </div>
          ) : (
            <span className="flex items-center gap-2 text-slate-950 font-extrabold tracking-tight text-base sm:text-lg">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
              <span>{SITE_CONFIG.name}</span>
            </span>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-slate-600">
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
            className="inline-flex items-center gap-1.5 bg-slate-950 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="md:hidden text-slate-900 hover:text-blue-600 p-2 rounded-lg border border-slate-200 bg-slate-50 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mounted && mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-6 space-y-1 absolute w-full left-0 top-full shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-slate-800 hover:text-blue-600 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3.5 rounded-lg transition-colors shadow-md"
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