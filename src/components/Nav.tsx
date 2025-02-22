"use client";

import { throttle } from "@/utils/throttle";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./@ui/icons/Logo";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Nav() {
  const lang = usePathname().split("/")[1];

  const [isVisible, setIsVisible] = useState(true);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    if (!hasAppeared) {
      setHasAppeared(true);
    }
  }, [hasAppeared]);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = throttle(() => {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 30) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY = currentScrollY;
      });
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className="fixed left-0 top-0 z-[999] flex w-full items-center justify-between rounded-b-[30px] border-b border-[#afafaf] px-8 py-5 backdrop-blur dark:border-[#525252] lg:px-14 lg:py-7"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{
        duration: 0.75,
        ease: "circInOut",
        delay: hasAppeared ? 0 : 1.1,
      }}
    >
      <Logo />
      <motion.div
        className="right flex gap-x-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              delayChildren: 2,
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
      >
        {["en", "ru"].map((language) => (
          <motion.div
            key={language}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={`/${language}`}
              className={`link ${
                lang === language ? "active" : ""
              } text-sm lg:text-base`}
            >
              {language.toUpperCase()}
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 2.5 }}
        >
          <ThemeSwitcher />
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
