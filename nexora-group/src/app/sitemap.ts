import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nexora-group.cv";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-18"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/company`,
      lastModified: new Date("2026-11-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/become-a-legend`,
      lastModified: new Date("2026-11-18"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/investors`,
      lastModified: new Date("2026-11-18"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}