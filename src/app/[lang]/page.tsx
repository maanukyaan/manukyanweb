import CTAButton from "@/components/@ui/CTAButton";
import { headerBackground } from "@/config/classes";
import { unbounded } from "../fonts";
import { getDictionary } from "./i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "ru" | "am" }>;
}) {
  const { lang } = await params;
  const i18n = await getDictionary(lang);

  return (
    <div className="min-h-screen font-inter flex flex-col items-center justify-center">
      <header
        className={`flex flex-col items-center justify-center gap-y-5 lg:gap-y-7 min-h-screen ${headerBackground}`}
      >
        <h1
          className={`text-center font-bold text-3xl lg:text-7xl max-w-[95%] lg:max-w-[unset] ${unbounded.className}`}
        >
          {i18n.Home.h1}
        </h1>
        <h2 className="text-center text-sm lg:text-lg max-w-[85%] lg:max-w-[800px]">
          {i18n.Home.h2}
        </h2>
        <CTAButton href="https://whoiskenshi.t.me" text={i18n.Home.cta} />
      </header>
      <div id="mesh" className="w-full h-screen rounded-t-[50px]"></div>
    </div>
  );
}
