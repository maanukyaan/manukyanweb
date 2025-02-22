import About from "@/sections/Home/About";
import Header from "@/sections/Home/Header";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  const tAbout = useTranslations("About");

  return (
    <>
      <Header
        title={t.raw("title")}
        h2={t.raw("h2")}
        ctaButtonText={t("ctaButtonText")}
        ctaButtonLink={t("ctaButtonLink")}
        circularText={t("circularText")}
      />
      <About marquee={tAbout.raw("marquee")} title={tAbout("title")} />
    </>
  );
}
