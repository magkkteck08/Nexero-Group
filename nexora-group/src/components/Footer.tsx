"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { CENTRAL_WHATSAPP_URL } from "./Contact";

const BUY_ME_A_MALT_URL = "https://buymeamalt.com/@becomealegend";
const FOOTER_MAIL_URL =
  "mailto:magkk.muizomoyele@gmail.com?subject=%5BNexora%20Group%20-%20Executive%20Desk%5D%20Direct%20Inquiry";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#1E1B2E] bg-[#FFFDF5] px-5 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* 4 Vertical Columns Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand + Donor CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <Link href="/" className="flex items-center gap-3 w-fit">
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] shadow-[0_2px_0_0_#1E1B2E]">
                  <Image
                    src="/nexora-logo.png"
                    alt="Nexora Group"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-black tracking-tight text-[#1E1B2E]">
                  nexora group
                </span>
              </Link>

              <p className="text-sm font-medium leading-relaxed text-[#5A5868]">
                A multi-sector technology holding company building software platforms, media networks, and interactive gaming experiences.
              </p>
            </div>

            <div>
              <a
                href={BUY_ME_A_MALT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#75452d] px-5 py-2.5 text-xs font-extrabold text-white shadow-[0_3px_0_0_#1E1B2E] transition-all hover:translate-y-[1.5px] hover:shadow-[0_1.5px_0_0_#1E1B2E] w-fit"
              >
                <Heart className="w-4 h-4 fill-[#F7D147] text-[#F7D147]" />
                <span>Buy me a Gemini AI subscription</span>
                <ArrowUpRight className="w-4 h-4 text-[#F7D147]" />
              </a>
            </div>
          </div>

          {/* Column 2: Vertical Navigation Column */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
              Navigation
            </p>
            <div className="flex flex-col space-y-2.5 text-sm font-extrabold text-[#1E1B2E]">
              <Link href="/" className="hover:underline w-fit">
                Home
              </Link>
              <Link href="/company" className="hover:underline w-fit">
                Company Profile
              </Link>
              <Link href="/#work" className="hover:underline w-fit">
                Product Ecosystem
              </Link>
              <Link href="/#services" className="hover:underline w-fit">
                Core Divisions
              </Link>
              <Link href="/investors" className="hover:underline w-fit">
                Donor Campaign
              </Link>
              <Link href="/#contact" className="hover:underline w-fit">
                Book Us / Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Vertical Ventures Column */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
              Flagship Platforms
            </p>
            <div className="flex flex-col space-y-2.5 text-sm font-extrabold text-[#1E1B2E]">
              <Link href="/#work" className="hover:underline w-fit">
                Receipta (Smart Billing)
              </Link>
              <Link href="/#work" className="hover:underline w-fit">
                CatalogPal (Merchant Tool)
              </Link>
              <Link href="/#work" className="hover:underline w-fit">
                Africommerce (Storefronts)
              </Link>
              <Link href="/#work" className="hover:underline w-fit">
                Velo Pulse (Digital Media)
              </Link>
              <Link
                href="/projects/become-a-legend"
                className="inline-flex items-center gap-1.5 hover:underline w-fit text-[#3E735E]"
              >
                <span>⚽ Become A Legend (R&amp;D)</span>
              </Link>
            </div>
          </div>

          {/* Column 4: Direct Booking & Executive Buttons */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <p className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
                Direct Booking &amp; Desk
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href={CENTRAL_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all w-fit"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp</span>
                </a>

                <a
                  href={FOOTER_MAIL_URL}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#F7D147] transition-all w-fit"
                >
                  <Mail className="w-3.5 h-3.5 text-[#3E735E]" />
                  <span>Email Executive Desk</span>
                </a>
              </div>

              <p className="flex items-center gap-2 text-xs font-bold text-[#686677] pt-1">
                <MapPin className="w-4 h-4 text-[#1E1B2E] shrink-0" />
                <span>Oyo State, Nigeria · Global Operations</span>
              </p>
            </div>

            {/* Boxed Neo-Brutalist Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/idanmagkk"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#1E1B2E] bg-white text-base font-black text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1.5px] hover:bg-[#F7D147]"
              >
                𝕏
              </a>
              <a
                href={SITE_CONFIG.founder.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#1E1B2E] bg-white text-xs font-black text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1.5px] hover:bg-[#F7D147]"
              >
                IN
              </a>
              <a
                href="https://github.com/magkkteck08"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#1E1B2E] bg-white text-xs font-black text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] transition hover:translate-y-[1.5px] hover:bg-[#F7D147]"
              >
                GH
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 border-t-2 border-[#1E1B2E] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-[#5A5868]">
          <p>© 2026 Nexora Group. All rights reserved.</p>
          <p>Engineered for African &amp; Global Digital Commerce.</p>
        </div>
      </div>
    </footer>
  );
}