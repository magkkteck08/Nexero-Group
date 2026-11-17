import type { Metadata } from "next";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nexoragroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexora Group | Building the Digital Backbone & Scaling Ventures",
    template: "%s | Nexora Group",
  },
  description:
    "Nexora Group architects, launches, and scales high-impact software platforms across e-commerce, merchant billing, digital journalism, and interactive sports intelligence.",
  icons: {
    icon: [
      { url: "/nexora-logo.png", type: "image/png" },
    ],
    shortcut: "/nexora-logo.png",
    apple: "/nexora-logo.png",
  },
  openGraph: {
    title: "Nexora Group | Technology Holding & Venture Studio",
    description:
      "Engineering digital commerce, smart billing (Receipta, CatalogPal), media networks (Velo Pulse), and interactive sports intelligence.",
    url: SITE_URL,
    siteName: "Nexora Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Group | Building the Digital Backbone",
    description:
      "Multi-sector technology holding company building software platforms, media networks, and interactive gaming experiences.",
    creator: "@idanmagkk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#F7D147] selection:text-[#1E1B2E]">
        {children}
      </body>
    </html>
  );
}