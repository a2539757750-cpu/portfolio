import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "王明光 — 视觉 / AI / 电商设计师",
  description: "王明光的个人设计作品集，聚焦视觉设计、AI 创意、电商与三维视觉。",
  icons: { icon: "/portfolio/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
