"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Globe, Sparkles, PenTool } from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioItem } from "../config/siteConfig";

function getStatusBadgeStyle(status: PortfolioItem["status"]) {
  switch (status) {
    case "Live":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "Beta":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "In Development":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  }
}

function generateFallbackDataUri(title: string, category: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#09090b"/>
        <stop offset="50%" stop-color="#1e1b4b"/>
        <stop offset="100%" stop-color="#09090b"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bg)"/>
    <rect x="40" y="40" width="720" height="370" rx="14" fill="#09090b" fill-opacity="0.75" stroke="#3b82f6" stroke-opacity="0.35" stroke-width="2"/>
    <circle cx="85" cy="85" r="6" fill="#60a5fa"/>
    <text x="85" y="215" fill="#ffffff" font-family="sans-serif" font-size="38" font-weight="bold">${title}</text>
    <text x="85" y="255" fill="#93c5fd" font-family="sans-serif" font-size="18">${category}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function ProjectCard({ project }: { project: PortfolioItem }) {
  const [imgFailed, setImgFailed] = useState(false);

  const fallbackUri = generateFallbackDataUri(project.title, project.category);
  const previewSrc =
    !imgFailed && project.image ? project.image : fallbackUri;

  const hostname = project.isExternal
    ? project.link.replace(/^https?:\/\//, "")
    : "internal";

  return (
    <article className="group bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/90 hover:border-blue-500/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)]">
      <div>
        <a
          href={project.link}
          target={project.isExternal ? "_blank" : undefined}
          rel={project.isExternal ? "noopener noreferrer" : undefined}
          className="block bg-zinc-950 border-b border-zinc-800 overflow-hidden"
        >
          {/* Browser Top Bar */}
          <div className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-mono text-zinc-300 bg-zinc-950 px-1.5 sm:px-2.5 py-0.5 rounded border border-zinc-800 truncate max-w-[110px] sm:max-w-none">
              <Globe className="w-2.5 h-2.5 text-blue-400 shrink-0" />
              <span className="truncate">{hostname}</span>
            </div>
            <div className="flex items-center gap-1">
              {project.secondaryCta?.badge && (
                <span className="hidden xl:inline-block text-[9px] font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {project.secondaryCta.badge}
                </span>
              )}
              <span
                className={`text-[8px] sm:text-[10px] font-medium px-1.5 sm:px-2 py-0.5 rounded border whitespace-nowrap ${getStatusBadgeStyle(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* Centered Product Image with automatic fallback */}
          <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden">
            <Image
  src={previewSrc}
  alt={`${project.title} preview`}
  fill
  unoptimized
  className="object-contain object-center p-2 sm:p-4 group-hover:scale-[1.03] transition-transform duration-500"
/>

          </div>
        </a>

        {/* Executive Write-Up */}
        <div className="p-3 sm:p-6 space-y-2 sm:space-y-3">
          <p className="text-[10px] sm:text-xs font-semibold text-blue-400 leading-tight">
            {project.category}
          </p>
          <h3 className="text-sm sm:text-xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-[11px] sm:text-sm text-zinc-300 leading-relaxed line-clamp-4 sm:line-clamp-none">
            {project.description}
          </p>

          <div className="p-2.5 sm:p-3 rounded-lg bg-zinc-950/90 border border-zinc-800/90 flex items-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5 hidden sm:block" />
            <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed">
              <strong className="text-zinc-200">Key Value: </strong>
              {project.executiveHighlight}
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack & Action Links */}
      <div className="px-3 sm:px-6 pb-3 sm:pb-6 pt-2 space-y-3 sm:space-y-4 mt-auto">
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-2.5 sm:pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
          <a
            href={project.link}
            target={project.isExternal ? "_blank" : undefined}
            rel={project.isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-white group-hover:text-blue-400 transition-colors"
          >
            <span>{project.primaryCtaText}</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>

          {project.secondaryCta && (
            <a
              href={project.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 transition-colors"
            >
              <PenTool className="w-3 h-3" />
              <span>{project.secondaryCta.label}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-16 sm:py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-400">
            Proven Track Record &amp; Live Ecosystem
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Built, Shipped &amp; Scaling Platforms
          </h2>
          <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
            From enterprise receipt automation on <strong>Receipta</strong> and digital inventory on <strong>CatalogPal</strong>, to live journalism on <strong>Velo Pulse</strong> (now onboarding new writers).
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {PORTFOLIO_PROJECTS.map((project: PortfolioItem) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}