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
      "Long-horizon interactive technology and gaming concepts open to strategic partnerships and seed capital.",
  },
];

function getStatusPillStyle(status: PortfolioItem["status"]) {
  switch (status) {
    case "Live":
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
    case "In Development":
      return "bg-amber-500/10 text-amber-300 border-amber-500/30";
    case "R&D":
      return "bg-blue-500/10 text-blue-300 border-blue-500/30";
  }
}

function generateFallbackSvg(title: string, category: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <rect width="800" height="450" fill="#09090b"/>
    <rect x="40" y="40" width="720" height="370" rx="14" fill="#18181b" stroke="#27272a" stroke-width="2"/>
    <circle cx="85" cy="85" r="6" fill="#f59e0b"/>
    <text x="85" y="215" fill="#ffffff" font-family="sans-serif" font-size="38" font-weight="bold">${title}</text>
    <text x="85" y="255" fill="#a1a1aa" font-family="sans-serif" font-size="18">${category}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function ProductCard({
  product,
  onSelectLearnMore,
}: {
  product: PortfolioItem;
  onSelectLearnMore: (item: PortfolioItem) => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const fallbackUri = generateFallbackSvg(product.title, product.category);
  const screenshotSrc =
    !imgFailed && product.image ? product.image : fallbackUri;

  return (
    <article className="group bg-zinc-900/60 border border-zinc-800/90 hover:border-amber-500/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg">
      <div>
        {/* Product Screenshot Container */}
        <div className="relative aspect-[16/10] w-full bg-zinc-950 border-b border-zinc-800 overflow-hidden">
          <Image
            src={screenshotSrc}
            alt={`${product.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
            onError={() => setImgFailed(true)}
            className="object-contain object-center p-4 group-hover:scale-[1.02] transition-transform duration-500"
          />

          {/* Top Bar: Product Logo + Status Badge */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-bold text-white">
                {product.title}
              </span>
            </div>

            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-md ${getStatusPillStyle(
                product.status
              )}`}
            >
              {product.status}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            {product.category}
          </p>
          <h3 className="text-xl font-bold text-white">{product.title}</h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Action Buttons: Visit Product + Learn More */}
      <div className="px-6 pb-6 pt-3 border-t border-zinc-800/70 flex flex-wrap items-center justify-between gap-3">
        {product.visitUrl ? (
          <a
            href={product.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs px-4 py-2.5 rounded-lg transition-colors"
          >
            <span>Visit Product</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-xs font-medium text-zinc-500 px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800">
            In Active Build
          </span>
        )}

        {product.learnMoreUrl ? (
          <Link
            href={product.learnMoreUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Learn More</span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => onSelectLearnMore(product)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
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

  return (
    <section
      id="work"
      className="py-20 sm:py-28 bg-zinc-950 border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <Layers className="w-4 h-4" />
            <span>Product Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Proprietary Products &amp; R&amp;D Pipeline
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Our digital portfolio is structured into live revenue-generating platforms, software in active development, and long-term interactive research &amp; development.
          </p>
        </div>

        {/* Three Categorized Product Groups */}
        <div className="space-y-16">
          {PORTFOLIO_GROUPS.map(({ group, subtitle }) => {
            const items = PORTFOLIO_PROJECTS.filter((p) => p.group === group);
            return (
              <div key={group} className="space-y-6">
                <div className="pb-4 border-b border-zinc-800/80 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                      Classification
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {group}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                    {subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {items.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
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
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-zinc-950 border-t sm:border border-zinc-800 rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[88vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {selectedProduct.group} • {selectedProduct.status}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProduct.title}
                </h3>
                <p className="text-xs text-zinc-400">
                  {selectedProduct.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {selectedProduct.fullOverview}
            </p>

            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                Key Platform Capabilities
              </p>
              <ul className="space-y-2">
                {selectedProduct.keyCapabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-3">
                {selectedProduct.visitUrl && (
                  <a
                    href={selectedProduct.visitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <span>Visit Live Product</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {selectedProduct.secondaryCta && (
                  <a
                    href={selectedProduct.secondaryCta.href}
                    className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <span>{selectedProduct.secondaryCta.label}</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="text-xs text-zinc-400 hover:text-white"
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