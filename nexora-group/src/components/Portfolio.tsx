"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cpu,
  Layers,
  Workflow,
  Rocket,
  ShieldCheck,
  Code2,
  Database,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const EXECUTION_STAGES = [
  {
    step: "Stage 01",
    title: "Architecture & Venture Blueprinting",
    subtitle: "Market Validation, Data Modeling & System Design",
    description:
      "Every internal venture and enterprise client project begins with rigorous technical scoping—mapping database schemas, multi-tenant permissions, and commercial unit economics before a single line of production code is written.",
    outputs: [
      "System Architecture Blueprint",
      "Database & API Schema Design",
      "UI/UX Wireframes & Design System",
      "Security & Access Control Model",
    ],
    bg: "bg-[#FEF0B6]",
    icon: Layers,
  },
  {
    step: "Stage 02",
    title: "Full-Stack Engineering & Cloud Build",
    subtitle: "High-Performance Web, Mobile & SaaS Development",
    description:
      "Our engineering team builds modular, type-safe applications using modern web standards, edge rendering, and real-time database infrastructure designed for low-latency performance across African and global networks.",
    outputs: [
      "Next.js & TypeScript Frontend",
      "Supabase / PostgreSQL Data Core",
      "Responsive Mobile-First Interface",
      "Automated CI/CD Deployment",
    ],
    bg: "bg-[#EBF3F9]",
    icon: Code2,
  },
  {
    step: "Stage 03",
    title: "Automation & Commercial Integration",
    subtitle: "Billing Engines, Messaging & Workflow Pipelines",
    description:
      "We connect core software platforms to real-world business operations—integrating automated invoicing, transactional email dispatches, WhatsApp commerce routing, and real-time executive analytics.",
    outputs: [
      "Automated Invoicing & Receipts",
      "Transactional Email & Messaging APIs",
      "Merchant & Inventory Sync",
      "Role-Based Admin Dashboards",
    ],
    bg: "bg-[#E8F8F0]",
    icon: Workflow,
  },
  {
    step: "Stage 04",
    title: "Commercial Scale & Governance",
    subtitle: "Uptime Monitoring, SEO Growth & Long-Term Iteration",
    description:
      "Post-launch, Nexora Group manages continuous technical optimisation, search visibility architecture, user telemetry, and infrastructure scaling as ventures grow from pilot cohorts to full commercial operations.",
    outputs: [
      "Technical SEO & Core Web Vitals",
      "Production Telemetry & Audit Logs",
      "Multi-Region Cloud Reliability",
      "Iterative Feature Rollouts",
    ],
    bg: "bg-white",
    icon: Rocket,
  },
];

const TECH_STACK_LAYERS = [
  {
    id: "frontend",
    label: "Frontend & Interactive Systems",
    summary: "Fast, accessible, mobile-first interfaces and simulation canvases.",
    technologies: [
      {
        name: "Next.js (App Router)",
        role: "Server & Edge Web Framework",
      },
      {
        name: "TypeScript & React",
        role: "Type-Safe Component Architecture",
      },
      {
        name: "Tailwind CSS",
        role: "Custom Neo-Brutalist Design System",
      },
      {
        name: "HTML5 Canvas & Motion",
        role: "Interactive 2D Simulation & Telemetry",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend, Cloud & Data Core",
    summary: "Scalable relational databases, authentication, and edge APIs.",
    technologies: [
      {
        name: "Supabase & PostgreSQL",
        role: "Relational Database & Row-Level Security",
      },
      {
        name: "Node.js & Serverless APIs",
        role: "Business Logic & Webhook Processing",
      },
      {
        name: "Resend & Communication Rails",
        role: "Transactional Email & Department Routing",
      },
      {
        name: "Edge Caching & CDN",
        role: "Global Low-Latency Asset Delivery",
      },
    ],
  },
  {
    id: "governance",
    label: "Enterprise Quality & Governance",
    summary: "Engineering standards applied across every Nexora venture and client build.",
    technologies: [
      {
        name: "Role-Based Access Control",
        role: "Multi-Tier Admin & Operator Permissions",
      },
      {
        name: "Automated Spam & Input Guards",
        role: "Endpoint Validation & Security Filtering",
      },
      {
        name: "Structured SEO & OpenGraph",
        role: "Dynamic Social Cards & Search Indexing",
      },
      {
        name: "Git & Modular Monorepo Workflow",
        role: "Version-Controlled Release Pipelines",
      },
    ],
  },
];

export default function Portfolio() {
  const [activeLayer, setActiveLayer] = useState(TECH_STACK_LAYERS[0]);

  return (
    <section
      id="work"
      className="py-16 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
              <Cpu className="w-3.5 h-3.5 text-[#3E735E]" />
              <span>Innovation in Action · Engineering Methodology</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight leading-[1.1]">
              How We Engineer &amp;{" "}
              <span className="text-[#3E735E]">Scale Digital Systems.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A5868] font-medium leading-relaxed">
              A look inside Nexora Group&apos;s technical execution engine—combining disciplined software architecture, modern cloud infrastructure, and repeatable venture-building standards.
            </p>
          </div>

          <Link
            href="/#contact"
            className="nb-btn-primary text-xs sm:text-sm px-6 py-3 w-fit shrink-0"
          >
            <span>Commission a System Build</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 1. 4-Stage Execution Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXECUTION_STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.step}
                className={`nb-card ${stage.bg} p-6 sm:p-7 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#1E1B2E] bg-white shadow-[0_3px_0_0_#1E1B2E]">
                      <Icon className="h-6 w-6 text-[#1E1B2E]" />
                    </div>
                    <span className="rounded-full border-2 border-[#1E1B2E] bg-[#1E1B2E] px-3.5 py-1 text-xs font-black uppercase text-[#F7D147]">
                      {stage.step}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#3E735E]">
                      {stage.subtitle}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1E1B2E] mt-0.5">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[#4A4857] leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-[#1E1B2E]">
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#5A5868] mb-2.5">
                    Key Engineering Outputs
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {stage.outputs.map((out) => (
                      <div
                        key={out}
                        className="flex items-center gap-2 rounded-xl border-2 border-[#1E1B2E] bg-white/90 px-3 py-1.5 text-xs font-extrabold text-[#1E1B2E]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#3E735E] shrink-0" />
                        <span className="truncate">{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 2. Interactive Technology Infrastructure Matrix */}
        <div className="nb-card bg-white p-6 sm:p-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b-2 border-[#1E1B2E] pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#3E735E]">
                <Database className="h-4 w-4" />
                <span>Nexora Infrastructure Stack</span>
              </div>
              <h3 className="text-2xl font-black text-[#1E1B2E]">
                Production Technology &amp; Architecture Standards
              </h3>
            </div>

            {/* Layer Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {TECH_STACK_LAYERS.map((layer) => (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActiveLayer(layer)}
                  className={`rounded-full border-2 border-[#1E1B2E] px-4 py-2 text-xs font-extrabold transition cursor-pointer ${
                    activeLayer.id === layer.id
                      ? "bg-[#F7D147] text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]"
                      : "bg-[#FFFDF5] text-[#4A4857] hover:bg-[#FEF0B6]"
                  }`}
                >
                  {layer.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-[#5A5868]">
            {activeLayer.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeLayer.technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl border-2 border-[#1E1B2E] bg-[#FFFDF5] p-4 shadow-[0_3px_0_0_#1E1B2E] space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#3E735E] shrink-0" />
                  <h4 className="text-sm font-black text-[#1E1B2E]">
                    {tech.name}
                  </h4>
                </div>
                <p className="text-xs font-medium text-[#5A5868]">
                  {tech.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}