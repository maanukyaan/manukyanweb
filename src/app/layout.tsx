import "@/assets/styles/globals.css";

import Nav from "@/components/Nav";
import { metaData, viewPort } from "@/config/metaData";
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
        <Nav />
        {children}
      </body>
    </html>
  );
}
