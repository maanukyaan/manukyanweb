"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./@ui/icons/Logo";
import ThemeSwitcher from "./ThemeSwitcher";

function Nav() {
  const lang = usePathname().split("/")[1];

  return (
    <motion.nav
      className="bg-light dark:bg-dark w-full fixed left-0 top-0 z-[9999] py-5 px-8 lg:py-7 lg:px-14 rounded-b-[30px] border-b border-[#afafaf] dark:border-[#525252] flex items-center justify-between"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "backInOut", delay: 1 }}
    >
      <Logo />
      <div className="right flex gap-x-3">
        {["en", "ru", "am"].map((language, index) => (
          <motion.div
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.3,
              delay: 2 + index * 0.2,
              ease: "easeIn",
            }}
          >
            <Link
              href={`/${language}`}
              className={`link ${
                lang === language && "active"
              } text-sm lg:text-base`}
            >
              {language.toUpperCase()}
            </Link>
          </motion.div>
        ))}

        <ThemeSwitcher />
      </div>
    </motion.nav>
  );
}

export default Nav;
