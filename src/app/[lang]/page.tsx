import { getDictionary } from "@/config/i18n/i18n";
import About from "@/sections/Home/About";
import Header from "@/sections/Home/Header";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "ru" | "am" }>;
}) {
  const { lang } = await params;
  const i18n = await getDictionary(lang);

  return (
    <>
      <Header
        title={i18n.Home.title}
        h2={i18n.Home.h2}
        ctaButtonText={i18n.Home.ctaButtonText}
        ctaButtonLink={i18n.Home.ctaButtonLink}
        circularText={i18n.Home.circularText}
      />
      <About marquee={i18n.About.marquee} title={i18n.About.title} />
    </>
  );
}
