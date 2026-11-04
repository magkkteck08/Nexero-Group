// src/config/siteConfig.ts

export interface ServiceDivision {
  id: string;
  title: string;
  description: string;
  iconName: "Gamepad2" | "Landmark" | "TrendingUp" | "Compass";
  services: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  executiveHighlight: string;
  image?: string;
  techStack: string[];
  link: string;
  primaryCtaText: string;
  secondaryCta?: {
    label: string;
    href: string;
    badge?: string;
  };
  isExternal: boolean;
  status: "Live" | "Beta" | "In Development";
}

export interface VentureItem {
  id: string;
  title: string;
  description: string;
  status: "Active" | "Upcoming" | "In Development";
}

export interface ClockLocation {
  city: string;
  country: string;
  timeZone: string;
  isPrimary?: boolean;
}

export interface RoadmapMilestone {
  quarter: string;
  title: string;
  division: string;
  description: string;
  status: "Completed" | "In Progress" | "Open for Investment";
}

export const SITE_CONFIG = {
  name: "NEXORA GROUP",
  tagline: "Building Ideas. Developing Technology. Creating Opportunities.",
  description:
    "We develop digital products, create interactive experiences, provide technology solutions and help businesses grow through strategy and digital innovation.",
  url: "https://nexoragroup.com",
  contact: {
    email: "magkk.muizomoyele@gmail.com",
    whatsappNumber: "2349073754047",
    whatsappDisplay: "+234 907 375 4047",
    location: "Ibadan, Nigeria",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      github: "https://github.com/magkkteck08",
      instagram: "https://instagram.com",
    },
  },
};

export const OPERATIONAL_METRICS = [
  {
    value: "6+",
    label: "Proprietary Platforms",
    detail: "Live SaaS, media, e-commerce & gaming systems",
  },
  {
    value: "4",
    label: "Core Divisions",
    detail: "Gaming, Fintech SaaS, SEO Growth & Strategy",
  },
  {
    value: "99.9%",
    label: "Cloud Architecture",
    detail: "Modern serverless & edge deployment standards",
  },
  {
    value: "Global",
    label: "Operating Corridors",
    detail: "Synchronized across Nigeria, UK, USA & UAE",
  },
];

export const TECH_INFRASTRUCTURE = [
  "Next.js (App Router)",
  "TypeScript",
  "React",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "3D Gameplay Systems",
  "Technical SEO Architecture",
  "Vercel Edge Network",
  "Git / CI-CD",
];

export const FLAGSHIP_GAME_PROJECT = {
  title: "Become A Legend",
  subtitle: "Third-Person Football Career & Tactical Action Game",
  statusBadge: "In Active Development • Seeking Seed Investors & Partners",
  overview:
    "An immersive third-person football experience that puts the user directly in the boots of an aspiring footballer. Unlike traditional top-down team simulators, Become A Legend focuses on individual pitch awareness, third-person camera control, tactical positioning, grassroots-to-pro career progression, and high-stakes match moments.",
  keyPillars: [
    {
      title: "3rd-Person On-Pitch Control",
      detail:
        "Close-camera third-person perspective engineered for spatial awareness, defensive positioning, sprinting lanes, and precision ball striking.",
    },
    {
      title: "Grassroots to Global Stadiums",
      detail:
        "Authentic career mode taking players from local academy pitches and street tournaments to professional leagues and international arenas.",
    },
    {
      title: "Tactical & Decision Engine",
      detail:
        "Dynamic match rating system rewarding real football IQ—off-the-ball movement, defensive discipline, link-up play, and clutch execution.",
    },
    {
      title: "Scalable Monetization & Esports Ready",
      detail:
        "Built for cross-platform expansion with player customization, seasonal career passes, and competitive online pro-clubs integration.",
    },
  ],
  investmentGoals:
    "Currently open to angel investors, gaming venture funds, and 3D technical collaborators to accelerate core gameplay prototyping, motion asset pipelines, and playable alpha release.",
};

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    quarter: "Phase 1 • Live Ecosystem",
    title: "SaaS & Media Suite Deployment",
    division: "Fintech, E-Commerce & Media",
    description:
      "Production rollout of Receipta, CatalogPal, Africommerce, Velo Pulse, and Creator Unite across web and mobile channels.",
    status: "Completed",
  },
  {
    quarter: "Phase 2 • Current Focus",
    title: "Velo Pulse Writer Network & Merchant Scaling",
    division: "Digital Growth & Publishing",
    description:
      "Onboarding new sports, tech, and culture writers onto Velo Pulse while expanding merchant adoption on Receipta and CatalogPal.",
    status: "In Progress",
  },
  {
    quarter: "Phase 3 • Flagship Gaming R&D",
    title: "Become A Legend — Core Gameplay & Seed Round",
    division: "Gaming & Interactive Experiences",
    description:
      "Developing third-person football mechanics, player physics, and pitch AI while securing strategic capital and studio partners.",
    status: "Open for Investment",
  },
];

export const WORLD_CLOCK_LOCATIONS: ClockLocation[] = [
  {
    city: "Ibadan",
    country: "Nigeria",
    timeZone: "Africa/Lagos",
    isPrimary: true,
  },
  {
    city: "London",
    country: "United Kingdom",
    timeZone: "Europe/London",
  },
  {
    city: "New York",
    country: "USA",
    timeZone: "America/New_York",
  },
  {
    city: "Dubai",
    country: "UAE",
    timeZone: "Asia/Dubai",
  },
];

export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: "gaming",
    title: "Gaming & Interactive Experiences",
    description:
      "We explore and develop interactive digital experiences, gaming concepts and gameplay systems—headlined by our upcoming third-person football title, Become A Legend.",
    iconName: "Gamepad2",
    services: [
      "3rd-person game development",
      "Football & sports gameplay mechanics",
      "Game prototyping & systems design",
      "Interactive digital experiences",
    ],
  },
  {
    id: "fintech",
    title: "Fintech & Digital Products",
    description:
      "We design and develop digital products that simplify financial activities, merchant invoicing, and daily business operations.",
    iconName: "Landmark",
    services: [
      "Fintech & invoicing applications",
      "SaaS product development",
      "Digital payment & receipt solutions",
      "Business & catalogue platforms",
    ],
  },
  {
    id: "seo",
    title: "SEO & Digital Growth",
    description:
      "We help businesses improve their online visibility, website performance and search engine presence to drive sustainable organic traffic.",
    iconName: "TrendingUp",
    services: [
      "Technical SEO architecture",
      "On-page SEO & content systems",
      "Website speed & conversion optimisation",
      "Search visibility strategy",
    ],
  },
  {
    id: "consultation",
    title: "Consultation & Strategy",
    description:
      "We help individuals, founders, and businesses plan, evaluate and execute digital and technology-driven ideas across borders.",
    iconName: "Compass",
    services: [
      "Digital business consultation",
      "Product & MVP strategy",
      "CTO & technology advisory",
      "Digital transformation planning",
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "receipta",
    title: "Receipta",
    category: "Enterprise Digital Receipts & Business Invoicing SaaS",
    description:
      "A professional-grade financial documentation platform built for modern businesses, merchants, and service providers. Receipta replaces paper clutter with instant, branded, and verifiable digital receipts, automated client billing records, and audit-ready transaction histories.",
    executiveHighlight:
      "Solves merchant record-keeping friction and elevates brand trust with instant digital proof-of-payment.",
    image: "/projects/receipta.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    link: "https://receipta.cv",
    primaryCtaText: "Launch Receipta",
    isExternal: true,
    status: "Live",
  },
  {
    id: "catalogpal",
    title: "CatalogPal",
    category: "Smart Digital Product Catalogue & Merchant Showcase",
    description:
      "An intuitive commerce enablement tool that turns static product lists into interactive, shareable digital catalogues. Built for vendors and growing brands to organize inventory, update pricing in real time, and convert social or mobile traffic into direct customer orders.",
    executiveHighlight:
      "Empowers businesses to showcase full product lines via a single link without complex store setup.",
    image: "/projects/catalogpal.jpg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Cloud Storage"],
    link: "https://catalo-gpal.vercel.app",
    primaryCtaText: "Explore CatalogPal",
    isExternal: true,
    status: "Live",
  },
  {
    id: "velo-pulse",
    title: "Velo Pulse",
    category: "Digital News, Sports & Media Publishing Platform",
    description:
      "A high-speed digital newsroom and publishing platform delivering breaking stories, football analysis, tech updates, and cultural commentary. Engineered with instant search and mobile-first readability—and currently expanding its editorial desk with new writers and journalists.",
    executiveHighlight:
      "We are actively recruiting passionate writers, sports analysts, and contributors to publish on Velo Pulse.",
    image: "/projects/velopulse.jpg",
    techStack: ["Next.js", "Editorial CMS", "Technical SEO", "Tailwind CSS"],
    link: "https://velo-pulse.cv",
    primaryCtaText: "Read News on Velo Pulse",
    secondaryCta: {
      label: "Apply as a Writer",
      href: `https://wa.me/2349073754047?text=${encodeURIComponent(
        "Hello Nexora Group, I would like to apply as a writer/contributor for Velo Pulse (velo-pulse.cv)."
      )}`,
      badge: "Hiring Writers",
    },
    isExternal: true,
    status: "Live",
  },
  {
    id: "africommerce",
    title: "Africommerce",
    category: "E-Commerce & Multi-Vendor Storefront Builder",
    description:
      "Comprehensive digital commerce infrastructure built for African and international merchants to launch custom online storefronts, manage inventory, and scale digital retail operations.",
    executiveHighlight:
      "Bridges the gap between informal social selling and structured, scalable online storefronts.",
    image: "/projects/africommerce.jpg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    link: "https://africmm.cv",
    primaryCtaText: "Visit Africommerce",
    isExternal: true,
    status: "Live",
  },
  {
    id: "creator-unite",
    title: "Creator Unite",
    category: "Creator Community & Event Registration Platform",
    description:
      "Centralised ecosystem for digital creators, hosts, and community builders to coordinate flagship events, manage attendee registrations, and foster cross-industry partnerships.",
    executiveHighlight:
      "Streamlines event ticketing, community onboarding, and creator networking in one hub.",
    image: "/projects/creatorunite.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://x-creator-unite.com",
    primaryCtaText: "Visit Creator Unite",
    isExternal: true,
    status: "Live",
  },
  {
    id: "profitpal",
    title: "ProfitPal",
    category: "SME Business Management & Margin Tracking",
    description:
      "Operational clarity platform designed for business owners to track unit economics, monitor daily expenses, and calculate real-time net profitability without complex accounting software.",
    executiveHighlight:
      "Gives founders instant visibility into cash flow, cost of goods, and true net margins.",
    image: "/projects/profitpal.jpg",
    techStack: ["Next.js", "TypeScript", "Analytics UI"],
    link: "#contact",
    primaryCtaText: "Request Early Access",
    isExternal: false,
    status: "Beta",
  },
];

export const BUSINESS_VENTURES: VentureItem[] = [
  {
    id: "food-distribution",
    title: "Food Delivery & Foodstuff Distribution",
    description:
      "Supply chain coordination, bulk foodstuff sourcing, and dependable delivery logistics serving households and commercial buyers.",
    status: "Active",
  },
  {
    id: "general-merchandise",
    title: "General Merchandise",
    description:
      "Procurement and distribution of essential consumer goods, household products, and commercial supplies across local markets.",
    status: "Active",
  },
  {
    id: "product-sourcing",
    title: "Product Sourcing & Distribution",
    description:
      "Connecting verified manufacturers and wholesalers with retail channels through structured sourcing and fulfilment operations.",
    status: "In Development",
  },
  {
    id: "commercial-ecommerce",
    title: "E-Commerce & Commercial Opportunities",
    description:
      "Strategic investment and operational development in emerging retail, direct-to-consumer trade, and cross-sector ventures.",
    status: "Upcoming",
  },
];