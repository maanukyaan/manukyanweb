import type { Metadata } from "next";
import { Viewport } from "next";

export const metaData: Metadata = {
  title: "Manukyan.Web",
  icons: "/logo.svg",
  description:
    "Manukyan.Web – создание современных, производительных и масштабируемых веб-приложений. Профессиональные услуги в разработке с использованием передовых технологий.",
  keywords: [
    "веб-разработка",
    "frontend",
    "React",
    "Next.js",
    "TypeScript",
    "производительные приложения",
    "веб-приложения",
    "масштабируемая разработка",
  ],
  authors: [{ name: "Vahe Manukyan", url: "https://whoiskenshi.t.me" }],
  openGraph: {
    title: "Manukyan.Web – Современная веб-разработка",
    description:
      "Получите профессиональные услуги по разработке веб-приложений с использованием React, Next.js и TypeScript. Высокая производительность и масштабируемость – наш приоритет.",
    url: "https://manukyanweb.tech",
    images: "https://manukyanweb.tech/og-image.png",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewPort: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f1f1" },
    { media: "(prefers-color-scheme: dark)", color: "#101010" },
  ],
};
