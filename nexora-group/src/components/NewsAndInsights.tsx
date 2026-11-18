"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Newspaper,
  Calendar,
  User,
  Share2,
  ArrowUpRight,
  X,
  Check,
} from "lucide-react";

type ArticleCategory =
  | "All"
  | "Company Announcements"
  | "Product Launches"
  | "Technology & Innovation"
  | "Venture Updates"
  | "Partnerships"
  | "Industry Insights";

export interface NewsArticle {
  id: string;
  title: string;
  category: Exclude<ArticleCategory, "All">;
  date: string;
  author: string;
  image: string;
  summary: string;
  content: string[];
  cardBg: string;
}

export const INITIAL_ARTICLES: NewsArticle[] = [
  {
    id: "nexora-venture-architecture-2026",
    title: "Strengthening Nexora Group's Three Core Pillars: Technology, Ventures & Partnerships",
    category: "Company Announcements",
    date: "November 2026",
    author: "Muiz Ayolola Omoyele",
    image: "/hero-image.jpg",
    summary:
      "How we structure our engineering capabilities, proprietary software ventures, and institutional alliances under one unified holding architecture.",
    content: [
      "Nexora Group was founded on a straightforward premise: African businesses and digital consumers deserve resilient, well-engineered software platforms built for real operational needs.",
      "To execute effectively, we operate across three distinct identities: Technology (custom software and digital transformation), Ventures (building and scaling independent products like Receipta, Africommerce, and BizRep), and Partnerships (collaborating with founders, organisations, and backers).",
      "This unified structure allows our engineering lab discoveries to directly power our commercial ventures and client infrastructure.",
    ],
    cardBg: "bg-[#FEF0B6]",
  },
  {
    id: "receipta-africommerce-merchant-stack",
    title: "Empowering Modern Merchants with Receipta and Africommerce",
    category: "Product Launches",
    date: "October 2026",
    author: "Nexora Product Team",
    image: "/projects/receipta.jpg",
    summary:
      "Delivering instant digital invoicing, smart receipt generation, and accessible online storefronts for growing African businesses.",
    content: [
      "Across emerging markets, thousands of merchants manage daily sales through fragmented chat threads and paper records.",
      "With Receipta and CatalogPal working alongside Africommerce, merchants can generate verifiable digital receipts in seconds, organize interactive product catalogs, and transition smoothly into full e-commerce storefronts.",
    ],
    cardBg: "bg-[#EBF3F9]",
  },
  {
    id: "football-intelligence-become-a-legend-rd",
    title: "Inside Our Sports Technology R&D: Football Intelligence & Become A Legend",
    category: "Venture Updates",
    date: "November 2026",
    author: "Nexora R&D Studio",
    image: "/projects/velopulse.jpg",
    summary:
      "Combining grassroots scouting telemetry, tactical formation analysis, and interactive career progression in our R&D lab.",
    content: [
      "Grassroots football is rich with talent that rarely gets documented with structured data or tactical profiling.",
      "Our Football Intelligence initiative and the Become A Legend simulation engine explore how positional decision-making, match telemetry, and career progression can be modeled interactively for players, coaches, and football enthusiasts.",
    ],
    cardBg: "bg-[#E8F8F0]",
  },
];

const CATEGORIES: ArticleCategory[] = [
  "All",
  "Company Announcements",
  "Product Launches",
  "Technology & Innovation",
  "Venture Updates",
  "Partnerships",
  "Industry Insights",
];

export default function NewsAndInsights() {
  const [selectedCategory, setSelectedCategory] =
    useState<ArticleCategory>("All");
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered =
    selectedCategory === "All"
      ? INITIAL_ARTICLES
      : INITIAL_ARTICLES.filter((a) => a.category === selectedCategory);

  const handleShare = (article: NewsArticle) => {
    const shareUrl = `${window.location.origin}/#news`;
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: article.summary,
          url: shareUrl,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${article.title} — ${shareUrl}`);
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section
      id="news"
      className="py-16 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#E8F8F0] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
            <Newspaper className="h-3.5 w-3.5 text-[#3E735E]" />
            <span>News &amp; Insights</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E1B2E]">
            Inside Nexora.
          </h2>

          <p className="text-sm sm:text-base font-medium text-[#5A5868] leading-relaxed">
            Official company announcements, product launches, venture milestones, and technical insights from across Nexora Group.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border-2 border-[#1E1B2E] px-3.5 py-1.5 text-xs font-extrabold transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#1E1B2E] text-[#F7D147] shadow-[0_2px_0_0_#F7D147]"
                  : "bg-white text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#FEF0B6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <div className="nb-card bg-white p-8 text-center space-y-2">
            <p className="text-base font-black text-[#1E1B2E]">
              No dispatches published in &ldquo;{selectedCategory}&rdquo; yet.
            </p>
            <p className="text-xs font-medium text-[#5A5868]">
              New articles can be published directly through the Nexora Admin Dashboard.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <article
                key={article.id}
                className={`nb-card ${article.cardBg} overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1`}
              >
                <div>
                  {/* Featured Image */}
                  <div className="relative aspect-[16/10] w-full border-b-2 border-[#1E1B2E] bg-white overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 rounded-full border-2 border-[#1E1B2E] bg-white px-3 py-0.5 text-[10px] font-black uppercase text-[#3E735E] shadow-[0_2px_0_0_#1E1B2E]">
                      {article.category}
                    </span>
                  </div>

                  {/* Article Meta & Summary */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-[#5A5868]">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-[#1E1B2E]" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-[#1E1B2E]" />
                        {article.author}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#1E1B2E] leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-[#4A4857] leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Read & Share Bar */}
                <div className="px-5 pb-5 pt-3 border-t-2 border-[#1E1B2E] bg-white/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-4 py-1.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] transition-all cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare(article)}
                    title="Share Article"
                    className="inline-flex items-center gap-1 rounded-full border-2 border-[#1E1B2E] bg-white px-3 py-1.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#FEF0B6] transition-colors cursor-pointer"
                  >
                    {copiedId === article.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#3E735E]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="h-3.5 w-3.5" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveArticle(null)}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-[#1E1B2E]/60 backdrop-blur-sm p-0 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#FFFDF5] border-t-2 sm:border-2 border-[#1E1B2E] rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 space-y-5 shadow-[0_8px_0_0_#1E1B2E] max-h-[88vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3 py-0.5 text-xs font-extrabold uppercase text-[#1E1B2E]">
                {activeArticle.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="nb-icon-circle h-9 w-9 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#1E1B2E] leading-tight">
              {activeArticle.title}
            </h3>

            <div className="flex items-center gap-4 text-xs font-bold text-[#5A5868] pb-3 border-b-2 border-[#1E1B2E]">
              <span>By {activeArticle.author}</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
            </div>

            <div className="space-y-4">
              {activeArticle.content.map((para, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base font-medium text-[#1E1B2E] leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="pt-4 border-t-2 border-[#1E1B2E] flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleShare(activeArticle)}
                className="nb-btn-secondary text-xs px-4 py-2 cursor-pointer"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share Article</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="text-xs font-extrabold text-[#1E1B2E] hover:underline cursor-pointer"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}