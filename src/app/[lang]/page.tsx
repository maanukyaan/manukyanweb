import { getDictionary } from "@/config/i18n/i18n";
import Header from "@/sections/Home/Header";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "ru" | "am" }>;
}) {
  const { lang } = await params;
  const i18n = (await getDictionary(lang)) as Record<
    string,
    Record<string, string>
  >;

  return (
    <>
      <Header
        title={i18n.Home.title}
        h2={i18n.Home.h2}
        ctaButtonText={i18n.Home.ctaButtonText}
        ctaButtonLink={i18n.Home.ctaButtonLink}
        circularText={i18n.Home.circularText}
      />
    </>
  );
}
