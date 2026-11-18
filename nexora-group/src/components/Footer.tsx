"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowUpRight, MessageCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { CENTRAL_WHATSAPP_URL } from "./Contact";

const BUY_ME_A_MALT_URL = "https://buymeamalt.com/@becomealegend";
const FOOTER_MAIL_URL =
  "mailto:magkk.muizomoyele@gmail.com?subject=%5BNexora%20Group%20-%20Support%20Desk%5D%20Corporate%20Enquiry";

export default function Footer() {
  return (
    <footer className="bg-[#FFFDF5] px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Top Brand + Quick Action Strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-2 border-[#1E1B2E]">
          <div className="space-y-2 max-w-md">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] p-1 shadow-[0_2px_0_0_#1E1B2E]">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white border border-[#1E1B2E]">
                  <Image
                    src="/nexora-logo.png"
                    alt="Nexora Group"
                    fill
                    sizes="44px"
                    className="object-contain p-0.5"
                  />
                </div>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-[#1E1B2E] block leading-none">
                  Nexora Group
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#3E735E]">
                  Technology · Ventures · Partnerships
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm font-medium text-[#5A5868] leading-relaxed pt-1">
              Building digital infrastructure, scaling independent software ventures, and partnering with ambitious organisations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CENTRAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-4 py-2.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>

            <a
              href={FOOTER_MAIL_URL}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-white px-4 py-2.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:bg-[#FEF0B6] transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#3E735E]" />
              <span>Email Desk</span>
            </a>

            <a
              href={BUY_ME_A_MALT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#75452d] px-4 py-2.5 text-xs font-extrabold text-white shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all"
            >
              <Heart className="w-3.5 h-3.5 fill-[#F7D147] text-[#F7D147]" />
              <span>Support Nexora</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F7D147]" />
            </a>
          </div>
        </div>

        {/* 5 Comprehensive Blueprint Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Column 1: Company */}
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
              Company
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm font-extrabold text-[#1E1B2E]">
              <li>
                <Link href="/#about" className="hover:underline">
                  About Nexora
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:underline">
                  Our Mission &amp; Vision
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:underline">
                  Executive Leadership
                </Link>
              </li>
              <li>
                <Link href="/#headquarters" className="hover:underline">
                  Virtual Headquarters
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:underline">
                  Careers &amp; Talent
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Ventures */}
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
              Ventures
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm font-extrabold text-[#1E1B2E]">
              <li>
                <Link href="/#ventures" className="hover:underline">
                  Receipta
                </Link>
              </li>
              <li>
                <Link href="/#ventures" className="hover:underline">
                  Africommerce
                </Link>
              </li>
              <li>
                <Link href="/#ventures" className="hover:underline">
                  BizRep
                </Link>
              </li>
              <li>
                <Link href="/#ventures" className="hover:underline">
                  Velo Pulse
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/become-a-legend"
                  className="hover:underline text-[#3E735E]"
                >
                  Football Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
              Solutions
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm font-extrabold text-[#1E1B2E]">
              <li>
                <Link href="/#services" className="hover:underline">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline">
                  Technology Consulting
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline">
                  E-commerce Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline">
                  SEO &amp; Digital Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Partnerships */}
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
              Partnerships
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm font-extrabold text-[#1E1B2E]">
              <li>
                <Link href="/#partnerships" className="hover:underline">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/#partnerships" className="hover:underline">
                  Strategic Partners
                </Link>
              </li>
              <li>
                <Link href="/#partnerships" className="hover:underline">
                  Technology Partners
                </Link>
              </li>
              <li>
                <Link href="/#partnerships" className="hover:underline">
                  Venture Collaborations
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:underline">
                  Donor &amp; Backer Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Support */}
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#3E735E]">
              Support
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm font-extrabold text-[#1E1B2E]">
              <li>
                <Link href="/#contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:underline">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <a href={FOOTER_MAIL_URL} className="hover:underline">
                  Report an Issue
                </a>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="inline-block rounded-md border border-[#1E1B2E] bg-[#FEF0B6] px-2 py-0.5 text-[11px] font-black text-[#1E1B2E]"
                >
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Socials & Copyright Bar */}
        <div className="pt-8 border-t-2 border-[#1E1B2E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#5A5868]">
          <div className="flex flex-wrap items-center gap-4">
            <span>Copyright © 2026 Nexora Group.</span>
            <Link href="/company" className="hover:underline text-[#1E1B2E]">
              Privacy Policy
            </Link>
            <Link href="/company" className="hover:underline text-[#1E1B2E]">
              Terms of Service
            </Link>
            <Link href="/company" className="hover:underline text-[#1E1B2E]">
              Cookie Policy
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://x.com/idanmagkk"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-[#1E1B2E] bg-white text-sm font-black text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#F7D147]"
            >
              𝕏
            </a>
            <a
              href={SITE_CONFIG.founder.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-[#1E1B2E] bg-white text-xs font-black text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#F7D147]"
            >
              IN
            </a>
            <a
              href="https://github.com/magkkteck08"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-[#1E1B2E] bg-white text-xs font-black text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#F7D147]"
            >
              GH
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}