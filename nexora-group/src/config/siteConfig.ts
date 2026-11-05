// src/config/siteConfig.ts

export interface ServiceDivision {
  id: string;
  title: string;
  description: string;
  iconName: "Gamepad2" | "Landmark" | "TrendingUp" | "Compass";
  services: string[];
}

export type PortfolioCategoryGroup =
  | "LIVE PRODUCTS"
  | "IN DEVELOPMENT"
  | "RESEARCH & DEVELOPMENT";

export interface PortfolioItem {
  id: string;
  title: string;
  group: PortfolioCategoryGroup;
  category: string;
  shortDescription: string;
  fullOverview: string;
  keyCapabilities: string[];
  logo?: string;
  image?: string;
  techStack: string[];
  visitUrl?: string;
  learnMoreUrl?: string; // If internal page like /projects/become-a-legend
  secondaryCta?: {
    label: string;
    href: string;
  };
  status: "Live" | "In Development" | "R&D";
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

export const SITE_CONFIG = {
  name: "NEXORA GROUP",
  tagline: "Building Ideas. Developing Technology. Creating Opportunities.",
  corporatePositioning:
    "Building Businesses. Developing Technology. Creating Opportunities.",
  description:
    "Nexora Group builds, develops, operates, and invests in technology platforms, interactive digital experiences, and commercial ventures designed to solve real-world problems.",
  url: "https://nexora-group.cv",
  emails: {
    general: "info@nexora-group.cv",
    partnerships: "partnerships@nexora-group.cv",
    support: "support@nexora-group.cv",
    founder: "founder@nexora-group.cv",
  },
  contact: {
    email: "info@nexora-group.cv",
    whatsappNumber: "2349073754047",
    whatsappDisplay: "+234 907 375 4047",
    location: "Ibadan, Oyo State, Nigeria",
    socials: {
      linkedin: "https://linkedin.com/in/muiz-omoyele",
      twitter: "https://x.com/idanmagkk",
      github: "https://github.com/magkkteck08",
      instagram: "https://instagram.com/idanmagkk",
    },
  },
  founder: {
    name: "Muiz Ayolola Omoyele",
    role: "Founder & Group Executive",
    image: "/founder.jpg",
    linkedin: "https://linkedin.com/in/muiz-omoyele",
    email: "founder@nexora-group.cv",
    visionQuote:
      "Founded on the belief that practical ideas, technology and strategic execution can create meaningful opportunities, Nexora Group is driven by a vision to build sustainable businesses and digital products that solve real-world problems.",
    summary:
      "Oversees group-wide corporate strategy, capital allocation, product architecture, and commercial operations across Nexora Group's technology, media, gaming, and physical distribution divisions.",
    responsibilities: [
      {
        division: "Corporate Strategy & Governance",
        detail:
          "Directs multi-sector venture development, strategic partnerships, and long-term commercial sustainability.",
      },
      {
        division: "Fintech & Digital Product Systems",
        detail:
          "Leads product architecture and lifecycle execution for Receipta, CatalogPal, Africommerce, and ProfitPal.",
      },
      {
        division: "Interactive Gaming & R&D",
        detail:
          "Spearheads gameplay systems design, technical direction, and studio partnerships for Become A Legend.",
      },
      {
        division: "Commercial & Supply Chain Ventures",
        detail:
          "Coordinates physical merchandise procurement, foodstuff distribution, and direct-to-market operations.",
      },
    ],
  },
};

// PRIORITY 1: Corrected, Verified Credibility Claims
export const OPERATIONAL_METRICS = [
  {
    value: "5+",
    label: "Digital Products & Platforms",
    detail: "Live software platforms across invoicing, commerce, and media",
  },
  {
    value: "4",
    label: "Core Business Divisions",
    detail: "Gaming, Fintech SaaS, Digital Growth, and Commercial Strategy",
  },
  {
    value: "Modern",
    label: "Cloud Infrastructure",
    detail: "Engineered with scalable web, database, and edge technologies",
  },
  {
    value: "Global",
    label: "International Reach",
    detail: "Serving clients, partners, and digital users across borders",
  },
];

export const WORLD_CLOCK_LOCATIONS: ClockLocation[] = [
  {
    city: "Ibadan",
    country: "Nigeria (Primary Base)",
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
    country: "United States",
    timeZone: "America/New_York",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    timeZone: "Asia/Dubai",
  },
];

export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: "fintech",
    title: "Fintech & Digital Products",
    description:
      "We build and operate proprietary SaaS platforms that simplify invoicing, merchant inventory, and daily business management.",
    iconName: "Landmark",
    services: [
      "Digital receipt & invoicing systems",
      "Interactive product catalogue tools",
      "Multi-vendor e-commerce platforms",
      "SME margin & expense tracking",
    ],
  },
  {
    id: "gaming",
    title: "Gaming & Interactive Experiences",
    description:
      "We research, prototype, and develop original interactive entertainment—headlined by our third-person football title, Become A Legend.",
    iconName: "Gamepad2",
    services: [
      "3rd-person sports game development",
      "Gameplay mechanics & tactical AI",
      "Interactive simulation prototyping",
      "Cross-platform game architecture",
    ],
  },
  {
    id: "seo",
    title: "SEO & Digital Growth",
    description:
      "We engineer search visibility systems, high-speed web architectures, and editorial media platforms that drive sustainable organic growth.",
    iconName: "TrendingUp",
    services: [
      "Technical SEO architecture",
      "Digital publishing & media systems",
      "Performance & conversion engineering",
      "Organic acquisition strategy",
    ],
  },
  {
    id: "consultation",
    title: "Consultation & Strategy",
    description:
      "We partner with founders, enterprises, and commercial operators to structure, validate, and execute technology-driven businesses.",
    iconName: "Compass",
    services: [
      "Product & MVP execution strategy",
      "Technology & architecture advisory",
      "Commercial venture structuring",
      "Digital transformation roadmaps",
    ],
  },
];

// PRIORITY 3: Three Distinct Portfolio Classifications
export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  // --- 1. LIVE PRODUCTS ---
  {
    id: "receipta",
    title: "Receipta",
    group: "LIVE PRODUCTS",
    category: "Digital Invoicing & Receipt Infrastructure",
    shortDescription:
      "Professional financial documentation tool enabling businesses to generate instant, verifiable digital receipts and track client billing.",
    fullOverview:
      "Receipta replaces manual paper booklets with a structured digital invoicing and receipt system for merchants, freelancers, and growing enterprises. Businesses can issue branded proof-of-payment in seconds and maintain searchable transaction records.",
    keyCapabilities: [
      "Instant branded digital receipt generation",
      "Centralized client billing & transaction history",
      "Shareable verification links via WhatsApp & Email",
      "Multi-business record organization",
    ],
    logo: "/projects/receipta.jpg",
    image: "/projects/receipta.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloud DB"],
    visitUrl: "https://receipta.cv",
    status: "Live",
  },
  {
    id: "catalogpal",
    title: "CatalogPal",
    group: "LIVE PRODUCTS",
    category: "Interactive Product Catalogue Platform",
    shortDescription:
      "Commerce enablement platform that transforms static inventory lists into shareable, mobile-ready digital product catalogues.",
    fullOverview:
      "CatalogPal helps vendors, wholesalers, and retail brands showcase their products cleanly through a single link. Merchants can update pricing and availability in real time while allowing customers to browse and enquire seamlessly.",
    keyCapabilities: [
      "Real-time product & price management",
      "Mobile-first visual catalogue layouts",
      "Direct customer order routing",
      "Zero-code merchant setup",
    ],
    logo: "/projects/catalogpal.jpg",
    image: "/projects/catalogpal.jpg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Cloud Storage"],
    visitUrl: "https://catalogpal.cv",
    status: "Live",
  },
  {
    id: "africommerce",
    title: "Africommerce",
    group: "LIVE PRODUCTS",
    category: "Multi-Vendor E-Commerce Storefront Builder",
    shortDescription:
      "Customizable web storefront infrastructure built for merchants to launch structured online stores and scale retail operations.",
    fullOverview:
      "Africommerce bridges the gap between informal social selling and structured e-commerce, providing merchants with dedicated storefronts, inventory controls, and customer order workflows.",
    keyCapabilities: [
      "Custom merchant storefront deployment",
      "Inventory & product variant management",
      "Integrated checkout & order tracking",
      "Responsive mobile shopping experience",
    ],
    logo: "/projects/africommerce.jpg",
    image: "/projects/africommerce.jpg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    visitUrl: "https://africmm.cv",
    status: "Live",
  },
  {
    id: "velo-pulse",
    title: "Velo Pulse",
    group: "LIVE PRODUCTS",
    category: "Digital News, Sports & Culture Publication",
    shortDescription:
      "Fast, modern editorial media platform covering news, business, technology, and sports—actively onboarding new writers and analysts.",
    fullOverview:
      "Velo Pulse is Nexora Group's digital publishing property engineered for mobile readability and search performance. Alongside daily coverage, Velo Pulse provides a platform for emerging journalists, football analysts, and industry contributors.",
    keyCapabilities: [
      "Multi-category editorial publishing (News, Business, Sports)",
      "High-speed reader experience & technical SEO",
      "Open contributor & writer onboarding program",
      "Syndication-ready article architecture",
    ],
    logo: "/projects/velopulse.jpg",
    image: "/projects/velopulse.jpg",
    techStack: ["Next.js", "Editorial CMS", "Technical SEO", "Tailwind CSS"],
    visitUrl: "https://velo-pulse.cv",
    secondaryCta: {
      label: "Apply as a Writer",
      href: "mailto:info@nexora-group.cv?subject=Writer%20Application%20for%20Velo%20Pulse",
    },
    status: "Live",
  },
  {
    id: "creator-unite",
    title: "Creator Unite",
    group: "LIVE PRODUCTS",
    category: "Creator Community & Event Platform",
    shortDescription:
      "Digital hub connecting creators, event hosts, and creative professionals for flagship industry gatherings and collaborations.",
    fullOverview:
      "Developed to support the creative ecosystem, Creator Unite streamlines event discovery, attendee registration, and community networking for digital creators and cultural initiatives.",
    keyCapabilities: [
      "Event showcase & attendee registration flow",
      "Creator community directory & updates",
      "Partner & sponsor visibility integration",
      "Mobile-optimized event pass management",
    ],
    logo: "/projects/creatorunite.jpg",
    image: "/projects/creatorunite.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    visitUrl: "https://x-creator-unite.com",
    status: "Live",
  },

  // --- 2. IN DEVELOPMENT ---
  {
    id: "profitpal",
    title: "ProfitPal",
    group: "IN DEVELOPMENT",
    category: "SME Margin, Expense & Cashflow Tracker",
    shortDescription:
      "Financial clarity application in active development to help SME owners monitor daily expenses, unit economics, and net profit.",
    fullOverview:
      "ProfitPal is being built for business operators who need clear answers on profitability without complex accounting software. It tracks cost of goods sold, operating expenses, and net margins in real time.",
    keyCapabilities: [
      "Automated net margin & unit economics calculation",
      "Daily expense categorization & cashflow logs",
      "Visual profit/loss performance dashboards",
      "Seamless integration path with Receipta",
    ],
    logo: "/projects/profitpal.jpg",
    image: "/projects/profitpal.jpg",
    techStack: ["Next.js", "TypeScript", "Financial Analytics"],
    status: "In Development",
  },

  // --- 3. RESEARCH & DEVELOPMENT ---
  {
    id: "become-a-legend",
    title: "Become A Legend",
    group: "RESEARCH & DEVELOPMENT",
    category: "3rd-Person Football Career & Action Simulation",
    shortDescription:
      "Original third-person football video game focused on individual player career progression, spatial pitch control, and tactical IQ.",
    fullOverview:
      "Become A Legend shifts football gaming from a top-down broadcast camera to an immersive third-person perspective right on the pitch. Players control a single athlete rising from grassroots academy pitches to professional stadiums.",
    keyCapabilities: [
      "Close-camera 3rd-person movement, dribbling & striking",
      "Grassroots-to-pro career story & attribute progression",
      "Real-time positional & tactical evaluation engine",
      "Dedicated seed investment & studio partnership track",
    ],
    logo: "/hero-image.jpg",
    image: "/hero-image.jpg",
    techStack: ["3D Game Engine", "Player Physics", "Tactical AI", "Cross-Platform"],
    learnMoreUrl: "/projects/become-a-legend",
    status: "R&D",
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