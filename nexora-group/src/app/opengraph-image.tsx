// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "../config/siteConfig";

export const alt = `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(37, 99, 235, 0.35), transparent 45%), radial-gradient(circle at 15% 85%, rgba(79, 70, 229, 0.25), transparent 50%)",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          color: "#ffffff",
          border: "1px solid #27272a",
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "4px",
                backgroundColor: "#3b82f6",
                boxShadow: "0 0 20px #3b82f6",
              }}
            />
            <span
              style={{
                fontSize: "28px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              {SITE_CONFIG.name}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(59, 130, 246, 0.15)",
              border: "1px solid rgba(59, 130, 246, 0.4)",
              color: "#93c5fd",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Multi-Sector Technology & Commercial Enterprise
          </div>
        </div>

        {/* Center Main Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "62px",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Building Ideas. Developing Technology. Creating Opportunities.
          </div>

          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.45,
              color: "#a1a1aa",
              maxWidth: "860px",
            }}
          >
            Fintech SaaS • Interactive Gaming (Become A Legend) • Digital Publishing • SEO Growth & Commercial Ventures
          </div>
        </div>

        {/* Bottom Ecosystem Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "28px",
            borderTop: "1px solid #27272a",
          }}
        >
          <div style={{ display: "flex", gap: "14px" }}>
            {[
              "Receipta",
              "CatalogPal",
              "Velo Pulse",
              "Africommerce",
              "Become A Legend",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "#18181b",
                  border: "1px solid #27272a",
                  color: "#e4e4e7",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#60a5fa",
            }}
          >
            NG • UK • USA • UAE
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}