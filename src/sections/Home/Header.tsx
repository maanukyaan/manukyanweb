"use client";

import CircularText from "@/components/@ui/CircularText";
import CTAButton from "@/components/@ui/CTAButton";
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
      <div className="pinkBall"></div>
      <div className="orangeBall"></div>

      <motion.h1
        className="max-w-[95%] bg-gradient-to-r from-black to-gray-500 bg-clip-text text-center font-unbounded text-3xl font-black uppercase text-transparent dark:from-gray-500 dark:via-gray-300 dark:to-gray-100 lg:max-w-[85%] lg:text-[65px] lg:leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        dangerouslySetInnerHTML={{ __html: title }}
      ></motion.h1>
      <motion.h2
        className="max-w-[85%] text-center text-[13px] lg:max-w-[800px] lg:text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        dangerouslySetInnerHTML={{ __html: h2 }}
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
