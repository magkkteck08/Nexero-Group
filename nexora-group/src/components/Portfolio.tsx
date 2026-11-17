"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  X,
  CheckCircle2,
  Layers,
} from "lucide-react";
import {
  PORTFOLIO_PROJECTS,
  PortfolioItem,
  PortfolioCategoryGroup,
} from "../config/siteConfig";

const PORTFOLIO_GROUPS: {
  group: PortfolioCategoryGroup;
  subtitle: string;
}[] = [
  {
    group: "LIVE PRODUCTS",
    subtitle:
      "Active digital platforms deployed and operating across invoicing, commerce, media, and community events.",
  },
  {
    group: "IN DEVELOPMENT",
    subtitle:
      "Software solutions currently in engineering and beta testing for upcoming commercial release.",
  },
  {
    group: "RESEARCH & DEVELOPMENT",
    subtitle:
      "Long-horizon interactive technology and gaming concepts open to strategic partnerships and donor backing.",
  },
];

function getStatusPillStyle(status: PortfolioItem["status"]) {
  switch (status) {
    case "Live":
      return "bg-[#98E2C6] text-[#1E1B2E] border-[#1E1B2E]";
    case "In Development":
      return "bg-[#F7D147] text-[#1E1B2E] border-[#1E1B2E]";
    case "R&D":
      return "bg-[#C5B4F0] text-[#1E1B2E] border-[#1E1B2E]";
  }
}

function generateFallbackSvg(title: string, category: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <rect width="800" height="450" fill="#FFFDF5"/>
    <rect x="40" y="40" width="720" height="370" rx="16" fill="#FEF0B6" stroke="#1E1B2E" stroke-width="4"/>
    <circle cx="85" cy="85" r="10" fill="#F7D147" stroke="#1E1B2E" stroke-width="3"/>
    <text x="85" y="215" fill="#1E1B2E" font-family="sans-serif" font-size="38" font-weight="900">${title}</text>
    <text x="85" y="255" fill="#3E735E" font-family="sans-serif" font-size="20" font-weight="bold">${category}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function ProductCard({
  product,
  onSelectLearnMore,
  featuredVertical = false,
}: {
  product: PortfolioItem;
  onSelectLearnMore: (item: PortfolioItem) => void;
  featuredVertical?: boolean;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const fallbackUri = generateFallbackSvg(product.title, product.category);
  const screenshotSrc =
    !imgFailed && product.image ? product.image : fallbackUri;

  return (
    <article className="group nb-card overflow-hidden flex flex-col justify-between h-full transition-all duration-200 hover:-translate-y-1">
      {/* Top Vertical Stack: Image + Category + Title + Description + Highlights */}
      <div className="flex flex-col">
        {/* Product Screenshot Container */}
        <div className="relative aspect-[16/10] w-full bg-[#FFFDF5] border-b-2 border-[#1E1B2E] overflow-hidden">
          <Image
            src={screenshotSrc}
            alt={`${product.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
            onError={() => setImgFailed(true)}
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          />

          {/* Top Bar: Product Logo + Status Badge */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border-2 border-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F7D147] border border-[#1E1B2E]" />
              <span className="text-xs font-extrabold text-[#1E1B2E]">
                {product.title}
              </span>
            </div>

            <span
              className={`text-[11px] font-extrabold px-3 py-1 rounded-full border-2 shadow-[0_2px_0_0_#1E1B2E] ${getStatusPillStyle(
                product.status
              )}`}
            >
              {product.status}
            </span>
          </div>
        </div>

        {/* Vertical Content Body */}
        <div className="p-5 sm:p-6 flex flex-col space-y-3">
          <span className="inline-block w-fit rounded-full border border-[#1E1B2E] bg-[#FEF0B6] px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#1E1B2E]">
            {product.category}
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-[#1E1B2E]">
            {product.title}
          </h3>

          <p className="text-sm text-[#4A4857] leading-relaxed font-medium">
            {product.shortDescription}
          </p>

          {/* Show top 2 capability highlights on single-item vertical cards (ProfitPal & Become A Legend) */}
          {featuredVertical && product.keyCapabilities?.length > 0 && (
            <div className="pt-2 space-y-2">
              {product.keyCapabilities.slice(0, 2).map((cap) => (
                <div
                  key={cap}
                  className="flex items-start gap-2 rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-bold text-[#1E1B2E]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3E735E] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Vertical Action Stack (Full-Width Stacked Neo-Brutalist Pill Buttons) */}
      <div className="p-5 sm:p-6 pt-4 border-t-2 border-[#1E1B2E] bg-[#FFFDF5] flex flex-col gap-2.5">
        {product.visitUrl ? (
          <a
            href={product.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 bg-[#F7D147] border-2 border-[#1E1B2E] text-[#1E1B2E] font-extrabold text-xs sm:text-sm px-4 py-3 rounded-full shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1.5px] hover:shadow-[0_1.5px_0_0_#1E1B2E] transition-all"
          >
            <span>Visit Product</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        ) : (
          <div className="w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold text-[#1E1B2E] px-4 py-2.5 rounded-full bg-[#FEF0B6] border-2 border-[#1E1B2E]">
            <span className="h-2 w-2 rounded-full bg-[#3E735E]" />
            <span>In Active Build</span>
          </div>
        )}

        {product.learnMoreUrl ? (
          <Link
            href={product.learnMoreUrl}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-extrabold px-4 py-3 rounded-full bg-white text-[#1E1B2E] border-2 border-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1.5px] hover:shadow-[0_1.5px_0_0_#1E1B2E] transition-all"
          >
            <BookOpen className="w-4 h-4 text-[#3E735E]" />
            <span>Learn More</span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => onSelectLearnMore(product)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-extrabold px-4 py-3 rounded-full bg-white text-[#1E1B2E] border-2 border-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] hover:translate-y-[1.5px] hover:shadow-[0_1.5px_0_0_#1E1B2E] transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#3E735E]" />
            <span>Learn More</span>
          </button>
        )}
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [selectedProduct, setSelectedProduct] = useState<PortfolioItem | null>(
    null
  );

  const liveProducts = PORTFOLIO_PROJECTS.filter(
    (p) => p.group === "LIVE PRODUCTS"
  );
  const singleGroups = PORTFOLIO_GROUPS.filter(
    (g) => g.group !== "LIVE PRODUCTS"
  );

  return (
    <section
      id="work"
      className="py-16 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
            <Layers className="w-3.5 h-3.5 text-[#3E735E]" />
            <span>Product Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight">
            Proprietary Products &amp; R&amp;D Pipeline
          </h2>
          <p className="text-sm sm:text-base text-[#5A5868] font-medium leading-relaxed">
            Our digital portfolio is structured into live revenue-generating platforms, software in active development, and long-term interactive research &amp; development.
          </p>
        </div>

        {/* 1. LIVE PRODUCTS (Full 3-Column Vertical Card Grid) */}
        <div className="space-y-6">
          <div className="pb-4 border-b-2 border-[#1E1B2E] flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#3E735E]">
                Classification
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1E1B2E] mt-0.5">
                LIVE PRODUCTS
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#5A5868] max-w-xl">
              {PORTFOLIO_GROUPS[0].subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {liveProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectLearnMore={(item) => setSelectedProduct(item)}
              />
            ))}
          </div>
        </div>

        {/* 2. IN DEVELOPMENT (ProfitPal) & RESEARCH & DEVELOPMENT (Become A Legend)
            Placed side-by-side in 2 vertical columns on desktop & stacked cleanly on mobile so there is ZERO empty space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-stretch">
          {singleGroups.map(({ group, subtitle }) => {
            const items = PORTFOLIO_PROJECTS.filter((p) => p.group === group);
            return (
              <div
                key={group}
                className="flex flex-col justify-between space-y-5"
              >
                <div className="pb-4 border-b-2 border-[#1E1B2E] space-y-1.5">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#3E735E]">
                    Classification
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1E1B2E]">
                    {group}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#5A5868] leading-relaxed">
                    {subtitle}
                  </p>
                </div>

                <div className="flex-1 grid grid-cols-1 gap-6">
                  {items.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      featuredVertical={true}
                      onSelectLearnMore={(item) => setSelectedProduct(item)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product "Learn More" Modal */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-[#1E1B2E]/60 backdrop-blur-sm p-0 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#FFFDF5] border-t-2 sm:border-2 border-[#1E1B2E] rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_8px_0_0_#1E1B2E] max-h-[88vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3 py-0.5 text-xs font-extrabold uppercase tracking-wider text-[#1E1B2E]">
                  {selectedProduct.group} · {selectedProduct.status}
                </span>
                <h3 className="text-2xl font-black text-[#1E1B2E] mt-2">
                  {selectedProduct.title}
                </h3>
                <p className="text-xs font-bold text-[#3E735E]">
                  {selectedProduct.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="nb-icon-circle h-9 w-9"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-[#4A4857] font-medium leading-relaxed">
              {selectedProduct.fullOverview}
            </p>

            <div className="space-y-3 rounded-xl border-2 border-[#1E1B2E] bg-white p-5">
              <p className="text-xs font-black uppercase tracking-wider text-[#1E1B2E]">
                Key Platform Capabilities
              </p>
              <ul className="space-y-2.5">
                {selectedProduct.keyCapabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#1E1B2E]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3E735E] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t-2 border-[#1E1B2E] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                {selectedProduct.visitUrl && (
                  <a
                    href={selectedProduct.visitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nb-btn-primary text-xs px-5 py-2.5"
                  >
                    <span>Visit Live Product</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {selectedProduct.secondaryCta && (
                  <a
                    href={selectedProduct.secondaryCta.href}
                    className="nb-btn-secondary text-xs px-4 py-2.5"
                  >
                    <span>{selectedProduct.secondaryCta.label}</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="text-xs font-extrabold text-[#1E1B2E] hover:underline py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}