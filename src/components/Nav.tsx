"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./@ui/icons/Logo";

function Nav() {
  const lang = usePathname().split("/")[1];

  return (
    <div className="bg-light dark:bg-dark w-full fixed left-0 top-0 z-[9999] py-5 px-8 lg:py-7 lg:px-14 rounded-b-[30px] border-b border-[#afafaf] dark:border-[#525252] flex items-center justify-between">
      <div className="left">
        <Logo />
      </div>
      <div className="right flex gap-x-3">
        <Link href="/en" className={`link ${lang === "en" && "active"}`}>
          EN
        </Link>
        <Link href="/ru" className={`link ${lang === "ru" && "active"}`}>
          RU
        </Link>
        <Link href="/am" className={`link ${lang === "am" && "active"}`}>
          AM
        </Link>
      </div>
    </div>
  );
}

export default Nav;
