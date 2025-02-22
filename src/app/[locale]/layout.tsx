import "@/assets/styles/globals.css";
import Nav from "@/components/Nav";
import { inter, unbounded } from "@/config/fonts";
import { metaData, viewPort } from "@/config/meta";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata = metaData;
export const viewport = viewPort;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "ru")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      data-theme="dark"
      className={`${inter.variable} ${unbounded.variable}`}
    >
      <body
        className={`bg-light font-inter text-dark antialiased transition-all duration-500 dark:bg-dark dark:text-light`}
      >
        <NextIntlClientProvider messages={messages}>
          <SpeedInsights />
          <Nav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
