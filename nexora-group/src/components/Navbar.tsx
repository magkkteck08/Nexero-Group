"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building2,
  Rocket,
  Layers,
  Wrench,
  Handshake,
  Newspaper,
  Mail,
  Heart,
  Menu,
  X,
  ArrowUpRight,
  CalendarCheck,
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

const SUPPORT_CAMPAIGN_URL = "https://buymeamalt.com/@becomealegend";
const CONSULTATION_WHATSAPP_URL =
  "https://wa.me/2349073754047?text=Hello%20Nexora%20Group%2C%20I%20would%20like%20to%20book%20a%20consultation.";

const MENU_ITEMS = [
  { label: "Home", href: "/", icon: Home, badge: "" },
  { label: "About Nexora", href: "/#about", icon: Building2, badge: "" },
  { label: "Our Ventures", href: "/#ventures", icon: Rocket, badge: "5 Ventures" },
  { label: "Products & Solutions", href: "/#work", icon: Layers, badge: "" },
  { label: "Services", href: "/#services", icon: Wrench, badge: "" },
  { label: "Partnerships", href: "/#partnerships", icon: Handshake, badge: "" },
  { label: "News & Insights", href: "/#news", icon: Newspaper, badge: "Inside Nexora" },
  { label: "Contact Us", href: "/#contact", icon: Mail, badge: "" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#1E1B2E] bg-[#FFFDF5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* 1. Prominent Circular Brand Logo + Corporate Name */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] p-1 shadow-[0_3px_0_0_#1E1B2E] transition-transform group-hover:scale-105">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white border border-[#1E1B2E]">
              <Image
                src="/nexora-logo.png"
                alt={SITE_CONFIG?.name || "Nexora Group"}
                fill
                sizes="48px"
                className="object-contain p-0.5"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight text-[#1E1B2E] leading-none">
              Nexora Group
            </span>
            <span className="mt-0.5 text-[10px] font-extrabold uppercase tracking-widest text-[#3E735E]">
              Technology &amp; Ventures
            </span>
          </div>
        </Link>

        {/* 2. Desktop Quick Bar (Core Pillars + Support + Hamburger Drawer Trigger) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden lg:flex items-center gap-2 mr-1">
            <Link
              href="/#ventures"
              className="rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] transition hover:translate-y-[1px] hover:bg-[#FEF0B6]"
            >
              Our Ventures
            </Link>
            <Link
              href="/#services"
              className="rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] transition hover:translate-y-[1px] hover:bg-[#FEF0B6]"
            >
              What We Do
            </Link>
            <Link
              href="/#work"
              className="rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] transition hover:translate-y-[1px] hover:bg-[#FEF0B6]"
            >
              Tech Showcase
            </Link>
            <Link
              href="/#partnerships"
              className="rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] transition hover:translate-y-[1px] hover:bg-[#FEF0B6]"
            >
              Partnerships
            </Link>
          </nav>

          {/* Functional Support Button (Yellow Tactile Pill) */}
          <a
            href={SUPPORT_CAMPAIGN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-black text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1.5px] hover:shadow-[0_1.5px_0_0_#1E1B2E]"
          >
            <Heart className="h-3.5 w-3.5 fill-[#E5484D] text-[#1E1B2E]" />
            <span>Support</span>
          </a>

          {/* Hamburger Menu Button (Opens Full 8-Item Corporate Directory) */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
            className="nb-icon-circle h-10 w-10 sm:h-11 sm:w-11 cursor-pointer"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* 3. Full Corporate Hamburger Menu Drawer */}
      {menuOpen && (
        <div className="border-t-2 border-[#1E1B2E] bg-[#FFFDF5] shadow-[0_8px_0_0_#1E1B2E]">
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 space-y-6">
            {/* 8 Blueprint Navigation Links */}
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-widest text-[#3E735E]">
                Corporate Directory
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {MENU_ITEMS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl border-2 border-[#1E1B2E] bg-white px-4 py-3 text-sm font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] transition hover:translate-y-[1px] hover:bg-[#FEF0B6]"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-[11px] font-black text-[#3E735E]">
                          0{idx + 1}
                        </span>
                        <Icon className="h-4 w-4 text-[#1E1B2E]" />
                        <span>{item.label}</span>
                      </span>

                      {item.badge ? (
                        <span className="rounded-full border border-[#1E1B2E] bg-[#98E2C6] px-2 py-0.5 text-[10px] font-black text-[#1E1B2E]">
                          {item.badge}
                        </span>
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-[#5A5868]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Menu Footer-Style Action Section (Partner, Consultation, Support) */}
            <div className="border-t-2 border-[#1E1B2E] pt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/#partnerships"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#EBF3F9] px-5 py-2.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
                >
                  <Handshake className="h-4 w-4 text-[#3E735E]" />
                  <span>Partner With Us</span>
                </Link>

                <a
                  href={CONSULTATION_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-5 py-2.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
                >
                  <CalendarCheck className="h-4 w-4 text-[#1E1B2E]" />
                  <span>Book a Consultation</span>
                </a>
              </div>

              <a
                href={SUPPORT_CAMPAIGN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#75452d] px-5 py-2.5 text-xs font-extrabold text-white shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
              >
                <Heart className="h-4 w-4 fill-[#F7D147] text-[#F7D147]" />
                <span>Support Nexora</span>
                <ArrowUpRight className="h-4 w-4 text-[#F7D147]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}