import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4F1EA",
        }}
      >
        <div
          style={{
            width: 148,
            height: 148,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "8px solid #171717",
            padding: "22px 24px 20px",
          }}
        >
          <div style={{ display: "flex", width: 88, height: 8, background: "#171717" }} />
          <div style={{ display: "flex", width: 88, height: 8, background: "#171717" }} />
          <div style={{ display: "flex", width: 56, height: 8, background: "#171717" }} />
          <div style={{ display: "flex", width: 88, height: 8, background: "#C43E1C" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
