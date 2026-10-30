"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Globe } from "lucide-react";
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

// Fallback image if you forget to add an image to siteConfig.ts
function generateFallbackDataUri(title: string, category: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <rect width="800" height="450" fill="#09090b"/>
    <rect x="40" y="40" width="720" height="370" rx="8" fill="#121215" stroke="#27272a" stroke-width="2"/>
    <circle cx="75" cy="75" r="5" fill="#3b82f6"/>
    <text x="75" y="215" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="bold">${title}</text>
    <text x="75" y="250" fill="#a1a1aa" font-family="sans-serif" font-size="16">${category}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function ProjectCard({ project }: { project: PortfolioItem }) {
  // If you provided an image path in siteConfig, use it. Otherwise, use the fallback.
  const previewSrc = project.image ? project.image : generateFallbackDataUri(project.title, project.category);

  const hostname = project.isExternal
    ? project.link.replace(/^https?:\/\//, "")
    : "internal-build";

  return (
    <article className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg overflow-hidden flex flex-col justify-between transition-all">
      <div>
        {/* Browser Frame + Landing Page Screenshot */}
        <a
          href={project.link}
          target={project.isExternal ? "_blank" : undefined}
          rel={project.isExternal ? "noopener noreferrer" : undefined}
          className="block bg-zinc-950 border-b border-zinc-800 overflow-hidden"
        >
          {/* Top Browser Chrome Bar */}
          <div className="px-3.5 py-2 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-zinc-950 px-2.5 py-0.5 rounded border border-zinc-800">
              <Globe className="w-3 h-3 text-blue-400" />
              <span>{hostname}</span>
            </div>
            <span
              className={`text-[10px] font-medium px-2 py-0.5 rounded border ${getStatusBadgeStyle(
                project.status
              )}`}
            >
              {project.status}
            </span>
          </div>

          {/* Local Image Preview */}
          <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden">
            <Image
              src={previewSrc}
              alt={`${project.title} preview`}
              fill
              className="object-contain object-center p-4 group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </a>

        {/* Card Text Content */}
        <div className="p-6 space-y-2.5">
          <p className="text-xs font-medium text-blue-400">{project.category}</p>
          <h3 className="text-lg font-bold text-white flex items-center justify-between">
            <span>{project.title}</span>
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer & Live Action Link */}
      <div className="px-6 pb-6 pt-3 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
          <a
            href={project.link}
            target={project.isExternal ? "_blank" : undefined}
            rel={project.isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-blue-400 transition-colors"
          >
            <span>
              {project.isExternal
                ? `Visit Live Site (${hostname})`
                : "Enquire About Access"}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Live Digital Products &amp; Platforms
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Explore production platforms, SaaS tools, and digital communities built and operated by Nexora Group.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.map((project: PortfolioItem) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}