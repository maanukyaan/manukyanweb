"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

function Triangle() {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  return (
    <motion.div
      initial={{ x: -800, opacity: 0, scale: 0.5 }}
      animate={{
        x: 0,
        y: -20,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 3,
        delay: 0.5,
        ease: [0.68, -0.55, 0.27, 1.55],
      }}
      onAnimationComplete={() => setIsAnimationCompleted(true)}
      className={`absolute top-28 lg:top-[unset] lg:bottom-[30px] left-4 lg:left-[250px] ${
        isAnimationCompleted ? "animate-float" : ""
      }`}
    >
      <Image
        src="/triangle.png"
        alt="Abstract triangle"
        width={500}
        height={500}
        className="w-20 lg:w-72"
      />
    </motion.div>
  );
}

export default Triangle;
