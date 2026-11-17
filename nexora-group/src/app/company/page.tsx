"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Building2,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { SITE_CONFIG, SERVICE_DIVISIONS } from "../../config/siteConfig";

export default function CompanyPage() {
  const { founder } = SITE_CONFIG;

  return (
    <div className="min-h-screen flex flex-col justify-between text-[#1E1B2E]">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-5 py-14 sm:py-20 space-y-14">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1E1B2E] hover:underline mb-5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="nb-card bg-[#FEF0B6] p-6 sm:p-10 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-white px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1E1B2E]">
              <Building2 className="w-3.5 h-3.5 text-[#3E735E]" />
              <span>Corporate Profile</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E1B2E]">
              Inside Nexora Group
            </h1>

            <p className="text-sm sm:text-base font-medium text-[#4A4857] max-w-3xl leading-relaxed">
              Nexora Group is a multi-division enterprise focused on practical digital products, merchant SaaS platforms, digital publishing, and interactive sports gaming.
            </p>
          </div>
        </div>

        {/* Divisions Summary */}
        <div className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1E1B2E]">
            Operating Divisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICE_DIVISIONS.map((div, i) => (
              <div
                key={div.id}
                className={`nb-card p-6 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#EBF3F9]"
                } space-y-3`}
              >
                <h3 className="text-xl font-black text-[#1E1B2E]">
                  {div.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#4A4857] leading-relaxed">
                  {div.description}
                </p>
                <ul className="space-y-1.5 pt-2">
                  {div.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-xs font-bold text-[#1E1B2E]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3E735E] shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="nb-card bg-white p-6 sm:p-8 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-[#1E1B2E] bg-[#F7D147] shadow-[0_4px_0_0_#1E1B2E]">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#1E1B2E]">
                {founder.name}
              </h3>
              <p className="text-xs font-bold text-[#3E735E]">{founder.role}</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <blockquote className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] p-4 text-sm font-bold italic text-[#1E1B2E]">
              &ldquo;{founder.visionQuote}&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm font-medium text-[#4A4857] leading-relaxed">
              {founder.summary}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/investors" className="nb-btn-primary text-xs px-5 py-2.5">
                <Heart className="w-3.5 h-3.5 fill-[#E5484D]" />
                <span>Support Our Donor Campaign</span>
              </Link>
              <Link href="/#contact" className="nb-btn-secondary text-xs px-5 py-2.5">
                <span>Contact Leadership</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}