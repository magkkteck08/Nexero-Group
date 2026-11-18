"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Rocket,
  Layers,
  Wrench,
  Newspaper,
  Handshake,
  TrendingUp,
  Mail,
  Image as ImageIcon,
  Settings,
  Users,
  Lock,
  LogOut,
  Plus,
  Trash2,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  ShieldCheck,
  Copy,
  Check,
  Save,
} from "lucide-react";

type AdminModule =
  | "dashboard"
  | "ventures"
  | "projects"
  | "services"
  | "news"
  | "partnerships"
  | "investments"
  | "contacts"
  | "media"
  | "settings"
  | "users";

interface VentureRecord {
  id: string;
  name: string;
  category: string;
  status: "Live" | "In Development" | "Planned / R&D";
  description: string;
  url: string;
}

interface CaseStudyRecord {
  id: string;
  title: string;
  category: string;
  status: "Live" | "In Development" | "R&D";
  problem: string;
  solution: string;
  techStack: string;
}

interface ServiceRecord {
  id: string;
  title: string;
  description: string;
  deliverables: string;
}

interface ArticleRecord {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

interface EnquiryRecord {
  id: string;
  type: "Contact" | "Partnership" | "Investment";
  department: string;
  name: string;
  email: string;
  message: string;
  date: string;
  status: "New" | "In Review" | "Resolved";
}

interface ActivityLog {
  id: string;
  action: string;
  actor: string;
  timestamp: string;
}

const DEFAULT_VENTURES: VentureRecord[] = [
  {
    id: "v1",
    name: "Receipta",
    category: "Fintech / SaaS",
    status: "Live",
    description: "Digital receipts and merchant billing infrastructure.",
    url: "/#work",
  },
  {
    id: "v2",
    name: "Africommerce",
    category: "E-commerce",
    status: "Live",
    description: "E-commerce infrastructure for African businesses.",
    url: "/#work",
  },
  {
    id: "v3",
    name: "BizRep",
    category: "Business Technology",
    status: "In Development",
    description:
      "Business intelligence, business reputation and digital business management.",
    url: "/#contact",
  },
  {
    id: "v4",
    name: "Velo Pulse",
    category: "Media",
    status: "Live",
    description: "Digital journalism, news and lifestyle media.",
    url: "/#work",
  },
  {
    id: "v5",
    name: "Football Intelligence",
    category: "Sports Technology",
    status: "Planned / R&D",
    description:
      "Football analysis, intelligence and sports technology (Become A Legend).",
    url: "/projects/become-a-legend",
  },
];

const DEFAULT_PROJECTS: CaseStudyRecord[] = [
  {
    id: "p1",
    title: "Receipta",
    category: "Fintech / Billing SaaS",
    status: "Live",
    problem: "SMEs lose track of paper receipts and manual invoices.",
    solution: "Instant digital receipt generation and billing dashboard.",
    techStack: "Next.js, TypeScript, Tailwind CSS, Supabase",
  },
  {
    id: "p2",
    title: "CatalogPal",
    category: "Merchant Tools",
    status: "Live",
    problem: "Social vendors struggle to share structured product catalogs.",
    solution: "Interactive digital catalogs with direct WhatsApp order routing.",
    techStack: "Next.js, React, Tailwind CSS, Supabase",
  },
  {
    id: "p3",
    title: "Africommerce",
    category: "E-Commerce Infrastructure",
    status: "Live",
    problem: "High technical barriers to launching African online stores.",
    solution: "Multi-tenant storefront builder tailored for local commerce.",
    techStack: "Next.js, Node.js, PostgreSQL, Tailwind CSS",
  },
  {
    id: "p4",
    title: "Become A Legend",
    category: "Sports Technology R&D",
    status: "R&D",
    problem: "Lack of tactical grassroots-to-pro football career simulations.",
    solution: "2D top-down tactical football management & career engine.",
    techStack: "Next.js, HTML5 Canvas, TypeScript",
  },
];

const DEFAULT_SERVICES: ServiceRecord[] = [
  {
    id: "s1",
    title: "Software Development",
    description: "Web applications, mobile applications and SaaS platforms.",
    deliverables: "Custom Web Apps, Mobile Apps, Multi-Tenant SaaS, APIs",
  },
  {
    id: "s2",
    title: "E-commerce Infrastructure",
    description: "Online stores, merchant tools and digital commerce solutions.",
    deliverables: "Storefronts, Inventory Catalogs, Payment Flows",
  },
  {
    id: "s3",
    title: "Business Automation",
    description: "Digital workflows, business management and operational systems.",
    deliverables: "Automated Billing, Operations Dashboards, CRM Workflows",
  },
  {
    id: "s4",
    title: "Digital Transformation",
    description: "Helping businesses transition into digital operations.",
    deliverables: "Legacy Modernization, Cloud Onboarding, Customer Portals",
  },
  {
    id: "s5",
    title: "Technology Consulting",
    description: "Technical strategy, product development and system architecture.",
    deliverables: "System Architecture, Product Roadmaps, CTO Advisory",
  },
  {
    id: "s6",
    title: "SEO & Digital Growth",
    description:
      "Search engine optimisation, digital visibility and growth strategies.",
    deliverables: "Technical SEO, Core Web Vitals, Conversion Architecture",
  },
];

const DEFAULT_ARTICLES: ArticleRecord[] = [
  {
    id: "a1",
    title:
      "Strengthening Nexora Group's Three Core Pillars: Technology, Ventures & Partnerships",
    category: "Company Announcements",
    author: "Muiz Ayolola Omoyele",
    date: "Nov 2026",
    image: "/hero-image.jpg",
    summary:
      "How we structure our engineering capabilities, proprietary software ventures, and institutional alliances.",
    content:
      "Nexora Group operates across three distinct identities: Technology, Ventures, and Partnerships...",
  },
  {
    id: "a2",
    title: "Empowering Modern Merchants with Receipta and Africommerce",
    category: "Product Launches",
    author: "Nexora Product Team",
    date: "Oct 2026",
    image: "/projects/receipta.jpg",
    summary:
      "Delivering instant digital invoicing, smart receipt generation, and online storefronts.",
    content:
      "With Receipta and Africommerce, merchants can generate verifiable digital receipts in seconds...",
  },
];

const DEFAULT_ENQUIRIES: EnquiryRecord[] = [
  {
    id: "e1",
    type: "Partnership",
    department: "Strategic Partners",
    name: "Adebayo Commercial Group",
    email: "alliances@adebayogroup.ng",
    message:
      "Interested in deploying Receipta and CatalogPal across our retail merchant network in South-West Nigeria.",
    date: "2026-11-17",
    status: "New",
  },
  {
    id: "e2",
    type: "Investment",
    department: "Investment Enquiries",
    name: "Sahel Venture Partners",
    email: "deals@sahelvc.com",
    message:
      "Requesting an introductory call regarding Africommerce and BizRep product traction.",
    date: "2026-11-16",
    status: "In Review",
  },
  {
    id: "e3",
    type: "Contact",
    department: "Project Requests",
    name: "Klasick Media Hub",
    email: "ops@klasickmedia.com",
    message:
      "Looking to book Nexora Group for a custom event & ticketing web platform.",
    date: "2026-11-15",
    status: "Resolved",
  },
];

const INITIAL_MEDIA = [
  { name: "Nexora Corporate Logo", path: "/nexora-logo.png", type: "Brand Logo" },
  { name: "Hero Infrastructure Banner", path: "/hero-image.jpg", type: "Hero Asset" },
  { name: "Founder Executive Portrait", path: "/founder.jpg", type: "Leadership" },
  { name: "Africommerce Preview", path: "/projects/africommerce.jpg", type: "Venture" },
  { name: "Receipta Preview", path: "/projects/receipta.jpg", type: "Venture" },
  { name: "CatalogPal Preview", path: "/projects/catalogpal.jpg", type: "Product" },
  { name: "Velo Pulse Preview", path: "/projects/velopulse.jpg", type: "Media" },
  { name: "Creator Unite Preview", path: "/projects/creatorunite.jpg", type: "Product" },
  { name: "ProfitPal / BizRep Preview", path: "/projects/profitpal.jpg", type: "Venture" },
];

export default function NexoraAdminDashboard() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeModule, setActiveModule] = useState<AdminModule>("dashboard");

  // CMS State Modules
  const [ventures, setVentures] = useState<VentureRecord[]>(DEFAULT_VENTURES);
  const [projects, setProjects] = useState<CaseStudyRecord[]>(DEFAULT_PROJECTS);
  const [services, setServices] = useState<ServiceRecord[]>(DEFAULT_SERVICES);
  const [articles, setArticles] = useState<ArticleRecord[]>(DEFAULT_ARTICLES);
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>(DEFAULT_ENQUIRIES);
  const [mediaAssets, setMediaAssets] = useState(INITIAL_MEDIA);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  // Site & SEO Settings
  const [siteSettings, setSiteSettings] = useState({
    heroHeadline: "Building the digital backbone. Scaling African ventures.",
    seoTitle: "Nexora Group | Technology Holding & Venture Studio",
    seoDescription:
      "Nexora Group builds, operates, and scales technology-driven businesses across fintech, e-commerce, digital media, and sports intelligence.",
    centralEmail: "magkk.muizomoyele@gmail.com",
    whatsappNumber: "2349073754047",
    donorCampaignUrl: "https://buymeamalt.com/@becomealegend",
  });
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Activity Log
  const [logs, setLogs] = useState<ActivityLog[]>([
    {
      id: "l1",
      action: "System initialized with Nexora Group 14-section blueprint",
      actor: "Muiz Ayolola Omoyele (Founder & Group Executive)",
      timestamp: "2026-11-18 05:30 WAT",
    },
  ]);

  // New Venture Form State
  const [newVenture, setNewVenture] = useState({
    name: "",
    category: "Fintech / SaaS",
    status: "In Development" as VentureRecord["status"],
    description: "",
    url: "/#work",
  });

  // New Article Form State
  const [newArticle, setNewArticle] = useState({
    title: "",
    category: "Company Announcements",
    author: "Muiz Ayolola Omoyele",
    image: "/hero-image.jpg",
    summary: "",
    content: "",
  });

  // New Case Study Project Form State
  const [newProject, setNewProject] = useState({
    title: "",
    category: "Enterprise SaaS",
    status: "In Development" as CaseStudyRecord["status"],
    problem: "",
    solution: "",
    techStack: "Next.js, TypeScript, Tailwind CSS, Supabase",
  });

  // New Media Asset Form State
  const [newMedia, setNewMedia] = useState({
    name: "",
    path: "/projects/",
    type: "Venture",
  });

  // Hydrate persisted state from localStorage on client mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("nexora_admin_auth");
    if (savedAuth === "true") setIsAuthenticated(true);

    const savedVentures = localStorage.getItem("nexora_cms_ventures");
    if (savedVentures) setVentures(JSON.parse(savedVentures));

    const savedArticles = localStorage.getItem("nexora_cms_articles");
    if (savedArticles) setArticles(JSON.parse(savedArticles));

    const savedProjects = localStorage.getItem("nexora_cms_projects");
    if (savedProjects) setProjects(JSON.parse(savedProjects));

    const savedEnquiries = localStorage.getItem("nexora_cms_enquiries");
    if (savedEnquiries) setEnquiries(JSON.parse(savedEnquiries));
  }, []);

  const recordLog = (action: string) => {
    const nowStr = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date());

    setLogs((prev) => [
      {
        id: `log-${Date.now()}`,
        action,
        actor: "Founder & Group Executive",
        timestamp: nowStr,
      },
      ...prev,
    ]);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const expected =
      process.env.NEXT_PUBLIC_ADMIN_PASSCODE || "NEXORA-ADMIN-2026";
    if (passcode.trim() === expected) {
      setIsAuthenticated(true);
      sessionStorage.setItem("nexora_admin_auth", "true");
      setAuthError("");
      recordLog("Administrator signed in to Nexora Control Center");
    } else {
      setAuthError("Invalid administrator passcode. Try NEXORA-ADMIN-2026");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("nexora_admin_auth");
  };

  // Venture CRUD
  const handleAddVenture = (e: React.FormEvent) => {
    e.preventDefault();
    const created: VentureRecord = {
      id: `v-${Date.now()}`,
      ...newVenture,
    };
    const updated = [...ventures, created];
    setVentures(updated);
    localStorage.setItem("nexora_cms_ventures", JSON.stringify(updated));
    recordLog(`Added venture: ${created.name} (${created.status})`);
    setNewVenture({
      name: "",
      category: "Fintech / SaaS",
      status: "In Development",
      description: "",
      url: "/#work",
    });
  };

  const handleToggleVentureStatus = (id: string) => {
    const order: VentureRecord["status"][] = [
      "Live",
      "In Development",
      "Planned / R&D",
    ];
    const updated = ventures.map((v) => {
      if (v.id !== id) return v;
      const nextStatus = order[(order.indexOf(v.status) + 1) % order.length];
      recordLog(`Updated ${v.name} status to ${nextStatus}`);
      return { ...v, status: nextStatus };
    });
    setVentures(updated);
    localStorage.setItem("nexora_cms_ventures", JSON.stringify(updated));
  };

  const handleDeleteVenture = (id: string, name: string) => {
    const updated = ventures.filter((v) => v.id !== id);
    setVentures(updated);
    localStorage.setItem("nexora_cms_ventures", JSON.stringify(updated));
    recordLog(`Removed venture: ${name}`);
  };

  // Article CRUD
  const handlePublishArticle = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = new Intl.DateTimeFormat("en-GB", {
      month: "short",
      year: "numeric",
    }).format(new Date());

    const created: ArticleRecord = {
      id: `art-${Date.now()}`,
      date: dateStr,
      ...newArticle,
    };
    const updated = [created, ...articles];
    setArticles(updated);
    localStorage.setItem("nexora_cms_articles", JSON.stringify(updated));
    recordLog(`Published article: "${created.title}" in ${created.category}`);
    setNewArticle({
      title: "",
      category: "Company Announcements",
      author: "Muiz Ayolola Omoyele",
      image: "/hero-image.jpg",
      summary: "",
      content: "",
    });
  };

  const handleDeleteArticle = (id: string, title: string) => {
    const updated = articles.filter((a) => a.id !== id);
    setArticles(updated);
    localStorage.setItem("nexora_cms_articles", JSON.stringify(updated));
    recordLog(`Deleted article: "${title}"`);
  };

  // Case Study CRUD
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    const created: CaseStudyRecord = {
      id: `proj-${Date.now()}`,
      ...newProject,
    };
    const updated = [...projects, created];
    setProjects(updated);
    localStorage.setItem("nexora_cms_projects", JSON.stringify(updated));
    recordLog(`Added technical case study: ${created.title}`);
    setNewProject({
      title: "",
      category: "Enterprise SaaS",
      status: "In Development",
      problem: "",
      solution: "",
      techStack: "Next.js, TypeScript, Tailwind CSS, Supabase",
    });
  };

  // Enquiry Status Toggle
  const handleCycleEnquiryStatus = (id: string) => {
    const statuses: EnquiryRecord["status"][] = [
      "New",
      "In Review",
      "Resolved",
    ];
    const updated = enquiries.map((enq) => {
      if (enq.id !== id) return enq;
      const next = statuses[(statuses.indexOf(enq.status) + 1) % statuses.length];
      recordLog(`Marked enquiry from ${enq.name} as ${next}`);
      return { ...enq, status: next };
    });
    setEnquiries(updated);
    localStorage.setItem("nexora_cms_enquiries", JSON.stringify(updated));
  };

  // Gate Screen if not signed in
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#FFFDF5]">
        <div className="nb-card w-full max-w-md bg-white p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] p-1">
                <Image
                  src="/nexora-logo.png"
                  alt="Nexora Group"
                  width={34}
                  height={34}
                  className="object-contain rounded-full bg-white"
                />
              </div>
              <div>
                <h1 className="text-lg font-black text-[#1E1B2E]">
                  Nexora Control Center
                </h1>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#3E735E]">
                  Executive Administration
                </p>
              </div>
            </div>
            <Lock className="h-5 w-5 text-[#1E1B2E]" />
          </div>

          <p className="text-xs font-medium text-[#5A5868] leading-relaxed">
            Enter your administrator passcode to manage Nexora Group ventures, technical case studies, Inside Nexora articles, and incoming partner enquiries.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold uppercase text-[#1E1B2E] mb-1.5">
                Administrator Passcode
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (NEXORA-ADMIN-2026)"
                className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-bold text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
              />
            </div>

            {authError && (
              <p className="rounded-xl border-2 border-[#1E1B2E] bg-[#FEF0B6] px-3 py-2 text-xs font-extrabold text-[#E5484D]">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="nb-btn-primary w-full text-sm py-3 cursor-pointer"
            >
              <span>Unlock Administration Portal</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>

          <div className="pt-3 border-t-2 border-[#1E1B2E] flex items-center justify-between text-xs font-extrabold">
            <Link href="/" className="text-[#3E735E] hover:underline">
              ← Return to Public Website
            </Link>
            <span className="text-[#5A5868]">Role: Founder / Super Admin</span>
          </div>
        </div>
      </div>
    );
  }

  const NAV_MODULES: {
    id: AdminModule;
    label: string;
    icon: React.ElementType;
    count?: number;
  }[] = [
    { id: "dashboard", label: "01 · Overview", icon: LayoutDashboard },
    {
      id: "ventures",
      label: "02 · Venture Management",
      icon: Rocket,
      count: ventures.length,
    },
    {
      id: "projects",
      label: "03 · Tech Case Studies",
      icon: Layers,
      count: projects.length,
    },
    {
      id: "services",
      label: "04 · Services & Pillars",
      icon: Wrench,
      count: services.length,
    },
    {
      id: "news",
      label: "05 · News & Insights",
      icon: Newspaper,
      count: articles.length,
    },
    {
      id: "partnerships",
      label: "06 · Partnerships",
      icon: Handshake,
      count: enquiries.filter((e) => e.type === "Partnership").length,
    },
    {
      id: "investments",
      label: "07 · Investment Enquiries",
      icon: TrendingUp,
      count: enquiries.filter((e) => e.type === "Investment").length,
    },
    {
      id: "contacts",
      label: "08 · Contact Enquiries",
      icon: Mail,
      count: enquiries.length,
    },
    {
      id: "media",
      label: "09 · Media Library",
      icon: ImageIcon,
      count: mediaAssets.length,
    },
    { id: "settings", label: "10 · Website & SEO", icon: Settings },
    { id: "users", label: "11 · User Management", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#1E1B2E]">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 border-b-2 border-[#1E1B2E] bg-white px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] p-0.5">
              <Image
                src="/nexora-logo.png"
                alt="Nexora Admin"
                width={32}
                height={32}
                className="object-contain rounded-full bg-white"
              />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black text-[#1E1B2E] block leading-none">
                Nexora Group · Admin CMS
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#3E735E]">
                Authenticated: Muiz Ayolola Omoyele (Super Admin)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] px-4 py-1.5 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#F7D147]"
            >
              View Live Site ↗
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-white px-3.5 py-1.5 text-xs font-extrabold text-[#E5484D] shadow-[0_2px_0_0_#1E1B2E] hover:bg-[#FFFDF5] cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout: Sidebar + Active Module Canvas */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 3 Cols: 11 Blueprint Modules Navigation */}
        <aside className="lg:col-span-3 nb-card bg-white p-4 space-y-1.5">
          <p className="px-2 pb-2 text-[10px] font-black uppercase tracking-widest text-[#3E735E]">
            Administration Modules
          </p>
          {NAV_MODULES.map((mod) => {
            const Icon = mod.icon;
            const active = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => setActiveModule(mod.id)}
                className={`w-full flex items-center justify-between rounded-xl border-2 px-3 py-2.5 text-left text-xs font-extrabold transition cursor-pointer ${
                  active
                    ? "border-[#1E1B2E] bg-[#F7D147] text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E]"
                    : "border-transparent bg-transparent text-[#4A4857] hover:border-[#1E1B2E] hover:bg-[#FFFDF5]"
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  <Icon className="h-4 w-4 shrink-0 text-[#1E1B2E]" />
                  <span className="truncate">{mod.label}</span>
                </span>
                {typeof mod.count === "number" && (
                  <span className="rounded-full border border-[#1E1B2E] bg-white px-2 py-0.2 text-[10px] font-black text-[#1E1B2E]">
                    {mod.count}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Right 9 Cols: Active Module Workspace */}
        <main className="lg:col-span-9 space-y-6">
          {/* MODULE 01: OVERVIEW DASHBOARD & ACTIVITY LOGS */}
          {activeModule === "dashboard" && (
            <div className="space-y-6">
              <div className="nb-card bg-[#FEF0B6] p-6">
                <h2 className="text-2xl font-black text-[#1E1B2E]">
                  Executive Overview &amp; System Health
                </h2>
                <p className="text-xs sm:text-sm font-medium text-[#4A4857] mt-1">
                  Monitor Nexora Group ventures, published insights, incoming partner proposals, and administration activity logs.
                </p>

                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="rounded-xl border-2 border-[#1E1B2E] bg-white p-4">
                    <span className="text-[11px] font-extrabold uppercase text-[#5A5868]">
                      Active Ventures
                    </span>
                    <p className="text-3xl font-black text-[#1E1B2E] mt-1">
                      {ventures.length}
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-[#1E1B2E] bg-white p-4">
                    <span className="text-[11px] font-extrabold uppercase text-[#5A5868]">
                      Case Studies
                    </span>
                    <p className="text-3xl font-black text-[#1E1B2E] mt-1">
                      {projects.length}
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-[#1E1B2E] bg-white p-4">
                    <span className="text-[11px] font-extrabold uppercase text-[#5A5868]">
                      Published News
                    </span>
                    <p className="text-3xl font-black text-[#3E735E] mt-1">
                      {articles.length}
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-[#1E1B2E] bg-white p-4">
                    <span className="text-[11px] font-extrabold uppercase text-[#5A5868]">
                      Total Enquiries
                    </span>
                    <p className="text-3xl font-black text-[#1E1B2E] mt-1">
                      {enquiries.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Activity Logs */}
              <div className="nb-card bg-white p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-[#3E735E]" />
                    <h3 className="text-lg font-black text-[#1E1B2E]">
                      Recent Administration Activity Logs
                    </h3>
                  </div>
                  <span className="rounded-full border border-[#1E1B2E] bg-[#E8F8F0] px-3 py-0.5 text-[11px] font-extrabold text-[#1E1B2E]">
                    Audit Trail Active
                  </span>
                </div>

                <div className="divide-y-2 divide-[#1E1B2E] border-2 border-[#1E1B2E] rounded-xl overflow-hidden">
                  {logs.map((log) => (
                    <div
                      key={log.id}
                      className="p-3.5 bg-[#FFFDF5] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    >
                      <span className="font-extrabold text-[#1E1B2E]">
                        {log.action}
                      </span>
                      <span className="font-bold text-[#5A5868]">
                        {log.actor} · {log.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MODULE 02: VENTURE MANAGEMENT */}
          {activeModule === "ventures" && (
            <div className="space-y-6">
              <div className="nb-card bg-white p-6 space-y-4">
                <h2 className="text-xl font-black text-[#1E1B2E]">
                  Add New Nexora Venture
                </h2>
                <form onSubmit={handleAddVenture} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      required
                      value={newVenture.name}
                      onChange={(e) =>
                        setNewVenture({ ...newVenture, name: e.target.value })
                      }
                      placeholder="Venture Name (e.g. PayNexora)"
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2 text-xs font-bold"
                    />
                    <input
                      type="text"
                      required
                      value={newVenture.category}
                      onChange={(e) =>
                        setNewVenture({
                          ...newVenture,
                          category: e.target.value,
                        })
                      }
                      placeholder="Category (e.g. Fintech / SaaS)"
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2 text-xs font-bold"
                    />
                    <select
                      value={newVenture.status}
                      onChange={(e) =>
                        setNewVenture({
                          ...newVenture,
                          status: e.target.value as VentureRecord["status"],
                        })
                      }
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2 text-xs font-bold"
                    >
                      <option value="Live">Live</option>
                      <option value="In Development">In Development</option>
                      <option value="Planned / R&D">Planned / R&D</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    required
                    value={newVenture.description}
                    onChange={(e) =>
                      setNewVenture({
                        ...newVenture,
                        description: e.target.value,
                      })
                    }
                    placeholder="Short venture description..."
                    className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2 text-xs font-medium"
                  />
                  <button
                    type="submit"
                    className="nb-btn-primary text-xs px-5 py-2.5 cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Venture to Ecosystem</span>
                  </button>
                </form>
              </div>

              <div className="nb-card bg-white p-6 space-y-4">
                <h3 className="text-lg font-black text-[#1E1B2E]">
                  Existing Ventures (Click Status Pill to Cycle Stage)
                </h3>
                <div className="space-y-3">
                  {ventures.map((v) => (
                    <div
                      key={v.id}
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-black text-[#1E1B2E]">
                            {v.name}
                          </span>
                          <span className="rounded-full border border-[#1E1B2E] bg-white px-2.5 py-0.5 text-[10px] font-extrabold text-[#3E735E]">
                            {v.category}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-[#4A4857] mt-1">
                          {v.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleToggleVentureStatus(v.id)}
                          className="rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3.5 py-1 text-xs font-extrabold text-[#1E1B2E] shadow-[0_2px_0_0_#1E1B2E] cursor-pointer"
                        >
                          {v.status} ↻
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteVenture(v.id, v.name)}
                          className="nb-icon-circle h-8 w-8 text-[#E5484D] cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MODULE 03: PROJECT & CASE STUDY MANAGEMENT */}
          {activeModule === "projects" && (
            <div className="space-y-6">
              <div className="nb-card bg-white p-6 space-y-4">
                <h2 className="text-xl font-black text-[#1E1B2E]">
                  Add Technology Case Study
                </h2>
                <form onSubmit={handleAddProject} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      value={newProject.title}
                      onChange={(e) =>
                        setNewProject({ ...newProject, title: e.target.value })
                      }
                      placeholder="Project Name"
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-bold"
                    />
                    <input
                      type="text"
                      required
                      value={newProject.category}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          category: e.target.value,
                        })
                      }
                      placeholder="Category"
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-bold"
                    />
                    <input
                      type="text"
                      required
                      value={newProject.techStack}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          techStack: e.target.value,
                        })
                      }
                      placeholder="Technologies (comma separated)"
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-bold"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <textarea
                      rows={2}
                      required
                      value={newProject.problem}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          problem: e.target.value,
                        })
                      }
                      placeholder="Problem it solves..."
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-medium"
                    />
                    <textarea
                      rows={2}
                      required
                      value={newProject.solution}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          solution: e.target.value,
                        })
                      }
                      placeholder="Solution delivered..."
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    className="nb-btn-primary text-xs px-5 py-2.5 cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Save Technical Case Study</span>
                  </button>
                </form>
              </div>

              <div className="nb-card bg-white p-6 space-y-3">
                <h3 className="text-lg font-black text-[#1E1B2E]">
                  Active Technology Showcase Projects
                </h3>
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] p-4 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-black text-[#1E1B2E]">
                        {p.title} ({p.category})
                      </span>
                      <span className="rounded-full border border-[#1E1B2E] bg-[#98E2C6] px-2.5 py-0.5 text-[10px] font-extrabold">
                        {p.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#4A4857]">
                      <strong>Problem:</strong> {p.problem}
                    </p>
                    <p className="text-xs text-[#3E735E]">
                      <strong>Solution:</strong> {p.solution}
                    </p>
                    <p className="text-[11px] font-bold text-[#1E1B2E]">
                      Tech Stack: {p.techStack}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 04: SERVICES MANAGEMENT */}
          {activeModule === "services" && (
            <div className="nb-card bg-white p-6 space-y-4">
              <h2 className="text-xl font-black text-[#1E1B2E]">
                Enterprise Capabilities &amp; Services (6 Pillars)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((srv) => (
                  <div
                    key={srv.id}
                    className="rounded-xl border-2 border-[#1E1B2E] bg-[#FEF0B6] p-4 space-y-2"
                  >
                    <h3 className="text-base font-black text-[#1E1B2E]">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-medium text-[#4A4857]">
                      {srv.description}
                    </p>
                    <p className="text-[11px] font-extrabold text-[#3E735E]">
                      Deliverables: {srv.deliverables}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 05: NEWS & INSIGHTS PUBLISHER */}
          {activeModule === "news" && (
            <div className="space-y-6">
              <div className="nb-card bg-white p-6 space-y-4">
                <h2 className="text-xl font-black text-[#1E1B2E]">
                  Publish Article to &ldquo;Inside Nexora&rdquo;
                </h2>
                <form onSubmit={handlePublishArticle} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      value={newArticle.title}
                      onChange={(e) =>
                        setNewArticle({ ...newArticle, title: e.target.value })
                      }
                      placeholder="Article Headline"
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-bold"
                    />
                    <select
                      value={newArticle.category}
                      onChange={(e) =>
                        setNewArticle({
                          ...newArticle,
                          category: e.target.value,
                        })
                      }
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-bold"
                    >
                      <option value="Company Announcements">
                        Company Announcements
                      </option>
                      <option value="Product Launches">Product Launches</option>
                      <option value="Technology & Innovation">
                        Technology &amp; Innovation
                      </option>
                      <option value="Venture Updates">Venture Updates</option>
                      <option value="Partnerships">Partnerships</option>
                      <option value="Industry Insights">
                        Industry Insights
                      </option>
                    </select>
                    <input
                      type="text"
                      required
                      value={newArticle.author}
                      onChange={(e) =>
                        setNewArticle({ ...newArticle, author: e.target.value })
                      }
                      placeholder="Author Name"
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-bold"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    value={newArticle.summary}
                    onChange={(e) =>
                      setNewArticle({ ...newArticle, summary: e.target.value })
                    }
                    placeholder="Short 1-2 sentence executive summary..."
                    className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-medium"
                  />
                  <textarea
                    rows={4}
                    required
                    value={newArticle.content}
                    onChange={(e) =>
                      setNewArticle({ ...newArticle, content: e.target.value })
                    }
                    placeholder="Full article body..."
                    className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-medium"
                  />
                  <button
                    type="submit"
                    className="nb-btn-primary text-xs px-5 py-2.5 cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Publish Article</span>
                  </button>
                </form>
              </div>

              <div className="nb-card bg-white p-6 space-y-3">
                <h3 className="text-lg font-black text-[#1E1B2E]">
                  Published Articles ({articles.length})
                </h3>
                {articles.map((art) => (
                  <div
                    key={art.id}
                    className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] p-4 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase text-[#3E735E]">
                        {art.category} · {art.date} · By {art.author}
                      </span>
                      <h4 className="text-sm font-black text-[#1E1B2E] mt-0.5">
                        {art.title}
                      </h4>
                      <p className="text-xs text-[#5A5868] mt-1">
                        {art.summary}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteArticle(art.id, art.title)}
                      className="nb-icon-circle h-8 w-8 text-[#E5484D] shrink-0 cursor-pointer"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULES 06, 07, 08: PARTNERSHIPS, INVESTMENTS & CONTACT ENQUIRIES */}
          {(activeModule === "partnerships" ||
            activeModule === "investments" ||
            activeModule === "contacts") && (
            <div className="nb-card bg-white p-6 space-y-4">
              <h2 className="text-xl font-black text-[#1E1B2E]">
                {activeModule === "partnerships"
                  ? "Strategic & Technology Partnership Submissions"
                  : activeModule === "investments"
                  ? "Venture Investment & Capital Enquiries"
                  : "All Categorized Department Enquiries"}
              </h2>

              <div className="space-y-3">
                {enquiries
                  .filter((e) =>
                    activeModule === "partnerships"
                      ? e.type === "Partnership"
                      : activeModule === "investments"
                      ? e.type === "Investment"
                      : true
                  )
                  .map((enq) => (
                    <div
                      key={enq.id}
                      className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] p-4 space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="rounded-full border border-[#1E1B2E] bg-[#FEF0B6] px-2.5 py-0.5 text-[10px] font-black uppercase">
                            {enq.department}
                          </span>
                          <h3 className="text-base font-black text-[#1E1B2E] mt-1">
                            {enq.name} ({enq.email})
                          </h3>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleCycleEnquiryStatus(enq.id)}
                            className="rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-3 py-1 text-xs font-extrabold text-[#1E1B2E] cursor-pointer"
                          >
                            Status: {enq.status} ↻
                          </button>
                          <a
                            href={`mailto:${enq.email}?subject=Re:%20Nexora%20Group%20-%20${encodeURIComponent(
                              enq.department
                            )}`}
                            className="rounded-full border-2 border-[#1E1B2E] bg-[#F7D147] px-3 py-1 text-xs font-extrabold text-[#1E1B2E]"
                          >
                            Reply ↗
                          </a>
                        </div>
                      </div>
                      <p className="text-xs font-medium text-[#4A4857]">
                        {enq.message}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* MODULE 09: MEDIA LIBRARY */}
          {activeModule === "media" && (
            <div className="space-y-6">
              <div className="nb-card bg-white p-6 space-y-4">
                <h2 className="text-xl font-black text-[#1E1B2E]">
                  Register Media Asset in Library
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setMediaAssets([...mediaAssets, newMedia]);
                    recordLog(`Registered media asset: ${newMedia.path}`);
                    setNewMedia({ name: "", path: "/projects/", type: "Venture" });
                  }}
                  className="grid grid-cols-1 sm:grid-cols-4 gap-3"
                >
                  <input
                    type="text"
                    required
                    value={newMedia.name}
                    onChange={(e) =>
                      setNewMedia({ ...newMedia, name: e.target.value })
                    }
                    placeholder="Asset Title"
                    className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-bold"
                  />
                  <input
                    type="text"
                    required
                    value={newMedia.path}
                    onChange={(e) =>
                      setNewMedia({ ...newMedia, path: e.target.value })
                    }
                    placeholder="/projects/file.jpg"
                    className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-bold"
                  />
                  <input
                    type="text"
                    required
                    value={newMedia.type}
                    onChange={(e) =>
                      setNewMedia({ ...newMedia, type: e.target.value })
                    }
                    placeholder="Category"
                    className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3 py-2 text-xs font-bold"
                  />
                  <button
                    type="submit"
                    className="nb-btn-primary text-xs py-2 cursor-pointer"
                  >
                    <span>Add Asset</span>
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mediaAssets.map((asset) => (
                  <div
                    key={asset.path}
                    className="nb-card bg-white p-4 flex flex-col justify-between space-y-3"
                  >
                    <div className="relative h-28 w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] overflow-hidden">
                      <Image
                        src={asset.path}
                        alt={asset.name}
                        fill
                        sizes="200px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-[#3E735E]">
                        {asset.type}
                      </span>
                      <h4 className="text-xs font-black text-[#1E1B2E]">
                        {asset.name}
                      </h4>
                      <p className="text-[11px] font-mono text-[#5A5868]">
                        {asset.path}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(asset.path);
                        setCopiedPath(asset.path);
                        setTimeout(() => setCopiedPath(null), 1500);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#FEF0B6] py-1.5 text-xs font-extrabold cursor-pointer"
                    >
                      {copiedPath === asset.path ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#3E735E]" />
                          <span>Path Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy Asset Path</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 10: WEBSITE & SEO SETTINGS */}
          {activeModule === "settings" && (
            <div className="nb-card bg-white p-6 space-y-5">
              <h2 className="text-xl font-black text-[#1E1B2E]">
                Homepage, SEO Metadata &amp; Routing Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase mb-1">
                    Homepage Hero Headline
                  </label>
                  <input
                    type="text"
                    value={siteSettings.heroHeadline}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        heroHeadline: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase mb-1">
                    Global SEO Title
                  </label>
                  <input
                    type="text"
                    value={siteSettings.seoTitle}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        seoTitle: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase mb-1">
                    Global SEO Meta Description
                  </label>
                  <textarea
                    rows={2}
                    value={siteSettings.seoDescription}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        seoDescription: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-medium"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase mb-1">
                      Central Resend Inbox
                    </label>
                    <input
                      type="email"
                      value={siteSettings.centralEmail}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          centralEmail: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold uppercase mb-1">
                      Donor Campaign Link
                    </label>
                    <input
                      type="text"
                      value={siteSettings.donorCampaignUrl}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          donorCampaignUrl: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] px-3.5 py-2.5 text-sm font-bold"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  {settingsSaved ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#3E735E]">
                      <CheckCircle2 className="h-4 w-4" /> Website settings saved!
                    </span>
                  ) : (
                    <span />
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.setItem(
                        "nexora_cms_settings",
                        JSON.stringify(siteSettings)
                      );
                      setSettingsSaved(true);
                      recordLog("Updated global SEO & homepage configuration");
                      setTimeout(() => setSettingsSaved(false), 2500);
                    }}
                    className="nb-btn-primary text-xs px-6 py-2.5 cursor-pointer"
                  >
                    <Save className="h-4 w-4" />
                    <span>Save Configuration</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 11: USER MANAGEMENT & PERMISSIONS */}
          {activeModule === "users" && (
            <div className="nb-card bg-white p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-[#1E1B2E]">
                    Administrators &amp; Role-Based Permissions
                  </h2>
                  <p className="text-xs font-medium text-[#5A5868]">
                    Manage access tiers across Nexora Group divisions.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-3 py-1 text-xs font-extrabold">
                  <ShieldCheck className="h-4 w-4" />
                  RBAC Active
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border-2 border-[#1E1B2E] bg-[#FEF0B6] p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-black text-[#1E1B2E]">
                      Muiz Ayolola Omoyele
                    </h3>
                    <p className="text-xs font-bold text-[#3E735E]">
                      Founder &amp; Group Executive · Full Super Admin Access
                    </p>
                  </div>
                  <span className="rounded-full border border-[#1E1B2E] bg-white px-3 py-0.5 text-xs font-black">
                    Owner
                  </span>
                </div>

                <div className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-black text-[#1E1B2E]">
                      Nexora Editorial Desk
                    </h3>
                    <p className="text-xs font-medium text-[#5A5868]">
                      Permissions: Inside Nexora News &amp; Media Library
                    </p>
                  </div>
                  <span className="rounded-full border border-[#1E1B2E] bg-[#EBF3F9] px-3 py-0.5 text-xs font-black">
                    Editor Role
                  </span>
                </div>

                <div className="rounded-xl border-2 border-[#1E1B2E] bg-[#FFFDF5] p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-black text-[#1E1B2E]">
                      Nexora Venture Operations
                    </h3>
                    <p className="text-xs font-medium text-[#5A5868]">
                      Permissions: Ventures, Tech Case Studies &amp; Department Enquiries
                    </p>
                  </div>
                  <span className="rounded-full border border-[#1E1B2E] bg-[#E8F8F0] px-3 py-0.5 text-xs font-black">
                    Operations Role
                  </span>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}