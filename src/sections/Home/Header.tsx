"use client";

import CircularText from "@/components/@ui/CircularText";
import CTAButton from "@/components/@ui/CTAButton";
import Triangle from "@/components/@ui/icons/Triangle";
import { unbounded } from "@/config/fonts";
import { motion } from "motion/react";

interface IHeaderProps {
  title: string;
  h2: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  circularText: string;
}

export default function Header({
  title,
  h2,
  ctaButtonText,
  ctaButtonLink,
  circularText,
}: IHeaderProps) {
  return (
    <header className="gridBackground relative flex min-h-svh w-full flex-col items-center justify-center gap-y-5 overflow-hidden lg:gap-y-7">
      <div className="absolute bottom-[-10%] left-[-30vw] size-[350px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(219,0,255,.3),rgba(255,255,255,0))] lg:bottom-[0%] lg:left-[-15%] lg:size-[500px]"></div>
      <div className="absolute right-[-50%] top-[-10%] size-[350px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,165,0,.3),rgba(255,255,255,0))] lg:right-[-15%] lg:top-[5%] lg:size-[500px]"></div>

      <Triangle />

      <motion.h1
        className={`max-w-[95%] text-center text-3xl font-black uppercase lg:max-w-[85%] lg:text-[65px] lg:leading-tight ${unbounded.className}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        dangerouslySetInnerHTML={{ __html: title }} // ! TODO: Придумать альтернативу. Использовать dangerouslySetInnerHTML очень плохая идея
      ></motion.h1>
      <motion.h2
        className="max-w-[85%] text-center text-[13px] lg:max-w-[800px] lg:text-lg"
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
