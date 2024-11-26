"use client";

import CircularText from "@/components/@ui/CircularText";
import CTAButton from "@/components/@ui/CTAButton";
import { unbounded } from "@/config/fonts";
import { motion } from "motion/react";

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
  return (
    <header className="min-h-svh relative gridBackground flex flex-col items-center justify-center gap-y-5 lg:gap-y-7 overflow-hidden">
      <motion.h1
        className={`text-center font-black uppercase text-3xl lg:text-7xl lg:leading-tight max-w-[95%] lg:max-w-[unset] ${unbounded.className}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {h1}
      </motion.h1>
      <motion.h2
        className="text-center text-sm lg:text-lg max-w-[85%] lg:max-w-[800px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        {h2}
      </motion.h2>

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
