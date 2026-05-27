import { ImageResponse } from "next/og";

export const alt = "civisense.ai — Making Sense of Citizen Governance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#080F1E",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
          // Grid pattern via background-image (CSS property, no overlay div needed)
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        {/* Top badge — absolute, comes first in DOM so content renders on top */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 72,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 32,
              height: 2,
              background: "#00D4A8",
              borderRadius: 2,
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#00D4A8",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            AI · GOVTECH · INDIA
          </span>
        </div>

        {/* Bottom rule — absolute, before content in DOM */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 72,
            right: 72,
            height: 1,
            background: "rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />

        {/* Bottom footnote — absolute, before content in DOM */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 72,
            right: 72,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 16 }}>
            civisense.ai
          </span>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 15 }}>
            Grievance Intelligence · Citizen Sentiment · Decision Support
          </span>
        </div>

        {/* Main wordmark — flex child, NOT absolute → paints after the absolute
            elements in the stacking context, showing on top without z-index */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          {/* Logo wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 112,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              civisense
            </span>
            <span
              style={{
                color: "#00D4A8",
                fontSize: 112,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              .ai
            </span>
          </div>

          {/* Tagline */}
          <span
            style={{
              color: "rgba(255,255,255,0.60)",
              fontSize: 30,
              fontWeight: 400,
              letterSpacing: "0.01em",
              textAlign: "center",
            }}
          >
            Making Sense of Citizen Governance
          </span>

          {/* Accent pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 8,
              padding: "10px 24px",
              border: "1px solid rgba(0,212,168,0.35)",
              borderRadius: 4,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#00D4A8",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "rgba(0,212,168,0.85)",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              India&apos;s first AI-native governance intelligence platform
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
