import CTAButton from "@/components/@ui/CTAButton";
import { getDictionary } from "@/config/i18n/i18n";
import Header from "@/sections/Home/Header";
import { unbounded } from "../../config/fonts";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "ru" | "am" }>;
}) {
  const { lang } = await params;
  const i18n = await getDictionary(lang);

  return (
    <div className="font-inter flex flex-col items-center justify-center">
      <Header
        h1={i18n.Home.h1}
        h2={i18n.Home.h2}
        ctaButtonText={i18n.Home.cta}
        ctaButtonLink="https://whoiskenshi.t.me"
        circularText={i18n.Home.circularText}
      />

      <div className="meshBackground w-full h-screen rounded-[50px] flex flex-col items-center justify-center gap-y-5">
        <h3
          className={`text-center text-white font-bold text-3xl lg:text-7xl max-w-[95%] lg:max-w-[unset] ${unbounded.className}`}
          dangerouslySetInnerHTML={{ __html: i18n.Home.h1 }}
        ></h3>
        <h4
          className="text-center text-white text-sm lg:text-lg max-w-[85%] lg:max-w-[800px]"
          dangerouslySetInnerHTML={{ __html: i18n.Home.h2 }}
        ></h4>
        <CTAButton href="https://whoiskenshi.t.me" text={i18n.Home.cta} />
      </div>
    </div>
  );
}
