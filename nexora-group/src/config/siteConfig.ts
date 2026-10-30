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
  image?: string; // Optional custom local image override
  techStack: string[];
  link: string;
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

export const SITE_CONFIG = {
  name: "NEXORA GROUP",
  tagline: "Building Ideas. Developing Technology. Creating Opportunities.",
  description:
    "We develop digital products, create interactive experiences, provide technology solutions and help businesses grow through strategy and digital innovation.",
  url: "https://nexoragroup.com",
  contact: {
    email: "magkk.muizomoyele@gmail.com",
    whatsappNumber: "2349073754047", // Formatted for wa.me links (09073754047 -> 2349073754047)
    whatsappDisplay: "+234 907 375 4047",
    location: "Ibadan, Nigeria",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com/idanmagkk",
      github: "https://github.com/magkkteck08",
      instagram: "https://instagram.com/idanmagkk",
    },
  },
};

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
      "We explore and develop interactive digital experiences, gaming concepts and gameplay systems.",
    iconName: "Gamepad2",
    services: [
      "Game development",
      "Gameplay mechanics",
      "Game prototyping",
      "Interactive experiences",
    ],
  },
  {
    id: "fintech",
    title: "Fintech & Digital Products",
    description:
      "We design and develop digital products that simplify financial activities and business operations.",
    iconName: "Landmark",
    services: [
      "Fintech applications",
      "SaaS development",
      "Digital payment solutions",
      "Business management platforms",
    ],
  },
  {
    id: "seo",
    title: "SEO & Digital Growth",
    description:
      "We help businesses improve their online visibility, website performance and search engine presence.",
    iconName: "TrendingUp",
    services: [
      "Technical SEO",
      "On-page SEO",
      "Website optimisation",
      "Search visibility strategy",
    ],
  },
  {
    id: "consultation",
    title: "Consultation & Strategy",
    description:
      "We help individuals and businesses plan, evaluate and execute digital and technology-driven ideas.",
    iconName: "Compass",
    services: [
      "Digital business consultation",
      "Product strategy",
      "Technology advisory",
      "Digital transformation planning",
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "receipta",
    title: "Receipta",
    category: "Digital Receipts & Fintech SaaS",
    description:
      "A streamlined financial documentation platform enabling businesses to generate, track, and manage verifiable digital receipts and invoicing workflows.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/projects/receipta.jpg",
    link: "https://receipta.cv",
    isExternal: true,
    status: "Live",
  },
  {
    id: "africommerce",
    title: "Africommerce",
    category: "E-Commerce & Storefront Platform",
    description:
      "Digital commerce infrastructure designed to help merchants launch modern online storefronts, manage inventory, and process customer orders.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    link: "https://africmm.cv",
    image: "/projects/receipta.jpg",
    isExternal: true,
    status: "Live",
  },
  {
    id: "catalogpal",
    title: "CatalogPal",
    category: "Digital Product Catalogue Platform",
    description:
      "An intuitive product showcase solution allowing businesses to organise, publish, and share interactive digital catalogues across mobile and web channels.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/receipta.jpg",
    link: "https://catalogpal.cv",
    isExternal: true,
    status: "Live",
  },
  {
    id: "velo-pulse",
    title: "Velo Pulse",
    category: "Digital Media & Publishing Platform",
    description:
      "Modern content publishing architecture engineered for fast editorial workflows, search visibility, and high-engagement digital readership.",
    techStack: ["Next.js", "MDX", "Technical SEO", "Tailwind CSS"],
    image: "/projects/receipta.jpg",
    link: "https://velo-pulse.cv",
    isExternal: true,
    status: "Live",
  },
  {
    id: "creator-unite",
    title: "Creator Unite",
    category: "Creator Community & Event Registration",
    description:
      "Centralised hub for digital creators and organisers to coordinate community gatherings, manage attendee registrations, and foster collaboration.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/receipta.jpg",
    link: "https://x-creator-unite.com",
    isExternal: true,
    status: "Live",
  },
  {
    id: "profitpal",
    title: "ProfitPal",
    category: "Business Management & Profit Tracking",
    description:
      "Operational clarity tool built for small and medium enterprises to monitor margins, record daily expenses, and evaluate net profitability.",
    techStack: ["Next.js", "TypeScript", "Charting UI"],
    link: "#contact",
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