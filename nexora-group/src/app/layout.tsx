// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "../config/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url;

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Nexora Group is a multi-sector technology and commercial enterprise building Fintech SaaS (Receipta, CatalogPal, Africommerce), Digital Media (Velo Pulse), Interactive Gaming (Become A Legend), and Global Growth Strategy.",
  keywords: [
    "Nexora Group",
    "Muiz Ayolola Omoyele",
    "Receipta",
    "CatalogPal",
    "Velo Pulse",
    "Africommerce",
    "Creator Unite",
    "Become A Legend Football Game",
    "Fintech SaaS Nigeria",
    "Software Development Company Ibadan",
    "Technical SEO & Digital Strategy",
  ],
  authors: [{ name: "Muiz Ayolola Omoyele — Founder & CTO, Nexora Group" }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:
      "Explore our live SaaS platforms (Receipta, CatalogPal, Africommerce), digital journalism (Velo Pulse), flagship 3rd-person football game (Become A Legend), and commercial ventures.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:
      "Multi-sector technology & commercial enterprise. Creators of Receipta, CatalogPal, Velo Pulse, Africommerce & Become A Legend.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}