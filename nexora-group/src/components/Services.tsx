"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  ShoppingBag,
  Workflow,
  Layers,
  Compass,
  TrendingUp,
  Check,
  ArrowUpRight,
  Wrench,
} from "lucide-react";

interface CorporateCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  cardBg: string;
  icon: React.ElementType;
}

const GROUP_CAPABILITIES: CorporateCapability[] = [
  {
    id: "software-development",
    number: "01",
    title: "Software Development",
    description:
      "Full-lifecycle engineering of custom web applications, mobile applications, and multi-tenant SaaS platforms built for reliability and scale.",
    deliverables: [
      "Custom Web & Mobile Apps",
      "Multi-Tenant SaaS Architecture",
      "API & Cloud Infrastructure",
      "Database & Security Engineering",
    ],
    ctaText: "Get Started",
    cardBg: "bg-[#FEF0B6]",
    icon: Code2,
  },
  {
    id: "ecommerce-infrastructure",
    number: "02",
    title: "E-commerce Infrastructure",
    description:
      "End-to-end digital commerce systems, custom online storefronts, merchant catalog tools, and payment-ready checkout workflows.",
    deliverables: [
      "Custom Digital Storefronts",
      "Merchant Inventory & Catalogs",
      "Payment & Billing Integration",
      "Order & Fulfillment Portals",
    ],
    ctaText: "Get Started",
    cardBg: "bg-[#EBF3F9]",
    icon: ShoppingBag,
  },
  {
    id: "business-automation",
    number: "03",
    title: "Business Automation",
    description:
      "Replacing manual bottlenecks with intelligent digital workflows, automated invoicing, CRM pipelines, and internal operational systems.",
    deliverables: [
      "Automated Billing & Receipts",
      "Internal Operations Dashboards",
      "Workflow & Email Pipelines",
      "Financial & Margin Tracking",
    ],
    ctaText: "Learn More",
    cardBg: "bg-white",
    icon: Workflow,
  },
  {
    id: "digital-transformation",
    number: "04",
    title: "Digital Transformation",
    description:
      "Guiding established enterprises and growing SMEs as they transition legacy paper or offline operations into modern cloud platforms.",
    deliverables: [
      "Legacy System Modernization",
      "Cloud Migration & Onboarding",
      "Digital Customer Portals",
      "Staff & Process Digitization",
    ],
    ctaText: "Learn More",
    cardBg: "bg-[#E8F8F0]",
    icon: Layers,
  },
  {
    id: "technology-consulting",
    number: "05",
    title: "Technology Consulting",
    description:
      "Executive-level technical strategy, product roadmap architecture, MVP scoping, and engineering due diligence for founders and organisations.",
    deliverables: [
      "System Architecture Design",
      "Product Strategy & Roadmaps",
      "Technical Due Diligence",
      "Fractional CTO Advisory",
    ],
    ctaText: "Book Consultation",
    cardBg: "bg-[#FEF0B6]",
    icon: Compass,
  },
  {
    id: "seo-digital-growth",
    number: "06",
    title: "SEO & Digital Growth",
    description:
      "Technical search engine optimisation, structured metadata architecture, high-conversion landing systems, and measurable digital visibility.",
    deliverables: [
      "Technical & On-Page SEO",
      "Search Visibility Architecture",
      "Performance & Core Web Vitals",
      "Conversion Rate Optimization",
    ],
    ctaText: "Get Started",
    cardBg: "bg-[#EBF3F9]",
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 border-b-2 border-[#1E1B2E]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#EBF3F9] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]">
              <Wrench className="w-3.5 h-3.5 text-[#3E735E]" />
              <span>What We Do · Enterprise Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight leading-[1.1]">
              Six Core Capabilities{" "}
              <span className="text-[#3E735E]">Engineered for Execution.</span>
            </h2>

            <p className="text-[#5A5868] text-sm sm:text-base font-medium leading-relaxed">
              Beyond operating our own ventures, Nexora Group deploys its engineering, infrastructure, and growth teams to build digital systems for commercial partners and enterprise clients.
            </p>
          </div>

          <Link
            href="/#contact"
            className="nb-btn-primary text-xs sm:text-sm px-6 py-3 w-fit shrink-0"
          >
            <span>Request Capability Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUP_CAPABILITIES.map((cap) => {
            const IconComponent = cap.icon;

            return (
              <article
                key={cap.id}
                className={`nb-card ${cap.cardBg} p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#F7D147] border-2 border-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E] flex items-center justify-center text-[#1E1B2E]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="rounded-full border-2 border-[#1E1B2E] bg-white px-3 py-0.5 text-xs font-black text-[#3E735E]">
                      Pillar {cap.number}
                    </span>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h3 className="text-xl font-black text-[#1E1B2E]">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4857] font-medium leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2">
                    {cap.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-extrabold text-[#1E1B2E] bg-white/90 px-3 py-2 rounded-xl border-2 border-[#1E1B2E]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#3E735E] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-[#1E1B2E] flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#5A5868]">
                    Group Capability
                  </span>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-4 py-2 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:translate-y-[1px] hover:bg-white transition-all"
                  >
                    <span>{cap.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}