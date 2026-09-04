import type { Metadata } from "next";
import { Noto_Sans_SC, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "绒光宠物洗护｜把每一次洗护，变成被温柔照顾",
  description: "绒光宠物洗护，为猫咪和狗狗提供温和、透明、舒适的专业洗护服务。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSans.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
