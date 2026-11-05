"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Divisions", href: "/#services" },
  { label: "Portfolio", href: "/#work" },
  { label: "Company", href: "/company" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/#contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-md border-zinc-800 py-3"
          : "bg-zinc-950/90 backdrop-blur-sm border-zinc-900 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          {!logoError ? (
            <Image
              src="/nexora-logo.png"
              alt={SITE_CONFIG.name}
              width={130}
              height={34}
              priority
              unoptimized
              onError={() => setLogoError(true)}
              className="h-7 sm:h-8 w-auto object-contain"
            />
          ) : (
            <span className="flex items-center gap-2 text-white font-extrabold tracking-tight text-base sm:text-lg">
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block" />
              <span>{SITE_CONFIG.name}</span>
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            <span>Enquire</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="md:hidden text-zinc-200 hover:text-amber-400 p-2 rounded-lg border border-zinc-800 bg-zinc-900"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mounted && mobileOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 pt-3 pb-6 space-y-1 absolute w-full left-0 top-full shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-zinc-200 hover:text-amber-400 border-b border-zinc-900"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-bold px-5 py-3 rounded-lg transition-colors"
            >
              <span>Contact Nexora Group</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}