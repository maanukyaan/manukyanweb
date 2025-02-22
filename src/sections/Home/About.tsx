"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function About({
  marquee,
  title,
}: {
  marquee: string[];
  title: string;
}) {
  return (
    <div className="relative flex h-screen max-h-svh flex-col pt-1">
      <div className="pointsBackground"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "backInOut" }}
        className="absolute top-1 w-full border-2 border-x-0 border-dark py-5 dark:border-light"
      >
        <Marquee>
          {marquee.map((text, index) => (
            <p key={index} className="px-5 font-unbounded text-sm lg:text-xl">
              {text}
            </p>
          ))}
        </Marquee>
      </motion.div>

      <div className="flex flex-1 flex-col items-center justify-center gap-y-5 pt-20">
        <div className="relative overflow-hidden rounded-lg bg-pink-500 px-2 pt-1">
          <div className="animate-gradient absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500"></div>
          <Image
            src="/Vahe.webp"
            alt="Vahe Manukyan"
            width={1422}
            height={1000}
            className="relative bottom-[-1px] w-52"
          />
        </div>
        <h3 className="text-center font-unbounded text-xl font-black lg:max-w-[85%] lg:text-3xl lg:leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}
