import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "../config/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: [
    "Nexora Group",
    "Fintech SaaS Development",
    "Gaming and Interactive Experiences",
    "Technical SEO Agency",
    "Technology Consultation Nigeria",
    "Digital Product Strategy",
  ],
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}