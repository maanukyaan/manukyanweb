"use client";

import CircularText from "@/components/@ui/CircularText";
import CTAButton from "@/components/@ui/CTAButton";
import { notoSansArmenian, unbounded } from "@/config/fonts";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

function Header({
  h1,
  h2,
  ctaButtonText,
  ctaButtonLink,
  circularText,
}: {
  h1: string;
  h2: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  circularText: string;
}) {
  const isArmenian = usePathname().split("/")[1] === "am";

  return (
    <header className="min-h-svh w-full relative gridBackground flex flex-col items-center justify-center gap-y-5 lg:gap-y-7 overflow-hidden">
      <div className="absolute left-[-30vw] lg:left-[-15%] bottom-[-10%] lg:bottom-[0%] size-[350px] lg:size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(219,0,255,.3),rgba(255,255,255,0))]"></div>
      <div className="absolute right-[-50%] lg:right-[-15%] top-[-10%] lg:top-[5%] size-[350px] lg:size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,165,0,.3),rgba(255,255,255,0))]"></div>

      <motion.h1
        className={`text-center font-black uppercase text-3xl lg:text-[65px] lg:leading-tight max-w-[95%] lg:max-w-[85%] ${
          isArmenian ? notoSansArmenian.className : unbounded.className
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        dangerouslySetInnerHTML={{ __html: h1 }} // ! TODO: Придумать альтернативу. Использовать dangerouslySetInnerHTML очень плохая идея
      ></motion.h1>
      <motion.h2
        className="text-center text-[13px] lg:text-lg max-w-[85%] lg:max-w-[800px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        dangerouslySetInnerHTML={{ __html: h2 }} // ! TODO: Придумать альтернативу. Использовать dangerouslySetInnerHTML очень плохая идея
      ></motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <CTAButton href={ctaButtonLink} text={ctaButtonText} />
      </motion.div>

      <CircularText text={circularText} />
    </header>
  );
}

export default Header;
