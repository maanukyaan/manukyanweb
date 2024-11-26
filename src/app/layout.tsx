import "@/assets/styles/globals.css";
import Nav from "@/components/Nav";
import { metaData, viewPort } from "@/config/meta";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { inter } from "../config/fonts";

export const metadata = metaData;
export const viewport = viewPort;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="dark">
      <body
        className={`${inter.className} antialiased bg-light text-dark dark:bg-dark dark:text-light transition-all`}
      >
        <SpeedInsights />
        <Nav />
        {children}
      </body>
    </html>
  );
}
