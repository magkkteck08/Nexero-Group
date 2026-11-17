"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  Building2,
  Gamepad2,
  Heart,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#1E1B2E] bg-[#FFFDF5]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] shadow-[0_2px_0_0_#1E1B2E]">
            <Image
              src="/nexora-logo.png"
              alt={SITE_CONFIG?.name || "Nexora Group"}
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
          <span className="text-lg sm:text-xl font-black tracking-tight text-[#1E1B2E]">
            Nexora Group
          </span>
        </Link>

        {/* Desktop Navigation Pills (Few, Direct & Mapped to Real Routes) */}
        <nav className="hidden md:flex items-center gap-2.5">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1.5px] hover:bg-[#FEF0B6]"
          >
            <Layers className="h-3.5 w-3.5 text-[#3E735E]" />
            <span>Products</span>
          </Link>

          <Link
            href="/company"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1.5px] hover:bg-[#FEF0B6]"
          >
            <Building2 className="h-3.5 w-3.5 text-[#1E1B2E]" />
            <span>Company</span>
          </Link>

          <Link
            href="/projects/become-a-legend"
            className="relative inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#EBF3F9] px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1.5px] hover:bg-[#C5B4F0]"
          >
            <span className="absolute -top-2 right-2 rounded-full border border-[#1E1B2E] bg-[#E5484D] px-1.5 py-0.2 text-[8px] font-black uppercase text-white">
              R&amp;D
            </span>
            <Gamepad2 className="h-3.5 w-3.5 text-[#1E1B2E]" />
            <span>Become A Legend</span>
          </Link>

          <Link
            href="/investors"
            className="relative inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] px-4 py-2 text-xs font-extrabold text-white shadow-[0_3px_0_0_#F7D147] transition hover:translate-y-[1.5px]"
          >
            <Heart className="h-3.5 w-3.5 fill-[#E5484D] text-[#F7D147]" />
            <span>Investors / Donate</span>
          </Link>

          <Link
            href="/#contact"
            className="rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-5 py-2 text-xs font-black text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1.5px] hover:shadow-[0_1.5px_0_0_#1E1B2E]"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Quick Action + Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/investors"
            className="inline-flex items-center gap-1 rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] px-3 py-1.5 text-[11px] font-extrabold text-[#F7D147] shadow-[0_2px_0_0_#F7D147]"
          >
            <Heart className="h-3 w-3 fill-[#E5484D]" />
            <span>Support</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="nb-icon-circle h-10 w-10"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="border-t-2 border-[#1E1B2E] bg-[#FFFDF5] px-4 py-4 md:hidden space-y-2.5">
          <Link
            href="/#work"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between rounded-xl border-2 border-[#1E1B2E] bg-white px-4 py-3 text-sm font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]"
          >
            <span className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#3E735E]" />
              Products &amp; Ecosystem
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <Link
            href="/company"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between rounded-xl border-2 border-[#1E1B2E] bg-white px-4 py-3 text-sm font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]"
          >
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#1E1B2E]" />
              Company Profile
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <Link
            href="/projects/become-a-legend"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between rounded-xl border-2 border-[#1E1B2E] bg-[#EBF3F9] px-4 py-3 text-sm font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]"
          >
            <span className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4 text-[#1E1B2E]" />
              Become A Legend (R&amp;D)
            </span>
            <span className="rounded-full border border-[#1E1B2E] bg-[#F7D147] px-2 py-0.5 text-[10px] font-black">
              GAME
            </span>
          </Link>

          <Link
            href="/investors"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between rounded-xl border-2 border-[#1E1B2E] bg-[#FEF0B6] px-4 py-3 text-sm font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]"
          >
            <span className="flex items-center gap-2">
              <Heart className="h-4 w-4 fill-[#E5484D]" />
              Investors &amp; Donor Campaign
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="nb-btn-primary w-full text-sm py-3"
          >
            <span>Contact Corporate Desks</span>
          </Link>
        </div>
      )}
    </header>
  );
}