"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Globe, PenTool } from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioItem } from "../config/siteConfig";

function getStatusDotColor(status: PortfolioItem["status"]) {
  switch (status) {
    case "Live":
      return "bg-emerald-400";
    case "Beta":
      return "bg-blue-400";
    case "In Development":
      return "bg-amber-400";
  }
}

function generateFallbackDataUri(title: string, category: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <rect width="800" height="450" fill="#0B1120"/>
    <rect x="40" y="40" width="720" height="370" rx="14" fill="#131C31" stroke="#1E293B" stroke-width="2"/>
    <circle cx="85" cy="85" r="6" fill="#3B82F6"/>
    <text x="85" y="215" fill="#ffffff" font-family="sans-serif" font-size="38" font-weight="bold">${title}</text>
    <text x="85" y="255" fill="#94A3B8" font-family="sans-serif" font-size="18">${category}</text>
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
    : "internal-platform";

  return (
    <article className="group bg-[#131C31] border border-slate-800/90 hover:border-blue-500/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl">
      <div>
        <a
          href={project.link}
          target={project.isExternal ? "_blank" : undefined}
          rel={project.isExternal ? "noopener noreferrer" : undefined}
          className="block bg-[#090D16] border-b border-slate-800/80 overflow-hidden"
        >
          {/* Unified, Restrained Browser Header */}
          <div className="px-4 py-3 bg-[#0F172A] border-b border-slate-800/80 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 truncate">
              <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="truncate">{hostname}</span>
            </div>

            {/* Cohesive Monochrome Status Pill + Subtle Dot */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-[11px] font-medium text-slate-200 shrink-0">
              <span
                className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(
                  project.status
                )}`}
              />
              <span>{project.status}</span>
            </div>
          </div>

          {/* Spacious Product Thumbnail */}
          <div className="relative aspect-[16/10] w-full bg-[#090D16] overflow-hidden">
            <Image
              src={previewSrc}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
              onError={() => setImgFailed(true)}
              className="object-contain object-center p-5 group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </a>

        {/* Breathing Room in Card Body */}
        <div className="p-6 sm:p-7 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            {project.category}
          </p>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="pt-2">
            <div className="p-3.5 rounded-xl bg-[#0B1120]/90 border border-slate-800/90">
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white font-semibold">
                  Commercial Impact:{" "}
                </strong>
                {project.executiveHighlight}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 space-y-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-[#0B1120] text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <a
            href={project.link}
            target={project.isExternal ? "_blank" : undefined}
            rel={project.isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
          >
            <span>{project.primaryCtaText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {project.secondaryCta && (
            <a
              href={project.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600/15 hover:bg-blue-600/25 text-blue-300 border border-blue-500/30 transition-colors"
            >
              <PenTool className="w-3.5 h-3.5" />
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
    <section id="work" className="py-20 sm:py-28 bg-[#0B1120] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 space-y-12">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Selected Work &amp; Live Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built, Shipped &amp; Scaling Platforms
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Explore our live software products—from enterprise digital invoicing on{" "}
            <strong className="text-white">Receipta</strong> and interactive inventory on{" "}
            <strong className="text-white">CatalogPal</strong>, to digital journalism on{" "}
            <strong className="text-white">Velo Pulse</strong>.
          </p>
        </div>

        {/* 1-Column on Mobile so cards breathe, 2-Col on Tablet, 3-Col on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PORTFOLIO_PROJECTS.map((project: PortfolioItem) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}