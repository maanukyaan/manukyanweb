"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function CircularText({ text }: { text: string }) {
  const [positions, setPositions] = useState({ bottom: 60, right: 60 });

  useEffect(() => {
    const updatePositions = () => {
      setPositions({
        bottom: window.innerWidth > 500 ? 100 : 20,
        right: window.innerWidth > 500 ? 100 : 20,
      });
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => {
      window.removeEventListener("resize", updatePositions);
    };
  }, []);

  return (
    <motion.svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ bottom: -500, right: positions.right }}
      animate={{ bottom: positions.bottom, right: positions.right }}
      transition={{ duration: 1.5, ease: "backInOut" }}
      className="size-32 lg:size-52 animate-rotate absolute"
    >
      <path
        id="circlePath"
        fill="none"
        d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
      />
      <text id="text" fontSize="14" fontWeight="bold" fill="var(--main-color)">
        <textPath id="textPath" href="#circlePath">
          {text}
        </textPath>
      </text>
    </motion.svg>
  );
}
