import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020617 0%, #111336 55%, #042f3c 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "linear-gradient(135deg, #818cf8, #a78bfa, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            AI
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -2 }}>{SITE.name}</div>
            <div style={{ fontSize: 32, color: "#94a3b8" }}>{SITE.tagline}</div>
          </div>
        </div>
        <div style={{ marginTop: 48, fontSize: 26, color: "#818cf8", display: "flex", gap: 28 }}>
          <span>💬 Chat</span>
          <span>🎨 Images</span>
          <span>🎬 Video</span>
          <span>👨‍💻 Coding</span>
          <span>✍️ Writing</span>
          <span>📈 SEO</span>
        </div>
      </div>
    ),
    size,
  );
}
