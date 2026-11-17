import { ImageResponse } from "next/og";

export const alt = "Nexora Group — Technology & Venture Studio";
export const size = { width: 1200, height: 630 };
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
          backgroundColor: "#FFFDF5",
          padding: "56px",
          border: "12px solid #1E1B2E",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FEF0B6",
              border: "4px solid #1E1B2E",
              borderRadius: "9999px",
              padding: "10px 24px",
              fontSize: 20,
              fontWeight: 900,
              color: "#1E1B2E",
            }}
          >
            NEXORA GROUP · TECHNOLOGY & VENTURES
          </div>

          <div
            style={{
              display: "flex",
              backgroundColor: "#F7D147",
              border: "4px solid #1E1B2E",
              borderRadius: "9999px",
              padding: "10px 24px",
              fontSize: 20,
              fontWeight: 900,
              color: "#1E1B2E",
            }}
          >
            7+ Ecosystem Platforms
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 900,
              color: "#1E1B2E",
              lineHeight: 1.05,
            }}
          >
            Building the digital backbone.
          </div>
          <div
            style={{
              fontSize: 70,
              fontWeight: 900,
              color: "#3E735E",
              lineHeight: 1.05,
            }}
          >
            Scaling African ventures.
          </div>
          <div
            style={{
              marginTop: "14px",
              fontSize: 26,
              fontWeight: 600,
              color: "#4A4857",
              maxWidth: "920px",
            }}
          >
            Africommerce · Receipta · CatalogPal · Velo Pulse · Creator Unite ·
            ProfitPal · Become A Legend
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "4px solid #1E1B2E",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: "#1E1B2E",
            }}
          >
            nexoragroup.com
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#3E735E",
            }}
          >
            Software · FinTech SaaS · Digital Media · Interactive R&D
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}