import "@/assets/styles/globals.css";
import Nav from "@/components/Nav";
import { inter, unbounded } from "@/config/fonts";
import { metaData, viewPort } from "@/config/meta";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = metaData;
export const viewport = viewPort;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-theme="dark"
      className={`${inter.variable} ${unbounded.variable}`}
    >
      <body
        className={`bg-light font-inter text-dark antialiased transition-all duration-500 dark:bg-dark dark:text-light`}
      >
        <SpeedInsights />
        <Nav />
        {children}
      </body>
    </html>
  );
}
