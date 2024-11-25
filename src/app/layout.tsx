import "@/assets/styles/globals.css";
import Nav from "@/components/Nav";
import { metaData, viewPort } from "@/config/metaData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { inter } from "./fonts";
export const metadata = metaData;
export const viewport = viewPort;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.className} antialiased bg-light text-dark dark:bg-dark dark:text-light`}
      >
        <SpeedInsights />
        <Nav />
        {children}
      </body>
    </html>
  );
}
