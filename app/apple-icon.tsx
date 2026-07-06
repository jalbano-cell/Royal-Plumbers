import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12305e",
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: "50% 50% 50% 0",
            background: "#ffffff",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    size,
  );
}
