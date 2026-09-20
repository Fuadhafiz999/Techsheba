import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/mockData";

export const alt = `${siteConfig.name} — Full-service digital agency in Dhaka, Bangladesh`;
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C0E16",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 48,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #7C5CFF 0%, #38E1FF 100%)",
              color: "#0C0E16",
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            T
          </div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1.5,
            }}
          >
            We turn clicks into customers.
          </div>
          <div
            style={{
              color: "#A2A9C0",
              fontSize: 32,
              lineHeight: 1.4,
              maxWidth: 850,
            }}
          >
            Websites, apps, brands & marketing from Dhaka for the world.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            color: "#38E1FF",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          <span>Web Development</span>
          <span>·</span>
          <span>Branding</span>
          <span>·</span>
          <span>Digital Marketing</span>
          <span>·</span>
          <span>Motion Graphics</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}