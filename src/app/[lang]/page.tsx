import { getDictionary } from "@/config/i18n/i18n";
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
        h1={i18n.Home.h1}
        h2={i18n.Home.h2}
        ctaButtonText={i18n.Home.cta}
        ctaButtonLink="https://whoiskenshi.t.me"
        circularText={i18n.Home.circularText}
      />
    </>
  );
}
