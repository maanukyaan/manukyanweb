"use client";

import { unbounded } from "@/config/fonts";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";

export default function About({ marquee }: { marquee: string[] }) {
  return (
    <div className="relative h-screen pt-1">
      <div className="pointsBackground"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "backInOut" }}
        className="w-full border-2 border-x-0 py-5 absolute top-1"
      >
        <Marquee className={`${unbounded.className} text-3xl uppercase`}>
          {marquee.map((text, index) => (
            <p key={index} className="px-5 text-base lg:text-xl">
              {text}
            </p>
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
}
