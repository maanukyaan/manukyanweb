import type { Metadata } from "next";
import { Viewport } from "next";

export const metaData: Metadata = {
  title: "Manukyan.Web",
  icons: "/logo.svg",
  description:
    "Manukyan.Web — разработка современных, производительных и масштабируемых веб-приложений. Мы создаем решения, которые ускоряют рост бизнеса, используя передовые технологии и профессиональный подход.",
  keywords: [
    "веб-разработка",
    "разработка сайтов",
    "frontend",
    "backend",
    "создание сайтов",
    "дизайн сайтов",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "веб-приложения",
    "производительные приложения",
    "масштабируемая разработка",
    "адаптивный дизайн",
    "SEO-оптимизация",
    "бизнес-сайты",
    "корпоративные сайты",
    "интернет-магазины",
    "поддержка и развитие сайтов",
    "UI/UX дизайн",
  ],
  authors: [{ name: "Vahe Manukyan", url: "https://whoiskenshi.t.me" }],
  openGraph: {
    title: "Manukyan.Web – Современная веб-разработка",
    description:
      "Получите профессиональные услуги по разработке веб-приложений с использованием React, Next.js и TypeScript. Высокая производительность и масштабируемость – наш приоритет.",
    url: "https://manukyanweb.vercel.app",
    images: "https://manukyanweb.vercel.app/logo.svg",
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
