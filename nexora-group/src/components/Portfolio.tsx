"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Globe } from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioItem } from "../config/siteConfig";

function getStatusBadgeStyle(status: PortfolioItem["status"]) {
  switch (status) {
    case "Live": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "Beta": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "In Development": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  }
}

function generateFallbackDataUri(title: string, category: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="#09090b"/><rect x="40" y="40" width="720" height="370" rx="8" fill="#121215" stroke="#27272a" stroke-width="2"/><circle cx="75" cy="75" r="5" fill="#3b82f6"/><text x="75" y="215" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="bold">${title}</text><text x="75" y="250" fill="#a1a1aa" font-family="sans-serif" font-size="16">${category}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function ProjectCard({ project }: { project: PortfolioItem }) {
  const previewSrc = project.image ? project.image : generateFallbackDataUri(project.title, project.category);
  const hostname = project.isExternal ? project.link.replace(/^https?:\/\//, "") : "internal";

  return (
    <article className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg overflow-hidden flex flex-col justify-between transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.02)]">
      <div>
        <a href={project.link} target={project.isExternal ? "_blank" : undefined} rel={project.isExternal ? "noopener noreferrer" : undefined} className="block bg-zinc-950 border-b border-zinc-800 overflow-hidden">
          <div className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" /><span className="w-2.5 h-2.5 rounded-full bg-zinc-700" /><span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-mono text-zinc-400 bg-zinc-950 px-1.5 sm:px-2.5 py-0.5 rounded border border-zinc-800 truncate max-w-[100px] sm:max-w-none">
              <Globe className="w-2.5 h-2.5 text-blue-400 shrink-0" />
              <span className="truncate">{hostname}</span>
            </div>
            <span className={`text-[8px] sm:text-[10px] font-medium px-1.5 sm:px-2 py-0.5 rounded border whitespace-nowrap ${getStatusBadgeStyle(project.status)}`}>
              {project.status}
            </span>
          </div>
          <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden">
            <Image src={previewSrc} alt={`${project.title} preview`} fill className="object-contain object-center p-2 sm:p-4 group-hover:scale-[1.03] transition-transform duration-500" />
          </div>
        </a>
        <div className="p-3 sm:p-6 space-y-1.5 sm:space-y-2.5">
          <p className="text-[10px] sm:text-xs font-medium text-blue-400 leading-tight">{project.category}</p>
          <h3 className="text-sm sm:text-lg font-bold text-white">{project.title}</h3>
          <p className="text-[10px] sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 sm:line-clamp-none">{project.description}</p>
        </div>
      </div>
      <div className="px-3 sm:px-6 pb-3 sm:pb-6 pt-2 sm:pt-3 space-y-3 sm:space-y-4 mt-auto">
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
              {tech}
            </span>
          ))}
        </div>
        <div className="pt-2.5 sm:pt-3 border-t border-zinc-800/80 flex items-center justify-between">
          <a href={project.link} target={project.isExternal ? "_blank" : undefined} rel={project.isExternal ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-zinc-300 group-hover:text-blue-400 transition-colors">
            <span>{project.isExternal ? "Visit Site" : "Enquire"}</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-16 sm:py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        <div className="max-w-2xl space-y-2 sm:space-y-3">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-400">Selected Work</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">Live Digital Products</h2>
        </div>
        {/* FORCED 2-COLUMN ON MOBILE (grid-cols-2) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {PORTFOLIO_PROJECTS.map((project: PortfolioItem) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}